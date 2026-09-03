/* =========================================================
   Meer Salam Ali — Personal CV
   Theme, i18n (EN / KU / AR), navigation and scroll effects
   ========================================================= */

(function () {
  "use strict";

  /* ------------------------------------------------------
     1. Translations
     ------------------------------------------------------ */
  const translations = {
    en: {
      title_page: "Meer Salam Ali — Computer Science & IT",
      brand_name: "Meer Salam Ali",
      brand_sub: "Computer Science · IT",

      nav_profile: "Profile",
      nav_experience: "Experience",
      nav_projects: "Projects",
      nav_publications: "Publications",
      nav_education: "Education",
      nav_skills: "Skills",
      nav_contact: "Contact",

      hero_badge: "Open to new opportunities (With Part Time)",
      hero_first: "MEER SALAM",
      hero_last: "ALI",
      hero_title: "Computer Science · AI & Web Application Developer",
      hero_lead:
        "Published researcher in speech and machine-learning datasets, builder of database-driven web applications, and an experienced IT and operations professional.",
      hero_cta: "Get In Touch",
      hero_cta2: "Download CV",
      hero_meta_loc: "Sulaimanyah, Iraq",
      hero_meta_edu: "BSc Computer Science",
      hero_meta_pub: "Data in Brief author",

      about_header: "Profile",
      about_sub: "Who I am and what I do",
      about_p1:
        "Computer Science graduate, AI developer, and published researcher with experience in machine learning, speech-based datasets, web application development, computer repair, networking, and IT support.",
      about_p2:
        "Published a dataset paper in the Data in Brief journal focused on classifying phrases and sentences (statements, questions, exclamations) based on sound pitch.",
      about_p3:
        "Former Hotel Manager at Grandiva Hotel with over four years of experience in managing operations, leading teams, and overseeing all computer and administrative systems.",
      stat1_label: "Years of experience",
      stat2_label: "Published paper",
      stat3_label: "Web applications",
      stat4_label: "Languages spoken",

      experience_header: "Experience",
      experience_sub: "Where I have worked",
      job0_title: "Pioneer Pharma — Production Operator",
      job0_sub: "Generic Section — Production",
      job0_dates: "04/2026 — Present",
      job0_li1: "Working as a Production Operator in the Generic production section.",
      job1_title: "Grandiva Hotel — Hotel Manager",
      job1_sub: "Operations & administrative systems",
      job1_dates: "2022 — 2025",
      job1_li1: "Managed hotel operations, reception, and administrative systems.",
      job1_li2: "Oversaw all computer systems, POS systems, and hotel databases.",
      job1_li3: "Provided customer service leadership and team supervision.",
      job1_li4: "Improved workflow efficiency and guest satisfaction.",
      proj1_title: "Technical & Digital Solutions Support",
      proj1_sub: "Freelance · IT support & networking",
      proj1_dates: "2021 — 2025",
      proj1_li1:
        "Repaired and maintained computer software & hardware. Provided networking setup, internet configuration, and troubleshooting.",
      proj1_li2:
        "Assisted with technical projects and digital solutions. Installed operating systems, antivirus tools, and network hardware.",

      projects_header: "Web Application Projects",
      projects_sub: "Things I have designed and built",
      projA_title: "Hotel Management System",
      projA_sub: "Web Application",
      projA_li1:
        "Developed a web-based hotel management system to manage rooms, reservations, customers, employees, and hotel operations.",
      projA_li2: "Designed administrative dashboards and database-driven management features.",
      projB_title: "Carpet Washing Management System",
      projB_sub: "Web Application",
      projB_li1:
        "Developed a web application for managing carpet washing orders and customer information.",
      projB_li2:
        "Implemented order tracking, customer records, delivery management, pricing, payments, and workflow monitoring.",
      projC_title: "Geometric Area Calculator",
      projC_sub: "Web Application",
      projC_li1:
        "Developed a web application for calculating geometric areas for architectural and engineering applications.",
      projC_li2:
        "Implemented calculations for different geometric shapes with a simple and user-friendly interface.",

      publications_header: "Publications",
      publications_sub: "Peer-reviewed research output",
      pub1_journal: "Data in Brief Journal · 2024",
      pub1_title:
        "A Dataset for Classifying Phrases and Sentences Into Statements, Questions, or Exclamations Based on Sound Pitch",
      pub1_li1: "Developed and published a unique linguistic and audio-based dataset.",
      pub1_li2: "Focused on speech intonation, semantic labeling, and machine learning preparation.",
      pub1_li3: "Contributed to research in NLP, sound analysis, and AI classification.",
      pub1_citation_label: "Citation",
      pub1_citation:
        'M. S. Ali, "A dataset for classifying phrases and sentences into statements, questions, or exclamations based on sound pitch," Data in Brief, 2024.',
      pub1_link: "Read the publication",

      education_header: "Education",
      education_sub: "Academic background",
      edu1_uni: "University of Halabja",
      edu1_degree: "Bachelor of Computer Science",
      edu1_dates: "2021 — 2025",

      skills_header: "Skills & Languages",
      skills_sub: "What I bring to a team",
      skills_tech_header: "Tech Skills",
      skill_ml_ds: "Machine Learning & Dataset Development",
      skill_ai: "AI Development",
      skill_web: "Web Development",
      skill_swhw: "Software & Hardware Repair",
      skill_net: "Networking",
      skill_dm: "Digital Marketing",
      skill_troubleshoot: "Technical Troubleshooting",
      skill_proj_mgmt: "Project Management",
      skills_core_header: "Soft Skills",
      skill_leadership: "Leadership",
      skill_teamwork: "Teamwork",
      skill_pr: "Public Relations",
      skill_time_mgmt: "Time Management",
      skill_comm: "Communication",
      skill_crit_think: "Critical Thinking",
      skills_lang_header: "Languages",
      lang_kurdish: "Kurdish",
      lang_arabic: "Arabic",
      lang_english: "English",
      level_pro: "Professional",
      level_pro2: "Professional",
      level_good: "Good",

      contact_header: "Contact",
      contact_sub: "Let us build something together",
      contact_p1:
        "I am eager to apply my Computer Science knowledge and professional experience to new challenges. Please connect with me!",
      contact_phone: "Phone",
      contact_email: "Email",
      contact_location: "Address",
      contact_address: "Azadi St., Sulaimanyah City",
      contact_country: "Kurdistan Region, Iraq",
      contact_website: "Website",
      cta_title: "Have a project or a role in mind?",
      cta_text: "I usually reply within one working day.",
      cta_button: "Send an email",

      footer_tag: "Computer Science · AI & Web Development",
      footer_text: "© 2026 Meer Salam Ali. All rights reserved."
    },

    ku: {
      title_page: "میر سەلام عەلی — زانستی کۆمپیوتەر و ئای تی",
      brand_name: "میر سەلام عەلی",
      brand_sub: "زانستی کۆمپیوتەر · ئای تی",

      nav_profile: "پرۆفایل",
      nav_experience: "ئەزموون",
      nav_projects: "پڕۆژەکان",
      nav_publications: "بڵاوکراوەکان",
      nav_education: "خوێندن",
      nav_skills: "تواناکان",
      nav_contact: "پەیوەندی",

      hero_badge: "(بەشێوازی نیوەی کات) ئامادەم بۆ هەلی نوێ",
      hero_first: "میر سەلام",
      hero_last: "عەلی",
      hero_title: "زانستی کۆمپیوتەر · پەرەپێدەری AI و ئەپی وێب",
      hero_lead:
        "توێژەری بڵاوکراوە لە بواری داتاسێتی دەنگ و فێربوونی ئامێر، دروستکەری ئەپی وێبی پشتبەستوو بە داتابەیس، و پیشەگەرێکی بەئەزموون لە ئای تی و بەڕێوەبردندا.",
      hero_cta: "پەیوەندیم پێوە بکە",
      hero_cta2: "داگرتنی CV",
      hero_meta_loc: "سلێمانی، عێراق",
      hero_meta_edu: "بەکالۆریۆسی زانستی کۆمپیوتەر",
      hero_meta_pub: "نووسەری Data in Brief",

      about_header: "پرۆفایل",
      about_sub: "من کێم و چی دەکەم",
      about_p1:
        "دەرچووی زانستی کۆمپیوتەر، پەرەپێدەری AI، و توێژەرێکی بڵاوکراوە لەگەڵ ئەزموون لە فێربوونی ئامێر، داتاسێتی دەنگی، پەرەپێدانی ئەپی وێب، چاککردنەوەی کۆمپیوتەر، تۆڕسازی، و پاڵپشتی ئای تی.",
      about_p2:
        "توێژینەوەیەکی داتاسێتی بڵاوکردۆتەوە لە گۆڤاری Data in Brief کە تایبەتە بە پۆلێنکردنی ڕستە و دەستەواژەکان (لێدوان، پرسیار، هەستبڕکێ) لەسەر بنەمای ئاهەنگی دەنگ.",
      about_p3:
        "بەڕێوەبەری پێشووی هۆتێل لە گراندیڤا هۆتێل لەگەڵ زیاتر لە چوار ساڵ ئەزموون لە بەڕێوەبردنی کارەکان، سەرکردایەتی تیمەکان، و سەرپەرشتیکردنی هەموو سیستەمە کۆمپیوتەر و کارگێڕییەکان.",
      stat1_label: "ساڵ ئەزموون",
      stat2_label: "توێژینەوەی بڵاوکراوە",
      stat3_label: "ئەپی وێب",
      stat4_label: "زمان",

      experience_header: "ئەزموون",
      experience_sub: "لە کوێ کارم کردووە",
      job0_title: "پایۆنیر فارما — ئۆپەراتۆری بەرهەمهێنان",
      job0_sub: "بەشی جێنێریک — بەرهەمهێنان",
      job0_dates: "٠٤/٢٠٢٦ — ئێستا",
      job0_li1: "کارکردن وەک ئۆپەراتۆری بەرهەمهێنان لە بەشی بەرهەمهێنانی جێنێریک.",
      job1_title: "گراندیڤا هۆتێل — بەڕێوەبەری هۆتێل",
      job1_sub: "کارەکان و سیستەمە کارگێڕییەکان",
      job1_dates: "٢٠٢٢ — ٢٠٢٥",
      job1_li1: "بەڕێوەبردنی کارەکانی هۆتێل، پێشوازی، و سیستەمە کارگێڕییەکان.",
      job1_li2: "سەرپەرشتیکردنی هەموو سیستەمە کۆمپیوتەرەکان، سیستەمی POS، و داتابەیسەکانی هۆتێل.",
      job1_li3: "دابینکردنی سەرکردایەتی خزمەتگوزاری کڕیار و سەرپەرشتیکردنی تیم.",
      job1_li4: "باشترکردنی کارایی پڕۆسەی کار و ڕەزامەندی میوان.",
      proj1_title: "پاڵپشتی چارەسەرە تەکنیکی و دیجیتاڵییەکان",
      proj1_sub: "سەربەخۆ · پاڵپشتی ئای تی و تۆڕسازی",
      proj1_dates: "٢٠٢١ — ٢٠٢٥",
      proj1_li1:
        "چاککردنەوە و پاراستنی نەرمامێر و ڕەقامێری کۆمپیوتەر. دابینکردنی تۆڕسازی، ڕێکخستنی ئینتەرنێت، و چارەسەرکردنی کێشەکان.",
      proj1_li2:
        "هاوکاریکردن لە پڕۆژە تەکنیکی و چارەسەرە دیجیتاڵییەکان. دامەزراندنی سیستەمی کارپێکردن، ئامرازەکانی دژەڤایرۆس، و ڕەقامێری تۆڕ.",

      projects_header: "پڕۆژەکانی ئەپی وێب",
      projects_sub: "ئەو شتانەی دیزاین و دروستم کردوون",
      projA_title: "سیستەمی بەڕێوەبردنی هۆتێل",
      projA_sub: "ئەپی وێب",
      projA_li1:
        "پەرەپێدانی سیستەمێکی بەڕێوەبردنی هۆتێل لەسەر وێب بۆ بەڕێوەبردنی ژوور، حیجزکردن، کڕیاران، کارمەندان، و کارەکانی هۆتێل.",
      projA_li2: "دیزاینکردنی داشبۆردی کارگێڕی و تایبەتمەندی بەڕێوەبردنی پشتبەستوو بە داتابەیس.",
      projB_title: "سیستەمی بەڕێوەبردنی شوشتنی فەرش",
      projB_sub: "ئەپی وێب",
      projB_li1: "پەرەپێدانی ئەپێکی وێب بۆ بەڕێوەبردنی داواکاری شوشتنی فەرش و زانیاری کڕیاران.",
      projB_li2:
        "جێبەجێکردنی بەدواداچوونی داواکاری، تۆماری کڕیاران، بەڕێوەبردنی گەیاندن، نرخ، پارەدان، و چاودێری پڕۆسەی کار.",
      projC_title: "ژمێرەری ڕووبەری ھەندەسی",
      projC_sub: "ئەپی وێب",
      projC_li1:
        "پەرەپێدانی ئەپێکی وێب بۆ ژماردنی ڕووبەری ھەندەسی بۆ بەکارهێنانی تەلارسازی و ئەندازیاری.",
      projC_li2: "جێبەجێکردنی ژماردن بۆ شێوە ھەندەسییە جیاوازەکان بە ڕووکارێکی سادە و ئاسان.",

      publications_header: "بڵاوکراوەکان",
      publications_sub: "توێژینەوەی پێداچوونەوەکراو",
      pub1_journal: "گۆڤاری Data in Brief · ٢٠٢٤",
      pub1_title:
        "داتاسێتێک بۆ پۆلێنکردنی دەستەواژە و ڕستەکان بۆ لێدوان، پرسیار، یان هەستبڕکێ لەسەر بنەمای ئاهەنگی دەنگ",
      pub1_li1: "پەرەپێدان و بڵاوکردنەوەی داتاسێتێکی ناوازەی زمانەوانی و دەنگی.",
      pub1_li2: "تەرکیزکردن لەسەر ئاهەنگی قسەکردن، ناونیشانکردنی واتایی، و ئامادەکردنی فێربوونی ئامێر.",
      pub1_li3: "بەشداری لە توێژینەوەکانی NLP، شیکاری دەنگ، و پۆلێنکردنی AI.",
      pub1_citation_label: "سەرچاوە",
      pub1_citation:
        'M. S. Ali, "A dataset for classifying phrases and sentences into statements, questions, or exclamations based on sound pitch," Data in Brief, 2024.',
      pub1_link: "خوێندنەوەی توێژینەوەکە",

      education_header: "خوێندن",
      education_sub: "پێشینەی ئەکادیمی",
      edu1_uni: "زانکۆی هەڵەبجە",
      edu1_degree: "بەکالۆریۆسی زانستی کۆمپیوتەر",
      edu1_dates: "٢٠٢١ — ٢٠٢٥",

      skills_header: "تواناکان و زمانەکان",
      skills_sub: "ئەوەی دەیهێنمە ناو تیمەکە",
      skills_tech_header: "توانا تەکنیکییەکان",
      skill_ml_ds: "فێربوونی ئامێر و پەرەپێدانی داتاسێت",
      skill_ai: "پەرەپێدانی AI",
      skill_web: "پەرەپێدانی وێب",
      skill_swhw: "چاککردنەوەی نەرمامێر و ڕەقامێر",
      skill_net: "تۆڕسازی",
      skill_dm: "بازاڕکردنی دیجیتاڵی",
      skill_troubleshoot: "چارەسەرکردنی تەکنیکی",
      skill_proj_mgmt: "بەڕێوەبردنی پڕۆژە",
      skills_core_header: "توانا نەرمەکان",
      skill_leadership: "سەرکردایەتی",
      skill_teamwork: "کاری تیمی",
      skill_pr: "پەیوەندی گشتی",
      skill_time_mgmt: "بەڕێوەبردنی کات",
      skill_comm: "پەیوەندی",
      skill_crit_think: "بیرکردنەوەی ڕەخنەگرانە",
      skills_lang_header: "زمانەکان",
      lang_kurdish: "کوردی",
      lang_arabic: "عەرەبی",
      lang_english: "ئینگلیزی",
      level_pro: "پیشەیی",
      level_pro2: "پیشەیی",
      level_good: "باش",

      contact_header: "پەیوەندی",
      contact_sub: "با پێکەوە شتێک دروست بکەین",
      contact_p1:
        "من زۆر حەز دەکەم زانستی کۆمپیوتەر و ئەزموونی پیشەیی خۆم بۆ بەربەستە نوێیەکان بەکاربهێنم. تکایە پەیوەندیم پێوە بکە!",
      contact_phone: "تەلەفۆن",
      contact_email: "ئیمەیڵ",
      contact_location: "ناونیشان",
      contact_address: "شەقامی ئازادی، شاری سلێمانی",
      contact_country: "هەرێمی کوردستان، عێراق",
      contact_website: "ماڵپەڕ",
      cta_title: "پڕۆژە یان هەلێکی کارت لەبەرچاوە؟",
      cta_text: "بەزۆری لە ماوەی یەک ڕۆژی کاردا وەڵام دەدەمەوە.",
      cta_button: "ئیمەیڵ بنێرە",

      footer_tag: "زانستی کۆمپیوتەر · AI و پەرەپێدانی وێب",
      footer_text: "© ٢٠٢٦ میر سەلام عەلی. هەموو مافەکان پارێزراون."
    },

    ar: {
      title_page: "مير سلام علي — علوم الحاسوب وتكنولوجيا المعلومات",
      brand_name: "مير سلام علي",
      brand_sub: "علوم الحاسوب · تكنولوجيا المعلومات",

      nav_profile: "نبذة",
      nav_experience: "الخبرة",
      nav_projects: "المشاريع",
      nav_publications: "المنشورات",
      nav_education: "التعليم",
      nav_skills: "المهارات",
      nav_contact: "اتصل بي",

      hero_badge: "(بدوام جزئي)متاح لفرص عمل جديدة",
      hero_first: "مير سلام",
      hero_last: "علي",
      hero_title: "علوم الحاسوب · مطوّر ذكاء اصطناعي وتطبيقات ويب",
      hero_lead:
        "باحث منشور في مجموعات بيانات الكلام والتعلم الآلي، ومطوّر تطبيقات ويب تعتمد على قواعد البيانات، ومحترف خبير في تكنولوجيا المعلومات وإدارة العمليات.",
      hero_cta: "تواصل معي",
      hero_cta2: "تحميل السيرة الذاتية",
      hero_meta_loc: "السليمانية، العراق",
      hero_meta_edu: "بكالوريوس علوم الحاسوب",
      hero_meta_pub: "مؤلف في Data in Brief",

      about_header: "نبذة شخصية",
      about_sub: "من أنا وماذا أفعل",
      about_p1:
        "خريج علوم الحاسوب، ومطور للذكاء الاصطناعي، وباحث منشور ولديه خبرة في التعلم الآلي، ومجموعات البيانات الصوتية، وتطوير تطبيقات الويب، وإصلاح أجهزة الكمبيوتر، والشبكات، والدعم الفني لتكنولوجيا المعلومات.",
      about_p2:
        "نشر ورقة بيانات في مجلة Data in Brief تركز على تصنيف العبارات والجمل (البيانات، الأسئلة، التعجب) بناءً على نبرة الصوت.",
      about_p3:
        "مدير فندق سابق في فندق جرانديفا بخبرة تزيد عن أربع سنوات في إدارة العمليات، وقيادة الفرق، والإشراف على جميع أنظمة الكمبيوتر والأنظمة الإدارية.",
      stat1_label: "سنوات خبرة",
      stat2_label: "بحث منشور",
      stat3_label: "تطبيقات ويب",
      stat4_label: "لغات",

      experience_header: "الخبرة",
      experience_sub: "أماكن عملي",
      job0_title: "بايونير فارما — مشغّل إنتاج",
      job0_sub: "قسم الأدوية الجنيسة — الإنتاج",
      job0_dates: "٠٤/٢٠٢٦ — حتى الآن",
      job0_li1: "العمل كمشغّل إنتاج في قسم إنتاج الأدوية الجنيسة.",
      job1_title: "فندق جرانديفا — مدير فندق",
      job1_sub: "العمليات والأنظمة الإدارية",
      job1_dates: "٢٠٢٢ — ٢٠٢٥",
      job1_li1: "إدارة عمليات الفندق والاستقبال والأنظمة الإدارية.",
      job1_li2: "الإشراف على جميع أنظمة الكمبيوتر وأنظمة نقاط البيع وقواعد بيانات الفندق.",
      job1_li3: "توفير قيادة خدمة العملاء والإشراف على الفريق.",
      job1_li4: "تحسين كفاءة سير العمل ورضا النزلاء.",
      proj1_title: "الدعم الفني والحلول الرقمية",
      proj1_sub: "عمل حر · دعم تقني وشبكات",
      proj1_dates: "٢٠٢١ — ٢٠٢٥",
      proj1_li1:
        "إصلاح وصيانة برامج وأجهزة الكمبيوتر. توفير إعداد الشبكات وتكوين الإنترنت واستكشاف الأخطاء وإصلاحها.",
      proj1_li2:
        "المساعدة في المشاريع التقنية والحلول الرقمية. تثبيت أنظمة التشغيل وأدوات مكافحة الفيروسات وأجهزة الشبكة.",

      projects_header: "مشاريع تطبيقات الويب",
      projects_sub: "ما قمت بتصميمه وبنائه",
      projA_title: "نظام إدارة الفنادق",
      projA_sub: "تطبيق ويب",
      projA_li1:
        "تطوير نظام إدارة فنادق يعمل عبر الويب لإدارة الغرف والحجوزات والعملاء والموظفين وعمليات الفندق.",
      projA_li2: "تصميم لوحات تحكم إدارية وميزات إدارة تعتمد على قواعد البيانات.",
      projB_title: "نظام إدارة غسيل السجاد",
      projB_sub: "تطبيق ويب",
      projB_li1: "تطوير تطبيق ويب لإدارة طلبات غسيل السجاد ومعلومات العملاء.",
      projB_li2:
        "تنفيذ تتبع الطلبات وسجلات العملاء وإدارة التوصيل والتسعير والمدفوعات ومراقبة سير العمل.",
      projC_title: "حاسبة المساحات الهندسية",
      projC_sub: "تطبيق ويب",
      projC_li1: "تطوير تطبيق ويب لحساب المساحات الهندسية للتطبيقات المعمارية والهندسية.",
      projC_li2: "تنفيذ حسابات لأشكال هندسية مختلفة بواجهة بسيطة وسهلة الاستخدام.",

      publications_header: "المنشورات",
      publications_sub: "أبحاث محكّمة",
      pub1_journal: "مجلة Data in Brief · ٢٠٢٤",
      pub1_title:
        "مجموعة بيانات لتصنيف العبارات والجمل إلى بيانات أو أسئلة أو تعجب بناءً على نبرة الصوت",
      pub1_li1: "تطوير ونشر مجموعة بيانات لغوية وصوتية فريدة من نوعها.",
      pub1_li2: "التركيز على نغمة الكلام، والتسمية الدلالية، والتحضير للتعلم الآلي.",
      pub1_li3: "المساهمة في البحث في معالجة اللغات الطبيعية وتحليل الصوت وتصنيف الذكاء الاصطناعي.",
      pub1_citation_label: "الاقتباس",
      pub1_citation:
        'M. S. Ali, "A dataset for classifying phrases and sentences into statements, questions, or exclamations based on sound pitch," Data in Brief, 2024.',
      pub1_link: "قراءة البحث",

      education_header: "التعليم",
      education_sub: "الخلفية الأكاديمية",
      edu1_uni: "جامعة حلبجة",
      edu1_degree: "بكالوريوس علوم الحاسوب",
      edu1_dates: "٢٠٢١ — ٢٠٢٥",

      skills_header: "المهارات واللغات",
      skills_sub: "ما أقدمه للفريق",
      skills_tech_header: "المهارات التقنية",
      skill_ml_ds: "التعلم الآلي وتطوير مجموعات البيانات",
      skill_ai: "تطوير الذكاء الاصطناعي",
      skill_web: "تطوير الويب",
      skill_swhw: "إصلاح البرامج والأجهزة",
      skill_net: "الشبكات",
      skill_dm: "التسويق الرقمي",
      skill_troubleshoot: "استكشاف الأخطاء التقنية وإصلاحها",
      skill_proj_mgmt: "إدارة المشاريع",
      skills_core_header: "المهارات الشخصية",
      skill_leadership: "القيادة",
      skill_teamwork: "العمل الجماعي",
      skill_pr: "العلاقات العامة",
      skill_time_mgmt: "إدارة الوقت",
      skill_comm: "التواصل",
      skill_crit_think: "التفكير النقدي",
      skills_lang_header: "اللغات",
      lang_kurdish: "الكردية",
      lang_arabic: "العربية",
      lang_english: "الإنجليزية",
      level_pro: "احترافي",
      level_pro2: "احترافي",
      level_good: "جيد",

      contact_header: "اتصل بي",
      contact_sub: "لنبنِ شيئاً معاً",
      contact_p1:
        "أنا حريص على تطبيق معرفتي في علوم الحاسوب وخبرتي المهنية لمواجهة التحديات الجديدة. يرجى التواصل معي!",
      contact_phone: "الهاتف",
      contact_email: "البريد الإلكتروني",
      contact_location: "العنوان",
      contact_address: "شارع آزادي، مدينة السليمانية",
      contact_country: "إقليم كردستان، العراق",
      contact_website: "الموقع الإلكتروني",
      cta_title: "هل لديك مشروع أو وظيفة في بالك؟",
      cta_text: "عادةً ما أرد خلال يوم عمل واحد.",
      cta_button: "أرسل بريداً إلكترونياً",

      footer_tag: "علوم الحاسوب · الذكاء الاصطناعي وتطوير الويب",
      footer_text: "© ٢٠٢٦ مير سلام علي. جميع الحقوق محفوظة."
    }
  };

  const RTL_LANGS = ["ar", "ku"];

  /* ------------------------------------------------------
     2. Theme (light / dark)
     ------------------------------------------------------ */
  const root = document.documentElement;

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    const icon = document.querySelector("#darkModeToggle i");
    if (icon) {
      icon.className = theme === "dark" ? "fa-solid fa-sun" : "fa-solid fa-moon";
    }
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", theme === "dark" ? "#070c18" : "#0b1b3a");
  }

  function initTheme() {
    let stored = null;
    try {
      stored = localStorage.getItem("theme");
    } catch (e) {
      /* storage unavailable */
    }
    const prefersDark =
      window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    applyTheme(stored || (prefersDark ? "dark" : "light"));

    const toggle = document.getElementById("darkModeToggle");
    if (!toggle) return;

    toggle.addEventListener("click", function () {
      const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      applyTheme(next);
      try {
        localStorage.setItem("theme", next);
      } catch (e) {
        /* ignore */
      }
    });
  }

  /* ------------------------------------------------------
     3. Language switching
     ------------------------------------------------------ */
  function setLanguage(lang) {
    const dict = translations[lang] || translations.en;

    document.querySelectorAll("[data-key]").forEach(function (el) {
      const value = dict[el.getAttribute("data-key")];
      if (typeof value !== "string") return;

      if (el.tagName === "TITLE") {
        document.title = value;
      } else {
        el.textContent = value;
      }
    });

    const isRtl = RTL_LANGS.indexOf(lang) !== -1;
    root.setAttribute("dir", isRtl ? "rtl" : "ltr");
    root.setAttribute("lang", lang === "ku" ? "ckb" : lang);

    document.querySelectorAll(".lang-button").forEach(function (btn) {
      btn.classList.toggle("active", btn.id === "lang-" + lang);
    });

    try {
      localStorage.setItem("lang", lang);
    } catch (e) {
      /* ignore */
    }
  }

  function initLanguage() {
    document.querySelectorAll(".lang-button").forEach(function (btn) {
      btn.addEventListener("click", function () {
        setLanguage(btn.id.replace("lang-", ""));
      });
    });

    let stored = null;
    try {
      stored = localStorage.getItem("lang");
    } catch (e) {
      /* ignore */
    }
    setLanguage(Object.prototype.hasOwnProperty.call(translations, stored) ? stored : "en");
  }

  /* ------------------------------------------------------
     4. Navigation: sticky state, mobile menu, active link
     ------------------------------------------------------ */
  function initNavigation() {
    const nav = document.getElementById("siteNav");
    const links = document.getElementById("navLinks");
    const menuBtn = document.getElementById("menuToggle");

    if (menuBtn && links) {
      menuBtn.addEventListener("click", function () {
        const open = links.classList.toggle("open");
        menuBtn.setAttribute("aria-expanded", String(open));
        menuBtn.innerHTML = open
          ? '<i class="fa-solid fa-xmark"></i>'
          : '<i class="fa-solid fa-bars"></i>';
      });

      links.querySelectorAll("a").forEach(function (a) {
        a.addEventListener("click", function () {
          links.classList.remove("open");
          menuBtn.setAttribute("aria-expanded", "false");
          menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
        });
      });
    }

    // Highlight the section currently in view
    const navAnchors = Array.prototype.slice.call(
      document.querySelectorAll(".nav-links a[href^='#']")
    );
    const sections = navAnchors
      .map(function (a) {
        return document.querySelector(a.getAttribute("href"));
      })
      .filter(Boolean);

    if ("IntersectionObserver" in window && sections.length) {
      const spy = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (!entry.isIntersecting) return;
            navAnchors.forEach(function (a) {
              a.classList.toggle(
                "active",
                a.getAttribute("href") === "#" + entry.target.id
              );
            });
          });
        },
        { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
      );
      sections.forEach(function (s) {
        spy.observe(s);
      });
    }

    // Sticky background + scroll progress + back-to-top
    const bar = document.getElementById("scrollBar");
    const topBtn = document.getElementById("backToTop");

    function onScroll() {
      const y = window.scrollY || window.pageYOffset;

      if (nav) nav.classList.toggle("is-stuck", y > 40);
      if (topBtn) topBtn.classList.toggle("show", y > 600);

      if (bar) {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        bar.style.width = (max > 0 ? (y / max) * 100 : 0) + "%";
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    if (topBtn) {
      topBtn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }
  }

  /* ------------------------------------------------------
     5. Reveal on scroll, counters and language meters
     ------------------------------------------------------ */
  function countUp(el) {
    const target = parseInt(el.getAttribute("data-target"), 10) || 0;
    const duration = 1100;
    const start = performance.now();

    function step(now) {
      const p = Math.min((now - start) / duration, 1);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased);
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  function initScrollEffects() {
    const items = document.querySelectorAll(".reveal");

    if (!("IntersectionObserver" in window)) {
      items.forEach(function (el) {
        el.classList.add("visible");
      });
      document.querySelectorAll(".meter").forEach(function (m) {
        m.classList.add("is-filled");
      });
      document.querySelectorAll(".counter").forEach(countUp);
      return;
    }

    const observer = new IntersectionObserver(
      function (entries, obs) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          el.classList.add("visible");

          el.querySelectorAll(".counter").forEach(function (c, i) {
            setTimeout(function () {
              countUp(c);
            }, i * 120);
          });

          el.querySelectorAll(".meter").forEach(function (m, i) {
            setTimeout(function () {
              m.classList.add("is-filled");
            }, 220 + i * 160);
          });

          obs.unobserve(el);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );

    items.forEach(function (el, i) {
      el.style.transitionDelay = (i % 4) * 70 + "ms";
      observer.observe(el);
    });
  }

  /* ------------------------------------------------------
     6. Boot
     ------------------------------------------------------ */
  document.addEventListener("DOMContentLoaded", function () {
    initTheme();
    initLanguage();
    initNavigation();
    initScrollEffects();
  });
})();
