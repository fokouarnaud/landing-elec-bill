type TranslationsType = {
  readonly [K in 'en' | 'fr']: {
    // Navigation
    readonly home: string;
    readonly features: string;
    readonly pricing: string;
    readonly contact: string;
    readonly login: string;
    readonly logout: string;
    readonly dashboard: string;
    readonly admin: string;

    // Hero Section
    readonly heroTitle: string;
    readonly heroSubtitle: string;
    readonly getStarted: string;
    readonly learnMore: string;

    // Features Section
    readonly whyChooseUs: string;
    readonly realTimeMonitoring: string;
    readonly realTimeMonitoringDesc: string;
    readonly costSaving: string;
    readonly costSavingDesc: string;
    readonly easySetup: string;
    readonly easySetupDesc: string;
    
    // Testimonials Section
    readonly testimonials: string;
    readonly testimonialTitle: string;
    readonly testimonial1: string;
    readonly testimonial2: string;
    readonly testimonial3: string;
    readonly testimonial4: string;
    
    // Clients Section
    readonly ourClients: string;
    readonly trustedByCompanies: string;

    // FAQ Section
    readonly frequentlyAskedQuestions: string;
    readonly faqQuestion1: string;
    readonly faqAnswer1: string;
    readonly faqQuestion2: string;
    readonly faqAnswer2: string;
    readonly faqQuestion3: string;
    readonly faqAnswer3: string;
    readonly faqQuestion4: string;
    readonly faqAnswer4: string;

    // Download Section
    readonly downloadApp: string;
    readonly downloadSubtitle: string;
    readonly availableOn: string;
    readonly appStore: string;
    readonly playStore: string;
    
    // Waitlist Section
    readonly joinWaitlist: string;
    readonly emailPlaceholder: string;
    readonly submit: string;
    readonly waitlistSuccess: string;
    readonly waitlistError: string;
    readonly alreadyOnWaitlist: string;
    readonly waitlistEntries: string;
    readonly noEntries: string;

    // Login/Auth
    readonly emailLabel: string;
    readonly passwordLabel: string;
    readonly loginButton: string;
    readonly loginError: string;
    readonly loginSuccess: string;
    
    // Dashboard Labels
    readonly currentUsage: string;
    readonly lastReading: string;
    readonly predictedBill: string;
    readonly historicalData: string;
    readonly addNewMeter: string;
    readonly takePicture: string;
    readonly viewHistory: string;
    readonly exportData: string;

    // Admin Section
    readonly status: string;
    readonly notes: string;
    readonly actions: string;
    readonly lastContacted: string;
    readonly updateStatus: string;
    readonly addNote: string;
    readonly deleteEntry: string;
    readonly confirmDelete: string;
    readonly pending: string;
    readonly contacted: string;
    readonly completed: string;
    readonly updateSuccess: string;

    // Notifications
    readonly success: string;
    readonly error: string;
    readonly readingSuccess: string;
    readonly readingError: string;
    
    // Language
    readonly switchToFr: string;
    readonly switchToEn: string;
  }
};

