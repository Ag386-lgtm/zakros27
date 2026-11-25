/* 
  📚 فهرس المحاضرات
  -----------------
  كل عنصر = محاضرة.
  - id:     معرف فريد (يُطابق متغيّر window['lecture_<id>'])
  - group:  اسم القسم (لتجميع المحاضرات في القائمة)
  - num:    رقم المحاضرة
  - title:  العنوان العربي
  - en:     العنوان الإنجليزي
*/

const LECTURES = [
  {
    id: 'lecture-01',
    group: 'Foundations of Psychiatric Nursing',
    groupAr: 'أساسيات التمريض النفسي',
    num: '01',
    title: 'أساسيات التمريض النفسي والصحة العقلية',
    en: 'Foundations of Psychiatric–Mental Health Nursing'
  }

  // ⬇️ أضف المحاضرات القادمة هنا بنفس الطريقة:
  // {
  //   id: 'lecture-02',
  //   group: 'Psychiatric Theories',
  //   groupAr: 'النظريات النفسية',
  //   num: '02',
  //   title: '...',
  //   en: '...'
  // },
];
