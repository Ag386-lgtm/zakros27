// التأكد من تحميل المكتبة
if (typeof THREE === 'undefined') {
    document.getElementById('loading').innerHTML = '<h1 style="color:red;">خطأ: لم يتم العثور على مكتبة Three.js</h1><p>تأكد من وجود ملف three.min.js في نفس المجلد.</p>';
    throw new Error("Three.js not loaded");
}

// ==================== إعداد المشهد ====================
const container = document.getElementById('game-container');
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x02050a);
scene.fog = new THREE.Fog(0x02050a, 15, 40);

const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.set(0, 0, 12);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
container.appendChild(renderer.domElement);

// إضاءة
scene.add(new THREE.AmbientLight(0xffffff, 0.5));
const pointLight = new THREE.PointLight(0xff6666, 2, 25);
pointLight.position.set(0, 0, 5);
scene.add(pointLight);

// ==================== بناء القلب ====================
const heartGroup = new THREE.Group();
const heartMat = new THREE.MeshStandardMaterial({ color: 0xc0392b, roughness: 0.3, metalness: 0.2, emissive: 0x220000 });
const heartMesh = new THREE.Mesh(new THREE.SphereGeometry(1.5, 32, 32), heartMat);
heartMesh.scale.set(1, 1.2, 0.9);
heartGroup.add(heartMesh);
scene.add(heartGroup);

// ==================== خلفية النجوم ====================
const starsGeo = new THREE.BufferGeometry();
const starsPositions = new Float32Array(1500 * 3);
for (let i = 0; i < 1500 * 3; i += 3) {
  starsPositions[i] = (Math.random() - 0.5) * 80;
  starsPositions[i+1] = (Math.random() - 0.5) * 80;
  starsPositions[i+2] = (Math.random() - 0.5) * 80 - 20;
}
starsGeo.setAttribute('position', new THREE.BufferAttribute(starsPositions, 3));
const stars = new THREE.Points(starsGeo, new THREE.PointsMaterial({ color: 0xffffff, size: 0.15 }));
scene.add(stars);

// ==================== الجراثيم والانفجارات ====================
const enemies = [];
const explosions = [];
const enemyGeo = new THREE.SphereGeometry(0.4, 16, 16);

function spawnEnemy() {
  const mesh = new THREE.Mesh(enemyGeo, new THREE.MeshStandardMaterial({ color: 0x2ecc71, emissive: 0x115522 }));
  const angle = Math.random() * Math.PI * 2;
  const radius = 14;
  mesh.position.set(Math.cos(angle) * radius, Math.sin(angle) * radius, (Math.random() - 0.5) * 3);
  
  mesh.userData = {
    speed: 0.03 + Math.random() * 0.02,
    active: true,
    pulse: Math.random() * Math.PI * 2,
    baseScale: 0.8 + Math.random() * 0.4
  };
  mesh.scale.setScalar(mesh.userData.baseScale);
  scene.add(mesh);
  enemies.push(mesh);
}

function createExplosion(pos) {
  const count = 10;
  const particleGeo = new THREE.BufferGeometry();
  const positions = new Float32Array(count * 3);
  const velocities = [];
  
  for (let i = 0; i < count; i++) {
    positions[i*3] = pos.x; positions[i*3+1] = pos.y; positions[i*3+2] = pos.z;
    velocities.push(new THREE.Vector3((Math.random() - 0.5) * 0.3, (Math.random() - 0.5) * 0.3, (Math.random() - 0.5) * 0.3));
  }
  
  particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  const particles = new THREE.Points(particleGeo, new THREE.PointsMaterial({ color: 0x2ecc71, size: 0.2, transparent: true, opacity: 1 }));
  scene.add(particles);
  explosions.push({ particles, velocities, life: 1.0 });
}

// ==================== حالة اللعبة ====================
let score = 0, lives = 3, level = 1, isPlaying = false, spawnTimer = 0, gameSpeed = 1;
const WIN_SCORE = 200;

// عناصر DOM
const scoreEl = document.getElementById('score');
const levelEl = document.getElementById('level');
const livesDisplay = document.getElementById('lives-display');
const startScreen = document.getElementById('start-screen');
const endScreen = document.getElementById('end-screen');
const endTitle = document.getElementById('end-title');
const endMessage = document.getElementById('end-message');
const finalScoreEl = document.getElementById('final-score');
const damageFlash = document.getElementById('damage-flash');
const loading = document.getElementById('loading');