export const translations: TranslationsType = {
  en: {
    // Navigation
    home: "Home",
    features: "Features",
    pricing: "Pricing",
    contact: "Contact",
    login: "Login",
    logout: "Logout",
    dashboard: "Dashboard",
    admin: "Admin",

    // Hero Section
    heroTitle: "Smart Electric Meter Monitoring",
    heroSubtitle: "Track your electricity consumption, analyze usage patterns, and reduce your bills with our intelligent monitoring system",
    getStarted: "Get Started",
    learnMore: "Learn More",

    // Features Section
    whyChooseUs: "Why Choose Our Solution",
    realTimeMonitoring: "Real-Time Meter Reading",
    realTimeMonitoringDesc: "Get instant readings from your electric meter with automated OCR technology. No more manual readings or estimation bills.",
    costSaving: "Smart Bill Analysis",
    costSavingDesc: "Understand your electricity usage patterns and get personalized recommendations to reduce your consumption and save money.",
    easySetup: "Quick Camera Setup",
    easySetupDesc: "Simply point your camera at the meter, and our app will automatically capture and process the reading. It's that easy!",
    
    // Testimonials Section
    testimonials: "User Stories",
    testimonialTitle: "What Our Users Are Saying",
    testimonial1: "This app has completely transformed how I track my electricity usage. The automatic meter reading feature saves me so much time!",
    testimonial2: "As a property manager, monitoring multiple meters used to be a headache. Now it's all automated and organized in one place.",
    testimonial3: "The bill analysis feature helped me identify peak usage times and adjust my habits. My electricity bill is down by 25%!",
    testimonial4: "The accuracy of the OCR technology is impressive. Haven't had a single misread in months of using the app.",
    
    // Clients Section
    ourClients: "Trusted Users",
    trustedByCompanies: "Used by Homeowners and Businesses Alike",

    // FAQ Section
    frequentlyAskedQuestions: "Common Questions",
    faqQuestion1: "How accurate is the meter reading feature?",
    faqAnswer1: "Our OCR technology is highly accurate with a 99.9% success rate in proper lighting conditions. The app also includes verification steps to ensure readings are correct.",
    faqQuestion2: "Can I monitor multiple meters?",
    faqAnswer2: "Yes! You can add multiple meters to your account and label them for different properties or areas. Perfect for property managers and business owners.",
    faqQuestion3: "How does the bill prediction work?",
    faqAnswer3: "We analyze your historical usage patterns and current rates to predict your upcoming bill. This helps you adjust your consumption before the billing cycle ends.",
    faqQuestion4: "Is the app easy to use?",
    faqAnswer4: "Absolutely! Just point your camera at the meter, and our app guides you through the process. No technical expertise required.",

    // Download Section
    downloadApp: "Get the App",
    downloadSubtitle: "Start monitoring your electricity usage today",
    availableOn: "Available on",
    appStore: "App Store",
    playStore: "Google Play",
    
    // Waitlist Section
    joinWaitlist: "Join Beta Access",
    emailPlaceholder: "Enter your email",
    submit: "Submit",
    waitlistSuccess: "You've been added to our beta access list!",
    waitlistError: "Error joining waitlist. Please try again.",
    alreadyOnWaitlist: "This email is already registered for beta access.",
    waitlistEntries: "Waitlist Entries",
    noEntries: "No entries found",

    // Login/Auth
    emailLabel: "Email",
    passwordLabel: "Password",
    loginButton: "Log In",
    loginError: "Invalid email or password",
    loginSuccess: "Successfully logged in!",
    
    // Dashboard Labels
    currentUsage: "Current Usage",
    lastReading: "Last Reading",
    predictedBill: "Predicted Bill",
    historicalData: "Historical Data",
    addNewMeter: "Add New Meter",
    takePicture: "Take Picture",
    viewHistory: "View History",
    exportData: "Export Data",

    // Admin Section
    status: "Status",
    notes: "Notes",
    actions: "Actions",
    lastContacted: "Last Contacted",
    updateStatus: "Update Status",
    addNote: "Add Note",
    deleteEntry: "Delete Entry",
    confirmDelete: "Are you sure you want to delete this entry?",
    pending: "Pending",
    contacted: "Contacted",
    completed: "Completed",
    updateSuccess: "Successfully updated",

    // Notifications
    success: "Success",
    error: "Error",
    readingSuccess: "Meter reading successfully captured",
    readingError: "Error capturing reading. Please try again",
    
    // Language
    switchToFr: "Français",
    switchToEn: "English"
  },
  fr: {
    // Navigation
    home: "Accueil",
    features: "Fonctionnalités",
    pricing: "Tarifs",
    contact: "Contact",
    login: "Connexion",
    logout: "Déconnexion",
    dashboard: "Tableau de bord",
    admin: "Admin",

    // Hero Section
    heroTitle: "Surveillance Intelligente des Compteurs Électriques",
    heroSubtitle: "Suivez votre consommation d'électricité, analysez vos habitudes et réduisez vos factures avec notre système de surveillance intelligent",
    getStarted: "Commencer",
    learnMore: "En savoir plus",

    // Features Section
    whyChooseUs: "Pourquoi Choisir Notre Solution",
    realTimeMonitoring: "Lecture en Temps Réel",
    realTimeMonitoringDesc: "Obtenez des lectures instantanées de votre compteur électrique avec la technologie OCR automatisée. Plus de lectures manuelles ou de factures estimées.",
    costSaving: "Analyse Intelligente des Factures",
    costSavingDesc: "Comprenez vos habitudes de consommation d'électricité et recevez des recommandations personnalisées pour réduire votre consommation et économiser.",
    easySetup: "Configuration Rapide",
    easySetupDesc: "Pointez simplement votre caméra vers le compteur, et notre application capturera et traitera automatiquement la lecture. C'est aussi simple que ça !",

    // Testimonials Section
    testimonials: "Témoignages",
    testimonialTitle: "Ce Que Disent Nos Utilisateurs",
    testimonial1: "Cette application a complètement transformé ma façon de suivre ma consommation d'électricité. La lecture automatique me fait gagner tellement de temps !",
    testimonial2: "En tant que gestionnaire immobilier, la surveillance de plusieurs compteurs était un casse-tête. Maintenant, tout est automatisé et organisé au même endroit.",
    testimonial3: "La fonction d'analyse des factures m'a aidé à identifier les pics de consommation et à ajuster mes habitudes. Ma facture d'électricité a baissé de 25% !",
    testimonial4: "La précision de la technologie OCR est impressionnante. Pas une seule erreur de lecture en plusieurs mois d'utilisation.",

    // Clients Section
    ourClients: "Utilisateurs de Confiance",
    trustedByCompanies: "Utilisé par les Particuliers et les Entreprises",

    // FAQ Section
    frequentlyAskedQuestions: "Questions Fréquentes",
    faqQuestion1: "Quelle est la précision de la fonction de lecture du compteur ?",
    faqAnswer1: "Notre technologie OCR est très précise avec un taux de réussite de 99,9% dans des conditions d'éclairage appropriées. L'application inclut également des étapes de vérification pour garantir l'exactitude des lectures.",
    faqQuestion2: "Puis-je surveiller plusieurs compteurs ?",
    faqAnswer2: "Oui ! Vous pouvez ajouter plusieurs compteurs à votre compte et les étiqueter pour différentes propriétés ou zones. Parfait pour les gestionnaires immobiliers et les propriétaires d'entreprises.",
    faqQuestion3: "Comment fonctionne la prédiction de facture ?",
    faqAnswer3: "Nous analysons vos habitudes de consommation historiques et les tarifs actuels pour prédire votre prochaine facture. Cela vous aide à ajuster votre consommation avant la fin du cycle de facturation.",
    faqQuestion4: "L'application est-elle facile à utiliser ?",
    faqAnswer4: "Absolument ! Pointez simplement votre caméra vers le compteur, et notre application vous guide tout au long du processus. Aucune expertise technique requise.",

    // Download Section
    downloadApp: "Télécharger l'Application",
    downloadSubtitle: "Commencez à surveiller votre consommation d'électricité dès aujourd'hui",
    availableOn: "Disponible sur",
    appStore: "App Store",
    playStore: "Google Play",

    // Waitlist Section
    joinWaitlist: "Rejoindre la Liste d'Attente",
    emailPlaceholder: "Entrez votre email",
    submit: "Envoyer",
    waitlistSuccess: "Vous avez été ajouté à la liste d'attente !",
    waitlistError: "Erreur lors de l'inscription. Veuillez réessayer.",
    alreadyOnWaitlist: "Cet email est déjà sur la liste d'attente.",
    waitlistEntries: "Entrées Liste d'Attente",
    noEntries: "Aucune entrée trouvée",

    // Login/Auth
    emailLabel: "Email",
    passwordLabel: "Mot de passe",
    loginButton: "Se connecter",
    loginError: "Email ou mot de passe invalide",
    loginSuccess: "Connexion réussie !",
    
    // Dashboard Labels
    currentUsage: "Consommation Actuelle",
    lastReading: "Dernière Lecture",
    predictedBill: "Facture Prévue",
    historicalData: "Données Historiques",
    addNewMeter: "Ajouter un Compteur",
    takePicture: "Prendre une Photo",
    viewHistory: "Voir l'Historique",
    exportData: "Exporter les Données",

    // Admin Section
    status: "Statut",
    notes: "Notes",
    actions: "Actions",
    lastContacted: "Dernier Contact",
    updateStatus: "Mettre à jour le statut",
    addNote: "Ajouter une note",
    deleteEntry: "Supprimer l'entrée",
    confirmDelete: "Êtes-vous sûr de vouloir supprimer cette entrée ?",
    pending: "En Attente",
    contacted: "Contacté",
    completed: "Complété",
    updateSuccess: "Mise à jour réussie",

    // Notifications
    success: "Succès",
    error: "Erreur",
    readingSuccess: "Lecture du compteur capturée avec succès",
    readingError: "Erreur lors de la capture. Veuillez réessayer",

    // Language
    switchToFr: "Français",
    switchToEn: "English"
  }
};

export type TranslationKey = keyof TranslationsType['en'];