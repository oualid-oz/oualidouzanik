const translations = {
    "Home": "Accueil",
    "About": "À propos",
    "Services": "Services",
    "Contact": "Contact",
    "Hello, my name is": "Bonjour, je m'appelle",
    "I'm a": "Je suis",
    "I'm a graduated student in Big Data, My expertise is to create a huge career in this field": "Diplômé en Big Data, je souhaite bâtir une carrière dans ce domaine.",
    "Download CV": "Télécharger mon CV",
    "OUZANIK Oualid": "OUZANIK Oualid",
    "About Me": "À propos de moi",
    "I'm Oualid Ouzanik and a": "Je suis Oualid Ouzanik,",
    "Data Engineer": "Ingénieur Data",
    "I'm a Python backend developer skilled in Python, web frameworks, and database management.": "Développeur backend Python, je maîtrise Python, les frameworks web et la gestion de bases de données.",
    "Experienced in designing scalable web applications and crafting efficient code, I'm passionate about solving complex challenges and delivering high-quality solutions.": "Expérimenté dans la conception d'applications web évolutives et l'écriture de code efficace, j'aime résoudre des problèmes complexes et fournir des solutions de qualité.",
    "I thrive in team environments and stay current with industry trends, driving innovation in web development.": "J'apprécie le travail en équipe et reste à l'écoute des évolutions du secteur pour contribuer à l'innovation dans le développement web.",
    "I'm a Python backend developer skilled in Python, web frameworks, and database management. Experienced in designing scalable web applications and crafting efficient code, I'm passionate about solving complex challenges and delivering high-quality solutions. I thrive in team environments and stay current with industry trends, driving innovation in web development.": "Développeur backend Python, je maîtrise Python, les frameworks web et la gestion de bases de données. Expérimenté dans la conception d'applications web évolutives et l'écriture de code efficace, j'aime résoudre des problèmes complexes et fournir des solutions de qualité. J'apprécie le travail en équipe et reste à l'écoute des évolutions du secteur pour contribuer à l'innovation dans le développement web.",
    "Full Name :": "Nom complet :",
    "GitHub :": "GitHub :",
    "Email :": "E-mail :",
    "LinkedIn :": "LinkedIn :",
    "Phone :": "Téléphone :",
    "From :": "Ville :",
    "Tinghir, Morocco": "Tinghir, Maroc",
    "Hire me": "Me contacter",
    "Education": "Formation",
    "Master degree: Big Data & Decision support": "Master : Big Data et aide à la décision",
    "National School of Applied Sciences": "École nationale des sciences appliquées",
    "Khouribga, Morocco": "Khouribga, Maroc",
    "Bachelor degree: Mathematics and Computer Science": "Licence : mathématiques et informatique",
    "Multidisciplinary Faculty": "Faculté pluridisciplinaire",
    "Ouarzazate, Morocco": "Ouarzazate, Maroc",
    "High school diploma: Science": "Baccalauréat scientifique",
    "Ibrahim Ibn Adham high school": "Lycée Ibrahim Ibn Adham",
    "Experience": "Expérience",
    "Internship: Data Engineer": "Stage : ingénieur Data",
    "Mohammedia, Morocco": "Mohammedia, Maroc",
    "Developed real-time social network recommendation system using Python, Flask, Redis, and Neo4j, enhancing user connections and interactions.": "Développement d'un système de recommandation en temps réel pour un réseau social avec Python, Flask, Redis et Neo4j, afin d'améliorer les connexions et les interactions entre utilisateurs.",
    "Utilized Redis for caching to optimize query response times, resulting in a 40% performance improvement.": "Utilisation de Redis pour la mise en cache et l'optimisation des temps de réponse des requêtes, avec une amélioration des performances de 40 %.",
    "Designed and implemented Neo4j-based graph database for modeling user connections, improving recommendation accuracy by 20%.": "Conception et mise en œuvre d'une base de données graphe Neo4j pour modéliser les connexions entre utilisateurs, améliorant la précision des recommandations de 20 %.",
    "Data Architecture Design": "Conception d'architecture de données",
    "Develop and design the overall architecture of the data systems, including databases, data lakes, and data warehouses.": "Concevoir l'architecture globale des systèmes de données, notamment les bases de données, les lacs de données et les entrepôts de données.",
    "Data Pipeline Development": "Développement de pipelines de données",
    "Create robust and scalable data pipelines to efficiently move and transform data from source to destination, ensuring data quality and reliability.": "Créer des pipelines de données robustes et évolutifs pour transférer et transformer efficacement les données, tout en garantissant leur qualité et leur fiabilité.",
    "ETL (Extract, Transform, Load) Processes": "Processus ETL (extraction, transformation, chargement)",
    "Develop ETL processes to extract data from various sources, transform it into a usable format, and load it into the target storage or database.": "Développer des processus ETL pour extraire des données de différentes sources, les transformer dans un format exploitable et les charger dans le stockage ou la base de données cible.",
    "Data Analysis and Interpretation": "Analyse et interprétation des données",
    "Analyze large datasets to extract meaningful insights and trends, and interpret the findings in a way that is understandable to non-technical stakeholders.": "Analyser de grands volumes de données pour en dégager des tendances et des informations pertinentes, puis présenter les résultats de façon accessible aux interlocuteurs non techniques.",
    "Data Visualization": "Visualisation des données",
    "Create compelling visualizations, such as charts, graphs, and dashboards, to effectively communicate data trends and patterns to both technical and non-technical audiences.": "Créer des visualisations claires — graphiques et tableaux de bord — pour communiquer efficacement les tendances et les modèles de données à tous les publics.",
    "Business Intelligence (BI)": "Informatique décisionnelle (BI)",
    "Develop and implement BI solutions to enable stakeholders to access and analyze data in a self-service manner.": "Développer et mettre en œuvre des solutions de BI permettant aux parties prenantes d'accéder aux données et de les analyser en autonomie.",
    "My last projects:": "Mes derniers projets :",
    "Contact Me": "Me contacter",
    "HAVE YOU ANY QUESTIONS?": "VOUS AVEZ DES QUESTIONS ?",
    "I'M AT YOUR SERVICES": "JE SUIS À VOTRE ÉCOUTE",
    "Address :": "Adresse :",
    "SEND ME AN EMAIL": "ENVOYEZ-MOI UN E-MAIL",
    "I'M VERY RESPONSIVE TO MESSAGES": "JE RÉPONDS RAPIDEMENT AUX MESSAGES",
    "Theme Colors": "Couleurs du thème",
    "Send Message": "Envoyer le message"
};
const originalText = new WeakMap();
const originalPlaceholder = new WeakMap();
const languageButtons = document.querySelectorAll(".language-option");
const languageGroup = document.querySelector(".language-switcher");
const typedStrings = {
    en: ["Data Engineer", "Data Analyst", "Backend Developer"],
    fr: ["Ingénieur Data", "Analyste de données", "Développeur backend"]
};
let typed = createTyped("en");

