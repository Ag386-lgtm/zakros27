import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// ==================== 1. المشهد ====================
const canvas = document.getElementById('scene');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
renderer.setSize(innerWidth, innerHeight);

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x0b1220);
scene.fog = new THREE.Fog(0x0b1220, 18, 40);

const camera = new THREE.PerspectiveCamera(45, innerWidth / innerHeight, 0.1, 1000);
camera.position.set(0, 2, 12);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.08;
controls.minDistance = 3;
controls.maxDistance = 28;

// إضاءة
scene.add(new THREE.AmbientLight(0xffffff, 0.75));
const key = new THREE.DirectionalLight(0xffffff, 1.1);
key.position.set(6, 10, 8);
scene.add(key);
const fill = new THREE.DirectionalLight(0x6ec6ff, 0.5);
fill.position.set(-8, -3, -6);
scene.add(fill);
const warm = new THREE.DirectionalLight(0xffb37a, 0.35);
warm.position.set(0, -6, 8);
scene.add(warm);

// شبكة أرضية خفيفة
const grid = new THREE.GridHelper(30, 30, 0x22304d, 0x17233a);
grid.position.y = -6;
scene.add(grid);

// ==================== 2. أدوات بناء المجسمات ====================
const clickable = [];

function addPart(parent, geometry, color, data, position = [0,0,0], rotation = [0,0,0], scale = [1,1,1]) {
  const mat = new THREE.MeshStandardMaterial({
    color, roughness: 0.5, metalness: 0.08, emissive: 0x000000,
  });
  const mesh = new THREE.Mesh(geometry, mat);
  mesh.position.set(...position);
  mesh.rotation.set(...rotation);
  mesh.scale.set(...scale);
  mesh.userData = { ...data, baseColor: color };
  parent.add(mesh);
  clickable.push(mesh);
  return mesh;
}

function sphere(r = 1, w = 32, h = 24) { return new THREE.SphereGeometry(r, w, h); }
function cyl(rt, rb, h, s = 24) { return new THREE.CylinderGeometry(rt, rb, h, s); }
function box(w, h, d) { return new THREE.BoxGeometry(w, h, d); }
function torus(r, t, rs = 16, ts = 48) { return new THREE.TorusGeometry(r, t, rs, ts); }

// ==================== 3. القلب ====================
const heartGroup = new THREE.Group();
heartGroup.position.set(-5.5, 1.2, 0);
scene.add(heartGroup);

addPart(heartGroup, sphere(1), 0xd94b5b, {
  system: 'heart', name: 'البطين الأيسر',
  desc: 'أقوى غرفة في القلب، يضخ الدم المؤكسج إلى الجسم عبر الأبهر. جداره سميك 10-15 ملم لتحمل الضغط العالي.',
}, [-0.55, -0.2, 0], [0,0,0], [0.95, 1.25, 0.9]);

addPart(heartGroup, sphere(1), 0x4b7bd9, {
  system: 'heart', name: 'البطين الأيمن',
  desc: 'يضخ الدم غير المؤكسج إلى الرئتين عبر الشريان الرئوي. جداره أرق لأن ضغط الرئتين منخفض.',
}, [0.6, -0.25, 0.1], [0,0,0], [0.8, 1.05, 0.8]);

addPart(heartGroup, sphere(1), 0xe07a8a, {
  system: 'heart', name: 'الأذين الأيسر',
  desc: 'يستقبل الدم المؤكسج من الرئتين عبر الأوردة الرئوية الأربعة، ويدفعه إلى البطين الأيسر عبر الصمام التاجي.',
}, [-0.6, 1.1, -0.1], [0,0,0], [0.55, 0.45, 0.5]);

addPart(heartGroup, sphere(1), 0x6e9be0, {
  system: 'heart', name: 'الأذين الأيمن',
  desc: 'يستقبل الدم غير المؤكسج من الجسم عبر الوريد الأجوف العلوي والسفلي، ويدفعه إلى البطين الأيمن عبر الصمام ثلاثي الشرفات.',
}, [0.65, 1.05, 0.1], [0,0,0], [0.5, 0.42, 0.48]);

