document.addEventListener('DOMContentLoaded', () => {
    // -----------------------------------------------------
    // Dark Mode Toggle Logic
    // -----------------------------------------------------
    const toggle = document.getElementById('darkModeToggle');
    const body = document.body;

    // A defensive check to ensure the toggle button exists before using it.
    if (toggle) {
        const currentMode = localStorage.getItem('theme');
        
        // 1. Check for stored preference or system preference
        // This is used for initial loading when no localStorage preference is set.
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

        // Initial Load: Set theme based on localStorage or system preference
        if (currentMode === 'dark') {
            body.classList.add('dark-mode');
            toggle.innerHTML = '<i class="fas fa-sun"></i>'; // Display sun icon for dark mode
        } else if (currentMode === 'light') {
            body.classList.remove('dark-mode');
            toggle.innerHTML = '<i class="fas fa-moon"></i>'; // Display moon icon for light mode
        } else if (prefersDark) {
            // If no preference stored, and system prefers dark
            body.classList.add('dark-mode'); // Optional: Add class if CSS uses it
            toggle.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            // Default to light (or system is light)
            body.classList.remove('dark-mode');
            toggle.innerHTML = '<i class="fas fa-moon"></i>';
        }

        // 2. Click Handler: Toggle the mode on click
        toggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');

            if (body.classList.contains('dark-mode')) {
                localStorage.setItem('theme', 'dark');
                toggle.innerHTML = '<i class="fas fa-sun"></i>';
            } else {
                localStorage.setItem('theme', 'light');
                toggle.innerHTML = '<i class="fas fa-moon"></i>';
            }
        });
    }
    
    // -----------------------------------------------------
    // Language Switcher Logic (Internationalization/i18n)
    // -----------------------------------------------------
    
    // Define the translations data structure
    // NOTE: This structure MUST contain all the data-key attributes from your HTML.
    const translations = {
        'en': {
            'title_page': 'Meer Salam Ali - Computer Science',
            'nav_profile': 'Profile',
            'nav_experience': 'Experience',
            'nav_publications': 'Publications',
            'nav_education': 'Education',
            'nav_skills': 'Skills',
            'nav_contact': 'Contact',
            'hero_title': 'Computer Science - IT',
            'hero_cta': 'Get In Touch',
            'about_header': '👤 PROFILE',
            'about_p1': 'Computer Science graduate, AI developer, and published researcher with experience in machine learning, speech-based datasets, computer repair, networking, and IT support.',
            'about_p2': 'Published a dataset paper in Data in Brief journal focused on classifying phrases and sentences (statements, questions, exclamations) based on sound pitch.',
            'about_p3': 'Former Hotel Manager at Grandiva Hotel with over four years of experience in managing operations, leading teams, and overseeing all computer and administrative systems.',
            'experience_header': '💼 Experience',
            'job1_title': 'Grandiva Hotel - Hotel Manager',
            'job1_dates': '2022 - 2025',
            'job1_li1': 'Managed hotel operations, reception, and administrative systems.',
            'job1_li2': 'Oversaw all computer systems, POS systems, and hotel databases.',
            'job1_li3': 'Provided customer service leadership and team supervision.',
            'job1_li4': 'Improved workflow efficiency and guest satisfaction.',
            'projects_header': '🛠️ Projects',
            'proj1_title': 'Technical & Digital Solutions Support',
            'proj1_dates': '2021 - 2025',
            'proj1_li1': 'Repaired and maintained computer software & hardware. Provided networking setup, internet configuration, and troubleshooting.',
            'proj1_li2': 'Assisted with technical projects and digital solutions. Installed operating systems, antivirus tools, and network hardware.',
            'publications_header': '📚 PUBLICATIONS',
            'pub1_title': 'A Dataset for Classifying Phrases and Sentences Into Statements, Questions, or Exclamations Based on Sound Pitch',
            'pub1_li1': 'Developed and published a unique linguistic and audio-based dataset.',
            'pub1_li2': 'Focused on speech intonation, semantic labeling, and machine learning preparation.',
            'pub1_li3': 'Contributed to research in NLP, sound analysis, and AI classification.',
            'pub1_citation': '**Citation:** M. S. Ali, "A dataset for classifying phrases and sentences into statements, questions, or exclamations based on sound pitch," Data in Brief, 2024.',
            'education_header': '🎓 EDUCATION',
            // --- UPDATED KEY ---
            'edu1_degree': 'Computer Science',
            'edu1_dates': 'Bachelor of Computer Science 2021 - 2025',
            // -------------------
            'edu1_uni': 'University Of Halabja',
            'skills_header': '🔧 SKILLS & LANGUAGES',
            'skills_core_header': 'SOFT SKILLS',
            'skill_leadership': 'Leadership',
            'skill_teamwork': 'Teamwork',
            'skill_pr': 'Public Relations',
            'skill_time_mgmt': 'Time Management',
            'skill_comm': 'Communication',
            'skill_crit_think': 'Critical Thinking',
            'skills_tech_header': 'TECH SKILLS',
            'skill_ml_ds': 'Machine Learning & Dataset Development',
            'skill_swhw': 'Software & Hardware Repair',
            'skill_net': 'Networking',
            'skill_dm': 'Digital Marketing',
            'skill_ai': 'AI Development',
            'skill_troubleshoot': 'Technical Troubleshooting',
            'skill_proj_mgmt': 'Project Management',
            'skills_lang_header': 'LANGUAGES',
            'lang_kurdish': 'Kurdish',
            'lang_arabic': 'Arabic',
            'lang_english': 'English',
            'contact_header': '✉️ CONTACT',
            'contact_p1': 'I am eager to apply my Computer Science knowledge and professional experience to new challenges. Please connect with me!',
            'contact_phone': 'Phone:',
            'contact_email': 'Email Address:',
            'contact_location': 'Address:',
            'contact_website': 'Website:',
            'footer_text': '© 2025 Meer Salam Ali. Built with HTML & CSS.',
        },
        'ku': { // Kurdish translations (Placeholder/Example)
            'title_page': 'میر سەلام عەلی - زانستی کۆمپیوتەر',
            'nav_profile': 'پرۆفایل',
            'nav_experience': 'ئەزموون',
            'nav_publications': 'بڵاوکراوەکان',
            'nav_education': 'خوێندن',
            'nav_skills': 'تواناکان',
            'nav_contact': 'پەیوەندی',
            'hero_title': 'زانستی کۆمپیوتەر - ئای تی',
            'hero_cta': 'پەیوەندی بکە',
            'about_header': '👤 پرۆفایل',
            'about_p1': 'دەرچووی زانستی کۆمپیوتەر، پەرەپێدەری AI، و توێژەرێکی بڵاوکراوە لەگەڵ ئەزموون لە فێربوونی ئامێر، داتاسێتی دەنگی، چاککردنەوەی کۆمپیوتەر، تۆڕسازی، و پاڵپشتی ئای تی.',
            'about_p2': 'توێژینەوەیەکی داتاسێتی بڵاوکردۆتەوە لە گۆڤاری Data in Brief کە تایبەتە بە پۆلێنکردنی ڕستە و دەستەواژەکان (لێدوان، پرسیار، هەستبڕکێ) لەسەر بنەمای ئاهەنگی دەنگ.',
            'about_p3': 'بەڕێوەبەری پێشووی هۆتێل لە گراندیڤا هۆتێل لەگەڵ زیاتر لە چوار ساڵ ئەزموون لە بەڕێوەبردنی کارەکان، سەرکردایەتی تیمەکان، و سەرپەرشتیکردنی هەموو سیستەمە کۆمپیوتەر و کارگێڕییەکان.',
            'experience_header': '💼 ئەزموون',
            'job1_title': 'گراندیڤا هۆتێل - بەڕێوەبەری هۆتێل',
            'job1_dates': '2022 - 2025',
            'job1_li1': 'بەڕێوەبردنی کارەکانی هۆتێل، پێشوازی، و سیستەمە کارگێڕییەکان.',
            'job1_li2': 'سەرپەرشتیکردنی هەموو سیستەمە کۆمپیوتەرەکان، سیستەمی POS، و داتابەیسەکانی هۆتێل.',
            'job1_li3': 'دابینکردنی سەرکردایەتی خزمەتگوزاری کڕیار و سەرپەرشتیکردنی تیم.',
            'job1_li4': 'باشترکردنی کارایی پڕۆسەی کار و ڕەزامەندی میوان.',
            'projects_header': '🛠️ پڕۆژەکان',
            'proj1_title': 'پاڵپشتی چارەسەرە تەکنیکی و دیجیتاڵییەکان',
            'proj1_dates': '2021 - 2025',
            'proj1_li1': 'چاککردنەوە و پاراستنی نەرمامێر و ڕەقامێری کۆمپیوتەر. دابینکردنی تۆڕسازی، ڕێکخستنی ئینتەرنێت، و چارەسەرکردنی کێشەکان.',
            'proj1_li2': 'هاوکاریکردن لە پڕۆژە تەکنیکی و چارەسەرە دیجیتاڵییەکان. دامەزراندنی سیستەمی کارپێکردن، ئامرازەکانی دژەڤایرۆس، و ڕەقامێری تۆڕ.',
            'publications_header': '📚 بڵاوکراوەکان',
            'pub1_title': 'داتاسێتێک بۆ پۆلێنکردنی دەستەواژە و ڕستەکان بۆ لێدوان، پرسیار، یان هەستبڕکێ لەسەر بنەمای ئاهەنگی دەنگ',
            'pub1_li1': 'پەرەپێدان و بڵاوکردنەوەی داتاسێتێکی ناوازەی زمانەوانی و دەنگی.',
            'pub1_li2': 'تەرکیزکردن لەسەر ئاهەنگی قسەکردن، ناونیشانکردنی واتایی، و ئامادەکردنی فێربوونی ئامێر.',
            'pub1_li3': 'بەشداری لە توێژینەوەکانی NLP، شیکاری دەنگ، و پۆلێنکردنی AI.',
            'pub1_citation': '**سەرچاوە:** M. S. Ali, "A dataset for classifying phrases and sentences into statements, questions, or exclamations based on sound pitch," Data in Brief, 2024.',
            'education_header': '🎓 خوێندن',
            // --- UPDATED KEY ---
            'edu1_degree': 'زانستی کۆمپیوتەر',
            'edu1_dates': 'بەشی زانستی کۆمپیوتەر 2021 - 2025',
            // -------------------
            'edu1_uni': 'زانکۆی هەڵەبجە',
            'skills_header': '🔧 تواناکان و زمانەکان',
            'skills_core_header': 'توانا نەرمەکان',
            'skill_leadership': 'سەرکردایەتی',
            'skill_teamwork': 'کاری تیمی',
            'skill_pr': 'پەیوەندی گشتی',
            'skill_time_mgmt': 'بەڕێوەبردنی کات',
            'skill_comm': 'پەیوەندی',
            'skill_crit_think': 'بیرکردنەوەی ڕەخنەگرانە',
            'skills_tech_header': 'توانا تەکنیکییەکان',
            'skill_ml_ds': 'فێربوونی ئامێر و پەرەپێدانی داتاسێت',
            'skill_swhw': 'چاککردنەوەی نەرمامێر و ڕەقامێر',
            'skill_net': 'تۆڕسازی',
            'skill_dm': 'بازاڕکردنی دیجیتاڵی',
            'skill_ai': 'پەرەپێدانی AI',
            'skill_troubleshoot': 'چارەسەرکردنی تەکنیکی',
            'skill_proj_mgmt': 'بەڕێوەبردنی پڕۆژە',
            'skills_lang_header': 'زمانەکان',
            'lang_kurdish': 'کوردی',
            'lang_arabic': 'عەرەبی',
            'lang_english': 'ئینگلیزی',
            'contact_header': '✉️ پەیوەندی',
            'contact_p1': 'من زۆر حەز دەکەم زانستی کۆمپیوتەر و ئەزموونی پیشەیی خۆم بۆ بەربەستە نوێیەکان بەکاربهێنم. تکایە پەیوەندیم پێوە بکە!',
            'contact_phone': 'ژمارەی تەلەفۆن:',
            'contact_email': 'ناونیشانی ئیمەیڵ:',
            'contact_location': 'ناونیشان:',
            'contact_website': 'ماڵپەڕ:',
            'footer_text': '© 2025 میر سەلام عەلی. بە HTML و CSS دروست کراوە.',
        },
        'ar': { // Arabic translations (Placeholder/Example)
            'title_page': 'مير سلام علي - علوم الحاسوب',
            'nav_profile': 'السيرة الذاتية',
            'nav_experience': 'الخبرة',
            'nav_publications': 'المنشورات',
            'nav_education': 'التعليم',
            'nav_skills': 'المهارات',
            'nav_contact': 'اتصل بي',
            'hero_title': 'علوم الحاسوب - تكنولوجيا المعلومات',
            'hero_cta': 'تواصل الآن',
            'about_header': '👤 نبذة شخصية',
            'about_p1': 'خريج علوم الحاسوب، ومطور للذكاء الاصطناعي، وباحث منشور ولديه خبرة في التعلم الآلي، ومجموعات البيانات الصوتية، وإصلاح أجهزة الكمبيوتر، والشبكات، والدعم الفني لتكنولوجيا المعلومات.',
            'about_p2': 'نشر ورقة بيانات في مجلة Data in Brief تركز على تصنيف العبارات والجمل (البيانات، الأسئلة، التعجب) بناءً على نبرة الصوت.',
            'about_p3': 'مدير فندق سابق في فندق جرانديفا بخبرة تزيد عن أربع سنوات في إدارة العمليات، وقيادة الفرق، والإشراف على جميع أنظمة الكمبيوتر والأنظمة الإدارية.',
            'experience_header': '💼 الخبرة',
            'job1_title': 'فندق جرانديفا - مدير فندق',
            'job1_dates': '2022 - 2025',
            'job1_li1': 'إدارة عمليات الفندق والاستقبال والأنظمة الإدارية.',
            'job1_li2': 'الإشراف على جميع أنظمة الكمبيوتر وأنظمة نقاط البيع وقواعد بيانات الفندق.',
            'job1_li3': 'توفير قيادة خدمة العملاء وإشراف الفريق.',
            'job1_li4': 'تحسين كفاءة سير العمل ورضا النزلاء.',
            'projects_header': '🛠️ المشاريع',
            'proj1_title': 'الدعم الفني والحلول الرقمية',
            'proj1_dates': '2021 - 2025',
            'proj1_li1': 'إصلاح وصيانة برامج وأجهزة الكمبيوتر. توفير إعداد الشبكات وتكوين الإنترنت واستكشاف الأخطاء وإصلاحها.',
            'proj1_li2': 'المساعدة في المشاريع التقنية والحلول الرقمية. تثبيت أنظمة التشغيل وأدوات مكافحة الفيروسات وأجهزة الشبكة.',
            'publications_header': '📚 المنشورات',
            'pub1_title': 'مجموعة بيانات لتصنيف العبارات والجمل إلى بيانات أو أسئلة أو تعجب بناءً على نبرة الصوت',
            'pub1_li1': 'تطوير ونشر مجموعة بيانات لغوية وصوتية فريدة من نوعها.',
            'pub1_li2': 'التركيز على نغمة الكلام، والتسمية الدلالية، والتحضير للتعلم الآلي.',
            'pub1_li3': 'المساهمة في البحث في معالجة اللغات الطبيعية وتحليل الصوت وتصنيف الذكاء الاصطناعي.',
            'pub1_citation': '**اقتباس:** م. س. علي، "مجموعة بيانات لتصنيف العبارات والجمل إلى بيانات أو أسئلة أو تعجب بناءً على نبرة الصوت،" Data in Brief، 2024.',
            'education_header': '🎓 التعليم',
            // --- UPDATED KEY ---
            'edu1_degree': 'علوم الحاسوب',
            'edu1_dates': 'بكالوريوس علوم الحاسوب 2021 - 2025',
            // -------------------
            'edu1_uni': 'جامعة حلبجة',
            'skills_header': '🔧 المهارات واللغات',
            'skills_core_header': 'المهارات الشخصية',
            'skill_leadership': 'القيادة',
            'skill_teamwork': 'العمل الجماعي',
            'skill_pr': 'العلاقات العامة',
            'skill_time_mgmt': 'إدارة الوقت',
            'skill_comm': 'التواصل',
            'skill_crit_think': 'التفكير النقدي',
            'skills_tech_header': 'المهارات التقنية',
            'skill_ml_ds': 'التعلم الآلي وتطوير مجموعة البيانات',
            'skill_swhw': 'إصلاح البرامج والأجهزة',
            'skill_net': 'الشبكات',
            'skill_dm': 'التسويق الرقمي',
            'skill_ai': 'تطوير الذكاء الاصطناعي',
            'skill_troubleshoot': 'استكشاف الأخطاء وإصلاحها فنيًا',
            'skill_proj_mgmt': 'إدارة المشاريع',
            'skills_lang_header': 'اللغات',
            'lang_kurdish': 'الكردية',
            'lang_arabic': 'العربية',
            'lang_english': 'الإنجليزية',
            'contact_header': '✉️ اتصل بي',
            'contact_p1': 'أنا حريص على تطبيق معرفتي في علوم الحاسوب وخبرتي المهنية لمواجهة التحديات الجديدة. يرجى التواصل معي!',
            'contact_phone': 'رقم الهاتف:',
            'contact_email': 'البريد الإلكتروني:',
            'contact_location': 'العنوان:',
            'contact_website': 'الموقع الإلكتروني:',
            'footer_text': '© 2025 مير سلام علي. تم الإنشاء باستخدام HTML و CSS.',
        }
    };

    // Function to apply translations
    function setLanguage(lang) {
        // 1. Update text content for all data-key elements
        document.querySelectorAll('[data-key]').forEach(element => {
            const key = element.getAttribute('data-key');
            if (translations[lang] && translations[lang][key]) {
                // Check if the element contains Font Awesome icons to preserve them
                if (element.querySelector('.fas') || element.querySelector('.fa')) {
                     // Preserve icon, replace only text nodes
                    const icon = element.querySelector('.fas, .fa');
                    element.textContent = translations[lang][key];
                    if (icon) {
                        element.prepend(icon);
                    }
                } else if (element.tagName === 'A' && key.startsWith('nav_')) {
                    // For navigation links, only update the text, preserve the href
                    element.textContent = translations[lang][key];
                } else if (element.tagName === 'TITLE') {
                    // Handle the title tag separately
                    document.title = translations[lang][key];
                } else if (key === 'pub1_citation') {
                    // For citation, handle the anchor tag separately
                    const anchor = element.querySelector('a');
                    element.innerHTML = translations[lang][key];
                    if (anchor) {
                         // Re-insert the original link to prevent breaking the DOI link
                         element.appendChild(anchor);
                    }
                } else {
                    element.textContent = translations[lang][key];
                }
            }
        });
        
        // 2. Set active class on language buttons
        document.querySelectorAll('.lang-button').forEach(button => {
            if (button.id.includes('lang-')) {
                button.classList.remove('active');
                if (button.id === `lang-${lang}`) {
                    button.classList.add('active');
                }
            }
        });

        // 3. Store the preference
        localStorage.setItem('lang', lang);
    }
    
    // 4. Attach event listeners to language buttons
    document.querySelectorAll('.lang-button').forEach(button => {
        if (button.id.includes('lang-')) {
            button.addEventListener('click', () => {
                const lang = button.id.replace('lang-', '');
                setLanguage(lang);
                
                // Add direction attribute for right-to-left languages (Arabic)
                if (lang === 'ar' || lang === 'ku') { // Assuming Kurdish is also RTL or handled similarly
                    document.documentElement.setAttribute('dir', 'rtl');
                } else {
                    document.documentElement.setAttribute('dir', 'ltr');
                }
            });
        }
    });

    // 5. Initial language load
    const storedLang = localStorage.getItem('lang') || 'en'; // Default to English
    setLanguage(storedLang);
    
    // Set initial dir attribute based on stored language
    if (storedLang === 'ar' || storedLang === 'ku') {
        document.documentElement.setAttribute('dir', 'rtl');
    } else {
        document.documentElement.setAttribute('dir', 'ltr');
    }
});