function createTyped(language) {
    return new Typed(".typing", {
        strings: typedStrings[language],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
}

function setLanguage(language) {
    document.documentElement.lang = language;
    document.title = language === "fr" ? "Portfolio de Oualid OUZANIK" : "Oualid OUZANIK - Portfolio";
    languageGroup.setAttribute("aria-label", language === "fr" ? "Choisir la langue" : "Select language");

    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
        if (node.parentElement.closest(".typing")) {
            continue;
        }
        if (!originalText.has(node)) {
            originalText.set(node, node.textContent);
        }
        const source = originalText.get(node);
        const text = source.trim().replace(/\s+/g, " ");
        if (language === "fr" && translations[text]) {
            const leading = source.match(/^\s*/)[0];
            const trailing = source.match(/\s*$/)[0];
            node.textContent = `${leading}${translations[text]}${trailing}`;
        } else {
            node.textContent = source;
        }
    }

    document.querySelectorAll("[placeholder]").forEach((input) => {
        if (!originalPlaceholder.has(input)) {
            originalPlaceholder.set(input, input.getAttribute("placeholder"));
        }
        const placeholder = originalPlaceholder.get(input);
        const frenchPlaceholders = {
            Name: "Nom",
            Email: "E-mail",
            Subject: "Sujet",
            Message: "Message"
        };
        input.setAttribute("placeholder", language === "fr" ? frenchPlaceholders[placeholder] || placeholder : placeholder);
    });

    languageButtons.forEach((button) => {
        const isActive = button.dataset.language === language;
        button.classList.toggle("active", isActive);
        button.setAttribute("aria-pressed", String(isActive));
    });

    typed.destroy();
    typed = createTyped(language);
}

languageButtons.forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.language));
});

const   nav = document.querySelector(".nav"),
        navList = nav.querySelectorAll("li"),
        allSection = document.querySelectorAll(".section");
for (let i = 0; i < navList.length; i++) {
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function() {
        removeBackSection();
        for (let j = 0; j < navList.length; j++) {
            if (navList[j].querySelector("a").classList.contains("active")) {
                addBackSection(j);
            }
            navList[j].querySelector("a").classList.remove("active")
        }
        this.classList.add("active");
        showSection(this);
        if (window.innerWidth < 1250) {
            asideSectionTogglerBtn()
        }
    })
}
function removeBackSection() {
    for (let i = 0; i < allSection.length; i++) {
        allSection[i].classList.remove("back-section");
    }
}
function addBackSection(num) {
    allSection[num].classList.add("back-section");
}
function showSection(element) {
    for (let i = 0; i < allSection.length; i++) {
        allSection[i].classList.remove("active")
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active")
}
function updateNav(element) {
    for (let i = 0; i < navList.length; i++) {
        navList[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1];
        if (target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) {
            navList[i].querySelector("a").classList.add("active");
        }
    }
}
document.querySelector(".hire-me").addEventListener("click", function() {
    const sectionIndex = this.getAttribute("data-section-index");
    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSection(sectionIndex);
});

const   navTogglerBtn = document.querySelector(".nav-toggler"),
        aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", () => {
    asideSectionTogglerBtn()
})

function asideSectionTogglerBtn() {
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for (let i = 0; i < allSection.length; i++) {
        allSection[i].classList.toggle("open")
    }
}