function updateLives() {
  livesDisplay.innerHTML = '❤️'.repeat(lives) + '🖤'.repeat(3 - lives);
}

function startGame() {
  score = 0; lives = 3; level = 1; gameSpeed = 1; isPlaying = true;
  scoreEl.textContent = score; levelEl.textContent = level; updateLives();
  startScreen.classList.add('hidden'); endScreen.classList.add('hidden');
  enemies.forEach(e => scene.remove(e)); enemies.length = 0;
}

function endGame(win) {
  isPlaying = false;
  finalScoreEl.textContent = score;
  endTitle.textContent = win ? "أنقذت القلب! 🎉" : "انتهت اللعبة 💔";
  endTitle.style.color = win ? "#2ecc71" : "#e74c3c";
  endMessage.textContent = win ? "لقد حميت القلب بنجاح!" : "وصلت الجراثيم إلى القلب. حاول مجدداً.";
  endScreen.classList.remove('hidden');
}

// ==================== التفاعل ====================
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

renderer.domElement.addEventListener('pointerdown', (event) => {
  if (!isPlaying) return;
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  raycaster.setFromCamera(mouse, camera);
  
  const intersects = raycaster.intersectObjects(enemies);
  if (intersects.length > 0) {
    const hitEnemy = intersects[0].object;
    if (hitEnemy.userData.active) {
      hitEnemy.userData.active = false;
      createExplosion(hitEnemy.position.clone());
      scene.remove(hitEnemy);
      const idx = enemies.indexOf(hitEnemy); if (idx > -1) enemies.splice(idx, 1);
      
      score += 10; scoreEl.textContent = score;
      if (Math.floor(score / 50) + 1 > level) { level++; levelEl.textContent = level; gameSpeed += 0.2; }
      if (score >= WIN_SCORE) endGame(true);
    }
  }
});

// ==================== حلقة اللعبة ====================
const clock = new THREE.Clock();

function animate() {
  requestAnimationFrame(animate);
  const delta = clock.getDelta();
  const time = clock.getElapsedTime();

  stars.rotation.y += 0.0005;
  heartMesh.scale.set(1 + Math.sin(time * 4) * 0.05, 1.2 + Math.sin(time * 4) * 0.05, 0.9);
  heartGroup.rotation.y += 0.005;

  // الانفجارات
  for (let i = explosions.length - 1; i >= 0; i--) {
    const exp = explosions[i];
    const pos = exp.particles.geometry.attributes.position.array;
    for (let j = 0; j < exp.velocities.length; j++) {
      pos[j*3] += exp.velocities[j].x; pos[j*3+1] += exp.velocities[j].y; pos[j*3+2] += exp.velocities[j].z;
    }
    exp.particles.geometry.attributes.position.needsUpdate = true;
    exp.particles.material.opacity -= 0.02;
    exp.life -= 0.02;
    if (exp.life <= 0) { scene.remove(exp.particles); explosions.splice(i, 1); }
  }

  if (isPlaying) {
    spawnTimer += delta;
    if (spawnTimer > Math.max(0.4, 1.2 - level * 0.1)) { spawnEnemy(); spawnTimer = 0; }

    for (let i = enemies.length - 1; i >= 0; i--) {
      const enemy = enemies[i];
      if (!enemy.userData.active) continue;
      const dir = new THREE.Vector3(0, 0, 0).sub(enemy.position).normalize();
      enemy.position.add(dir.multiplyScalar(enemy.userData.speed * gameSpeed));
      enemy.userData.pulse += delta * 5;
      enemy.scale.setScalar(enemy.userData.baseScale * (1 + Math.sin(enemy.userData.pulse) * 0.2));

      if (enemy.position.length() < 2.0) {
        lives--; updateLives();
        damageFlash.style.opacity = '1'; setTimeout(() => damageFlash.style.opacity = '0', 150);
        createExplosion(enemy.position.clone());
        scene.remove(enemy); enemies.splice(i, 1);
        if (lives <= 0) endGame(false);
      }
    }
  }
  renderer.render(scene, camera);
}

// ==================== التشغيل ====================
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

document.getElementById('start-btn').addEventListener('click', startGame);
document.getElementById('restart-btn').addEventListener('click', startGame);

setTimeout(() => {
  loading.classList.add('hidden');
  startScreen.classList.remove('hidden');
  animate();
}, 500);
