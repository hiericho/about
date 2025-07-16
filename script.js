// script.js
const translations = {
    en: {
        local_time_label: "Santiago, Chile",
        nav_home: "Home",
        nav_about: "About Me",
        nav_projects: "Projects",
        nav_contact: "Contact",
        hero_greeting: "Hello! I'm",
        hero_role: "ELECTRONICS TECHNICIAN & DEVELOPER",
        hero_desc: "Passionate about programming, coding, and technology. I enjoy web development, machine learning, and open-source projects.",
        btn_projects: "MY PROJECTS",
        btn_contact: "CONTACT",
        about_title: "About Me",
        about_p1: "Hello! I'm Hiericho (pronounced like Jericho). I'm a 21-year-old undergrad electronics technician passionate about programming, coding, and technology.",
        about_p2: "I work at FAMAE and have experience with Python, JavaScript, and C++.",
        interests_title: "Interests / Hobbies",
        hobby_1: "Programming!",
        hobby_2: "Learning languages!",
        hobby_3: "Reading!",
        hobby_4: "Drawing!",
        projects_title: "My Projects",
        project_open_app: "Open App",
        project_view_source: "View on GitHub",
        contact_title: "Get in Touch",
        contact_intro: "You can find me online or reach out through the following channels:",
        contact_email: "Email Me!",
        contact_discord: "Discord: @hiericho",
        contact_github: "GitHub Profile",
        contact_availability: "I'm usually most active in the mornings and afternoons. Feel free to reach out, and I'll get back to you as soon as I can!",
    },
    es: {
        local_time_label: "Santiago, Chile",
        nav_home: "Inicio",
        nav_about: "Sobre mí",
        nav_projects: "Proyectos",
        nav_contact: "Contacto",
        hero_greeting: "¡Hola! Soy",
        hero_role: "TÉCNICO EN ELECTRÓNICA Y DESARROLLADOR",
        hero_desc: "Apasionado por la programación, el código y la tecnología. Disfruto del desarrollo web, el aprendizaje automático y los proyectos de código abierto.",
        btn_projects: "MIS PROYECTOS",
        btn_contact: "CONTACTO",
        about_title: "Sobre Mí",
        about_p1: "¡Hola! Soy Hiericho (se pronuncia como Jericho). Soy un técnico en electrónica universitario de 21 años, apasionado por la programación, el código y la tecnología.",
        about_p2: "Trabajo en FAMAE y tengo experiencia con Python, JavaScript y C++.",
        interests_title: "Intereses / Pasatiempos",
        hobby_1: "¡Programación!",
        hobby_2: "¡Aprender idiomas!",
        hobby_3: "¡Leer!",
        hobby_4: "¡Dibujar!",
        projects_title: "Mis Proyectos",
        project_open_app: "Abrir App",
        project_view_source: "Ver en GitHub",
        contact_title: "Ponte en Contacto",
        contact_intro: "Puedes encontrarme en línea o contactarme a través de los siguientes canales:",
        contact_email: "¡Envíame un Correo!",
        contact_discord: "Discord: @hiericho",
        contact_github: "Perfil de GitHub",
        contact_availability: "Normalmente estoy más activo por las mañanas y las tardes. ¡No dudes en contactarme y te responderé tan pronto como pueda!",
    },
    de: {
        local_time_label: "Santiago, Chile",
        nav_home: "Startseite",
        nav_about: "Über mich",
        nav_projects: "Projekte",
        nav_contact: "Kontakt",
        hero_greeting: "Hallo! Ich bin",
        hero_role: "ELEKTRONIKTECHNIKER & ENTWICKLER",
        hero_desc: "Leidenschaftlich für Programmierung, Codierung und Technologie. Ich mag Webentwicklung, maschinelles Lernen und Open-Source-Projekte.",
        btn_projects: "MEINE PROJEKTE",
        btn_contact: "KONTAKT",
        about_title: "Über Mich",
        about_p1: "Hallo! Ich bin Hiericho (ausgesprochen wie Jericho). Ich bin ein 21-jähriger Student der Elektroniktechnik mit einer Leidenschaft für Programmierung, Codierung und Technologie.",
        about_p2: "Ich arbeite bei FAMAE und habe Erfahrung mit Python, JavaScript und C++.",
        interests_title: "Interessen / Hobbys",
        hobby_1: "Programmieren!",
        hobby_2: "Sprachen lernen!",
        hobby_3: "Lesen!",
        hobby_4: "Zeichnen!",
        projects_title: "Meine Projekte",
        project_open_app: "App öffnen",
        project_view_source: "Auf GitHub ansehen",
        contact_title: "Nehmen Sie Kontakt auf",
        contact_intro: "Sie können mich online finden oder über die folgenden Kanäle erreichen:",
        contact_email: "E-Mail an mich!",
        contact_discord: "Discord: @hiericho",
        contact_github: "GitHub-Profil",
        contact_availability: "Normalerweise bin ich morgens und nachmittags am aktivsten. Zögern Sie nicht, mich zu kontaktieren, und ich werde mich so schnell wie möglich bei Ihnen melden!",
    },
};

const changeLanguage = (lang) => {
    localStorage.setItem('language', lang);
    updateTexts(lang);
};

const updateTexts = (lang) => {
    document.documentElement.lang = lang;
    document.querySelectorAll('.lang').forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
};

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert("Discord username copied: " + text);
    }).catch(err => {
        alert("Failed to copy text.");
    });
}

function updateLocalTime() {
    const timeDisplay = document.getElementById('time-display');
    if (timeDisplay) {
        const now = new Date();
        const timeString = now.toLocaleTimeString('es-CL', {
            timeZone: 'America/Santiago',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        });
        timeDisplay.textContent = timeString;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const savedLanguage = localStorage.getItem('language') || 'es';
    updateTexts(savedLanguage);
    
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.main-nav');
    hamburger.addEventListener('click', () => {
        nav.classList.toggle('active');
    });

    // Inicia y actualiza el widget de la hora local
    updateLocalTime();
    setInterval(updateLocalTime, 1000);
});