/* Configuration personnelle : laisse une valeur vide ("") pour masquer l'élément correspondant. */
const SITE = {
  name: "Hyacinthe Randrianarivelo",
  email: "randrianarivelohyacinthe@gmail.com",
  phone: "034 70 172 94",
  phoneTel: "+261347017294",
  photo: "assets/images/photo.jpg",
  cv: "assets/cv/CV_Emploi_Hyacinthe_Randrianarivelo.pdf",
  github: "https://github.com/randrianrivelo",
  linkedin: "https://www.linkedin.com/in/hyacinthe-randrianarivelo-865b04431/"
};

/* Projets : seuls les faits confirmés sont écrits. Champs optionnels :
   status, github, demo, image, shots[] (captures), details[] (sections {t, items[]}). */
const PROJECTS = [
  {
    id: "safezone", title: "SafeZone Analamanga 2035", category: "Web", status: "En développement",
    summary: "Plateforme d'aide en cas de cyclone ou d'inondation à Analamanga : informations sur les zones à risque, les abris et les itinéraires.",
    tech: ["Python", "FastAPI", "React", "Vite", "PostgreSQL", "Docker", "API REST"],
    facts: ["Données du projet (et non des statistiques officielles) : 10 districts, 32 communes, 88 refuges, 20 routes, 8 zones dangereuses et 3 alertes."],
    github: "https://github.com/randrianrivelo/Safe_Zone", demo: "", image: "assets/images/projects/safezone.svg"
  },
  {
    id: "ecommerce-data", title: "Data Engineering — E-commerce", category: "Data",
    summary: "Base PostgreSQL de données e-commerce, requêtes analytiques sur les livraisons et comparaison des performances avec EXPLAIN ANALYZE.",
    tech: ["PostgreSQL", "SQL", "Docker"],
    facts: ["Données : clients, catégories, produits, commandes, lignes de commande, paiements et expéditions, importées depuis un fichier CSV.",
            "Jeu de données : 1 030 clients, 10 catégories, 530 produits, 10 000 commandes, 30 000 lignes de commande, 10 000 paiements et 6 727 expéditions.",
            "Requêtes analytiques sur les retards de livraison et les coûts d'expédition.",
            "Comparaison des performances de requêtes via EXPLAIN ANALYZE."],
    github: "https://github.com/randrianrivelo/Data-Engineering", demo: "", image: "assets/images/projects/ecommerce-data.svg"
  },
  {
    id: "miaina", title: "Miaina — Urgences médicales et chatbot", category: "Hackathon",
    summary: "Application orientée vers les urgences médicales, intégrant un chatbot, présentée lors d'un hackathon interne de l'ESMIA en 2025.",
    tech: [],
    facts: ["Certificat de participation obtenu au hackathon interne ESMIA (2025).", "Prototype de hackathon, pas un dispositif médical validé."],
    github: "https://github.com/randrianrivelo/Miaina", demo: "", image: "assets/images/projects/miaina.svg"
  },
  {
    id: "gestion-restaurant", title: "Gestion de restaurant", category: "Backend",
    summary: "Application web de gestion de restaurant, construite selon l'architecture MVC.",
    tech: ["PHP", "MySQL", "POO", "MVC"],
    facts: [],
    github: "https://github.com/randrianrivelo/Kafe-Milay", demo: "", image: "assets/images/projects/gestion-restaurant.svg"
  },
  {
    id: "vote-electronique", title: "Système de vote électronique", category: "Académique", status: "Projet académique · L1",
    summary: "Informatisation d'un processus de vote : logique de participation et organisation d'un scrutin.",
    tech: [],
    facts: [],
    github: "", demo: "", image: "assets/images/projects/vote-electronique.svg"
  },
  {
    id: "gestion-ecole", title: "Gestion_ecole", category: "Backend", status: "En développement",
    summary: "Projet de gestion scolaire avec Django.",
    tech: ["Django", "Python"],
    facts: ["Application « etudiants », modèle Etudiant et migrations initiales en place."],
    github: "", demo: "", image: "assets/images/projects/gestion-ecole.svg"
  },
  {
    id: "framework-php", title: "framework-php", category: "Backend",
    summary: "Projet académique Laravel 12 avec Blade.",
    tech: ["Laravel", "PHP", "Blade"],
    facts: ["Routes web, contrôleur de cours, liste de produits et page de détail."],
    github: "", demo: "", image: "assets/images/projects/framework-php.svg"
  },
  {
    id: "android-intent", title: "Android — Intent", category: "Mobile",
    summary: "Projet académique Android réalisé avec Android Studio et Java.",
    tech: ["Android Studio", "Java"],
    facts: [],
    github: "", demo: "", image: "assets/images/projects/android-intent.svg"
  }
];

/* Compétences : [libellé, classe devicon] — "sql" utilise une icône SVG intégrée. */
const SKILLS = {
  "Langages": [["Java","java-plain"],["Python","python-plain"],["PHP","php-plain"],["JavaScript","javascript-plain"],["TypeScript","typescript-plain"],["SQL","sql"]],
  "Frontend": [["HTML","html5-plain"],["CSS","css3-plain"],["React","react-original"],["Vite","vitejs-plain"]],
  "Backend": [["Spring Boot","spring-original"],["FastAPI","fastapi-plain"],["Laravel","laravel-plain"],["Django","django-plain"],["API REST","api"]],
  "Bases de données": [["PostgreSQL","postgresql-plain"],["MySQL","mysql-plain"],["SQLite","sqlite-plain"]],
  "Data Engineering": [["SQL","sql"],["PostgreSQL","postgresql-plain"],["Docker","docker-plain"]],
  "Mobile": [["Android Studio","androidstudio-plain"],["Java","java-plain"]],
  "Outils": [["Git","git-plain"],["GitHub","github-original"],["Docker","docker-plain"],["Maven","maven-plain"],["npm","npm-original-wordmark"],["Eclipse","eclipse-plain"],["VS Code","vscode-plain"]]
};