addPart(heartGroup, torus(0.55, 0.16), 0xc0392b, {
  system: 'heart', name: 'الشريان الأبهر',
  desc: 'أكبر شريان في الجسم، يخرج من البطين الأيسر ويوزع الدم المؤكسج على كل الأعضاء. قطره 2.5-3.5 سم.',
}, [0.1, 1.75, 0], [Math.PI / 2, 0, 0], [1, 1, 1]);

addPart(heartGroup, cyl(0.12, 0.14, 0.9), 0x2980b9, {
  system: 'heart', name: 'الشريان الرئوي',
  desc: 'يحمل الدم غير المؤكسج من البطين الأيمن إلى الرئتين، وينقسم إلى شريانين رئويين أيمن وأيسر.',
}, [0.95, 0.75, 0.25], [0, 0, Math.PI / 3], [1, 1, 1]);

addPart(heartGroup, torus(0.32, 0.09), 0xf1c40f, {
  system: 'heart', name: 'الصمام التاجي',
  desc: 'صمام ثنائي الشرفات بين الأذين الأيسر والبطين الأيسر، يمنع رجوع الدم أثناء انقباض البطين.',
}, [-0.55, 0.55, 0.15], [Math.PI / 2, 0, 0], [1, 1, 1]);

addPart(heartGroup, torus(0.3, 0.09), 0xf39c12, {
  system: 'heart', name: 'الصمام ثلاثي الشرفات',
  desc: 'صمام بين الأذين الأيمن والبطين الأيمن، له ثلاث شرفات، يمنع رجوع الدم إلى الأذين الأيمن.',
}, [0.6, 0.5, 0.2], [Math.PI / 2, 0, 0], [1, 1, 1]);

addPart(heartGroup, box(0.14, 1.1, 0.7), 0x8e6e53, {
  system: 'heart', name: 'الحاجز بين البطينين',
  desc: 'جدار عضلي يفصل البطينين ويمنع اختلاط الدم المؤكسج بغير المؤكسج. ثقبه الخلقي = عيب الحاجز البطيني.',
}, [0.02, -0.25, 0], [0,0,0], [1,1,1]);

// ==================== 4. الجهاز الهضمي ====================
const gutGroup = new THREE.Group();
gutGroup.position.set(0, 0.5, 0);
scene.add(gutGroup);

// المعدة: كرة مسحوبة قليلاً
addPart(gutGroup, sphere(0.85, 40, 30), 0xd98a5b, {
  system: 'digestive', name: 'المعدة',
  desc: 'كيس عضلي يهضم الطعام ميكانيكياً وكيميائياً بإفراز حمض الهيدروكلوريك والإنزيمات. سعتها حوالي 1-1.5 لتر.',
}, [-1.6, 1.8, 0], [0, 0, 0.2], [1.1, 0.9, 0.75]);

// الأمعاء الدقيقة: أنبوب ملتوٍ (TorusKnot يعطي شكلاً ملتوياً)
const smallIntestineGeo = new THREE.TorusKnotGeometry(1.15, 0.22, 220, 18, 3, 4);
addPart(gutGroup, smallIntestineGeo, 0xe8a87c, {
  system: 'digestive', name: 'الأمعاء الدقيقة',
  desc: 'أطول جزء في الجهاز الهضمي (6-7 أمتار)، يتم فيها امتصاص معظم المغذيات. تتكون من الاثني عشر والصائم واللفائفي.',
}, [0.2, 0.2, 0], [Math.PI / 2, 0, 0], [1.05, 1.05, 0.85]);

// الأمعاء الغليظة: حلقة كبيرة حول الدقيقة
const colonGeo = new THREE.TorusGeometry(1.75, 0.24, 20, 80, Math.PI * 1.65);
addPart(gutGroup, colonGeo, 0xb5764f, {
  system: 'digestive', name: 'الأمعاء الغليظة (القولون)',
  desc: 'طولها حوالي 1.5 متر، تمتص الماء والأملاح وتشكل الفضلات. تشمل الأعور والقولون الصاعد والمستعرض والنازل والسيني.',
}, [0.2, -0.1, -0.15], [Math.PI / 2, 0, -0.4], [1.05, 1.05, 1]);

