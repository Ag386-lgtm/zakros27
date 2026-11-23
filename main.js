import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// ==================== 1. إعداد المشهد ====================
const canvas = document.getElementById('scene');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
renderer.setSize(innerWidth, innerHeight);

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x050a14);
scene.fog = new THREE.Fog(0x050a14, 20, 50);

const camera = new THREE.PerspectiveCamera(45, innerWidth / innerHeight, 0.1, 1000);
camera.position.set(0, 5, 18);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.target.set(0, 0, 0);

// إضاءة
scene.add(new THREE.AmbientLight(0xffffff, 0.6));
const light1 = new THREE.DirectionalLight(0xffffff, 1.2);
light1.position.set(10, 20, 10);
scene.add(light1);
const light2 = new THREE.DirectionalLight(0x4db8ff, 0.8);
light2.position.set(-10, -10, -10);
scene.add(light2);

// شبكة أرضية
const grid = new THREE.GridHelper(40, 40, 0x1e2d45, 0x0a111e);
grid.position.y = -8;
scene.add(grid);

// ==================== 2. أدوات مساعدة ====================
const clickable = [];
function createPart(geo, color, data, pos, rot = [0,0,0], scale = [1,1,1]) {
  const mat = new THREE.MeshStandardMaterial({ color, roughness: 0.4, metalness: 0.1, emissive: 0x000000 });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.position.set(...pos);
  mesh.rotation.set(...rot);
  mesh.scale.set(...scale);
  mesh.userData = { ...data, baseColor: color };
  scene.add(mesh);
  clickable.push(mesh);
  return mesh;
}

// ==================== 3. بناء الأعضاء (بناءً على الأطلس) ====================

// --- القسم 1: الهيكل العظمي ---
// الجمجمة
createPart(new THREE.SphereGeometry(1.1, 32, 32), 0xe8e2d0, {
  name: 'الجمجمة (Cranium)',
  desc: 'تتكون من 22 عظمة. القحف يحمي الدماغ (8 عظام)، والوجه (14 عظمة).'
}, [0, 7, 0], [0,0,0], [1, 1.1, 1]);

// العمود الفقري (مبسط - 12 فقرة صدرية)
for (let i = 0; i < 15; i++) {
  createPart(new THREE.CylinderGeometry(0.25, 0.25, 0.3, 16), 0xe8e2d0, {
    name: `فقرة (Vertebra) ${i+1}`,
    desc: 'العمود الفقري يحمي الحبل الشوكي. يتكون من 33 فقرة (7 عنقية، 12 صدرية، 5 قطنية، 5 عجزية، 4 عصعصية).'
  }, [0, 5.5 - i * 0.45, -0.5]);
}

// القفص الصدري (أضلاع)
for (let i = 0; i < 7; i++) {
  const y = 4.5 - i * 0.4;
  const radius = 2.5 - i * 0.1;
  // القوس الأيمن
  createPart(new THREE.TorusGeometry(radius, 0.08, 8, 32, Math.PI * 0.9), 0xe8e2d0, {
    name: `ضلع (Rib) ${i+1} أيمن`,
    desc: 'الأضلاع الحقيقية (1-7) تتصل مباشرة بالقص. تحمي القلب والرئتين.'
  }, [0, y, 0], [Math.PI/2, 0, 0.2]);
  // القوس الأيسر
  createPart(new THREE.TorusGeometry(radius, 0.08, 8, 32, Math.PI * 0.9), 0xe8e2d0, {
    name: `ضلع (Rib) ${i+1} أيسر`,
    desc: 'الأضلاع الحقيقية (1-7) تتصل مباشرة بالقص. تحمي القلب والرئتين.'
  }, [0, y, 0], [Math.PI/2, 0, Math.PI - 0.2]);
}

// الحوض
createPart(new THREE.TorusGeometry(2.2, 0.4, 16, 32), 0xe8e2d0, {
  name: 'الحوض (Pelvis)',
  desc: 'يتكون من عظم الورك (Ilium, Ischium, Pubis)، العجز، والعصعص. يحمل وزن الجسم.'
}, [0, -2.5, 0], [Math.PI/2, 0, 0], [1.2, 1, 0.8]);

// --- القسم 2: الأحشاء الصدرية (Thorax) ---
// القلب (الغرف الأربع) - مستوحى من صفحة 7 (T7)
const heartGroup = new THREE.Group();
heartGroup.position.set(-0.5, 2.5, 1); // يميل لليسار قليلاً كما في التشريح
scene.add(heartGroup);

