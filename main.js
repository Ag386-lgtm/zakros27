import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// ==================== 1. إعداد المشهد ====================
const canvas = document.getElementById('scene');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
renderer.setSize(innerWidth, innerHeight);

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x050a14);
scene.fog = new THREE.Fog(0x050a14, 15, 40);

const camera = new THREE.PerspectiveCamera(45, innerWidth / innerHeight, 0.1, 1000);
camera.position.set(0, 0, 12);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.minDistance = 4;
controls.maxDistance = 20;

// إضاءة طبية
scene.add(new THREE.AmbientLight(0xffffff, 0.7));
const keyLight = new THREE.DirectionalLight(0xffffff, 1.2);
keyLight.position.set(5, 10, 7);
scene.add(keyLight);
const fillLight = new THREE.DirectionalLight(0xff6b81, 0.5);
fillLight.position.set(-5, -5, -5);
scene.add(fillLight);
const rimLight = new THREE.DirectionalLight(0x4db8ff, 0.6);
rimLight.position.set(0, 0, -10);
scene.add(rimLight);

// ==================== 2. أدوات مساعدة لبناء المجسمات ====================
const clickable = [];
const heartGroup = new THREE.Group();
scene.add(heartGroup);

function addPart(geo, color, data, pos, rot = [0,0,0], scale = [1,1,1]) {
  const mat = new THREE.MeshStandardMaterial({ 
    color: color, 
    roughness: 0.4, 
    metalness: 0.1,
    emissive: 0x000000 
  });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.position.set(...pos);
  mesh.rotation.set(...rot);
  mesh.scale.set(...scale);
  mesh.userData = { ...data, baseColor: color };
  heartGroup.add(mesh);
  clickable.push(mesh);
  return mesh;
}

// ==================== 3. البيانات والتشريح الدقيق للقلب ====================

// --- البطينان والأذينان (الغرف الأربع) ---
// البطين الأيسر (الأقوى، جداره سميك)
addPart(new THREE.SphereGeometry(1), 0xb02636, {
  name: 'البطين الأيسر (Left Ventricle)',
  desc: 'يقع في الجهة اليسرى والخلفية من القلب. جداره سميك جداً (10-15 ملم) لضخ الدم المؤكسج إلى جميع أنحاء الجسم عبر الشريان الأبهر. يشكل قمة القلب (Apex).'
}, [-0.6, -0.4, 0], [0,0,0], [0.9, 1.2, 0.9]);

// البطين الأيمن (جداره أرق)
addPart(new THREE.SphereGeometry(1), 0x3a6ab0, {
  name: 'البطين الأيمن (Right Ventricle)',
  desc: 'يقع في الجهة اليمنى والأمامية. يستقبل الدم غير المؤكسج من الأذين الأيمن ويضخه إلى الرئتين عبر الشريان الرئوي. جداره أرق (3-5 ملم) لأن ضغط الرئتين منخفض.'
}, [0.5, -0.3, 0.2], [0,0,0], [0.8, 1.05, 0.8]);

// الأذين الأيسر
addPart(new THREE.SphereGeometry(1), 0xd97a8a, {
  name: 'الأذين الأيسر (Left Atrium)',
  desc: 'يقع في الجزء العلوي والخلفي من القلب. يستقبل الدم المؤكسج من الرئتين عبر 4 أوردة رئوية، ويدفعه إلى البطين الأيسر عبر الصمام التاجي.'
}, [-0.7, 0.9, -0.2], [0,0,0], [0.6, 0.5, 0.6]);

// الأذين الأيمن
addPart(new THREE.SphereGeometry(1), 0x5a8ad0, {
  name: 'الأذين الأيمن (Right Atrium)',
  desc: 'يقع في الجزء العلوي والأيمن. يستقبل الدم غير المؤكسج من الجسم عبر الوريد الأجوف العلوي والسفلي، ويدفعه إلى البطين الأيمن عبر الصمام ثلاثي الشرفات.'
}, [0.6, 0.85, 0.1], [0,0,0], [0.6, 0.5, 0.6]);

// --- الحواجز (Septa) ---
addPart(new THREE.BoxGeometry(0.15, 1.6, 0.9), 0x8e6e53, {
  name: 'الحاجز بين البطينين (Interventricular Septum)',
  desc: 'جدار عضلي سميك يفصل بين البطينين. يمنع اختلاط الدم المؤكسج بالدم غير المؤكسج. ثقبه الخلقي يسبب "عيب الحاجز البطيني" (VSD).'
}, [-0.05, -0.3, 0.1], [0,0,0], [1,1,1]);

// --- الصمامات (Valves) ---
// الصمام التاجي
addPart(new THREE.TorusGeometry(0.35, 0.08, 16, 48), 0xf1c40f, {
  name: 'الصمام التاجي / ثنائي الشرف (Mitral Valve)',
  desc: 'يقع بين الأذين الأيسر والبطين الأيسر. يتكون من شرفتين فقط. يمنع ارتجاع الدم إلى الأذين عند انقباض البطين. يُسمى أيضاً الصمام ثنائي الشرف (Bicuspid).'
}, [-0.65, 0.3, 0], [Math.PI/2, 0, 0], [1,1,1]);

