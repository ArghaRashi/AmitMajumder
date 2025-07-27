document.addEventListener('DOMContentLoaded', () => {

    const translations = {
        en: {
            // Navigation
            nav_home: 'Home',
            nav_services: 'Services',
            nav_videos: 'Videos',
            nav_contact: 'Contact',
            nav_about: 'About Me',
            // Services Dropdown
            service_visa: 'Bangladeshi Visa',
            service_marriage: 'India Bangladesh Marriage',
            service_travel: 'Travel With Me',
            // About Me Section
            about_title: 'About Me',
            about_p1: "Hi, I'm Amit Majumder — a Bengali YouTuber, storyteller, and explorer based in Kolkata, India. Through my lens, I bring you closer to the world — one journey, one culture, and one story at a time.",
            about_p2: "I create engaging content around travel, lifestyle, geopolitics, and sometimes food and shopping experiences. Whether it's the vibrant lanes of Dhaka, the hidden gems of rural Bengal, or stories that connect India with the rest of the world — I strive to share authentic moments and thoughtful insights.",
            about_p3: "My goal is simple: to explore, to connect, and to inspire. I believe every place has a story, and every person has a voice that deserves to be heard. Through my videos and writings, I hope to create a bridge across cultures, emotions, and everyday lives.",
            about_p4: "Stay connected and join me in this journey — because stories are best when shared.",
            // Contact Section
            contact_title: 'Contact Information',
            contact_intro: 'For inquiries, please use the appropriate channel below. This helps me respond to you as efficiently as possible.',
            contact_email_h3: 'Email',
            contact_email_p: 'For all service requests, business collaborations, and detailed inquiries, email is the best way to reach me.',
            contact_phone_h3: 'Phone & WhatsApp',
            contact_phone_p: 'For urgent matters or quick questions, feel free to call or send a message on WhatsApp.',
            // Footer
            footer_text: '&copy; 2024 Amit Majumder. All Rights Reserved.'
        },
        bn: {
            // Navigation
            nav_home: 'হোম',
            nav_services: 'পরিষেবা',
            nav_videos: 'ভিডিও',
            nav_contact: 'যোগাযোগ',
            nav_about: 'আমার সম্পর্কে',
            // Services Dropdown
            service_visa: 'বাংলাদেশী ভিসা',
            service_marriage: 'ভারত বাংলাদেশ বিবাহ',
            service_travel: 'আমার সাথে ভ্রমণ',
            // About Me Section
            about_title: 'আমার সম্পর্কে',
            about_p1: 'নমস্কার, আমি অমিত মজুমদার — কলকাতা-ভিত্তিক একজন বাঙালি ইউটিউবার, গল্পকার এবং পরিব্রাজক। আমার ক্যামেরার মাধ্যমে, আমি আপনাদেরকে বিশ্বের আরও কাছে নিয়ে আসি — এক একটি ভ্রমণ, সংস্কৃতি এবং গল্পের মধ্যে দিয়ে।',
            about_p2: 'আমি ভ্রমণ, জীবনযাত্রা, ভূ-রাজনীতি এবং কখনও কখনও খাবার ও কেনাকাটার অভিজ্ঞতা নিয়ে আকর্ষক কন্টেন্ট তৈরি করি। সেটা ঢাকার প্রাণবন্ত গলি হোক, গ্রাম বাংলার লুকানো রত্ন, বা ভারতকে বিশ্বের সাথে সংযুক্ত করার গল্প — আমি সর্বদা খাঁটি মুহূর্ত এবং গভীর অন্তর্দৃষ্টি তুলে ধরার চেষ্টা করি।',
            about_p3: 'আমার লক্ষ্য সহজ: অন্বেষণ করা, সংযোগ স্থাপন করা এবং অনুপ্রাণিত করা। আমি বিশ্বাস করি প্রতিটি জায়গার একটি গল্প আছে এবং প্রতিটি মানুষের একটি কণ্ঠস্বর আছে যা শোনার যোগ্য। আমার ভিডিও এবং লেখার মাধ্যমে, আমি বিভিন্ন সংস্কৃতি, অনুভূতি এবং দৈনন্দিন জীবনের মধ্যে একটি সেতু তৈরি করার আশা রাখি।',
            about_p4: 'এই যাত্রায় আমার সাথে সংযুক্ত থাকুন — কারণ গল্প ভাগ করে নিলেই তা আরও সুন্দর হয়ে ওঠে।',
            // Contact Section
            contact_title: 'যোগাযোগের তথ্য',
            contact_intro: 'অনুসন্ধানের জন্য, অনুগ্রহ করে নীচের উপযুক্ত চ্যানেলটি ব্যবহার করুন। এটি আমাকে যত তাড়াতাড়ি সম্ভব আপনাকে উত্তর দিতে সহায়তা করে।',
            contact_email_h3: 'ইমেল',
            contact_email_p: 'সমস্ত পরিষেবা অনুরোধ, ব্যবসায়িক সহযোগিতা এবং বিস্তারিত অনুসন্ধানের জন্য, আমার সাথে যোগাযোগ করার সেরা উপায় হল ইমেল।',
            contact_phone_h3: 'ফোন এবং হোয়াটসঅ্যাপ',
            contact_phone_p: 'জরুরী বিষয় বা দ্রুত প্রশ্নের জন্য, আপনি নির্দ্বিধায় কল করতে বা হোয়াটসঅ্যাপে একটি বার্তা পাঠাতে পারেন।',
            // Footer
            footer_text: '&copy; ২০২৪ অমিত মজুমদার। সর্বস্বত্ব সংরক্ষিত।'
        }
    };

    const langSwitcherBtn = document.getElementById('lang-switcher');
    let currentLang = 'en'; 

    const setLanguage = (lang) => {
        document.querySelectorAll('[data-translate-key]').forEach(element => {
            const key = element.getAttribute('data-translate-key');
            if (translations[lang][key]) {
                element.innerHTML = translations[lang][key];
            }
        });
        document.documentElement.lang = lang;
        langSwitcherBtn.textContent = lang === 'en' ? 'বাংলা' : 'English';
    };

    langSwitcherBtn.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'bn' : 'en';
        setLanguage(currentLang);
    });
    
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.background = 'var(--primary-color)';
        } else {
            header.style.background = 'var(--header-bg-color)';
        }
    });

    setLanguage(currentLang);
});