function addHeartPart(geo, color, data, pos, scale) {
  const mat = new THREE.MeshStandardMaterial({ color, roughness: 0.3, metalness: 0.1 });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.position.set(...pos);
  mesh.scale.set(...scale);
  mesh.userData = { ...data, baseColor: color };
  heartGroup.add(mesh);
  clickable.push(mesh);
}

addHeartPart(new THREE.SphereGeometry(1), 0xd94b5b, { name: 'البطين الأيسر', desc: 'يضخ الدم المؤكسج للجسم.' }, [-0.4, -0.2, 0], [0.8, 1.1, 0.8]);
addHeartPart(new THREE.SphereGeometry(1), 0x4b7bd9, { name: 'البطين الأيمن', desc: 'يضخ الدم غير المؤكسج للرئتين.' }, [0.4, -0.2, 0.2], [0.7, 0.9, 0.7]);
addHeartPart(new THREE.SphereGeometry(1), 0xe07a8a, { name: 'الأذين الأيسر', desc: 'يستقبل الدم من الرئتين.' }, [-0.4, 0.7, -0.2], [0.5, 0.4, 0.5]);
addHeartPart(new THREE.SphereGeometry(1), 0x6e9be0, { name: 'الأذين الأيمن', desc: 'يستقبل الدم من الجسم.' }, [0.5, 0.7, 0.1], [0.5, 0.4, 0.5]);
addHeartPart(new THREE.TorusGeometry(0.6, 0.15), 0xc0392b, { name: 'الشريان الأبهر (Aorta)', desc: 'ينشأ من البطين الأيسر ويوزع الدم للجسم.' }, [-0.1, 1.2, 0], [1,1,1]);

// الرئتان (مستوحى من المقاطع العرضية)
createPart(new THREE.SphereGeometry(1.5, 32, 32), 0x8fd3ff, { name: 'الرئة اليمنى', desc: 'تتكون من 3 فصوص.' }, [2, 2.5, -1], [0,0,0], [1, 1.8, 1]);
createPart(new THREE.SphereGeometry(1.5, 32, 32), 0x8fd3ff, { name: 'الرئة اليسرى', desc: 'تتكون من فصين، وفيها انخفاض للقلب.' }, [-2.5, 2.5, -1], [0,0,0], [1, 1.8, 1]);

// --- القسم 3: الأحشاء البطنية (Abdomen) ---
// الكبد (يمين) - مستوحى من صفحة 8 (T12)
createPart(new THREE.BoxGeometry(3, 1.2, 2.5), 0x7a3b2e, {
  name: 'الكبد (Liver)',
  desc: 'أكبر غدة في الجسم. يقع في الربع العلوي الأيمن من البطن (تحت الحجاب الحاجز). يفرز الصفراء.'
}, [2.5, 0.5, 0], [0,0,0], [1,1,1]);

// المعدة (يسار) - مستوحى من صفحة 8
createPart(new THREE.SphereGeometry(1, 32, 32), 0xd98a5b, {
  name: 'المعدة (Stomach)',
  desc: 'تقع في الربع العلوي الأيسر. تستقبل الطعام من المريء وتهضمه بالحمض.'
}, [-2, 0.2, 0], [0,0,0], [1.2, 0.9, 0.8]);

// الكلى (خلف الصفاق - Retroperitoneal)
createPart(new THREE.SphereGeometry(0.8, 32, 32), 0xa86b3b, {
  name: 'الكلى اليمنى',
  desc: 'تقع خلف الصفاق. تُصفّي الدم وتنتج البول. الكلية اليمنى أدنى قليلاً بسبب الكبد.'
}, [1.8, -1.5, -1], [0,0,0], [0.8, 1.2, 0.6]);
createPart(new THREE.SphereGeometry(0.8, 32, 32), 0xa86b3b, {
  name: 'الكلى اليسرى',
  desc: 'تقع خلف الصفاق. تُصفّي الدم وتنتج البول.'
}, [-1.8, -1.2, -1], [0,0,0], [0.8, 1.2, 0.6]);

// الأمعاء الدقيقة والغليظة (مبسطة)
createPart(new THREE.TorusKnotGeometry(1.2, 0.3, 128, 16), 0xe8a87c, {
  name: 'الأمعاء الدقيقة',
  desc: 'يبلغ طولها 6-7 أمتار. يتم فيها امتصاص 90% من العناصر الغذائية.'
}, [0, -2, 0.5], [Math.PI/2, 0, 0]);
createPart(new THREE.TorusGeometry(2.5, 0.35, 16, 64, Math.PI * 1.6), 0xb5764f, {
  name: 'القولون (الأمعاء الغليظة)',
  desc: 'يحيط بالأمعاء الدقيقة. يمتص الماء ويشكل البراز.'
}, [0, -2.5, 0], [Math.PI/2, 0, -0.3]);