// الصمام ثلاثي الشرف
addPart(new THREE.TorusGeometry(0.35, 0.08, 16, 48), 0xf39c12, {
  name: 'الصمام ثلاثي الشرفات (Tricuspid Valve)',
  desc: 'يقع بين الأذين الأيمن والبطين الأيمن. يتكون من ثلاث شرفات. يمنع ارتجاع الدم إلى الأذين الأيمن عند انقباض البطين الأيمن.'
}, [0.6, 0.3, 0.1], [Math.PI/2, 0, 0], [1,1,1]);

// الصمام الأبهر
addPart(new THREE.TorusGeometry(0.25, 0.06, 16, 48), 0xe8e2d0, {
  name: 'الصمام الأبهر (Aortic Valve)',
  desc: 'يقع بين البطين الأيسر والشريان الأبهر. يتكون من 3 شرفات هلالية. يمنع رجوع الدم من الأبهر إلى البطين الأيسر.'
}, [-0.3, 0.8, -0.1], [Math.PI/2, 0, 0], [1,1,1]);

// الصمام الرئوي
addPart(new THREE.TorusGeometry(0.25, 0.06, 16, 48), 0x2980b9, {
  name: 'الصمام الرئوي (Pulmonary Valve)',
  desc: 'يقع بين البطين الأيمن والشريان الرئوي. يتكون من 3 شرفات هلالية. يمنع رجوع الدم من الشريان الرئوي إلى البطين الأيمن.'
}, [0.7, 0.7, 0.3], [Math.PI/2, 0, 0], [1,1,1]);

// --- الأوعية الدموية الكبرى (Great Vessels) ---
// الشريان الأبهر (Aorta)
addPart(new THREE.TorusGeometry(0.5, 0.15, 16, 64, Math.PI * 1.5), 0xc0392b, {
  name: 'الشريان الأبهر (Aorta)',
  desc: 'أكبر شريان في الجسم. يخرج من البطين الأيسر عبر الصمام الأبهر، ويتقوس (قوس الأبهر) ليوزع الدم المؤكسج على كل أعضاء الجسم. ينقسم إلى الأبهر الصاعد، القوس، والأبهر النازل.'
}, [-0.1, 0.9, -0.1], [Math.PI/2, 0, 0], [1, 1.2, 1]);

// الشريان الرئوي (Pulmonary Artery)
addPart(new THREE.CylinderGeometry(0.15, 0.18, 0.8), 0x2980b9, {
  name: 'الشريان الرئوي (Pulmonary Artery)',
  desc: 'يحمل الدم غير المؤكسج من البطين الأيمن إلى الرئتين. ينقسم إلى شريان رئوي أيمن وأيسر. هو الشريان الوحيد في الجسم الذي يحمل دماً غير مؤكسج.'
}, [0.6, 0.9, 0.4], [0.2, 0, -0.4], [1,1,1]);

// الوريد الأجوف العلوي (SVC)
addPart(new THREE.CylinderGeometry(0.15, 0.15, 0.9), 0x4a6fa5, {
  name: 'الوريد الأجوف العلوي (Superior Vena Cava)',
  desc: 'يجمع الدم غير المؤكسج من الرأس والرقبة والذراعين، ويصب في الأذين الأيمن.'
}, [0.8, 1.4, -0.1], [0, 0, -0.2], [1,1,1]);

// الوريد الأجوف السفلي (IVC)
addPart(new THREE.CylinderGeometry(0.18, 0.18, 0.8), 0x4a6fa5, {
  name: 'الوريد الأجوف السفلي (Inferior Vena Cava)',
  desc: 'أكبر وريد في الجسم. يجمع الدم غير المؤكسج من البطن والحوض والأطراف السفلية، ويصب في الأذين الأيمن.'
}, [0.7, 0.3, -0.2], [0, 0, 0.1], [1,1,1]);

// --- الشرايين التاجية (Coronary Arteries) ---
addPart(new THREE.TorusGeometry(0.8, 0.05, 8, 48, Math.PI), 0xff0000, {
  name: 'الشريان التاجي الأيسر (Left Coronary Artery)',
  desc: 'ينشأ من الجيب الأبهر الأيسر، ويتفرع إلى الشريان الأمامي البيني (LAD) والشريان المحيطي (Circumflex). يغذي البطين الأيسر والأذين الأيسر. انسداده يسبب الجلطة القلبية.'
}, [-0.1, 0.6, 0.6], [0, 0.5, 1.2], [1,1,1]);

addPart(new THREE.TorusGeometry(0.7, 0.05, 8, 48, Math.PI), 0xcc0000, {
  name: 'الشريان التاجي الأيمن (Right Coronary Artery)',
  desc: 'ينشأ من الجيب الأبهر الأيمن، ويمر في الأخدود التاجي الأيمن. يغذي الأذين الأيمن والبطين الأيمن، والعقدة الجيبية (منظم ضربات القلب).'
}, [0.5, 0.5, 0.5], [0, -0.5, -1.2], [1,1,1]);