// المريء: أسطوانة طويلة من المعدة للأعلى
addPart(gutGroup, cyl(0.14, 0.16, 2.6), 0xc98a6b, {
  system: 'digestive', name: 'المريء',
  desc: 'أنبوب عضلي بطول 25 سم يمرر الطعام من البلعوم إلى المعدة عبر حركة دودية.',
}, [-1.7, 3.2, 0], [0.1, 0, 0.15], [1,1,1]);

// الكبد: شكل صندوقي مستدير فوق المعدة
addPart(gutGroup, sphere(1, 32, 24), 0x7a3b2e, {
  system: 'digestive', name: 'الكبد',
  desc: 'أكبر عضو داخلي (حوالي 1.5 كجم). ينتج العصارة الصفراوية، ويخزن الجليكوجين، ويخلص الجسم من السموم.',
}, [1.5, 2.4, -0.2], [0, 0, -0.15], [1.35, 0.65, 0.9]);

// البنكرياس: أسطوانة ممددة خلف المعدة
addPart(gutGroup, cyl(0.16, 0.2, 1.4), 0xd4b46a, {
  system: 'digestive', name: 'البنكرياس',
  desc: 'غدة خلف المعدة، تفرز إنزيمات هضمية وهرمونات (الأنسولين والغلوكاغون) لتنظيم سكر الدم.',
}, [-0.5, 1.0, -0.6], [0, 0, Math.PI / 2.4], [1,1,1]);

// ==================== 5. الهيكل العظمي (مبسط) ====================
const boneGroup = new THREE.Group();
boneGroup.position.set(6, 0.5, 0);
scene.add(boneGroup);

const boneMat = 0xe8e2d0;

// الجمجمة: كرة
addPart(boneGroup, sphere(0.75, 32, 24), boneMat, {
  system: 'skeleton', name: 'الجمجمة',
  desc: 'تحمي الدماغ، وتتكون من 22 عظمة. تنقسم إلى قحف (8 عظام) ووجه (14 عظمة).',
}, [0, 3.6, 0], [0,0,0], [1, 1.15, 1]);

// العمود الفقري: سلسلة فقرات
const spinePositions = [];
for (let i = 0; i < 12; i++) {
  const y = 2.8 - i * 0.42;
  addPart(boneGroup, cyl(0.13, 0.15, 0.22, 12), boneMat, {
    system: 'skeleton', name: `فقرة ${i + 1}`,
    desc: 'العمود الفقري يتكون من 33 فقرة: 7 عنقية، 12 صدرية، 5 قطنية، 5 عجزية ملتحمة، 4 عصعصية ملتحمة. يحمي الحبل الشوكي.',
  }, [0, y, 0], [0, 0, 0], [1,1,1]);
  spinePositions.push(y);
}

// القفص الصدري: أضلاع منحنية على شكل حلقات جزئية
for (let i = 0; i < 7; i++) {
  const y = 2.0 - i * 0.32;
  const r = 1.15 - i * 0.04;
  addPart(boneGroup, new THREE.TorusGeometry(r, 0.07, 10, 40, Math.PI), boneMat, {
    system: 'skeleton', name: `ضلع ${i + 1}`,
    desc: 'الأضلاع تحمي القلب والرئتين. عند الإنسان 12 زوجاً: 7 حقيقية، 3 كاذبة، 2 عائمة.',
  }, [0, y, 0.1], [Math.PI / 2, 0, 0], [1, 1, 0.9]);
  addPart(boneGroup, new THREE.TorusGeometry(r, 0.07, 10, 40, Math.PI), boneMat, {
    system: 'skeleton', name: `ضلع ${i + 1} (يسار)`,
    desc: 'الضلع المقابل في الجهة اليسرى من القفص الصدري.',
  }, [0, y, 0.1], [Math.PI / 2, 0, Math.PI], [1, 1, 0.9]);
}

// الحوض: شكل حلقة
addPart(boneGroup, torus(0.9, 0.16, 16, 40), boneMat, {
  system: 'skeleton', name: 'الحوض',
  desc: 'يتكون من عظم الورك والعجز والعصعص. يحمل وزن الجزء العلوي من الجسم ويحمي أعضاء الحوض.',
}, [0, -2.3, 0], [Math.PI / 2, 0, 0], [1.2, 1, 0.8]);