// --- القسم 4: الأطراف العلوية ---
createPart(new THREE.CylinderGeometry(0.2, 0.25, 3), 0xe8e2d0, {
  name: 'عظم العضد (Humerus)',
  desc: 'عظم الذراع العلوي. يتصل بالكتف من الأعلى (مفصل كروي) والزند والكعبرة من الأسفل.'
}, [4.5, 2.5, 0], [0, 0, 0.3]);
createPart(new THREE.CylinderGeometry(0.15, 0.2, 3), 0xe8e2d0, {
  name: 'عظم الكعبرة (Radius)',
  desc: 'عظم الساعد الجانبي (جهة الإبهام).'
}, [5, 0.5, 0.2], [0, 0, 0.1]);
createPart(new THREE.CylinderGeometry(0.15, 0.15, 3), 0xe8e2d0, {
  name: 'عظم الزند (Ulna)',
  desc: 'عظم الساعد الإنسي (جهة الخنصر).'
}, [4.5, 0.5, -0.2], [0, 0, 0.1]);

// --- القسم 5: الأطراف السفلية ---
createPart(new THREE.CylinderGeometry(0.3, 0.35, 4.5), 0xe8e2d0, {
  name: 'عظم الفخذ (Femur)',
  desc: 'أطول وأقوى عظمة في الجسم. يتصل بالحوض (مفصل الورك) والظنبوب (الركبة).'
}, [1.5, -5, 0], [0, 0, 0.1]);
createPart(new THREE.CylinderGeometry(0.2, 0.25, 4), 0xe8e2d0, {
  name: 'عظم الظنبوب (Tibia)',
  desc: 'عظم الساق الأساسي (القصبة). يتحمل معظم وزن الجسم.'
}, [1.8, -9, 0], [0, 0, 0]);
createPart(new THREE.CylinderGeometry(0.1, 0.15, 4), 0xe8e2d0, {
  name: 'عظم الشظية (Fibula)',
  desc: 'عظم الساق الجانبي. لا يتحمل وزناً كبيراً، لكنه مهم لاستقرار الكاحل.'
}, [1.3, -9, 0], [0, 0, 0]);

// ==================== 4. التفاعل (نقر، تحريك، تكبير) ====================
const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();
let selected = null;

function updatePointer(e) {
  pointer.x = (e.clientX / innerWidth) * 2 - 1;
  pointer.y = -(e.clientY / innerHeight) * 2 + 1;
}

// تلوين عند التمرير
renderer.domElement.addEventListener('pointermove', (e) => {
  updatePointer(e);
  raycaster.setFromCamera(pointer, camera);
  const hits = raycaster.intersectObjects(clickable, false);
  
  if (hits.length) {
    renderer.domElement.style.cursor = 'pointer';
    if (hits[0].object !== selected) hits[0].object.material.emissive.setHex(0x223355);
  } else {
    renderer.domElement.style.cursor = 'grab';
    clickable.forEach(m => { if (m !== selected) m.material.emissive.setHex(0x000000); });
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
    document.getElementById('info').innerHTML = '<h2>لم تختر عضواً بعد</h2><p>اختر من القائمة أو انقر على المجسم.</p>';
  }
});

// عرض المعلومات
function showInfo(data) {
  document.getElementById('info').innerHTML = `<h2>${data.name}</h2><p>${data.desc}</p>`;
}

// ==================== 5. ربط القوائم الجانبية ====================
document.querySelectorAll('.acc-header').forEach(btn => {
  btn.addEventListener('click', () => {
    const content = btn.nextElementSibling;
    content.classList.toggle('active');
  });
});

// الأزرار التي تنقل الكاميرا للعضو
document.querySelectorAll('.acc-content button').forEach(btn => {
  btn.addEventListener('click', () => {
    const partId = btn.dataset.part;
    // هنا يمكن إضافة منطق للبحث عن العضو بالاسم والطيران إليه
    // للتبسيط، سنقوم بتفعيل النقر البرمجي عليه إذا أردت
    console.log(`Requested: ${partId}`);
  });
});

// إعادة الضبط
document.getElementById('reset').addEventListener('click', () => {
  camera.position.set(0, 5, 18);
  controls.target.set(0, 0, 0);
  if (selected) {
    selected.material.emissive.setHex(0x000000);
    selected.material.color.setHex(selected.userData.baseColor);
    selected = null;
  }
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
  renderer.render(scene, camera);
}
animate();