// --- الأوردة الرئوية (Pulmonary Veins) ---
// (أربعة أوردة تصب في الأذين الأيسر)
for(let i=0; i<4; i++) {
    const x = -0.8 + (i%2)*0.4;
    const y = 0.8 + Math.floor(i/2)*0.3;
    addPart(new THREE.CylinderGeometry(0.08, 0.08, 0.5), 0x6b2d3e, {
        name: 'الوريد الرئوي (Pulmonary Vein)',
        desc: 'الوحيد في الجسم الذي يحمل دماً مؤكسجاً إلى القلب. أربعة أوردة تصب في الأذين الأيسر.'
    }, [x, y, -0.6], [Math.PI/2, 0, 0], [1,1,1]);
}

// --- الزائدة الأذينية (Auricle) ---
addPart(new THREE.SphereGeometry(0.3), 0x9c3a4a, {
  name: 'الزائدة الأذينية اليسرى (Left Auricle)',
  desc: 'امتداد صغير يشبه الأذن للأذين الأيسر. يزيد من سعة الأذين. موقع شائع لتشكل الجلطات في حال الرجفان الأذيني.'
}, [-0.9, 0.8, 0.2], [0,0,0], [1, 1.2, 0.8]);

// ==================== 4. التفاعل (Raycaster) ====================
const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();
let selected = null;
let hovered = null;

function updatePointer(e) {
  pointer.x = (e.clientX / innerWidth) * 2 - 1;
  pointer.y = -(e.clientY / innerHeight) * 2 + 1;
}

// تأثير التمرير
renderer.domElement.addEventListener('pointermove', (e) => {
  updatePointer(e);
  raycaster.setFromCamera(pointer, camera);
  const hits = raycaster.intersectObjects(clickable, false);

  if (hovered && (!hits.length || hits[0].object !== hovered)) {
    if (hovered !== selected) hovered.material.emissive.setHex(0x000000);
    hovered = null;
    renderer.domElement.style.cursor = 'grab';
  }
  if (hits.length) {
    const obj = hits[0].object;
    if (obj !== hovered) {
      hovered = obj;
      if (obj !== selected) obj.material.emissive.setHex(0x442233);
      renderer.domElement.style.cursor = 'pointer';
    }
  }
});

// النقر
renderer.domElement.addEventListener('click', (e) => {
  updatePointer(e);
  raycaster.setFromCamera(pointer, camera);
  const hits = raycaster.intersectObjects(clickable, false);

  if (selected) {
    selected.material.emissive.setHex(0x000000);
    selected.material.color.setHex(selected.userData.baseColor);
  }

  if (hits.length) {
    selected = hits[0].object;
    selected.material.emissive.setHex(0x552222);
    selected.material.color.setHex(0xffffff);
    showInfo(selected.userData);
  } else {
    selected = null;
    document.getElementById('info').innerHTML = '<h2>لم تختر جزءاً بعد</h2><p>اضغط على أي جزء من مجسم القلب لقراءة تفاصيله.</p>';
  }
});

// ==================== 5. اللوحة والقائمة ====================
const infoBox = document.getElementById('info');
const partsList = document.getElementById('parts-list');

function showInfo(data) {
  infoBox.innerHTML = `<h2>${data.name}</h2><p>${data.desc}</p>`;
}

// بناء القائمة الجانبية
clickable.forEach(mesh => {
  const li = document.createElement('li');
  li.textContent = mesh.userData.name;
  li.addEventListener('click', () => {
    // نفس تأثير النقر ثلاثي الأبعاد
    if (selected) {
      selected.material.emissive.setHex(0x000000);
      selected.material.color.setHex(selected.userData.baseColor);
    }
    selected = mesh;
    mesh.material.emissive.setHex(0x552222);
    mesh.material.color.setHex(0xffffff);
    showInfo(mesh.userData);
    
    // تدوير الكاميرا للنظر للجزء
    controls.target.copy(mesh.position);
  });
  partsList.appendChild(li);
});

// إعادة الضبط
document.getElementById('reset').addEventListener('click', () => {
  camera.position.set(0, 0, 12);
  controls.target.set(0, 0, 0);
  if (selected) {
    selected.material.emissive.setHex(0x000000);
    selected.material.color.setHex(selected.userData.baseColor);
    selected = null;
  }
  infoBox.innerHTML = '<h2>لم تختر جزءاً بعد</h2><p>اضغط على أي جزء من مجسم القلب لقراءة تفاصيله.</p>';
});

// ==================== 6. حلقة الرسم ====================
addEventListener('resize', () => {
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight);
});

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  heartGroup.rotation.y += 0.003; // دوران بطيء لرؤية كل الزوايا
  renderer.render(scene, camera);
}
animate();
