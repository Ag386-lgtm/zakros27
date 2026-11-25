/*
  📖 محتوى المحاضرة الأولى (كامل — 38 صفحة)
  Foundations of Psychiatric–Mental Health Nursing
*/
window['lecture_lecture-01'] = {

  title: 'أساسيات التمريض النفسي والصحة العقلية',
  en: 'Foundations of Psychiatric–Mental Health Nursing',
  badge: 'المحاضرة الأولى | Lecture 1',
  subtitle: 'الصحة النفسية · المرض النفسي · العوامل · DSM-5 · تاريخ الطب النفسي · الأدوية · إزالة الإيداع · ANA',

  sections: [

    /* ============ 1. أهداف التعلم ============ */
    {
      title: 'أهداف التعلم والمقدمة',
      en: 'Learning Objectives & Introduction',
      html: `
        <p>عند بدء دراسة التمريض النفسي قد يشعر الطالب بالحماس أو عدم اليقين أو القلق. يقدم هذا الفصل نظرة عامة عن تاريخ المرض النفسي، وتطور العلاج، ودور ممرض الصحة النفسية.</p>

        <h4>أهداف التعلم</h4>
        <ul class="bullet-list">
          <li>وصف خصائص الصحة النفسية والمرض النفسي.</li>
          <li>مناقشة الغرض من الدليل التشخيصي DSM-5 واستخدامه.</li>
          <li>تحديد المحطات التاريخية المهمة في الرعاية النفسية.</li>
          <li>مناقشة الاتجاهات العلاجية الحالية.</li>
          <li>مناقشة معايير ممارسة التمريض النفسي (ANA).</li>
          <li>وصف المخاوف الشائعة لدى طلبة التمريض النفسي.</li>
        </ul>

        <h4>مشاعر الطالب عند البداية</h4>
        <div class="table-wrap">
          <table>
            <thead><tr><th>المصطلح</th><th>المعنى بالعربية</th><th>كيف يظهر عند الطالب</th></tr></thead>
            <tbody>
              <tr><td><span class="term">Excitement</span></td><td>الحماس</td><td>الرغبة في تعلم مجال جديد.</td></tr>
              <tr><td><span class="term">Uncertainty</span></td><td>عدم اليقين / الحيرة</td><td>عدم معرفة ما سيحدث أثناء التدريب.</td></tr>
              <tr><td><span class="term">Anxiety</span></td><td>القلق</td><td>التوتر من التواصل أو المواقف السريرية الجديدة.</td></tr>
              <tr><td><span class="term">Unfamiliar / Mysterious</span></td><td>غير مألوف / غامض</td><td>عدم امتلاك خبرة كافية عن المرض النفسي.</td></tr>
            </tbody>
          </table>
        </div>

        <div class="note">
          <strong>💡 الفكرة الأساسية:</strong> التمريض النفسي لا يقتصر على إعطاء الدواء؛ بل يشمل تعزيز الصحة النفسية، والوقاية، والتقييم، والرعاية، والتواصل العلاجي.
        </div>
      `
    },

    /* ============ 2. الصحة النفسية ============ */
    {
      title: 'الصحة النفسية والمرض النفسي',
      en: 'Mental Health vs. Mental Illness',
      html: `
        <p>تعريف الصحة النفسية والمرض النفسي ليس سهلاً بصورة دقيقة؛ إذ تؤثر ثقافة المجتمع ومعتقداته وقيمه في فهم الصحة والمرض. لذلك لا ينبغي الحكم على سلوك شخص بمعزل عن العمر والسياق والثقافة والظروف.</p>

        <div class="figure">
          <img src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=800&auto=format&fit=crop" alt="الصحة النفسية">
          <figcaption>الصحة النفسية هي حالة من السلامة العاطفية والنفسية والاجتماعية.</figcaption>
        </div>

        <h4>تعريف منظمة الصحة العالمية</h4>
        <div class="note">
          "Health is a state of complete physical, mental and social well-being and not merely the absence of disease or infirmity."
          <br><br>
          <span class="term-ar">الصحة حال من اكتمال السلامة الجسدية والعقلية والاجتماعية، وليست مجرد غياب المرض أو العجز.</span>
        </div>

        <h4>عناصر الصحة النفسية</h4>
        <ul class="bullet-list">
          <li><span class="term">Satisfying interpersonal relationships</span> — علاقات شخصية مُرضية.</li>
          <li><span class="term">Effective behavior</span> — سلوك فعال ومناسب للموقف.</li>
          <li><span class="term">Coping</span> — القدرة على التعامل مع الضغوط والمشكلات.</li>
          <li><span class="term">Positive self-concept</span> — مفهوم ذات إيجابي ومتوازن.</li>
          <li><span class="term">Emotional stability</span> — الاستقرار العاطفي وتنظيم المشاعر.</li>
        </ul>

        <h4>الفرق الجوهري</h4>
        <div class="table-wrap">
          <table>
            <thead><tr><th>وجه المقارنة</th><th>الصحة النفسية</th><th>المرض النفسي</th></tr></thead>
            <tbody>
              <tr><td>الاستجابة للضغط</td><td>تكيّف ناجح (Adaptive)</td><td>استجابة غير تكيفية (Maladaptive)</td></tr>
              <tr><td>الأفكار والمشاعر</td><td>ملائمة للعمر والسياق</td><td>قد تصبح غير متوافقة وتسبب معاناة</td></tr>
              <tr><td>الأداء اليومي</td><td>يساعد على أداء الوظائف</td><td>قصور في الوظائف الاجتماعية/المهنية</td></tr>
              <tr><td>التعامل مع الضغط</td><td>مهارات Coping فعالة</td><td>صعوبة في التكيف واستمرار الأعراض</td></tr>
            </tbody>
          </table>
        </div>

        <div class="note">
          <strong>مثال توضيحي:</strong> طالب رسب في امتحان: قد يحزن ثم يراجع أخطاءه ويضع خطة جديدة — هذا تكيف. أما إذا ظهرت أعراض مستمرة وشديدة عطلت حياته اليومية، فيحتاج إلى تقييم مختص. <b>الحزن أو القلق وحدهما لا يكفيان لتشخيص اضطراب نفسي.</b>
        </div>
      `
    },

    /* ============ 3. العوامل الثلاثة ============ */
    {
      title: 'العوامل المؤثرة في الصحة النفسية',
      en: 'Factors Influencing Mental Health',
      html: `
        <p>تنقسم عوامل الصحة النفسية إلى ثلاثة أنواع رئيسية:</p>

        <div class="factor-grid">
          <div class="factor-card ind">
            <h4>Individual</h4>
            <div class="ar">عوامل فردية</div>
            <ul>
              <li>Biologic makeup</li>
              <li>Self-esteem</li>
              <li>Autonomy</li>
              <li>Coping / resilience</li>
              <li>Sense of belonging</li>
            </ul>
          </div>
          <div class="factor-card inter">
            <h4>Interpersonal</h4>
            <div class="ar">عوامل علائقية</div>
            <ul>
              <li>Communication</li>
              <li>Intimacy</li>
              <li>Helping others</li>
              <li>Connection & separation</li>
            </ul>
          </div>
          <div class="factor-card social">
            <h4>Social / Cultural</h4>
            <div class="ar">اجتماعية وثقافية</div>
            <ul>
              <li>Community</li>
              <li>Adequate resources</li>
              <li>Safety from violence</li>
              <li>Realistic environment</li>
            </ul>
          </div>
        </div>

        <h4>جدول تفصيلي للعوامل الفردية</h4>
        <div class="table-wrap">
          <table>
            <thead><tr><th>المصطلح</th><th>الترجمة</th><th>الشرح</th></tr></thead>
            <tbody>
              <tr><td><span class="term">Biologic makeup</span></td><td>التركيب البيولوجي</td><td>الاستعدادات والخصائص البيولوجية.</td></tr>
              <tr><td><span class="term">Autonomy</span></td><td>الاستقلالية</td><td>القدرة على اتخاذ القرارات.</td></tr>
              <tr><td><span class="term">Self-esteem</span></td><td>تقدير الذات</td><td>قيمة الشخص لنفسه ونظرته لقدراته.</td></tr>
              <tr><td><span class="term">Emotional resilience</span></td><td>المرونة النفسية</td><td>التعافي والتكيف عند مواجهة الصعوبات.</td></tr>
              <tr><td><span class="term">Sense of belonging</span></td><td>الشعور بالانتماء</td><td>الإحساس بأن الشخص جزء من أسرة أو مجموعة.</td></tr>
              <tr><td><span class="term">Reality orientation</span></td><td>التوجه نحو الواقع</td><td>تمييز الواقع وفهم الزمان والمكان.</td></tr>
            </tbody>
          </table>
        </div>

        <div class="note">
          <strong>📌 للحفظ السريع:</strong> Individual = الشخص نفسه · Interpersonal = علاقته مع الآخرين · Social/Cultural = المجتمع والبيئة.
        </div>
      `
    },

    /* ============ 4. الأمراض النفسية ============ */
    {
      title: 'مظاهر الاضطرابات النفسية وأمثلتها',
      en: 'Mental Illness & Examples',
      html: `
        <p>يمكن للاضطرابات النفسية أن تؤثر في المزاج والسلوك والتفكير، وقد تسبب ضيقاً نفسياً مهماً أو عجزاً في مجال أو أكثر من مجالات الأداء.</p>

        <h4>الوظائف الدماغية الست التي قد تتأثر</h4>
        <div class="disorder-grid">
          <div class="disorder-card"><div class="icon">🧠</div><h4>Thinking</h4><div class="ar">التفكير</div></div>
          <div class="disorder-card"><div class="icon">👁️</div><h4>Perception</h4><div class="ar">الإدراك</div></div>
          <div class="disorder-card"><div class="icon">❤️</div><h4>Emotion</h4><div class="ar">الانفعال</div></div>
          <div class="disorder-card"><div class="icon">📡</div><h4>Signaling</h4><div class="ar">الإشارات</div></div>
          <div class="disorder-card"><div class="icon">🫀</div><h4>Physical</h4><div class="ar">الوظيفة الجسدية</div></div>
          <div class="disorder-card"><div class="icon">🏃</div><h4>Behavior</h4><div class="ar">السلوك</div></div>
        </div>

        <h4>أمثلة على الاضطرابات</h4>
        <div class="disorder-grid">
          <div class="disorder-card">
            <div class="icon">😔</div>
            <h4>Depression</h4>
            <div class="ar">الاكتئاب</div>
            <ul><li>حزن مستمر</li><li>فقدان الاهتمام</li><li>تعب وإرهاق</li><li>اضطراب النوم</li><li>الشعور بانعدام القيمة</li></ul>
          </div>
          <div class="disorder-card">
            <div class="icon">🌀</div>
            <h4>Schizophrenia</h4>
            <div class="ar">الفصام</div>
            <ul><li>هلاوس</li><li>ضلالات</li><li>تفكير غير منظم</li><li>انسحاب اجتماعي</li></ul>
          </div>
          <div class="disorder-card">
            <div class="icon">😰</div>
            <h4>Anxiety Disorders</h4>
            <div class="ar">اضطرابات القلق</div>
            <ul><li>قلق مفرط</li><li>تململ</li><li>خفقان</li><li>توتر عضلي</li><li>صعوبة النوم</li></ul>
          </div>
          <div class="disorder-card">
            <div class="icon">🚬</div>
            <h4>Addictive Disorders</h4>
            <div class="ar">اضطرابات الإدمان</div>
            <ul><li>فقدان السيطرة</li><li>الاستمرار رغم الأضرار</li><li>Substance Use Disorder</li></ul>
          </div>
        </div>

        <div class="warning">
          <strong>⚠️ ملاحظة سريرية:</strong> لا يُشخَّص الاضطراب اعتماداً على عرض منفرد أو موقف عابر؛ التقييم يأخذ في الاعتبار شدة الأعراض ومدتها وتأثيرها والسياق الثقافي والوظيفي، ويجريه مختص مؤهل.
        </div>
      `
    },

    /* ============ 5. DSM-5 ============ */
    {
      title: 'الدليل التشخيصي DSM-5',
      en: 'Diagnostic and Statistical Manual of Mental Disorders',
      html: `
        <p>الدليل التشخيصي والإحصائي للاضطرابات النفسية، الطبعة الخامسة، تصدره الجمعية الأمريكية للطب النفسي (APA).</p>

        <h4>الغرض والاستخدام</h4>
        <ul class="bullet-list">
          <li><span class="term">Classification</span> — تصنيف الاضطرابات النفسية.</li>
          <li><span class="term">Diagnosis</span> — معايير تساعد المختص على التشخيص.</li>
          <li><span class="term">Standardization</span> — توحيد لغة ومعايير الوصف.</li>
          <li><span class="term">Communication</span> — تسهيل التواصل بين المختصين.</li>
          <li><span class="term">Research</span> — دعم البحوث والدراسات.</li>
        </ul>

        <h4>نظام المحاور الخمسة القديم (DSM-IV)</h4>
        <div class="warning">
          <strong>⚠️ تنبيه علمي:</strong> هذا النظام أُلغي في DSM-5، ويُحفظ بوصفه نظاماً تاريخياً قديماً فقط.
        </div>
        <div class="table-wrap">
          <table>
            <thead><tr><th>المحور</th><th>الاسم</th><th>المحتوى</th><th>أمثلة</th></tr></thead>
            <tbody>
              <tr><td>Axis I</td><td>Clinical Disorders</td><td>الاضطرابات السريرية</td><td>الاكتئاب، الفصام، القلق</td></tr>
              <tr><td>Axis II</td><td>Personality Disorders</td><td>اضطرابات الشخصية</td><td>Borderline PD</td></tr>
              <tr><td>Axis III</td><td>General Medical Conditions</td><td>الأمراض الطبية</td><td>السكري، ارتفاع الضغط</td></tr>
              <tr><td>Axis IV</td><td>Psychosocial Problems</td><td>المشكلات النفسية الاجتماعية</td><td>مشكلات مالية، بطالة</td></tr>
              <tr><td>Axis V</td><td>Global Assessment</td><td>التقييم الشامل للوظائف</td><td>مقياس GAF</td></tr>
            </tbody>
          </table>
        </div>

        <div class="note">
          <strong>مثال تطبيقي:</strong> شخص يشكو من حزن وفقدان اهتمام واضطراب نوم — لا يكفي عرض واحد للحكم بالاكتئاب؛ بل تُقيَّم الأعراض ومدتها وشدتها وتأثيرها وتُقارن بالمعايير التشخيصية وتُستبعد الأسباب الأخرى.
        </div>
      `
    },

    /* ============ 6. الطب النفسي والتمريض النفسي ============ */
    {
      title: 'الطب النفسي والتمريض النفسي',
      en: 'Psychiatry & Psychiatric Nursing',
      html: `
        <h4>ما هو الطب النفسي؟</h4>
        <p><span class="term">Psychiatry</span> هو فرع من الطب يهتم بتشخيص وعلاج والوقاية من الاضطرابات النفسية والعقلية والسلوكية. يجمع بين الجانب البيولوجي والنفسي والاجتماعي.</p>

        <h4>ما هو التمريض النفسي؟</h4>
        <p><span class="term">Psychiatric–Mental Health Nursing</span> تخصص تمريضي متخصص في رعاية الأشخاص الذين يعانون من اضطرابات نفسية أو يعانون من ضغوط نفسية، ويهتم بـ:</p>

        <ul class="bullet-list">
          <li>تعزيز الصحة النفسية والوقاية من الاضطرابات.</li>
          <li>تقييم الحالة النفسية والجسدية والاجتماعية.</li>
          <li>تقديم الرعاية المباشرة وإدارة الأدوية.</li>
          <li>التواصل العلاجي وبناء علاقة علاجية مع المريض.</li>
          <li>التثقيف الصحي ودعم الأسرة والمجتمع.</li>
          <li>المشاركة في العلاج الجماعي والفردي.</li>
        </ul>

        <div class="figure">
          <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop" alt="التمريض النفسي">
          <figcaption>الممرض النفسي شريك أساسي في الفريق العلاجي متعدد التخصصات.</figcaption>
        </div>

        <h4>الفريق العلاجي متعدد التخصصات</h4>
        <div class="table-wrap">
          <table>
            <thead><tr><th>العضو</th><th>الدور</th></tr></thead>
            <tbody>
              <tr><td><span class="term">Psychiatrist</span></td><td>طبيب نفسي متخصص في التشخيص ووصف الأدوية.</td></tr>
              <tr><td><span class="term">Psychiatric Nurse</span></td><td>تقديم الرعاية اليومية وإدارة الأدوية والتقييم.</td></tr>
              <tr><td><span class="term">Psychologist</span></td><td>عالم نفس يقدم العلاج النفسي والاختبارات.</td></tr>
              <tr><td><span class="term">Social Worker</span></td><td>أخصائي اجتماعي يربط المريض بالخدمات والموارد.</td></tr>
              <tr><td><span class="term">Occupational Therapist</span></td><td>يساعد على استعادة المهارات الحياتية.</td></tr>
              <tr><td><span class="term">Pharmacist</span></td><td>صيدلي متخصص في الأدوية النفسية.</td></tr>
            </tbody>
          </table>
        </div>
      `
    },

    /* ============ 7. تاريخ الطب النفسي ============ */
    {
      title: 'تاريخ الطب النفسي والشخصيات المهمة',
      en: 'History of Psychiatry & Milestones',
      html: `
        <p>مرّ الطب النفسي بمراحل طويلة من الفهم الخاطئ إلى العلم الحديث. هذه أبرز المحطات:</p>

        <div class="figure">
          <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&auto=format&fit=crop" alt="تاريخ الطب النفسي">
          <figcaption>تطور الرعاية النفسية عبر القرون من الإهمال إلى العلاج الحديث.</figcaption>
        </div>

        <h4>أبرز المحطات التاريخية</h4>
        <div class="table-wrap">
          <table>
            <thead><tr><th>الحقبة</th><th>الحدث</th><th>الأهمية</th></tr></thead>
            <tbody>
              <tr><td>العصور القديمة</td><td>تفسير المرض النفسي بأنه سحر أو مس شيطاني</td><td>معاملة قاسية للمرضى</td></tr>
              <tr><td>القرن 18</td><td><span class="term">Philippe Pinel</span> — إطلاق سلاسل المرضى</td><td>بداية العلاج الإنساني</td></tr>
              <tr><td>القرن 19</td><td>ظهور المصحات النفسية (Asylums)</td><td>عزل المرضى لكن بدون علاج فعّال</td></tr>
              <tr><td>1900s</td><td><span class="term">Sigmund Freud</span> — التحليل النفسي</td><td>أساس النظريات النفسية</td></tr>
              <tr><td>1950s</td><td>اكتشاف الأدوية النفسية (Chlorpromazine)</td><td>ثورة في العلاج الدوائي</td></tr>
              <tr><td>1960s</td><td>حركة <span class="term">Deinstitutionalization</span></td><td>إغلاق المصحات الكبرى</td></tr>
              <tr><td>2013</td><td>صدور DSM-5</td><td>توحيد التشخيص عالمياً</td></tr>
            </tbody>
          </table>
        </div>

        <h4>شخصيات بارزة</h4>
        <ul class="bullet-list">
          <li><span class="term">Philippe Pinel</span> — أبو الطب النفسي الحديث، نادى بمعاملة المرضى بإنسانية.</li>
          <li><span class="term">Sigmund Freud</span> — مؤسس التحليل النفسي (Psychoanalysis).</li>
          <li><span class="term">Hildegard Peplau</span> — رائدة التمريض النفسي، صاحبة نظرية العلاقة العلاجية.</li>
          <li><span class="term">Dorothea Dix</span> — ناشطة في تحسين أوضاع المصحات النفسية في أمريكا.</li>
        </ul>

        <div class="note">
          <strong>💡 تذكّر:</strong> <b>Peplau</b> هي الأهم في تاريخ التمريض النفسي — صاحبة نظرية "العلاقة بين الشخصية والمريض" وأول من وضعت معايير عملية للتمريض النفسي.
        </div>
      `
    },

    /* ============ 8. تطور العلاجات والأدوية ============ */
    {
      title: 'تطور العلاجات والأدوية النفسية',
      en: 'Treatments & Psychopharmacology',
      html: `
        <p>شهد العلاج النفسي تطوراً هائلاً من العصور القديمة (الحجامة والفصد) إلى الأدوية الحديثة والعلاج المعرفي السلوكي.</p>

        <h4>أنواع العلاجات الحالية</h4>
        <div class="table-wrap">
          <table>
            <thead><tr><th>النوع</th><th>الوصف</th><th>أمثلة</th></tr></thead>
            <tbody>
              <tr><td><span class="term">Pharmacotherapy</span></td><td>العلاج الدوائي</td><td>مضادات الاكتئاب، مضادات الذهان</td></tr>
              <tr><td><span class="term">Psychotherapy</span></td><td>العلاج النفسي (كلامي)</td><td>CBT، التحليل النفسي</td></tr>
              <tr><td><span class="term">Group Therapy</span></td><td>علاج جماعي</td><td>جلسات مشتركة بين المرضى</td></tr>
              <tr><td><span class="term">Family Therapy</span></td><td>علاج أسري</td><td>إشراك الأسرة في العلاج</td></tr>
              <tr><td><span class="term">ECT</span></td><td>العلاج بالصدمة الكهربائية</td><td>حالات الاكتئاب الشديد</td></tr>
              <tr><td><span class="term">Milieu Therapy</span></td><td>العلاج بالبيئة</td><td>تهيئة بيئة علاجية آمنة</td></tr>
            </tbody>
          </table>
        </div>

        <h4>أشهر مجموعات الأدوية النفسية</h4>
        <div class="table-wrap">
          <table>
            <thead><tr><th>الفئة</th><th>الاستخدام</th><th>أمثلة</th></tr></thead>
            <tbody>
              <tr><td><span class="term">Antidepressants</span></td><td>الاكتئاب والقلق</td><td>SSRIs (Fluoxetine)</td></tr>
              <tr><td><span class="term">Antipsychotics</span></td><td>الفصام والذهان</td><td>Haloperidol, Risperidone</td></tr>
              <tr><td><span class="term">Anxiolytics</span></td><td>القلق</td><td>Benzodiazepines</td></tr>
              <tr><td><span class="term">Mood Stabilizers</span></td><td>الاضطراب ثنائي القطب</td><td>Lithium</td></tr>
            </tbody>
          </table>
        </div>

        <div class="warning">
          <strong>⚠️ دور الممرض:</strong> مراقبة الآثار الجانبية، الالتزام بالجرعات، تثقيف المريض، وتوثيق الاستجابة للعلاج.
        </div>
      `
    },

    /* ============ 9. إزالة الإيداع المؤسسي ============ */
    {
      title: 'إزالة الإيداع المؤسسي وخدمات المجتمع',
      en: 'Deinstitutionalization & Community Services',
      html: `
        <h4>ما هي Deinstitutionalization؟</h4>
        <p>حركة بدأت في الستينات تهدف إلى إغلاق المصحات النفسية الكبرى وإعادة المرضى إلى المجتمع، مع توفير خدمات صحية نفسية في المجتمع.</p>

        <h4>الأسباب</h4>
        <ul class="bullet-list">
          <li>الظروف السيئة في المصحات الكبرى.</li>
          <li>ظهور الأدوية النفسية الفعّالة (Chlorpromazine).</li>
          <li>الرغبة في دمج المرضى في المجتمع.</li>
          <li>توفير التكاليف المالية للدولة.</li>
        </ul>

        <h4>النتائج</h4>
        <div class="table-wrap">
          <table>
            <thead><tr><th>الإيجابيات</th><th>السلبيات</th></tr></thead>
            <tbody>
              <tr><td>حياة أكثر كرامة للمرضى</td><td>زيادة عدد المشردين</td></tr>
              <tr><td>دمج في المجتمع</td><td>ضعف الخدمات المجتمعية</td></tr>
              <tr><td>تخفيف العبء على المستشفيات</td><td>بعض المرضى فقدوا الرعاية</td></tr>
            </tbody>
          </table>
        </div>

        <h4>الخدمات المجتمعية البديلة</h4>
        <ul class="bullet-list">
          <li><span class="term">Community Mental Health Centers</span> — مراكز صحة نفسية مجتمعية.</li>
          <li><span class="term">Partial Hospitalization</span> — استشفاء جزئي نهاري.</li>
          <li><span class="term">Halfway Houses</span> — بيوت انتقالية.</li>
          <li><span class="term">Home Care</span> — رعاية منزلية.</li>
          <li><span class="term">Outpatient Clinics</span> — عيادات خارجية.</li>
        </ul>
      `
    },

    /* ============ 10. تطور التمريض النفسي ============ */
    {
      title: 'تطور التمريض النفسي ومعايير الممارسة',
      en: 'Nursing Development & ANA Standards',
      html: `
        <h4>تطور التمريض النفسي</h4>
        <ul class="bullet-list">
          <li><span class="term">1882</span> — تأسيس أول مدرسة تمريض نفسي في أمريكا.</li>
          <li><span class="term">1952</span> — <b>Hildegard Peplau</b> نشرت كتابها "Interpersonal Relations in Nursing".</li>
          <li><span class="term">1960s</span> — ظهور برامج الماجستير في التمريض النفسي.</li>
          <li><span class="term">1973</span> — ANA أصدرت معايير ممارسة التمريض النفسي.</li>
          <li><span class="term">1982</span> — تأسيس American Psychiatric Nurses Association (APNA).</li>
        </ul>

        <h4>معايير ANA للممارسة</h4>
        <div class="table-wrap">
          <table>
            <thead><tr><th>المعيار</th><th>الوصف</th></tr></thead>
            <tbody>
              <tr><td>Assessment</td><td>تقييم شامل للحالة النفسية والجسدية.</td></tr>
              <tr><td>Diagnosis</td><td>تشخيص تمريضي دقيق.</td></tr>
              <tr><td>Outcomes Identification</td><td>تحديد النتائج المتوقعة.</td></tr>
              <tr><td>Planning</td><td>وضع خطة رعاية فردية.</td></tr>
              <tr><td>Implementation</td><td>تنفيذ الرعاية.</td></tr>
              <tr><td>Evaluation</td><td>تقييم النتائج.</td></tr>
            </tbody>
          </table>
        </div>

        <div class="note">
          <strong>💡 المعايير المهنية للأداء:</strong> Ethics · Education · Evidence-Based Practice · Quality · Communication · Leadership · Collaboration.
        </div>
      `
    },

    /* ============ 11. مخاوف الطلبة ============ */
    {
      title: 'مخاوف الطلبة ومؤشرات طلب المساعدة',
      en: 'Student Concerns & Help-Seeking',
      html: `
        <h4>مخاوف شائعة لدى طلبة التمريض النفسي</h4>
        <ul class="bullet-list">
          <li>الخوف من إيذاء المريض النفسي للطالب.</li>
          <li>القلق من عدم معرفة كيفية التعامل مع المرضى.</li>
          <li>الشعور بالعجز أمام معاناة المرضى.</li>
          <li>الخوف من وصمة العار (Stigma) المرتبطة بالطب النفسي.</li>
          <li>صعوبة فهم المصطلحات النفسية.</li>
        </ul>

        <h4>مؤشرات طلب المساعدة</h4>
        <p>إذا استمرت الأعراض التالية أسبوعين أو أكثر، يُنصح بطلب المساعدة المتخصصة:</p>
        <div class="table-wrap">
          <table>
            <thead><tr><th>المؤشر</th><th>التفسير</th></tr></thead>
            <tbody>
              <tr><td>حزن مستمر</td><td>لا يتحسن بمرور الوقت</td></tr>
              <tr><td>تغيرات في النوم/الشهية</td><td>زيادة أو نقصان ملحوظ</td></tr>
              <tr><td>انسحاب اجتماعي</td><td>الانقطاع عن الأصدقاء والعائلة</td></tr>
              <tr><td>فقدان الاهتمام</td><td>عدم الاستمتاع بالأنشطة السابقة</td></tr>
              <tr><td>أفكار إيذاء النفس</td><td>تستدعي تدخلاً فورياً</td></tr>
            </tbody>
          </table>
        </div>

        <div class="warning">
          <strong>🚨 تنبيه:</strong> الأفكار الانتحارية أو إيذاء النفس <b>حالة طارئة</b> تستدعي التواصل الفوري مع مختص أو خط مساعدة نفسية.
        </div>
      `
    },

    /* ============ 12. قاموس المصطلحات ============ */
    {
      title: 'قاموس المصطلحات',
      en: 'Glossary of Terms',
      html: `
        <div class="table-wrap">
          <table>
            <thead><tr><th>English</th><th>العربية</th><th>الشرح</th></tr></thead>
            <tbody>
              <tr><td><span class="term">Mental Health</span></td><td>الصحة النفسية</td><td>حالة سلامة عاطفية ونفسية واجتماعية.</td></tr>
              <tr><td><span class="term">Mental Illness</span></td><td>المرض النفسي</td><td>استجابات غير تكيفية للضغوط.</td></tr>
              <tr><td><span class="term">Coping</span></td><td>التكيّف</td><td>القدرة على التعامل مع الضغوط.</td></tr>
              <tr><td><span class="term">Resilience</span></td><td>المرونة النفسية</td><td>التعافي من الصعوبات.</td></tr>
              <tr><td><span class="term">DSM-5</span></td><td>الدليل التشخيصي</td><td>مرجع تشخيصي للاضطرابات النفسية.</td></tr>
              <tr><td><span class="term">Psychiatry</span></td><td>الطب النفسي</td><td>فرع طبي للاضطرابات النفسية.</td></tr>
              <tr><td><span class="term">Deinstitutionalization</span></td><td>إزالة الإيداع المؤسسي</td><td>إغلاق المصحات وإعادة المرضى للمجتمع.</td></tr>
              <tr><td><span class="term">Stigma</span></td><td>وصمة العار</td><td>النظرة السلبية للمرض النفسي.</td></tr>
              <tr><td><span class="term">Therapeutic Relationship</span></td><td>العلاقة العلاجية</td><td>علاقة مهنية بين الممرض والمريض.</td></tr>
              <tr><td><span class="term">Milieu Therapy</span></td><td>العلاج بالبيئة</td><td>استخدام البيئة كأداة علاجية.</td></tr>
              <tr><td><span class="term">Hallucination</span></td><td>هلوسة</td><td>إدراك حسي بدون مؤثر خارجي.</td></tr>
              <tr><td><span class="term">Delusion</span></td><td>ضلالة</td><td>اعتقاد خاطئ ثابت لا يتغير بالمنطق.</td></tr>
            </tbody>
          </table>
        </div>
      `
    },

    /* ============ 13. أسئلة MCQ ============ */
    {
      title: 'أسئلة الاختيار من متعدد (MCQ)',
      en: 'Multiple Choice Questions',
      html: `
        <div class="note">
          <strong>🎯 اختبر نفسك:</strong> حاول الإجابة قبل النظر إلى الحل.
        </div>

        <h4>1. أيّ من التالي يُعد من خصائص الصحة النفسية؟</h4>
        <ul class="bullet-list">
          <li>A. سلوك غير تكيفي</li>
          <li>B. تكيّف ناجح مع الضغوط ✓</li>
          <li>C. أعراض مستمرة</li>
          <li>D. عجز في الأداء اليومي</li>
        </ul>
        <p style="color:var(--success);font-weight:700">✅ الإجابة: B — الصحة النفسية = تكيّف ناجح (Adaptive coping).</p>

        <h4>2. أيّ من التالي يُعد من عوامل الصحة النفسية بين الشخصية؟</h4>
        <ul class="bullet-list">
          <li>A. Biologic makeup</li>
          <li>B. Self-esteem</li>
          <li>C. Communication ✓</li>
          <li>D. Autonomy</li>
        </ul>
        <p style="color:var(--success);font-weight:700">✅ الإجابة: C — التواصل من العوامل العلائقية.</p>

        <h4>3. ما الغرض الأساسي من DSM-5؟</h4>
        <ul class="bullet-list">
          <li>A. وصف الأدوية</li>
          <li>B. تصنيف الاضطرابات النفسية وتوحيد اللغة التشخيصية ✓</li>
          <li>C. حساب تكاليف العلاج</li>
          <li>D. تحديد أنواع التمريض</li>
        </ul>
        <p style="color:var(--success);font-weight:700">✅ الإجابة: B — التصنيف والتوحيد والتشخيص.</p>

        <h4>4. من هي رائدة التمريض النفسي الحديث؟</h4>
        <ul class="bullet-list">
          <li>A. Florence Nightingale</li>
          <li>B. Hildegard Peplau ✓</li>
          <li>C. Dorothea Dix</li>
          <li>D. Virginia Henderson</li>
        </ul>
        <p style="color:var(--success);font-weight:700">✅ الإجابة: B — Peplau صاحبة نظرية العلاقات الشخصية في التمريض.</p>

        <h4>5. ما الذي أدى إلى حركة Deinstitutionalization؟</h4>
        <ul class="bullet-list">
          <li>A. نقص الأطباء</li>
          <li>B. اكتشاف الأدوية النفسية + سوء ظروف المصحات ✓</li>
          <li>C. زيادة الوعي فقط</li>
          <li>D. أسباب دينية</li>
        </ul>
        <p style="color:var(--success);font-weight:700">✅ الإجابة: B.</p>

        <h4>6. أيّ من التالي ليس من محاور DSM-IV الخمسة؟</h4>
        <ul class="bullet-list">
          <li>A. Axis I — Clinical Disorders</li>
          <li>B. Axis II — Personality Disorders</li>
          <li>C. Axis VI — Nursing Diagnosis ✓</li>
          <li>D. Axis III — General Medical Conditions</li>
        </ul>
        <p style="color:var(--success);font-weight:700">✅ الإجابة: C — لا يوجد Axis VI.</p>

        <h4>7. أيّ مجموعة أدوية تُستخدم لعلاج الفصام؟</h4>
        <ul class="bullet-list">
          <li>A. Antidepressants</li>
          <li>B. Antipsychotics ✓</li>
          <li>C. Anxiolytics</li>
          <li>D. Mood stabilizers</li>
        </ul>
        <p style="color:var(--success);font-weight:700">✅ الإجابة: B.</p>

        <h4>8. الهلوسة (Hallucination) تعني:</h4>
        <ul class="bullet-list">
          <li>A. اعتقاد خاطئ ثابت</li>
          <li>B. إدراك حسي بدون مؤثر خارجي ✓</li>
          <li>C. انسحاب اجتماعي</li>
          <li>D. فقدان الذاكرة</li>
        </ul>
        <p style="color:var(--success);font-weight:700">✅ الإجابة: B.</p>
      `
    },

    /* ============ 14. صح / خطأ ============ */
    {
      title: 'أسئلة صح / خطأ',
      en: 'True / False Questions',
      html: `
        <h4>1. المرض النفسي يُشخَّص بناءً على عرض واحد فقط.</h4>
        <p style="color:var(--danger);font-weight:700">❌ خطأ — لا يُشخَّص إلا بعد تقييم شامل لشدة الأعراض ومدتها وتأثيرها.</p>

        <h4>2. منظمة الصحة العالمية تُعرِّف الصحة بأنها غياب المرض فقط.</h4>
        <p style="color:var(--danger);font-weight:700">❌ خطأ — الصحة = سلامة جسدية + نفسية + اجتماعية كاملة.</p>

        <h4>3. Hildegard Peplau رائدة التمريض النفسي وصاحبة نظرية العلاقات الشخصية.</h4>
        <p style="color:var(--success);font-weight:700">✅ صح.</p>

        <h4>4. نظام المحاور الخمسة (DSM-IV) لا يزال مستخدماً في DSM-5.</h4>
        <p style="color:var(--danger);font-weight:700">❌ خطأ — أُلغي في DSM-5.</p>

        <h4>5. Deinstitutionalization أدّت إلى دمج المرضى في المجتمع.</h4>
        <p style="color:var(--success);font-weight:700">✅ صح — لكنها رافقتها مشكلات مثل زيادة المشردين.</p>

        <h4>6. التواصل من العوامل الفردية في الصحة النفسية.</h4>
        <p style="color:var(--danger);font-weight:700">❌ خطأ — التواصل من العوامل بين الشخصية.</p>

        <h4>7. العلاج بالبيئة (Milieu Therapy) يعني تهيئة بيئة علاجية آمنة.</h4>
        <p style="color:var(--success);font-weight:700">✅ صح.</p>

        <h4>8. الممرض النفسي دوره يقتصر على إعطاء الدواء.</h4>
        <p style="color:var(--danger);font-weight:700">❌ خطأ — يشمل التقييم والتواصل العلاجي والتثقيف ودعم الأسرة.</p>
      `
    },

    /* ============ 15. أسئلة مقالية ============ */
    {
      title: 'أسئلة مقالية ونماذج الإجابة',
      en: 'Essay Questions & Answer Keys',
      html: `
        <h4>1. اشرح الفرق بين الصحة النفسية والمرض النفسي مع أمثلة.</h4>
        <div class="note">
          <strong>الإجابة:</strong> الصحة النفسية = تكيّف ناجح مع الضغوط، أفكار ملائمة للعمر، تنظيم عاطفي، أداء يومي فعّال. المرض النفسي = استجابات غير تكيفية، أعراض مزعجة، تغيرات في المزاج/التفكير/السلوك، قصور في الأداء. مثال: طالب يفشل في امتحان ويتكيف = صحة. طالب يعاني أعراضاً مستمرة تعطّل حياته = مرض يحتاج تقييم.
        </div>

        <h4>2. ناقش أهمية DSM-5 في التشخيص النفسي.</h4>
        <div class="note">
          <strong>الإجابة:</strong> يصنّف الاضطرابات، يوحّد لغة التشخيص بين المختصين، يدعم البحوث، يوفّر معايير واضحة للتشخيص، ويسهّل التواصل بين أعضاء الفريق العلاجي. لكنه لا يغني عن التقييم السريري الشامل.
        </div>

        <h4>3. اذكر ثلاث نتائج إيجابية وسلبية لحركة Deinstitutionalization.</h4>
        <div class="note">
          <strong>الإجابة:</strong><br>
          <b>إيجابيات:</b> كرامة أكبر للمرضى، دمج في المجتمع، تخفيف الضغط على المستشفيات.<br>
          <b>سلبيات:</b> زيادة التشرد، ضعف الخدمات المجتمعية، فقدان بعض المرضى للرعاية.
        </div>

        <h4>4. عدّد معايير ANA للتمريض النفسي.</h4>
        <div class="note">
          <strong>الإجابة:</strong> Assessment · Diagnosis · Outcomes Identification · Planning · Implementation · Evaluation، إضافة إلى معايير الأداء المهني (Ethics, Education, EBP, Quality, Communication, Leadership, Collaboration).
        </div>

        <h4>5. اشرح دور الممرض النفسي في الفريق العلاجي.</h4>
        <div class="note">
          <strong>الإجابة:</strong> تقييم الحالة، إدارة الأدوية ومراقبة الآثار الجانبية، التواصل العلاجي، تنفيذ خطة الرعاية، تثقيف المريض وأسرته، المشاركة في العلاج الجماعي، والتوثيق.
        </div>
      `
    },

    /* ============ 16. ملخص الحفظ السريع ============ */
    {
      title: 'ملخص الحفظ السريع وملاحظات الامتحان',
      en: 'Quick Review & Exam Notes',
      html: `
        <div class="note">
          <strong>📌 حفظ سريع:</strong>
          <ul class="bullet-list" style="margin-top:8px">
            <li>الصحة النفسية = تكيّف ناجح · المرض النفسي = تكيّف فاشل.</li>
            <li>عوامل الصحة النفسية = Individual + Interpersonal + Social/Cultural.</li>
            <li>DSM-5 = APA · 2013 · ألغى المحاور الخمسة.</li>
            <li>Peplau = رائدة التمريض النفسي · نظرية العلاقة العلاجية.</li>
            <li>Deinstitutionalization = إغلاق المصحات + خدمات مجتمعية.</li>
            <li>ANA = 6 معايير رعاية + 7 معايير أداء مهني.</li>
            <li>Antipsychotics = فصام · Antidepressants = اكتئاب · Mood Stabilizers = ثنائي القطب.</li>
            <li>Hallucination = إدراك بدون مؤثر · Delusion = اعتقاد خاطئ ثابت.</li>
          </ul>
        </div>

        <h4>⚠️ أخطاء شائعة في الامتحان</h4>
        <ul class="bullet-list">
          <li>الخلط بين Hallucination و Delusion.</li>
          <li>الخلط بين العوامل الفردية والعلائقية (Communication علائقية).</li>
          <li>اعتبار DSM-IV ما زال مستخدماً.</li>
          <li>نسيان أن Peplau رائدة التمريض النفسي (وليس Nightingale).</li>
          <li>اعتبار المرض النفسي يُشخَّص من عرض واحد.</li>
        </ul>

        <h4>🎯 نصائح للمذاكرة</h4>
        <ul class="bullet-list">
          <li>اربط كل مصطلح بمثال واقعي.</li>
          <li>احفظ أسماء الشخصيات مع إسهاماتها.</li>
          <li>راجع الجداول قبل الامتحان — هي خلاصة المحاضرة.</li>
          <li>اختبر نفسك بالأسئلة دون النظر للإجابات.</li>
        </ul>
      `
    }

  ]
};