// عظم الفخذ الأيمن والأيسر
addPart(boneGroup, cyl(0.14, 0.18, 2.0), boneMat, {
  system: 'skeleton', name: 'عظم الفخذ الأيمن',
  desc: 'أطول وأقوى عظمة في الجسم (حوالي 45 سم). يتحمل ضغطاً يعادل 30 مرة وزن الجسم.',
}, [0.45, -3.7, 0], [0,0,0], [1,1,1]);
addPart(boneGroup, cyl(0.14, 0.18, 2.0), boneMat, {
  system: 'skeleton', name: 'عظم الفخذ الأيسر',
  desc: 'أطول عظمة في الجسم، تصل الحوض بالركبة، وتلعب دوراً أساسياً في الحركة.',
}, [-0.45, -3.7, 0], [0,0,0], [1,1,1]);

// عظم العضد (الذراع)
addPart(boneGroup, cyl(0.1, 0.13, 1.5), boneMat, {
  system: 'skeleton', name: 'عظم العضد',
  desc: 'عظم الذراع العلوي، يصل الكتف بالمرفق. يتحرك في مفصل الكتف الكروي.',
}, [1.3, 1.9, 0], [0, 0, -0.35], [1,1,1]);

// عظم الكتف
addPart(boneGroup, box(0.5, 0.55, 0.1), boneMat, {
  system: 'skeleton', name: 'عظم الكتف',
  desc: 'عظم مثلثي مسطح يربط عظم العضد بالترقوة، ويسمح بحركة الذراع الواسعة.',
}, [1.1, 2.8, 0], [0, 0, 0.2], [1,1,1]);

// ==================== 6. Raycaster والنقر ====================
const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();
let selected = null;
let hovered = null;

function updatePointer(e) {
  pointer.x = (e.clientX / innerWidth) * 2 - 1;
  pointer.y = -(e.clientY / innerHeight) * 2 + 1;
}

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
      if (obj !== selected) obj.material.emissive.setHex(0x223355);
      renderer.domElement.style.cursor = 'pointer';
    }
  }
});

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
    clearInfo();
  }
});

// ==================== 7. اللوحة والقائمة ====================
const infoBox = document.getElementById('info');
const partsList = document.getElementById('parts-list');

function showInfo(d) {
  infoBox.innerHTML = `<h2>${d.name}</h2><p>${d.desc}</p>`;
}
function clearInfo() {
  infoBox.innerHTML = `<h2>لم تختر عضواً بعد</h2><p>انقر على أي جزء في المشهد.</p>`;
}

function buildList(filter = 'all') {
  partsList.innerHTML = '';
  clickable.forEach((mesh) => {
    const d = mesh.userData;
    if (filter !== 'all' && d.system !== filter) return;
    const li = document.createElement('li');
    li.textContent = d.name;
    li.addEventListener('click', () => {
      if (selected) {
        selected.material.emissive.setHex(0x000000);
        selected.material.color.setHex(selected.userData.baseColor);
      }
      selected = mesh;
      mesh.material.emissive.setHex(0x552222);
      mesh.material.color.setHex(0xffffff);
      showInfo(d);
      const wp = mesh.getWorldPosition(new THREE.Vector3());
      controls.target.copy(wp);
    });
    partsList.appendChild(li);
  });
}
buildList();

// تبويبات الأنظمة
document.querySelectorAll('.tab').forEach((btn) => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    buildList(btn.dataset.system);
  });
});

// إعادة الضبط
document.getElementById('reset').addEventListener('click', () => {
  camera.position.set(0, 2, 12);
  controls.target.set(0, 0, 0);
  if (selected) {
    selected.material.emissive.setHex(0x000000);
    selected.material.color.setHex(selected.userData.baseColor);
    selected = null;
  }
  clearInfo();
});

// ==================== 8. الحجم + الحلقة ====================
addEventListener('resize', () => {
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight);
});

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  // دوران بطيء لكل مجموعة
  heartGroup.rotation.y += 0.002;
  gutGroup.rotation.y += 0.0015;
  boneGroup.rotation.y += 0.0012;
  renderer.render(scene, camera);
}
animate();
