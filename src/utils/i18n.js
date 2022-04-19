import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // fallbackLng: ["fr", "en"],
    // we init with resources
    resources: {
      en: {
        translations: {
          //----------------------------------------------------------Client-------------------------------------------------------

          // client home
          "Submit your idea,": "Submit your idea,",
          "We make it real,": "We make it real,",
          "You receive your creation": "You receive your creation",
          "at home!": "at home!",
          "Place Your Ad": "Place Your Ad",
          "Orders List": "Orders List",
          "See all": "See all",
          Search: "Search",
          "Place New Ad": "Place New Ad",
          "Place this Order": "Place this Order",
          "Privacy Policy": "Privacy Policy",
          "Select gender for your creation": "Select gender for your creation",

          //client navbar
          Designers: "Designers",
          Orders: "Orders",
          "My Ads": "My Ads",
          Quotes: "Quotes",
          Help: "Help",
          Chats: "Chats",
          "Terms and Conditions": "Terms and Conditions",
          Profile: "Profile",
          Support: "Support",
          Logout: "Logout",
          "Order created successfully.": "Order created successfully.",
          "Ad updated successfully.": "Ad updated successfully.",
          Reviews: "Reviews",
          ", Developed by Falcon Consulting. All rights reserved.":
            ", Developed by Falcon Consulting. All rights reserved.",

          //Profile
          Edit: "Edit",
          Phone: "Phone",
          Email: "Email",
          "Date Of Birth": "Date Of Birth",
          City: "City",
          Country: "Country",
          Location: "Location",
          "Last Password Changed": "Last Password Changed",
          Password: "Password",
          "Account Created": "Account Created",

          //order
          Order: "Order",
          "Order Date": "Order Date",
          "Delivery Date": "Delivery Date",
          "Coming soon!": "Coming soon!",
          Rating: "Rating",
          Cancel: "Cancel",
          Details: "Details",
          "Place Your Order": "Place Your Order",
          "Image must be selected": "Image must be selected",
          "Delivery Note": "Delivery Note",

          //my ads
          Ads: "Ads",
          "Name of Creation": "Name of Creation",
          "Ad for": "Ad for",
          "Delivery Date": "Delivery Date",
          min: "min",
          max: "max",
          Range: "Range",
          Responses: "Responses",
          Offer: "Offer",
          Discard: "Discard",
          "Standard size": "Standard size",

          "Chat Here": "Chat Here",
          "Ad Basic": "Ad Basic",
          Delivery: "Delivery",
          Payment: "Payment",
          Basic: "Basic",
          Notes: "Notes",
          Delivery: "Delivery",

          //chats
          Online: "Online",
          "Last Online": "Last Online",
          Chats: "Chats",
          "Recent Chats": "Recent Chats",
          Messages: "Messages",
          Saab: "Saab",
          Mercedes: "Mercedes",
          Audi: "Audi",
          Delete: "Delete",

          //faq
          "Frequently Asked Question": "Frequently Asked Question",
          "A frequently asked questions list is often used in articles, websites, email lists, and online forums where common questions tend to recur, for example through posts or queries":
            "A frequently asked questions list is often used in articles, websites, email lists, and online forums where common questions tend to recur, for example through posts or queries",

          //measurements
          "Get a tape": "Get a tape",
          "Important: If you hesitate between two sizes, take the larger one.":
            "Important: If you hesitate between two sizes, take the larger one.",
          "Standard Size Chart": "Standard Size Chart",
          "Video Tutorial": "Video Tutorial",
          Measure: "Measure",

          //orderFromCatalog
          "Catalogue Price": "Catalogue Price",
          "Extra Note": "Extra Note",
          "Place Order": "Place Order",
          "Send Message": "Send Message",

          //search results
          "Designers Found": "Designers Found",
          Experience: "Experience",
          Speciality: "Speciality",

          //Terms & Conditions
          "Terms & Conditions": "Terms & Conditions",

          //ViewCatalog
          Description: "Description",
          Charges: "Charges",
          "Review & rating": "Review & rating",
          "Stitching Price": "Stitching Price",

          //viewOrder
          "Client Basic": "Client Basic",
          "See All Orders": "See All Orders",
          "See All Requests": "See All Requests",

          //view tailor
          "Designer Profile": "Designer Profile",
          "Quote sent successfully.": "Quote sent successfully.",

          //--------------------------------------------------------------Designer--------------------------------------------------

          //catalogue
          "My Catalogue": "My Catalogue",
          Diploma: "Diploma",
          Feedback: "Feedback",
          //clientProfile
          Order: "Order",
          Bill: "Bill",
          "Client Profile": "Client Profile",
          "Client Orders": "Client Orders",
          "Order Date": "Order Date",
          "Delivery Date": "Delivery Date",

          //Edit Catalogue
          "Edit Catalogue": "Edit Catalogue",
          Name: "Name",
          Gender: "Gender",
          Male: "Male",
          Female: "Female",
          Category: "Category",
          WOMEN: "WOMEN",
          MAN: "MAN",
          CHILD: "CHILD",
          Other: "Other",
          Price: "Price",
          Attachments: "Attachments",
          "Fixed price": "Fixed price",
          "Select one category for your ad": "Select one category for your ad",

          //home
          Fabric: "Fabric",
          Date: "Date",
          Note: "Note",
          "Welcome to the": "Welcome to the",
          "Now You receive your": "Now You receive your",
          "order here": "order here",
          "Find Quotes": "Find Quotes",
          "Order Requests": "Order Requests",
          "See all": "See all",
          "Recent Orders": "Recent Orders",

          //HOW IT WORKS ?
          "HOW IT WORKS ?": "HOW IT WORKS ?",
          in_progress: "in_progress",
          completed: "completed",
          discarded: "discarded",
          "In just a few clicks, Design Créations allows you to find one-off assignments in":
            "In just a few clicks, Design Créations allows you to find one-off assignments in",

          "in the production and manufacture of clothing, decorative elements.":
            "in the production and manufacture of clothing, decorative elements.",

          "or household linen.": "or household linen.",
          "Write any note regarding Payment (Optional)":
            "Write any note regarding Payment (Optional)",

          "1 . Find the right clients for you":
            "1 . Find the right clients for you",
          "Design creation puts you in touch with potential customers suited to your profile":
            "Design creation puts you in touch with potential customers suited to your profile",
          "2 . Focus on the essentials": "2 . Focus on the essentials",
          "Design creation manages all the formalities relating to the provision of services":
            "Design creation manages all the formalities relating to the provision of services",
          "3 . Post your ad (offer) in just a few clicks":
            "3 . Post your ad (offer) in just a few clicks",
          "Post your add in 3 steps": "Post your add in 3 steps",
          "Seamstress selection based on the following criteria:":
            "Seamstress selection based on the following criteria:",
          "Reliability / Seriousness": "Reliability / Seriousness",
          "Rating on the site": "Rating on the site",
          "Customers' opinion": "Customers' opinion",
          "Tailoring time": "Tailoring time",
          Passionate: "Passionate",
          Enthusiastic: "Enthusiastic",
          Available: "Available",
          Skills: "Skills",
          "Material Fabrics": "Material Fabrics",

          "Know how": "Know how",
          "General skills": "General skills",
          "Know and master the techniques of making a garment (cutting, stitching, etc.)":
            "Know and master the techniques of making a garment (cutting, stitching, etc.)",
          "Have knowledge of the different fabrics, materials, colors":
            "Have knowledge of the different fabrics, materials, colors",
          "Make drawings, sketches": "Make drawings, sketches",
          "Operate the right machinery": "Operate the right machinery",
          "Prepare detailed quotes": "Prepare detailed quotes",
          "Meet deadlines": "Meet deadlines",
          "Have knowledge of management": "Have knowledge of management",
          "Know how to handle computers in particular the Design CREATION site":
            "Know how to handle computers in particular the Design CREATION site",
          View: "View",
          "Select one colour for your Creations":
            "Select one colour for your Creations",

          //order
          "Orders Requests": "Orders Requests",
          "In Progress": "In Progress",
          Completed: "Completed",
          Discarded: "Discarded",
          "Hourly Rate": "Hourly Rate",
          Offer: "Offer",
          "Send Offer": "Send Offer",

          //profile
          "Hourly Rate": "Hourly Rate",
          "Free Shipping": "Free Shipping",
          "Add Catalogue": "Add Catalogue",

          //quotes
          "Name of Creation": "Name of Creation",
          "Ad for": "Ad for",

          //searchResults
          "Orders Found": "Orders Found",
          offer: "offer",
          "Select size": "Select size",

          "Profile updated successfully.": "Profile updated successfully.",

          //support center
          Review: "Review",
          "Bride Dress": "Bride Dress",
          Pending: "Pending",
          Completed: "Completed",
          "Support Center": "Support Center",
          "Chat With Us": "Chat With Us",
          "Certain Amount": "Certain Amount",
          "Any Confection": "Any Confection",
          "Search Input can't be empty": "Search Input can't be empty",
          "Feedback provided successfully.": "Feedback provided successfully.",

          "Shop Name": "Shop Name",
          "Ad created successfully.": "Ad created successfully.",

          // terms n conditions
          "General informations": "General informations",
          "Design CONFECTIONS ETHIQUES is an online platform (with free registration) allowing independent designers to unearth their customers in whole or in part":
            "Design CONFECTIONS ETHIQUES is an online platform (with free registration) allowing independent designers to unearth their customers in whole or in part",
          "Design CONFECTIONS ETHIQUES connects tailors looking for new assignments and/or new clients, with natural persons (individuals) and/or legal persons (companies) looking for a service: tailor-made tailoring clothing, decorative items or linens or any other creations":
            "Design CONFECTIONS ETHIQUES connects tailors looking for new assignments and/or new clients, with natural persons (individuals) and/or legal persons (companies) looking for a service: tailor-made tailoring clothing, decorative items or linens or any other creations",
          "requiring the services of a designer":
            "requiring the services of a designer",
          "Your responsibilities if you breach these Terms":
            "Your responsibilities if you breach these Terms",
          "Delivery Address": "Delivery Address",
          "Write any note regarding Delivery (Optional)":
            "Write any note regarding Delivery (Optional)",
          "As a seamstress you are bound by the general conditions of sale below, in the event of non-compliance (and this after 2 warnings from Design CRÉATIONS following dissatisfied customers), Design CONFECTIONS ETHIQUES reserves the right to remove you. definitely from his site.":
            "As a seamstress you are bound by the general conditions of sale below, in the event of non-compliance (and this after 2 warnings from Design CRÉATIONS following dissatisfied customers), Design CONFECTIONS ETHIQUES reserves the right to remove you. definitely from his site.",

          "The seamstress is also required to provide neat and quality work with selected quality materials.The seamstress must reside in France in order to respect the “made in France” label.":
            "The seamstress is also required to provide neat and quality work with selected quality materials.The seamstress must reside in France in order to respect the “made in France” label.",
          "Orders are made directly by the customer via the Design CONFECTIONS ETHIQUES site, where the latter has selected the various choices offered to him as to his creation (type, fabric, deadline, etc.). Then his creation is routed to the professional interface of the seamstresses where various quotes will be offered to him.":
            "Orders are made directly by the customer via the DesignCONFECTIONS ETHIQUES site, where the latter has selected the various choices offered to him as to his creation (type, fabric, deadline, etc.). Then his creation is routed to the professional interface of the seamstresses where various quotes will be offered to him.",
          Delivery: "Delivery",
          offline: "offline",

          "The customer has the choice between various delivery times: 2 weeks, 1 month or to enter a delivery deadline. He can tick the indifferent box if he is not in too much of a hurry.":
            "The customer has the choice between various delivery times: 2 weeks, 1 month or to enter a delivery deadline. He can tick the indifferent box if he is not in too much of a hurry.",
          "The customer pays his entire order (+ delivery costs) directly online. The seamstress is paid (24 hours later) up to 30% (order - 20% commission) at the start of the mission and 70% (order - 20% commission) 48 hours after the end of the mission.":
            "The customer pays his entire order (+ delivery costs) directly online. The seamstress is paid (24 hours later) up to 30% (order - 20% commission) at the start of the mission and 70% (order - 20% commission) 48 hours after the end of the mission.",
          "Cancellation of an order/return procedure":
            "Cancellation of an order/return procedure",
          "The service provider (in this case the seamstress) is free to suspend (due to illness, maternity or other), or to terminate the contract that binds it with Design CONFECTIONS ETHIQUES, only if it has no mission In progress. It must inform Design CONFECTIONS ETHIQUES as soon as possible.":
            "The service provider (in this case the seamstress) is free to suspend (due to illness, maternity or other), or to terminate the contract that binds it with Design CONFECTIONS ETHIQUES, only if it has no mission In progress. It must inform Design CONFECTIONS ETHIQUES as soon as possible.",
          "The service provider (in this case the seamstress) is free to suspend (due to illness, maternity or other), or to terminate the contract that binds it with Design CONFECTIONS ETHIQUES, only if it has no mission In progress. It must inform Design CONFECTIONS ETHIQUES as soon as possible.":
            "The service provider (in this case the seamstress) is free to suspend (due to illness, maternity or other), or to terminate the contract that binds it with Design CONFECTIONS ETHIQUES, only if it has no mission In progress. It must inform Design CONFECTIONS ETHIQUES as soon as possible.",
          "Cancellation of contract": "Cancellation of contract",
          "The service provider (in this case the seamstress) is free to suspend (due to illness, maternity or other), or to terminate the contract that binds it with Design CONFECTIONS ETHIQUES, only if it has no mission In progress. It must inform Design CONFECTIONS ETHIQUES as soon as possible.":
            "The service provider (in this case the seamstress) is free to suspend (due to illness, maternity or other), or to terminate the contract that binds it with Design CONFECTIONS ETHIQUES, only if it has no mission In progress. It must inform Design CONFECTIONS ETHIQUES as soon as possible.",
          "In just a few clicks, Design Créations allows you to find one-off assignments in the production and manufacture of clothing, decorative elements or household linen.In just a few clicks, Design Créations allows you to find one-off assignments ":
            "In just a few clicks, Design Créations allows you to find one-off assignments in the production and manufacture of clothing, decorative elements or household linen.In just a few clicks, Design Créations allows you to find one-off assignments ",

          //viewOrder
          "Want to complete this order": "Want to complete this order",

          //placeholders
          "Name of your Creation": "Name of your Creation",
          "Select gender": "Select gender",
          "Select category": "Select category",
          "Set your Price": "Set your Price",
          "Tell us about your service": "Tell us about your service",
          "Tell us": "Tell us",
          Save: "Save",
          "Write Measurement here": "Write Measurement here",

          //other
          "*Bring a tape measure": "*Bring a tape measure",
          "*Measure either the circumference or the length depending on the part of the body.":
            "*Measure either the circumference or the length depending on the part of the body.",
          Colour: "Colour",
          "Select Fabric Style": "Select Fabric Style",
          "Do you Want": "Do you Want",
          "ALTREATION SERVICE ?": "ALTREATION SERVICE ?",
          "*Select Delivery Type according to your Demands":
            "*Select Delivery Type according to your Demands",
          "*Select Date for delivery": "*Select Date for delivery",
          "Write Here": "Write Here",
          "Choose Method": "Choose Method",
          "Set Minimum Price": "Set Minimum Price",
          "Set Maximum Price": "Set Maximum Price",
          "Delivery Type": "Delivery Type",

          "Payment Note": "Payment Note",
          "I agree to the design Confection Ethiques":
            "I agree to the design Confection Ethiques",
          "Terms of Services": "Terms of Services",
          "Privacy Policy": "Privacy Policy",
          and: "and",
          "Publish Ad": "Publish Ad",
          Arm: "Arm",
          "Chest size": "Chest size",
          "Waist size": "Waist size",
          Hip: "Hip",
          Thigh: "Thigh",
          Calf: "Calf",
          Ankle: "Ankle",
          "Head to floor height": "Head to floor height",
          "From shoulder to floor": "From shoulder to floor",
          "From waist to floor": "From waist to floor",
          "Arm length": "Arm length",
          "(handle)": "(handle)",
          Next: "Next",
          Cut: "Cut",
          small: "small",
          large: "large",
          medium: "medium",

          "Leg length": "Leg length",
        },
      },
      fr: {
        translations: {
          //----------------------------------------------------------Client-------------------------------------------------------

          // client home
          "Submit your idea,": "Soumettez votre idée,",
          "We make it real,": "Nous le rendons réel,",
          "You receive your creation": "Vous recevez votre création",
          "at home!": "à la maison!",
          "Place Your Ad": "Placez votre annonce",
          "Orders List": "Liste des commandes",
          "See all": "Voir tout",
          Search: "Recherche",
          Feedback: "Retour",

          //client navbar
          Designers: "Créateurs",
          Orders: "Ordres",
          "My Ads": "Mes annonces",
          Chats: "Chats",
          "Terms and Conditions": "Termes et conditions",
          Profile: "Profil",
          Quotes: "Devis",
          "Place New Ad": "Placer une nouvelle annonce",
          Support: "Soutien",
          Logout: "Se déconnecter",
          "Send Message": "Envoyer le message",
          View: "Voir",
          "Delivery Note": "Bon de livraison",

          //Profile
          Edit: "Modifier",
          Phone: "Téléphoner",
          Email: "E-mail",
          "Date Of Birth": "Date de naissance",
          City: "Ville",
          Country: "Pays",
          Location: "Emplacement",
          "Last Password Changed": "Dernier mot de passe modifié",
          Password: "Mot de passe",
          "Account Created": "Compte créé",
          "Ad updated successfully.": "Annonce mise à jour avec succès.",
          "Place this Order": "Passer cette commande",

          //order
          Order: "Commande",
          "Order Date": "Date de commande",
          "Delivery Date": "La date de livraison",
          "Coming soon!": "Bientôt disponible!",
          Rating: "Évaluation",
          Cancel: "Annuler",
          Details: "Des détails",
          "Place Your Order": "Passer votre commande",
          "Feedback provided successfully.":
            "Commentaires fournis avec succès.",

          //my ads
          Ads: "Les publicités",
          "Name of Creation": "Nom de la création",
          "Ad for": "Annonce pour",
          "Delivery Date": "La date de livraison",
          min: "min",
          max: "maximum",
          Range: "Varier",
          Responses: "Réponses",
          Offer: "Offre",
          Discard: "Jeter",
          "Chat Here": "Chat ici",
          "Ad Basic": "Annonce de base",
          Delivery: "Livraison",
          Payment: "Paiement",
          "Profile updated successfully.": "Mise à jour du profil réussie.",

          //chats
          Online: "En ligne",
          "Last Online": "Dernière connexion",
          Chats: "Chats",
          "Recent Chats": "Chats récents",
          "Search Input can't be empty":
            "L'entrée de recherche ne peut pas être vide",

          Messages: "messages",
          Delete: "Supprimer",
          "Stitching Price": "Prix ​​de couture",
          Reviews: "Commentaires",

          //faq
          "Frequently Asked Question": "Question fréquemment posée",
          "A frequently asked questions list is often used in articles, websites, email lists, and online forums where common questions tend to recur, for example through posts or queries":
            "Une liste de questions fréquemment posées est souvent utilisée dans les articles, les sites Web, les listes de diffusion et les forums en ligne où les questions courantes ont tendance à se reproduire, par exemple via des publications ou des requêtes.",
          //measurements
          "Get a tape": "Obtenez une bande",
          "Important: If you hesitate between two sizes, take the larger one.":
            "Important : Si vous hésitez entre deux tailles, prenez la plus grande.",
          "Standard Size Chart": "Tableau des tailles standard",
          "Standard size": "Taille standard",
          "Video Tutorial": "Didacticiel vidéo",
          Measure: "Mesure",

          //orderFromCatalog
          "Catalogue Price": "Prix ​​catalogue",
          "Extra Note": "Remarque supplémentaire",
          "Place Order": "Passer la commande",

          //search results
          "Designers Found": "Créateurs trouvés",
          Experience: "Vivre",
          Speciality: "Spécialité",

          //Terms & Conditions
          "Terms & Conditions": "Termes et conditions",
          "Select size": "Sélectionnez la taille",
          //ViewCatalog
          Description: "La description",
          Charges: "Des charges",
          "Review & rating": "Examen et évaluation",
          "Select one category for your ad":
            "Sélectionnez une catégorie pour votre annonce",

          //viewOrder
          "Client Basic": "Client de base",

          //view tailor
          "Designer Profile": "Profil du concepteur",

          //--------------------------------------------------------------Designer--------------------------------------------------

          //catalogue
          "My Catalogue": "Mon catalogue",
          "Create Catalogue": "Create Catalogue",

          //clientProfile
          Order: "Commande",
          Bill: "Facture",
          "Client Profile": "Profil client",
          "Client Orders": "Commandes clients",
          "Order Date": "Date de commande",
          "Delivery Date": "La date de livraison",

          //Edit Catalogue
          "Edit Catalogue": "Modifier le catalogue",
          Name: "Nom",
          Gender: "Le sexe",
          Male: "Mâle",
          Female: "Femelle",
          Category: "Catégorie",
          WOMEN: "FEMMES",
          MAN: "HOMME",
          CHILD: "ENFANT",
          Other: "Autre",
          Price: "Prix",
          Attachments: "Pièces jointes",
          ", Developed by Falcon Consulting. All rights reserved.":
            ", Développé par Falcon Consulting. Tous droits réservés.",
          "Select gender for your creation":
            "Sélectionnez le sexe pour votre création",
          "Write Measurement here": "Écrivez la mesure ici",

          //home
          Fabric: "Tissu",
          Date: "Date",
          Note: "Noter",
          "Welcome to the": "Bienvenue à la",
          "Now You receive your": "Maintenant, vous recevez votre",
          "order here": "commander ici",
          "Find Quotes": "Trouver des devis",
          "Order Requests": "Demandes de commande",
          "See all": "Voir tout",
          "Recent Orders": "Dernières commandes",
          "Quote sent successfully.": "Devis envoyé avec succès.",

          //HOW IT WORKS ?
          "HOW IT WORKS ?": "COMMENT ÇA FONCTIONNE ?",
          in_progress: "en cours",
          completed: "terminé",
          discarded: "mis au rebut",
          Help: "Aider",
          "Privacy Policy": "Politique de confidentialité",
          "In just a few clicks, Design Créations allows you to find one-off assignments in":
            "En quelques clics, Design Créations vous permet de trouver des missions ponctuelles dans",

          "in the production and manufacture of clothing, decorative elements.":
            "dans la production et la fabrication de vêtements, d'éléments décoratifs.",

          "or household linen.": "ou linge de maison.",

          "In just a few clicks, Design Créations allows you to find one-off assignments in the production and manufacture of clothing, decorative elements or household linen.In just a few clicks, Design Créations allows you to find one-off assignments ":
            "En quelques clics, Design Créations vous permet de trouver des missions ponctuelles dans la production et la confection de vêtements, d'éléments de décoration ou de linge de maison. En quelques clics, Design Créations vous permet de trouver des missions ponctuelles",
          "1 . Find the right clients for you":
            "1 . Trouvez les bons clients pour vous",
          "Design creation puts you in touch with potential customers suited to your profile":
            "La création de design vous met en relation avec des clients potentiels adaptés à votre profil",
          "2 . Focus on the essentials": "2 . Concentrez-vous sur l'essentiel",
          "Design creation manages all the formalities relating to the provision of services":
            "Design création gère toutes les formalités liées à la prestation de services",
          "3 . Post your ad (offer) in just a few clicks":
            "3 . Déposez votre annonce (offre) en quelques clics",
          "Post your add in 3 steps": "Publiez votre annonce en 3 étapes",
          "Seamstress selection based on the following criteria:":
            "Sélection des couturières selon les critères suivants :",
          "Reliability / Seriousness": "Fiabilité / Sérieux",
          "Rating on the site": "Note sur le site",
          "Customers' opinion": "Avis des clients",
          "Tailoring time": "Temps de couture",
          Passionate: "Passionné",
          Enthusiastic: "Enthousiaste",
          Available: "Disponible",
          Skills: "Compétences",
          "Delivery Type": "Type de livraison",
          small: "petit",

          Save: "Sauver",
          "Know how": "Savoir-faire",
          "General skills": "Compétences générales",
          "Know and master the techniques of making a garment (cutting, stitching, etc.)":
            "Connaître et maîtriser les techniques de confection d'un vêtement (coupe, couture, etc.)",
          "Have knowledge of the different fabrics, materials, colors":
            "Connaître les différents tissus, matières, couleurs",
          "Make drawings, sketches": "Faire des dessins, des croquis",
          "Operate the right machinery": "Utiliser les bonnes machines",
          "Prepare detailed quotes": "Préparer des devis détaillés",
          "Meet deadlines": "Respecter les délais",
          "Have knowledge of management": "Avoir des connaissances en gestion",
          "Know how to handle computers in particular the Design CREATION site":
            "Savoir manier l'informatique notamment le site Design CREATION",
          Cut: "Couper",

          //order
          "Orders Requests": "Demandes de commandes",
          "In Progress": "En cours",
          Completed: "Terminé",
          Discarded: "Mis au rebut",
          Offer: "Offre",

          //profile
          "Hourly Rate": "Taux horaire",
          "Free Shipping": "Livraison gratuite",
          "Add Catalogue": "Ajouter un catalogue",

          //quotes
          "Name of Creation": "Nom de la création",
          "Ad for": "Annonce pour",

          //searchResults
          "Orders Found": "Commandes trouvées",
          offer: "offre",
          "Write any note regarding Delivery (Optional)":
            "Écrivez toute note concernant la livraison (facultatif)",
          "Write any note regarding Payment (Optional)":
            "Écrivez toute note concernant le paiement (facultatif)",
          //support center
          Review: "La revue",
          "Bride Dress": "Robe de mariée",
          Pending: "En attente",
          Completed: "Terminé",
          "Support Center": "Centre de soutien",
          "Chat With Us": "Discute avec nous",
          "Image must be selected": "L'image doit être sélectionnée",
          "Ad created successfully.": "Annonce créée avec succès.",
          "Order created successfully.": "Commande créée avec succès.",

          // terms n conditions
          "General informations": "Informations générales",
          "Design CONFECTIONS ETHIQUES is an online platform (with free registration) allowing independent designers to unearth their customers in whole or in part":
            "Design CONFECTIONS ETHIQUES est une plateforme en ligne (avec inscription gratuite) permettant aux créateurs indépendants de dénicher tout ou partie de leurs clients",
          "Design CONFECTIONS ETHIQUES connects tailors looking for new assignments and/or new clients, with natural persons (individuals) and/or legal persons (companies) looking for a service: tailor-made tailoring clothing, decorative items or linens or any other creations":
            "Design CONFECTIONS ETHIQUES met en relation des tailleurs à la recherche de nouvelles missions et/ou de nouveaux clients, avec des personnes physiques (particuliers) et/ou morales (entreprises) à la recherche d'un service : confection sur-mesure de vêtements, d'objets de décoration ou de linge de maison ou toutes autres créations",
          "requiring the services of a designer":
            "nécessitant les services d'un designer",
          "Your responsibilities if you breach these Terms":
            "Vos responsabilités si vous enfreignez ces Conditions",
          "As a seamstress you are bound by the general conditions of sale below, in the event of non-compliance (and this after 2 warnings from Design CRÉATIONS following dissatisfied customers), Design CONFECTIONS ETHIQUES reserves the right to remove you. definitely from his site.":
            "En tant que couturière vous êtes lié par les conditions générales de vente ci-dessous, en cas de non-respect (et ce après 2 avertissements de Design CRÉATIONS suite à des clients insatisfaits), Design CONFECTIONS ETHIQUES se réserve le droit de vous retirer définitivement de son site .",
          "The seamstress is also required to provide neat and quality work with selected quality materials.The seamstress must reside in France in order to respect the “made in France” label.":
            "La couturière est également tenue de fournir un travail soigné et de qualité avec des matières sélectionnées de qualité. La couturière doit résider en France afin de respecter le label -made in France.",
          "Orders are made directly by the customer via the Design CONFECTIONS ETHIQUES site, where the latter has selected the various choices offered to him as to his creation (type, fabric, deadline, etc.). Then his creation is routed to the professional interface of the seamstresses where various quotes will be offered to him.":
            "Les commandes sont passées directement par le client via le site DesignCONFECTIONS ETHIQUES, où ce dernier a sélectionné les différents choix qui lui sont proposés quant à sa création (type, tissu, délai, etc.). Puis sa création est acheminée vers l'interface professionnelle de les couturières où différents devis lui seront proposés.",
          Delivery: "Livraison",
          "Delivery Address": "Adresse de livraison",
          "The customer has the choice between various delivery times: 2 weeks, 1 month or to enter a delivery deadline. He can tick the indifferent box if he is not in too much of a hurry.":
            "Le client a le choix entre différents délais de livraison : 2 semaines, 1 mois ou saisir un délai de livraison. Il peut cocher la case indifférent s'il n'est pas trop pressé.",
          "The customer pays his entire order (+ delivery costs) directly online. The seamstress is paid (24 hours later) up to 30% (order - 20% commission) at the start of the mission and 70% (order - 20% commission) 48 hours after the end of the mission.":
            "Le client paie l'intégralité de sa commande (+ frais de livraison) directement en ligne. La couturière est payée (24h après) à hauteur de 30% (commande - 20% commission) au début de la mission et 70% (commande - 20% commission) 48h après la fin de la mission.",
          "Cancellation of an order/return procedure":
            "Annulation d'une commande/procédure de retour",
          "The service provider (in this case the seamstress) is free to suspend (due to illness, maternity or other), or to terminate the contract that binds it with Design CONFECTIONS ETHIQUES, only if it has no mission In progress. It must inform Design CONFECTIONS ETHIQUES as soon as possible.":
            "Le prestataire (en l'occurrence la couturière) est libre de suspendre (pour cause de maladie, maternité ou autre), ou de résilier le contrat qui le lie avec Design CONFECTIONS ETHIQUES, uniquement s'il n'a pas de mission en cours. Il doit en informer Design CONFECTIONS ETHIQUES dans les meilleurs délais.",
          "The service provider (in this case the seamstress) is free to suspend (due to illness, maternity or other), or to terminate the contract that binds it with Design CONFECTIONS ETHIQUES, only if it has no mission In progress. It must inform Design CONFECTIONS ETHIQUES as soon as possible.":
            "Le prestataire (en l'occurrence la couturière) est libre de suspendre (pour cause de maladie, maternité ou autre), ou de résilier le contrat qui le lie avec Design CONFECTIONS ETHIQUES, uniquement s'il n'a pas de mission en cours. Il doit en informer Design CONFECTIONS ETHIQUES dans les meilleurs délais.",
          "Cancellation of contract": "Annulation de contrat",
          "The service provider (in this case the seamstress) is free to suspend (due to illness, maternity or other), or to terminate the contract that binds it with Design CONFECTIONS ETHIQUES, only if it has no mission In progress. It must inform Design CONFECTIONS ETHIQUES as soon as possible.":
            "Le prestataire (en l'occurrence la couturière) est libre de suspendre (pour cause de maladie, maternité ou autre), ou de résilier le contrat qui le lie avec Design CONFECTIONS ETHIQUES, uniquement s'il n'a pas de mission en cours. Il doit en informer Design CONFECTIONS ETHIQUES dans les meilleurs délais.",

          //viewOrder
          "Want to complete this order":
            "Vous souhaitez finaliser cette commande",

          //placeholders
          "Name of your Creation": "Nom de votre Création",
          "Select gender": "Sélectionnez le sexe",
          "Select category": "Choisir une catégorie",
          "Set your Price": "Fixez votre prix",
          "Tell us about your service": "Parlez-nous de votre prestation",
          "Create Catalogue": "Créer un catalogue",

          "See All Orders": "Voir toutes les commandes",
          "See All Requests": "Voir toutes les demandes",
          "Send Offer": "Envoyer une offre",
          "Tell us": "Dites-nous",
          "Certain Amount": "Certain Montant",
          "Any Confection": "N'importe quelle confiserie",
          Diploma: "Diplôme",
          "Shop Name": "Nom de la boutique",
          "Fixed price": "Prix fixe",
          offline: "hors ligne",

          //others
          "*Measure either the circumference or the length depending on the part of the body.":
            "*Mesurer soit la circonférence soit la longueur selon la partie du corps.",
          "*Bring a tape measure": "*Apportez un mètre ruban",
          Colour: "Couleur",

          "Select one colour for your Creations":
            "Sélectionnez une couleur pour vos Créations",
          "Material Fabrics": "Matériaux Tissus",
          "Select Fabric Style": "Sélectionnez le style de tissu",

          "Do you Want": "Veux-tu",
          "ALTREATION SERVICE ?": "SERVICE DE MODIFICATION ?",
          "*Select Delivery Type according to your Demands":
            "*Sélectionnez le type de livraison en fonction de vos demandes",
          "*Select Date for delivery": "*Sélectionnez la date de livraison",
          "Write Here": "Écrivez ici",
          "Choose Method": "Choisir la méthode",
          "Hourly Rate": "Tarif horaire",
          "Set Minimum Price": "Définir le prix minimum",
          "Set Maximum Price": "Définir le prix maximum",
          "Payment Note": "Bulletin de paiement",

          "I agree to the design Confection Ethiques":
            "J'accepte le design Confection Ethiques",
          "Terms of Services": "Conditions de services",
          and: "et",
          "Privacy Policy": "Politique de confidentialité",
          "Publish Ad": "Publier l'annonce",
          Hip: "Hanche",
          Thigh: "La cuisse",
          "Head to floor height": "Hauteur de la tête au sol",
          Ankle: "La cheville",
          Calf: "Veau",
          "Waist size": "Tour de taille",
          "Chest size": "Tour de poitrine",
          Arm: "Bras",
          "From shoulder to floor": "De l'épaule au sol",
          "From waist to floor": "De la taille au sol",
          "Arm length": "Longueur de bras",
          "(handle)": "(manipuler)",
          "Leg length": "Longueur de jambe",
          Next: "Suivant",
          large: "grand",
          medium: "moyen",
          Basic: "Basique",
          Delivery: "Livraison",
          Notes: "Remarques",
        },
      },
    },

    fallbackLng: "fr",
    debug: true,

    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false, // we use content as keys
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
