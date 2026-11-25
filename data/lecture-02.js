/*
  📖 محتوى المحاضرة الثانية
  Psychiatric Theories — النظريات النفسية
*/
window['lecture_lecture-02'] = {

  title: 'النظريات النفسية',
  en: 'Psychiatric Theories',
  badge: 'المحاضرة الثانية | Lecture 2',
  subtitle: 'فرويد · إريكسون · سوليفان · بيبلو · ماسلو · بياجيه · البيولوجيا النفسية · النواقل العصبية',

  sections: [

    /* ============ 1. أهداف التعلم ============ */
    {
      title: 'أهداف التعلم والمقدمة',
      en: 'Learning Outcomes & Introduction',
      html: `
        <p>تقدم هذه المحاضرة الأطر النظرية التي تفسر السلوك البشري والصحة النفسية. النظريات تساعد الممرض على فهم الإنسان وسلوكه واحتياجاته، واختيار طريقة تواصل وتدخل مناسبة؛ لكنها <b>لا تُستخدم وحدها لتشخيص المريض أو الحكم عليه</b>.</p>

        <h4>أهداف التعلم</h4>
        <ul class="bullet-list">
          <li>شرح المعتقدات الأساسية والمناهج التي تقوم عليها النظريات النفسية الاجتماعية الرئيسية.</li>
          <li>تحديد النظرية النفسية الاجتماعية التي تستند إليها كل استراتيجية علاجية.</li>
          <li>توضيح تأثير المنظورات النظرية المختلفة في الممارسة التمريضية الحالية.</li>
        </ul>

        <div class="figure">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Brain_lobes.svg/800px-Brain_lobes.svg.png" alt="فصوص الدماغ">
          <figcaption>فصوص الدماغ: Frontal · Parietal · Occipital · Temporal · Cerebellum — أساس النظرية النفسية الحيوية.</figcaption>
        </div>

        <h4>جدول النظريات الرئيسية</h4>
        <div class="table-wrap">
          <table>
            <thead><tr><th>المنظور</th><th>محور الاهتمام</th><th>الاسم</th></tr></thead>
            <tbody>
              <tr><td><span class="term">Psychoanalytic</span></td><td>العمليات اللواعية والصراعات والخبرات المبكرة</td><td>Sigmund Freud</td></tr>
              <tr><td><span class="term">Developmental</span></td><td>المهام والأزمات عبر مراحل الحياة</td><td>Erik Erikson</td></tr>
              <tr><td><span class="term">Interpersonal</span></td><td>العلاقات والتفاعلات والقلق والبيئة</td><td>Harry Stack Sullivan</td></tr>
              <tr><td><span class="term">Nurse-patient</span></td><td>العلاقة العلاجية وأدوار الممرض</td><td>Hildegard Peplau</td></tr>
              <tr><td><span class="term">Humanistic</span></td><td>الحاجات الإنسانية وتحقيق الذات</td><td>Abraham Maslow</td></tr>
              <tr><td><span class="term">Cognitive</span></td><td>تطور التفكير والتكيف</td><td>Jean Piaget</td></tr>
            </tbody>
          </table>
        </div>
      `
    },

    /* ============ 2. فرويد ============ */
    {
      title: 'نظرية التحليل النفسي — فرويد',
      en: 'Psychoanalytic Theory — Sigmund Freud',
      html: `
        <p>من أوائل من ربطوا خبرات الطفولة بمشكلات مرحلة الرشد. يرى أن السلوك يتأثر بعمليات لا واعية، وأن الاضطرابات قد تنشأ من صراعات بين <b>Id</b> و<b>Ego</b> و<b>Superego</b>.</p>

        <h4>مستويات الوعي</h4>
        <div class="table-wrap">
          <table>
            <thead><tr><th>المستوى</th><th>English</th><th>الشرح</th></tr></thead>
            <tbody>
              <tr><td>العقل الواعي</td><td><span class="term">Conscious</span></td><td>أفكار ومشاعر حاضرة الآن في الوعي.</td></tr>
              <tr><td>ما قبل الوعي</td><td><span class="term">Preconscious</span></td><td>معلومات مخزونة يمكن استرجاعها بالتركيز.</td></tr>
              <tr><td>العقل اللواعي</td><td><span class="term">Unconscious</span></td><td>أكبر جزء؛ ذكريات ورغبات ومخاوف مكبوتة تظهر في الأحلام وزلات اللسان.</td></tr>
            </tbody>
          </table>
        </div>

        <div class="figure">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Structural-Iceberg.svg/600px-Structural-Iceberg.svg.png" alt="نموذج الجبل الجليدي">
          <figcaption>نموذج الجبل الجليدي Freud's Iceberg — جزء صغير واعٍ وجزء أكبر لا واعٍ.</figcaption>
        </div>

        <h4>بنية الشخصية</h4>
        <div class="table-wrap">
          <table>
            <thead><tr><th>المكوّن</th><th>English</th><th>الوظيفة</th></tr></thead>
            <tbody>
              <tr><td>الهو</td><td><span class="term">Id</span></td><td>فطري وغريري، يطلب الإشباع الفوري (Pleasure Principle).</td></tr>
              <tr><td>الأنا</td><td><span class="term">Ego</span></td><td>عقلاني، يوازن بين الواقع والرغبات (Reality Principle).</td></tr>
              <tr><td>الأنا الأعلى</td><td><span class="term">Superego</span></td><td>القيم والأخلاق؛ يتكون من Conscience وEgo Ideal.</td></tr>
            </tbody>
          </table>
        </div>

        <div class="note">
          <strong>مثال:</strong> شخص جائع → Id يطلب الطعام فوراً · Ego يختار وقتاً ومكاناً مناسبين · Superego يوجّه وفق القيم.
        </div>

        <h4>التداعي الحر (Free Association)</h4>
        <p>تقنية يطلب فيها المعالج من المريض الاسترخاء وذكر كل ما يخطر في باله دون فلترة، لإتاحة ظهور محتوى لاواعٍ.</p>

        <h4>مراحل النمو النفسي الجنسي</h4>
        <div class="table-wrap">
          <table>
            <thead><tr><th>المرحلة</th><th>العمر</th><th>التركيز</th><th>التثبيت المحتمل</th></tr></thead>
            <tbody>
              <tr><td>Oral</td><td>0–18 شهراً</td><td>الفم والمص</td><td>التدخين / الإفراط في الأكل</td></tr>
              <tr><td>Anal</td><td>18–36 شهراً</td><td>التحكم بالإخراج</td><td>النظام المفرط / الفوضوية</td></tr>
              <tr><td>Phallic</td><td>3–6 سنوات</td><td>الأعضاء التناسلية</td><td>اضطراب الهوية الجنسية</td></tr>
              <tr><td>Latency</td><td>6–البلوغ</td><td>التعلم والعلاقات</td><td>—</td></tr>
              <tr><td>Genital</td><td>البلوغ+</td><td>النضج الجنسي</td><td>—</td></tr>
            </tbody>
          </table>
        </div>

        <div class="warning">
          <strong>⚠️ ملاحظة:</strong> هذه مراحل تاريخية وليست تشخيصاً حديثاً — احفظ الأعمار والتركيزات كما وردت في محاضرتك.
        </div>
      `
    },

    /* ============ 3. إريكسون ============ */
    {
      title: 'نظرية النمو النفسي الاجتماعي — إريكسون',
      en: 'Developmental Theory — Erik Erikson',
      html: `
        <p>وسّع إريكسون عمل فرويد لكنه ركز على النمو النفسي والاجتماعي عبر مراحل الحياة، ووصف <b>ثماني أزمات</b> يواجهها الإنسان.</p>

        <div class="table-wrap">
          <table>
            <thead><tr><th>المرحلة</th><th>الأزمة</th><th>العلاقة المهمة</th><th>العمر</th></tr></thead>
            <tbody>
              <tr><td>Infancy</td><td>Trust vs. Mistrust</td><td>الأم</td><td>0–23 شهراً</td></tr>
              <tr><td>Early Childhood</td><td>Autonomy vs. Shame</td><td>الوالدان</td><td>2–4 سنوات</td></tr>
              <tr><td>Preschool</td><td>Initiative vs. Guilt</td><td>الأسرة</td><td>4–5 سنوات</td></tr>
              <tr><td>School Age</td><td>Industry vs. Inferiority</td><td>الجيران والمدرسة</td><td>5–12 سنة</td></tr>
              <tr><td>Adolescence</td><td>Identity vs. Role Confusion</td><td>الأقران والقدوات</td><td>13–19 سنة</td></tr>
              <tr><td>Early Adulthood</td><td>Intimacy vs. Isolation</td><td>الأصدقاء والشريك</td><td>20–39 سنة</td></tr>
              <tr><td>Adulthood</td><td>Generativity vs. Stagnation</td><td>الأسرة وزملاء العمل</td><td>40–64 سنة</td></tr>
              <tr><td>Maturity</td><td>Ego Integrity vs. Despair</td><td>المجتمع</td><td>65+</td></tr>
            </tbody>
          </table>
        </div>

        <h4>تطبيقات تمريضية</h4>
        <ul class="bullet-list">
          <li><b>Trust:</b> رعاية منتظمة للرضيع ودعم مقدم الرعاية.</li>
          <li><b>Autonomy:</b> اسمح للطفل بالاختيار الآمن.</li>
          <li><b>Initiative:</b> تشجيع الاستكشاف دون سخرية.</li>
          <li><b>Industry:</b> إتاحة فرص نجاح واقعية.</li>
          <li><b>Identity:</b> احترام خصوصية المراهق.</li>
          <li><b>Intimacy:</b> السؤال عن الدعم الاجتماعي.</li>
          <li><b>Generativity:</b> دعم المشاركة ذات المعنى.</li>
          <li><b>Integrity:</b> الاستماع لذكريات المسن دون أحكام.</li>
        </ul>

        <div class="note">
          <strong>📌 للحفظ:</strong> Trust → Autonomy → Initiative → Industry → Identity → Intimacy → Generativity → Integrity.
        </div>
      `
    },

    /* ============ 4. سوليفان ============ */
    {
      title: 'نظرية العلاقات بين الشخصية — سوليفان',
      en: 'Interpersonal Theory — Harry Stack Sullivan',
      html: `
        <p>تركز على التفاعل بين الفرد وبيئته، وترى أن العلاقات غير الكافية أو غير المرضية قد تولد القلق والمشكلات.</p>

        <h4>العلاج بالبيئة (Milieu Therapy)</h4>
        <p>بيئة علاجية تستخدم العلاقات والتغذية الراجعة والتعاون والحياة الجماعية اليومية لدعم التغيير.</p>
        <ul class="bullet-list">
          <li>علاقة شخصية تصحيحية (Corrective Interpersonal Relationship).</li>
          <li>تبادل تغذية راجعة محترمة بين أفراد المجموعة.</li>
          <li>تعاون في حل مشكلات الحياة اليومية.</li>
          <li>تعلم مهارات التواصل والتفاوض وتحمل المسؤولية.</li>
        </ul>

        <h4>مراحل سوليفان</h4>
        <div class="table-wrap">
          <table>
            <thead><tr><th>المرحلة</th><th>العمر</th><th>التركيز</th></tr></thead>
            <tbody>
              <tr><td>Infancy</td><td>الولادة – بداية اللغة</td><td>الحاجات الفموية والشرجية</td></tr>
              <tr><td>Childhood</td><td>اللغة – 5 سنوات</td><td>التركيز الشرجي</td></tr>
              <tr><td>Juvenile</td><td>5–8 سنوات</td><td>التفكير بالذات والآخرين</td></tr>
              <tr><td>Preadolescence</td><td>8–12 سنة</td><td>الألفة مع صديق من الجنس نفسه</td></tr>
              <tr><td>Adolescence</td><td>البلوغ – الرشد</td><td>العلاقات نحو الجنس الآخر</td></tr>
            </tbody>
          </table>
        </div>
      `
    },

    /* ============ 5. بيبلو ============ */
    {
      title: 'العلاقة العلاجية بين الممرض والمريض — بيبلو',
      en: 'Nurse–Patient Relationship — Hildegard Peplau',
      html: `
        <p>طوّرت بيبلو مفهوم العلاقة العلاجية بين المريض والممرض: عملية مهنية منظمة تساعد على بناء الثقة، تحديد المشكلة، استكشاف المشاعر، تنمية مهارات التكيف، ثم إنهاء العلاقة بعد تحقيق الأهداف.</p>

        <h4>مراحل العلاقة العلاجية</h4>
        <div class="table-wrap">
          <table>
            <thead><tr><th>المرحلة</th><th>المعنى</th><th>دور الممرض</th></tr></thead>
            <tbody>
              <tr><td>1. Orientation</td><td>التعارف، توضيح الدور والحدود، بناء الثقة.</td><td>تعريف بالنفس، شرح السرية، الاستماع.</td></tr>
              <tr><td>2. Identification</td><td>تحديد المشكلة والأهداف المشتركة.</td><td>تسمية المشكلة، التحقق من الفهم.</td></tr>
              <tr><td>3. Exploitation</td><td>استغلال الخدمات والموارد والعلاقة لتحقيق الأهداف.</td><td>تدخلات، تعليم، دعم، مراجعة التقدم.</td></tr>
              <tr><td>4. Resolution</td><td>تحقق الأهداف وإنهاء العلاقة المخطط.</td><td>مراجعة الإنجازات، تعزيز الاستقلالية.</td></tr>
            </tbody>
          </table>
        </div>

        <h4>المقاطع الأوسع</h4>
        <ul class="bullet-list">
          <li><b>Orientation</b> — بداية اللقاء وبناء الثقة.</li>
          <li><b>Working Phase</b> — تحديد المشكلة والتدخلات.</li>
          <li><b>Termination Phase</b> — إنهاء العلاقة بعد الأهداف.</li>
        </ul>

        <h4>أدوار الممرض</h4>
        <div class="table-wrap">
          <table>
            <thead><tr><th>الدور</th><th>الممارسة</th></tr></thead>
            <tbody>
              <tr><td>Teacher — المعلم</td><td>تعليم طرق تكيف جديدة وشرح الأدوية والموارد.</td></tr>
              <tr><td>Caregiver — مقدم الرعاية</td><td>بناء الثقة واستكشاف المشاعر وتلبية الاحتياجات.</td></tr>
              <tr><td>Advocate — المدافع</td><td>حماية الخصوصية والكرامة ومنع الإساءة.</td></tr>
            </tbody>
          </table>
        </div>

        <h4>التواصل العلاجي</h4>
        <ul class="bullet-list">
          <li>الاستماع الفعال.</li>
          <li>الأسئلة المفتوحة.</li>
          <li>الاستيضاح.</li>
          <li>عكس المشاعر.</li>
          <li>التلخيص.</li>
          <li>الصمت العلاجي.</li>
        </ul>

        <div class="warning">
          <strong>⚠️ تنبيه:</strong> حافظ على الحدود المهنية، لا تقدم وعوداً لا يمكن ضمانها، ولا تقلل من مشاعر المريض.
        </div>
      `
    },

    /* ============ 6. ماسلو ============ */
    {
      title: 'هرم الحاجات الإنسانية — ماسلو',
      en: 'Maslow’s Hierarchy of Needs',
      html: `
        <p>حاجات الإنسان مرتبة هرمياً؛ الحاجات الدنيا تأخذ الأولوية، وعندما تُلبَّى بدرجة كافية يتجه الفرد إلى الحاجات الأعلى وصولاً إلى تحقيق الذات.</p>

        <div class="table-wrap">
          <table>
            <thead><tr><th>المستوى</th><th>الأمثلة</th><th>تطبيق تمريضي</th></tr></thead>
            <tbody>
              <tr><td>1. Physiological</td><td>تنفس، غذاء، ماء، نوم، إخراج</td><td>تقييم ABC، التغذية، السوائل، الألم</td></tr>
              <tr><td>2. Safety</td><td>حماية، استقرار، أمن</td><td>إزالة الخطر، منع السقوط، تقييم خطر الإيذاء</td></tr>
              <tr><td>3. Love & Belonging</td><td>صداقة، أسرة، قبول</td><td>دعم التواصل وتقليل العزلة</td></tr>
              <tr><td>4. Esteem</td><td>ثقة، إنجاز، احترام</td><td>تعزيز الاستقلالية وإشراك المريض</td></tr>
              <tr><td>5. Self-Actualization</td><td>إبداع، تحقيق الإمكانات</td><td>دعم أهداف المريض الشخصية</td></tr>
            </tbody>
          </table>
        </div>

        <div class="note">
          <strong>💡 في التمريض:</strong> لا ننتقل إلى أهداف تعليمية أو اجتماعية معقدة إذا كان المريض يعاني من خطر فوري على التنفس أو الدورة أو الأمان.
        </div>
      `
    },

    /* ============ 7. بياجيه ============ */
    {
      title: 'نظرية التطور المعرفي — بياجيه',
      en: 'Cognitive Development — Jean Piaget',
      html: `
        <p>ركز على تطور التفكير من الطفولة إلى الرشد. فهم المرحلة المعرفية للطفل يساعد الممرض على اختيار طريقة شرح مناسبة لعمره.</p>

        <div class="table-wrap">
          <table>
            <thead><tr><th>المرحلة</th><th>العمر</th><th>الخصائص</th><th>تطبيق تمريضي</th></tr></thead>
            <tbody>
              <tr><td>Sensorimotor</td><td>0–2 سنة</td><td>تعلم بالحواس والحركة، Object Permanence</td><td>استخدام محسوسات وطمأنة</td></tr>
              <tr><td>Preoperational</td><td>2–7 سنوات</td><td>لغة ورموز، تفكير ذاتي</td><td>دمية أو لعبة لشرح الإجراء</td></tr>
              <tr><td>Concrete Operational</td><td>7–11 سنة</td><td>تفكير منطقي ملموس</td><td>شرح بخطوات وأمثلة واقعية</td></tr>
              <tr><td>Formal Operational</td><td>11+</td><td>تفكير مجرد واستنتاج</td><td>مناقشة أسباب ونتائج وخيارات</td></tr>
            </tbody>
          </table>
        </div>

        <div class="note">
          <strong>مثال من المحاضرة:</strong> يمكن للممرض استخدام دمية أو ألعاب ومعدات طبية لشرح إجراء جراحي لطفل ما قبل المدرسة.
        </div>
      `
    },

    /* ============ 8. النظرية النفسية الحيوية ============ */
    {
      title: 'النظرية النفسية الحيوية — الدماغ والسلوك',
      en: 'Psychobiology — Brain & Behavior',
      html: `
        <h4>تشريح الدماغ والسلوك</h4>
        <div class="table-wrap">
          <table>
            <thead><tr><th>المنطقة</th><th>الوظيفة الرئيسية</th></tr></thead>
            <tbody>
              <tr><td>Frontal Lobe</td><td>التفكير، التخطيط، اتخاذ القرار، التحكم بالسلوك</td></tr>
              <tr><td>Parietal Lobe</td><td>الإحساس، الإدراك المكاني</td></tr>
              <tr><td>Temporal Lobe</td><td>السمع، الذاكرة، اللغة</td></tr>
              <tr><td>Occipital Lobe</td><td>الرؤية</td></tr>
              <tr><td>Cerebellum</td><td>التوازن والتنسيق الحركي</td></tr>
              <tr><td>Limbic System</td><td>العواطف والذاكرة (Amygdala, Hippocampus)</td></tr>
            </tbody>
          </table>
        </div>

        <h4>الجهاز العصبي والخلايا العصبية</h4>
        <p><b>Neuron:</b> وحدة بناء الجهاز العصبي، تتكون من Dendrites وSoma وAxon. تنقل الإشارات كيميائياً وكهربائياً عبر المشبك (Synapse).</p>

        <h4>جهد الفعل والاستجابة للضغط</h4>
        <p><b>Action Potential:</b> تغير كهربائي في غشاء الخلية العصبية يسمح بانتقال الإشارة. عند التعرض لضغط تُفرز هرمونات مثل <b>Cortisol</b> و<b>Adrenaline</b> استعداداً للمواجهة.</p>

        <h4>النواقل العصبية والمستقبلات</h4>
        <div class="table-wrap">
          <table>
            <thead><tr><th>الناقل</th><th>الدور</th><th>الاضطراب المرتبط</th></tr></thead>
            <tbody>
              <tr><td><span class="term">Dopamine</span></td><td>المكافأة والحركة والانتباه</td><td>الفصام (زيادة) · باركنسون (نقص)</td></tr>
              <tr><td><span class="term">Serotonin</span></td><td>المزاج والنوم والشهية</td><td>الاكتئاب والقلق</td></tr>
              <tr><td><span class="term">Norepinephrine</span></td><td>الانتباه والاستثارة</td><td>الاكتئاب والقلق</td></tr>
              <tr><td><span class="term">GABA</span></td><td>ناقل مثبط</td><td>القلق (نقص)</td></tr>
              <tr><td><span class="term">Glutamate</span></td><td>ناقل مهيج</td><td>الفصام والاضطرابات الإدراكية</td></tr>
              <tr><td><span class="term">Acetylcholine</span></td><td>الذاكرة والعضلات</td><td>ألزهايمر</td></tr>
            </tbody>
          </table>
        </div>

        <h4>الوراثة والهرمونات والبيئة</h4>
        <ul class="bullet-list">
          <li><b>Genetics:</b> الاستعداد الوراثي يزيد خطر بعض الاضطرابات كالفصام والاكتئاب.</li>
          <li><b>Hormones:</b> اضطراب الغدة الدرقية أو الكورتيزول قد يؤثر في المزاج.</li>
          <li><b>Environment:</b> الضغوط والتجارب المبكرة والصدمات تعدّل التعبير الجيني.</li>
        </ul>

        <div class="note">
          <strong>💡 الفكرة الأساسية:</strong> الصحة النفسية نتيجة تفاعل معقد بين الدماغ والوراثة والهرمونات والبيئة، وليس سبباً واحداً.
        </div>
      `
    },

    /* ============ 9. مقارنة نظريات ============ */
    {
      title: 'مقارنة بين النظريات',
      en: 'Comparison of Theories',
      html: `
        <div class="table-wrap">
          <table>
            <thead><tr><th>النظرية</th><th>التركيز</th><th>مصطلحات مفتاحية</th></tr></thead>
            <tbody>
              <tr><td>Freud</td><td>اللاواعي والصراعات والطفولة</td><td>Id · Ego · Superego · Free Association</td></tr>
              <tr><td>Erikson</td><td>الأزمات عبر الحياة</td><td>Trust · Identity · Integrity</td></tr>
              <tr><td>Sullivan</td><td>العلاقات والبيئة</td><td>Milieu Therapy · Corrective Relationship</td></tr>
              <tr><td>Peplau</td><td>العلاقة العلاجية</td><td>Orientation · Identification · Exploitation · Resolution</td></tr>
              <tr><td>Maslow</td><td>الحاجات</td><td>Physiological → Self-Actualization</td></tr>
              <tr><td>Piaget</td><td>التفكير</td><td>Sensorimotor · Preoperational · Concrete · Formal</td></tr>
            </tbody>
          </table>
        </div>
      `
    },

    /* ============ 10. قاموس المصطلحات ============ */
    {
      title: 'قاموس المصطلحات',
      en: 'Glossary',
      html: `
        <div class="table-wrap">
          <table>
            <thead><tr><th>English</th><th>العربية</th><th>الشرح</th></tr></thead>
            <tbody>
              <tr><td><span class="term">Psychoanalysis</span></td><td>التحليل النفسي</td><td>نظرية فرويد لفهم اللواعي.</td></tr>
              <tr><td><span class="term">Id / Ego / Superego</span></td><td>الهو / الأنا / الأنا الأعلى</td><td>بنية الشخصية عند فرويد.</td></tr>
              <tr><td><span class="term">Free Association</span></td><td>التداعي الحر</td><td>ذكر كل ما يخطر بالبال دون فلترة.</td></tr>
              <tr><td><span class="term">Psychosocial Crisis</span></td><td>أزمة نفسية اجتماعية</td><td>تحدٍّ في مرحلة إريكسون.</td></tr>
              <tr><td><span class="term">Milieu Therapy</span></td><td>العلاج بالبيئة</td><td>استخدام البيئة العلاجية.</td></tr>
              <tr><td><span class="term">Therapeutic Relationship</span></td><td>العلاقة العلاجية</td><td>علاقة مهنية بين الممرض والمريض.</td></tr>
              <tr><td><span class="term">Self-Actualization</span></td><td>تحقيق الذات</td><td>أعلى مستوى في هرم ماسلو.</td></tr>
              <tr><td><span class="term">Object Permanence</span></td><td>بقاء الشيء</td><td>فهم أن الأشياء موجودة حتى لو لم تُرَ.</td></tr>
              <tr><td><span class="term">Neurotransmitter</span></td><td>ناقل عصبي</td><td>مادة تنقل الإشارة بين الخلايا العصبية.</td></tr>
              <tr><td><span class="term">Action Potential</span></td><td>جهد الفعل</td><td>إشارة كهربائية في الخلية العصبية.</td></tr>
            </tbody>
          </table>
        </div>
      `
    },

    /* ============ 11. MCQ ============ */
    {
      title: 'أسئلة الاختيار من متعدد',
      en: 'Multiple Choice Questions',
      html: `
        <h4>1. أيّ جزء من الشخصية يعمل بمبدأ اللذة؟</h4>
        <ul class="bullet-list"><li>A. Ego</li><li>B. Superego</li><li>C. Id ✓</li><li>D. Conscience</li></ul>
        <p style="color:var(--success);font-weight:700">✅ الإجابة: C</p>

        <h4>2. أيّ مرحلة عند إريكسون تتعلق بالمراهق؟</h4>
        <ul class="bullet-list"><li>A. Trust vs Mistrust</li><li>B. Identity vs Role Confusion ✓</li><li>C. Intimacy vs Isolation</li><li>D. Integrity vs Despair</li></ul>
        <p style="color:var(--success);font-weight:700">✅ الإجابة: B</p>

        <h4>3. أيّ نظرية تركز على العلاقات والبيئة العلاجية؟</h4>
        <ul class="bullet-list"><li>A. Freud</li><li>B. Erikson</li><li>C. Sullivan ✓</li><li>D. Piaget</li></ul>
        <p style="color:var(--success);font-weight:700">✅ الإجابة: C</p>

        <h4>4. أيّ مرحلة في العلاقة العلاجية لبيبلو يتم فيها تحديد المشكلة؟</h4>
        <ul class="bullet-list"><li>A. Orientation</li><li>B. Identification ✓</li><li>C. Exploitation</li><li>D. Resolution</li></ul>
        <p style="color:var(--success);font-weight:700">✅ الإجابة: B</p>

        <h4>5. أعلى مستوى في هرم ماسلو هو:</h4>
        <ul class="bullet-list"><li>A. Safety</li><li>B. Esteem</li><li>C. Love</li><li>D. Self-Actualization ✓</li></ul>
        <p style="color:var(--success);font-weight:700">✅ الإجابة: D</p>

        <h4>6. أيّ مرحلة عند بياجيه تتعلق بالتفكير المجرد؟</h4>
        <ul class="bullet-list"><li>A. Sensorimotor</li><li>B. Preoperational</li><li>C. Concrete Operational</li><li>D. Formal Operational ✓</li></ul>
        <p style="color:var(--success);font-weight:700">✅ الإجابة: D</p>

        <h4>7. أيّ ناقل عصبي مرتبط بالفصام عند زيادته؟</h4>
        <ul class="bullet-list"><li>A. Serotonin</li><li>B. Dopamine ✓</li><li>C. GABA</li><li>D. Acetylcholine</li></ul>
        <p style="color:var(--success);font-weight:700">✅ الإجابة: B</p>

        <h4>8. تقنية "التداعي الحر" ترتبط بـ:</h4>
        <ul class="bullet-list"><li>A. Piaget</li><li>B. Maslow</li><li>C. Freud ✓</li><li>D. Erikson</li></ul>
        <p style="color:var(--success);font-weight:700">✅ الإجابة: C</p>
      `
    },

    /* ============ 12. True/False ============ */
    {
      title: 'أسئلة صح / خطأ',
      en: 'True / False',
      html: `
        <h4>1. Id يعمل بمبدأ الواقع (Reality Principle).</h4>
        <p style="color:var(--danger);font-weight:700">❌ خطأ — Id يعمل بمبدأ اللذة، وEgo بمبدأ الواقع.</p>

        <h4>2. Erikson وسّع نظرية فرويد ليشمل النمو النفسي الاجتماعي.</h4>
        <p style="color:var(--success);font-weight:700">✅ صح.</p>

        <h4>3. Sullivan يرى أن العلاقات غير المرضية قد تولد القلق.</h4>
        <p style="color:var(--success);font-weight:700">✅ صح.</p>

        <h4>4. العلاقة العلاجية عند بيبلو تبدأ بمرحلة Exploitation.</h4>
        <p style="color:var(--danger);font-weight:700">❌ خطأ — تبدأ بـ Orientation.</p>

        <h4>5. Maslow يرى أن الحاجات الأعلى تأخذ الأولوية دائماً.</h4>
        <p style="color:var(--danger);font-weight:700">❌ خطأ — الحاجات الدنيا تأخذ الأولوية.</p>

        <h4>6. في مرحلة Preoperational يمكن استخدام الدمى لشرح الإجراءات.</h4>
        <p style="color:var(--success);font-weight:700">✅ صح.</p>

        <h4>7. Serotonin مرتبط بالمزاج والنوم.</h4>
        <p style="color:var(--success);font-weight:700">✅ صح.</p>

        <h4>8. الوراثة وحدها تحدد الإصابة بالاضطرابات النفسية.</h4>
        <p style="color:var(--danger);font-weight:700">❌ خطأ — تفاعل الوراثة والبيئة والهرمونات.</p>
      `
    },

    /* ============ 13. Essay ============ */
    {
      title: 'أسئلة مقالية',
      en: 'Essay Questions',
      html: `
        <h4>1. اشرح بنية الشخصية عند فرويد.</h4>
        <div class="note">Id: فطري، مبدأ اللذة. Ego: عقلاني، مبدأ الواقع. Superego: القيم والأخلاق (Conscience + Ego Ideal).</div>

        <h4>2. ناقش مراحل العلاقة العلاجية عند بيبلو.</h4>
        <div class="note">Orientation → Identification → Exploitation → Resolution، مع دور الممرض في كل مرحلة.</div>

        <h4>3. كيف يستفيد الممرض من هرم ماسلو؟</h4>
        <div class="note">يرتب الاحتياجات حسب الأولوية: Physiological أولاً ثم Safety ثم Love ثم Esteem ثم Self-Actualization.</div>

        <h4>4. اشرح دور النواقل العصبية في الصحة النفسية.</h4>
        <div class="note">Dopamine → فصام/باركنسون. Serotonin → اكتئاب/قلق. GABA → قلق. Acetylcholine → ألزهايمر. Glutamate → فصام.</div>

        <h4>5. قارن بين Freud وErikson.</h4>
        <div class="note">Freud: صراعات لاواعية ومراحل نفسية جنسية. Erikson: أزمات نفسية اجتماعية عبر الحياة.</div>
      `
    },

    /* ============ 14. ملخص ============ */
    {
      title: 'ملخص الحفظ السريع',
      en: 'Quick Review',
      html: `
        <div class="note">
          <ul class="bullet-list" style="margin-top:8px">
            <li>Freud = Id/Ego/Superego · Conscious/Preconscious/Unconscious · Free Association.</li>
            <li>Erikson = 8 أزمات: Trust → Integrity.</li>
            <li>Sullivan = العلاقات + Milieu Therapy.</li>
            <li>Peplau = 4 مراحل: Orientation → Identification → Exploitation → Resolution.</li>
            <li>Maslow = 5 مستويات: Physiological → Self-Actualization.</li>
            <li>Piaget = 4 مراحل معرفية: Sensorimotor → Formal.</li>
            <li>Neurotransmitters: Dopamine · Serotonin · GABA · Glutamate · Acetylcholine.</li>
            <li>الدماغ: Frontal · Parietal · Temporal · Occipital · Cerebellum · Limbic.</li>
          </ul>
        </div>

        <h4>⚠️ أخطاء شائعة</h4>
        <ul class="bullet-list">
          <li>الخلط بين Id (اللذة) وEgo (الواقع).</li>
          <li>نسيان أن Peplau صاحبة العلاقة العلاجية (وليس Sullivan).</li>
          <li>اعتبار Maslow يبدأ من الأعلى.</li>
          <li>الخلط بين مراحل Erikson وPiaget.</li>
          <li>اعتبار الوراثة سبباً وحيداً للاضطرابات.</li>
        </ul>
      `
    }

  ]
};
