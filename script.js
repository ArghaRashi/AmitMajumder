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
            // About Me Section (REVERTED)
            about_title: 'About Me',
            about_p1: "Welcome to my official website! I'm Amit Majumder, a YouTuber from Kolkata with a deep passion for exploring and strengthening the bond between India and Bangladesh. My vlogs often focus on the culture, travel, and stories of Bangladesh.",
            about_p2: "Through my journey, I've connected with a wonderful community of over 139,000 subscribers from both sides of the border. This website is a dedicated space to offer my expertise and help you navigate the complexities of cross-border travel, visas, and even marriage. My goal is to be your trusted guide and friend.",
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
            // About Me Section (REVERTED)
            about_title: 'আমার সম্পর্কে',
            about_p1: 'আমার অফিসিয়াল ওয়েবসাইটে আপনাকে স্বাগত। আমি অমিত মজুমদার, কলকাতার একজন ইউটিউবার। ভারত ও বাংলাদেশের মধ্যেকার সম্পর্ককে আরও গভীর ও মজবুত করে তোলাই আমার প্রধান লক্ষ্য। আমার বেশিরভাগ ভ্লগ বাংলাদেশ-এর সংস্কৃতি, ভ্রমণ এবং সেখানকার মানুষজনের গল্প নিয়েই তৈরি।',
            about_p2: 'এই যাত্রাপথে, আমি দুই দেশের 1 লক্ষ 37 হাজারেরও বেশি মানুষের এক অসাধারণ পরিবারের সঙ্গে যুক্ত হয়েছি। এই ওয়েবসাইটটি আমার অভিজ্ঞতা আপনাদের সাথে ভাগ করে নেওয়ার একটি মাধ্যম, যার সাহায্যে আমি আপনাদের ভিসা, আন্তর্জাতিক ভ্রমণ এবং বিবাহ সংক্রান্ত জটিল বিষয়গুলিতে পথ দেখাতে পারব। আপনাদের একজন বিশ্বাসযোগ্য গাইড ও বন্ধু হওয়াই আমার উদ্দেশ্য।',
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
