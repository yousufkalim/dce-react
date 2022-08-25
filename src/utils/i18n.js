import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

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
          'Submit your idea,': 'Submit your idea,',
          'We make it real,': 'We make it real,',
          'You receive your creation': 'You receive your creation',
          'New Order': 'New Order',
          'at home!': 'at home!',
          'Place Your Ad': 'Place Your Ad',
          'Orders List': 'Orders List',
          'See all': 'See all',
          Search: 'Search',
          'Place New Ad': 'Place New Ad',
          'Place this Order': 'Place this Order',
          'Privacy Policy': 'Privacy Policy',
          'Select gender for your creation': 'Select gender for your creation',
          'I am concretizing my idea of tailoring': 'I am concretizing my idea of tailoring',
          'Do you have an idea for tailoring?': 'Do you have an idea for tailoring?',
          'Submit Your Project here!': 'Submit Your Project here!',
          'desired delivery date': 'desired delivery date',
          'Find your sewing assignments': 'Find your sewing assignments',
          //client navbar
          Designers: 'Designers',
          Orders: 'Orders',
          'My Ads': 'My Ads',
          Quotes: 'Missions',
          Help: 'Help',
          Chats: 'Chats',
          'Terms and Conditions': 'Terms and Conditions',
          Profile: 'Profile',
          Support: 'Support',
          Logout: 'Logout',
          'Privacy Policy': 'Privacy Policy',
          'Order created successfully.': 'Order created successfully.',
          'Ad updated successfully.': 'Ad updated successfully.',
          Reviews: 'Reviews',
          ', Developed by Falcon Consulting. All rights reserved.': ', Developed by Falcon Consulting. All rights reserved.',
          'Describe about submit report': 'Describe about submit report',
          Edit: 'Edit',
          Phone: 'Phone',
          Email: 'Email',
          'Date Of Birth': 'Date Of Birth',
          City: 'City',
          Country: 'Country',
          Location: 'Location',
          'Last Password Changed': 'Last Password Changed',
          Password: 'Password',
          'Account Created': 'Account Created',

          //order
          Order: 'Order',
          'Order Date': 'Order Date',
          'Delivery Date': 'Delivery Date',
          'Coming soon!': 'Coming soon!',
          Rating: 'Rating',
          Cancel: 'Cancel',
          Details: 'Details',
          'Place Your Order': 'Place Your Order',
          'Image must be selected': 'Image must be selected',
          'Delivery Note': 'Delivery Note',
          'Catalogue created successfully.': 'Catalogue created successfully.',
          'No Orders': 'No Orders',
          //my ads
          Ads: 'Ads',
          'Name of Creation': 'Name of Creation',
          'Ad for': 'Ad for',
          'Delivery Date': 'Delivery Date',
          min: 'min',
          max: 'max',
          Range: 'Range',
          Responses: 'Responses',
          Offer: 'Offer',
          Discard: 'Discard',
          'Standard size': 'Standard size',
          'No Ads Yet': 'No Ads Yet',

          'Chat Here': 'Chat Here',
          'Ad Basic': 'Ad Basic',
          Delivery: 'Delivery',
          Payment: 'Payment',
          Basic: 'Basic',
          Notes: 'Notes',
          Delivery: 'Delivery',
          "*I'm getting a tape measure": "*I'm getting a tape measure",
          '*depending on the garment, I measure certain parts of the body in circumference and/or length.':
            '*depending on the garment, I measure certain parts of the body in circumference and/or length.',
          'Dominant color': 'Dominant color',
          'Dominant Fabric': 'Dominant Fabric',
          'I select the category to which my con...': 'I select the category to which my con...',
          'I give a name to my confection': 'I give a name to my confection',
          'My Measurements': 'My Measurements',
          "I'm taking my measurements": "I'm taking my measurements",
          'upload an illustration of your creation': 'upload an illustration of your creation',
          size: 'size',
          'I do desired not that my creation appears on the site': 'I do desired not that my creation appears on the site',
          'My PROJECT': 'My PROJECT',
          'My Delivery': 'My Delivery',
          Remarks: 'Remarks',
          'First Name': 'First Name',
          'Last Name': 'Last Name',
          Height: 'Height',
          'Plain Fabric': 'Plain Fabric',
          'Patterned Fabric': 'Patterned Fabric',
          'Fabric Description': 'Fabric Description',
          'any note (s) concerning the delivery': 'any note (s) concerning the delivery',
          'I agree with terms & condition & privacy policy of': 'I agree with terms & condition & privacy policy of',
          Cotton: 'Cotton',
          Muslin: 'Muslin',
          Satin: 'Satin',
          Jersey: 'Jersey',
          Garbadine: 'Garbadine',
          Jacquard: 'Jacquard',
          Wool: 'Wool',
          Linen: 'Linen',
          Polar: 'Polar',
          'Imitation Leather': 'Imitation Leather',
          Velvet: 'Velvet',
          Viscose: 'Viscose',
          'OTHER: to write': 'OTHER: to write',
          Flowers: 'Flowers',
          Experience: 'Experience',
          Diploma: 'Diploma',
          'Area of Expertise': 'Area of Expertise',
          'Shop name': 'Shop name',
          Bio: 'Bio',

          //chats
          Online: 'Online',
          'Last Online': 'Last Online',
          Chats: 'Chats',
          'Recent Chats': 'Recent Chats',
          Messages: 'Messages',
          Saab: 'Saab',
          Mercedes: 'Mercedes',
          Audi: 'Audi',
          Delete: 'Delete',

          //faq
          'Frequently Asked Question': 'Frequently Asked Question',
          'A frequently asked questions list is often used in articles, websites, email lists, and online forums where common questions tend to recur, for example through posts or queries':
            'A frequently asked questions list is often used in articles, websites, email lists, and online forums where common questions tend to recur, for example through posts or queries',

          //measurements
          Measurements: 'Measurements',
          'Get a tape': 'Get a tape',
          'Important: If you hesitate between two sizes, take the larger one.':
            'Important: If you hesitate between two sizes, take the larger one.',
          'Standard Size Chart': 'Standard Size Chart',
          'Video Tutorial': 'Video Tutorial',
          Measure: 'Measure',
          'Tape Measurements': 'Tape Measurements',
          Circumference: 'Circumference',

          //orderFromCatalog
          'Catalogue Price': 'Catalogue Price',
          'Extra Note': 'Extra Note',
          'Place Order': 'Place Order',
          'Send Message': 'Send Message',

          //search results
          'Designers Found': 'Designers Found',
          Experience: 'Experience',
          Speciality: 'Speciality',

          //Terms & Conditions
          'Terms & Conditions': 'Terms & Conditions',

          //ViewCatalog
          Description: 'Description',
          Charges: 'Charges',
          'Review & rating': 'Review & rating',
          'Stitching Price': 'Stitching Price',

          //viewOrder
          'Client Basic': 'Client Basic',
          'See All Orders': 'See All Orders',
          'See All Requests': 'See All Requests',

          //view tailor
          'Designer Profile': 'Designer Profile',
          'Quote sent successfully.': 'Mission sent successfully.',

          //--------------------------------------------------------------Designer--------------------------------------------------
          //catalogue
          'My Catalogue': 'My Catalogue',
          Diploma: 'Diploma',
          Feedback: 'Feedback',
          //clientProfile
          Order: 'Order',
          Bill: 'Bill',
          'Client Profile': 'Client Profile',
          'Client Orders': 'Client Orders',
          'Order Date': 'Order Date',
          'Delivery Date': 'Delivery Date',

          //Edit Catalogue
          'Edit Catalogue': 'Edit Catalogue',
          Name: 'Name',
          Gender: 'Gender',
          Male: 'Male',
          Female: 'Female',
          Category: 'Category',
          WOMEN: 'WOMEN',
          MAN: 'MAN',
          CHILD: 'CHILD',
          Other: 'Other',
          Price: 'Price',
          Attachments: 'Attachments',
          'Fixed price': 'Fixed price',
          'Select one category for your ad': 'Select one category for your ad',

          //home
          Fabric: 'Fabric',
          Date: 'Date',
          Note: 'Note',
          'Welcome to the': 'Welcome to the',
          'Now You receive your': 'Now You receive your',
          'order here': 'order here',
          'Find Quotes': 'Find Missions',
          'Order Requests': 'Order Requests',
          'See all': 'See all',
          'Recent Orders': 'Recent Orders',

          //HOW IT WORKS ?
          'HOW IT WORKS ?': 'HOW IT WORKS ?',
          in_progress: 'in_progress',
          completed: 'completed',
          discarded: 'discarded',
          'In just a few clicks, Design Créations allows you to find one-off assignments in':
            'In just a few clicks, Design Créations allows you to find one-off assignments in',

          'in the production and manufacture of clothing, decorative elements.':
            'in the production and manufacture of clothing, decorative elements.',

          'or household linen.': 'or household linen.',
          'Write any note regarding Payment (Optional)': 'Write any note regarding Payment (Optional)',

          '1 . Find the right clients for you': '1 . Find the right clients for you',
          'Design creation puts you in touch with potential customers suited to your profile':
            'Design creation puts you in touch with potential customers suited to your profile',
          '2 . Focus on the essentials': '2 . Focus on the essentials',
          'Design creation manages all the formalities relating to the provision of services':
            'Design creation manages all the formalities relating to the provision of services',
          '3 . Post your ad (offer) in just a few clicks': '3 . Post your ad (offer) in just a few clicks',
          'Post your add in 3 steps': 'Post your add in 3 steps',
          'Seamstress selection based on the following criteria:': 'Seamstress selection based on the following criteria:',
          'Reliability / Seriousness': 'Reliability / Seriousness',
          'Rating on the site': 'Rating on the site',
          "Customers' opinion": "Customers' opinion",
          'Tailoring time': 'Tailoring time',
          Passionate: 'Passionate',
          Enthusiastic: 'Enthusiastic',
          Available: 'Available',
          Skills: 'Skills',
          'Material Fabrics': 'Material Fabrics',

          'Know how': 'Know how',
          'General skills': 'General skills',
          'Know and master the techniques of making a garment (cutting, stitching, etc.)':
            'Know and master the techniques of making a garment (cutting, stitching, etc.)',
          'Have knowledge of the different fabrics, materials, colors':
            'Have knowledge of the different fabrics, materials, colors',
          'Make drawings, sketches': 'Make drawings, sketches',
          'Operate the right machinery': 'Operate the right machinery',
          'Prepare detailed quotes': 'Prepare detailed missions',
          'Meet deadlines': 'Meet deadlines',
          'Have knowledge of management': 'Have knowledge of management',
          'Know how to handle computers in particular the Design CREATION site':
            'Know how to handle computers in particular the Design CREATION site',
          View: 'View',
          'Select one colour for your Creations': 'Select one colour for your Creations',

          //order
          'Orders Requests': 'Orders Requests',
          'In Progress': 'In Progress',
          Completed: 'Completed',
          Discarded: 'Discarded',
          'Hourly Rate': 'Hourly Rate',
          Offer: 'Offer',
          'Send Offer': 'Send Offer',
          'You have already sent quote for this ad.': 'You have already sent mission for this ad.',

          //profile
          'Hourly Rate': 'Hourly Rate',
          'Free Shipping': 'Free Shipping',
          'Add Catalogue': 'Add Catalogue',

          //quotes
          'Name of Creation': 'Name of Creation',
          'Ad for': 'Ad for',
          'No quotes yet': 'No missions yet',
          //searchResults
          'Orders Found': 'Orders Found',
          offer: 'offer',
          'Select size': 'Select size',

          'Profile updated successfully.': 'Profile updated successfully.',

          //support center
          Review: 'Review',
          'Bride Dress': 'Bride Dress',
          Pending: 'Pending',
          Completed: 'Completed',
          'Support Center': 'Support Center',
          'Chat With Us': 'Chat With Us',
          'Certain Amount': 'Certain Amount',
          'Any Confection': 'Any Confection',
          "Search Input can't be empty": "Search Input can't be empty",
          'Feedback provided successfully.': 'Feedback provided successfully.',
          'Attachment must be selected': 'Attachment must be selected',

          'Shop Name': 'Shop Name',
          'Ad created successfully.': 'Ad created successfully.',
          'Order completed successfully.': 'Order completed successfully.',

          // terms n conditions
          'General informations': 'General informations',
          'Design CONFECTIONS ETHIQUES is an online platform (with free registration) allowing independent designers to unearth their customers in whole or in part':
            'Design CONFECTIONS ETHIQUES is an online platform (with free registration) allowing independent designers to unearth their customers in whole or in part',
          'Design CONFECTIONS ETHIQUES connects tailors looking for new assignments and/or new clients, with natural persons (individuals) and/or legal persons (companies) looking for a service: tailor-made tailoring clothing, decorative items or linens or any other creations':
            'Design CONFECTIONS ETHIQUES connects tailors looking for new assignments and/or new clients, with natural persons (individuals) and/or legal persons (companies) looking for a service: tailor-made tailoring clothing, decorative items or linens or any other creations',
          'requiring the services of a designer': 'requiring the services of a designer',
          'Your responsibilities if you breach these Terms': 'Your responsibilities if you breach these Terms',
          'Delivery Address': 'Delivery Address',
          'Write any note regarding Delivery (Optional)': 'Write any note regarding Delivery (Optional)',
          'As a seamstress you are bound by the general conditions of sale below, in the event of non-compliance (and this after 2 warnings from Design CRÉATIONS following dissatisfied customers), Design CONFECTIONS ETHIQUES reserves the right to remove you. definitely from his site.':
            'As a seamstress you are bound by the general conditions of sale below, in the event of non-compliance (and this after 2 warnings from Design CRÉATIONS following dissatisfied customers), Design CONFECTIONS ETHIQUES reserves the right to remove you. definitely from his site.',

          'The seamstress is also required to provide neat and quality work with selected quality materials.The seamstress must reside in France in order to respect the “made in France” label.':
            'The seamstress is also required to provide neat and quality work with selected quality materials.The seamstress must reside in France in order to respect the “made in France” label.',
          'Orders are made directly by the customer via the Design CONFECTIONS ETHIQUES site, where the latter has selected the various choices offered to him as to his creation (type, fabric, deadline, etc.). Then his creation is routed to the professional interface of the seamstresses where various quotes will be offered to him.':
            'Orders are made directly by the customer via the DesignCONFECTIONS ETHIQUES site, where the latter has selected the various choices offered to him as to his creation (type, fabric, deadline, etc.). Then his creation is routed to the professional interface of the seamstresses where various missions will be offered to him.',
          Delivery: 'Delivery',
          offline: 'offline',

          'The customer has the choice between various delivery times: 2 weeks, 1 month or to enter a delivery deadline. He can tick the indifferent box if he is not in too much of a hurry.':
            'The customer has the choice between various delivery times: 2 weeks, 1 month or to enter a delivery deadline. He can tick the indifferent box if he is not in too much of a hurry.',
          'The customer pays his entire order (+ delivery costs) directly online. The seamstress is paid (24 hours later) up to 30% (order - 20% commission) at the start of the mission and 70% (order - 20% commission) 48 hours after the end of the mission.':
            'The customer pays his entire order (+ delivery costs) directly online. The seamstress is paid (24 hours later) up to 30% (order - 20% commission) at the start of the mission and 70% (order - 20% commission) 48 hours after the end of the mission.',
          'Cancellation of an order/return procedure': 'Cancellation of an order/return procedure',
          'The service provider (in this case the seamstress) is free to suspend (due to illness, maternity or other), or to terminate the contract that binds it with Design CONFECTIONS ETHIQUES, only if it has no mission In progress. It must inform Design CONFECTIONS ETHIQUES as soon as possible.':
            'The service provider (in this case the seamstress) is free to suspend (due to illness, maternity or other), or to terminate the contract that binds it with Design CONFECTIONS ETHIQUES, only if it has no mission In progress. It must inform Design CONFECTIONS ETHIQUES as soon as possible.',
          'The service provider (in this case the seamstress) is free to suspend (due to illness, maternity or other), or to terminate the contract that binds it with Design CONFECTIONS ETHIQUES, only if it has no mission In progress. It must inform Design CONFECTIONS ETHIQUES as soon as possible.':
            'The service provider (in this case the seamstress) is free to suspend (due to illness, maternity or other), or to terminate the contract that binds it with Design CONFECTIONS ETHIQUES, only if it has no mission In progress. It must inform Design CONFECTIONS ETHIQUES as soon as possible.',
          'Cancellation of contract': 'Cancellation of contract',
          'The service provider (in this case the seamstress) is free to suspend (due to illness, maternity or other), or to terminate the contract that binds it with Design CONFECTIONS ETHIQUES, only if it has no mission In progress. It must inform Design CONFECTIONS ETHIQUES as soon as possible.':
            'The service provider (in this case the seamstress) is free to suspend (due to illness, maternity or other), or to terminate the contract that binds it with Design CONFECTIONS ETHIQUES, only if it has no mission In progress. It must inform Design CONFECTIONS ETHIQUES as soon as possible.',
          'In just a few clicks, Design Créations allows you to find one-off assignments in the production and manufacture of clothing, decorative elements or household linen.In just a few clicks, Design Créations allows you to find one-off assignments ':
            'In just a few clicks, Design Créations allows you to find one-off assignments in the production and manufacture of clothing, decorative elements or household linen.In just a few clicks, Design Créations allows you to find one-off assignments ',

          //viewOrder
          'Want to complete this order': 'Want to complete this order',
          'Create Catalogue': 'Create Catalogue',

          //placeholders
          'Name of your Creation': 'Name of your Creation',
          'Select gender': 'Select gender',
          'Select category': 'Select category',
          'Set your Price': 'Set your Price',
          'Tell us about your service': 'Tell us about your service',
          'Upload Drawing, Photo, Document, etc.': 'Upload Drawing, Photo, Document, etc.',
          'Tell us': 'Tell us',
          Save: 'Save',
          'Write Measurement here': 'Write Measurement here',

          //other
          '*Bring a tape measure': '*Bring a tape measure',
          '*Measure either the circumference or the length depending on the part of the body.':
            '*Measure either the circumference or the length depending on the part of the body.',
          Colour: 'Colour',
          'Select Fabric Style': 'Select Fabric Style',
          'Do you Want': 'Do you Want',
          'ALTREATION SERVICE ?': 'ALTREATION SERVICE ?',
          '*Select Delivery Type according to your Demands': '*Select Delivery Type according to your Demands',
          '*Select Date for delivery': '*Select Date for delivery',
          'Write Here': 'Write Here',
          'Choose Method': 'Choose Method',
          'Set Minimum Price': 'Set Minimum Price',
          'Set Maximum Price': 'Set Maximum Price',
          'Delivery Type': 'Delivery Type',

          'Payment Note': 'Payment Note',
          'I agree to the design Confection Ethiques': 'I agree to the design Confection Ethiques',
          'Terms of Services': 'Terms of Services',
          'Privacy Policy': 'Privacy Policy',
          and: 'and',
          'Publish Ad': 'Publish Ad',
          Arm: 'Arm',
          'Chest size': 'Chest size',
          'Waist size': 'Waist size',
          Hip: 'Hip',
          Thigh: 'Thigh',
          Calf: 'Calf',
          Ankle: 'Ankle',
          'Head to floor height': 'Head to floor height',
          'From shoulder to floor': 'From shoulder to floor',
          'From waist to floor': 'From waist to floor',
          'Arm length': 'Arm length',
          '(handle)': '(handle)',
          Next: 'Next',
          Cut: 'Cut',
          small: 'small',
          large: 'large',
          medium: 'medium',
          'Leg length': 'Leg length',

          //colors
          White: 'White',
          'Silver Grey': 'Silver Grey',
          'Pink Purple': 'Pink Purple',
          'Light Grey': 'Light Grey',
          'Cameo Brown': 'Cameo Brown',
          'Date Red': 'Date Red',
          Muave: 'Muave',
          'Bright Pink': 'Bright Pink',
          Red: 'Red',

          // fabrics
          'Ribbed edges': 'Ribbed edges',
          'The ribbing is used in sewing to make the edges of sleeves, collars, etc. stretch clothing in jersey, knit, fleece for sweatshirts etc. It is a knitted fabric which is mainly used to tighten certain parts of clothing.':
            'The ribbing is used in sewing to make the edges of sleeves, collars, etc. stretch clothing in jersey, knit, fleece for sweatshirts etc. It is a knitted fabric which is mainly used to tighten certain parts of clothing.',
          Chambray: 'Chambray',
          'Chambray fabric is a light canvas whose warp is a colored thread and the weft a white thread. It is often used to make shirts and can also be used to make light clothing and accessories.100% cotton':
            'Chambray fabric is a light canvas whose warp is a colored thread and the weft a white thread. It is often used to make shirts and can also be used to make light clothing and accessories.100% cotton',
          'plain cotton': 'plain cotton',
          'Range of quality plain poplin fabrics 100% cotton - 125 g/m²':
            'Range of quality plain poplin fabrics 100% cotton - 125 g/m²',
          'cotton fabric': 'cotton fabric',
          'Custom cotton fabrics: Polka dots, stars, stripes, checks, flowers... Light cotton fabrics for children and adults.':
            'Custom cotton fabrics: Polka dots, stars, stripes, checks, flowers... Light cotton fabrics for children and adults.',
          'Crepe/Polyester': 'Crepe/Polyester',
          'Fabrics made of polyester, muslin and textured crepe. Polyester fabrics are soft and fluid and can be transparent or opaque. Crepe is a fabric with a slight texture made from synthetic yarns crossed specifically to obtain an irregular effect. They are used to make blouses, skirts, flowing dresses with a nice drape. The crepe can even be used to make ceremonial clothes: wedding dress. This type of fabric also lends itself to being draped for fuzzier garments.':
            'Fabrics made of polyester, muslin and textured crepe. Polyester fabrics are soft and fluid and can be transparent or opaque. Crepe is a fabric with a slight texture made from synthetic yarns crossed specifically to obtain an irregular effect. They are used to make blouses, skirts, flowing dresses with a nice drape. The crepe can even be used to make ceremonial clothes: wedding dress. This type of fabric also lends itself to being draped for fuzzier garments.',
          Lace: 'Lace',
          'Cotton and polyester lace fabrics for clothing: wedding dresses, formal wear. But also for customization or decoration: appliqués, dream catchers. Also consider textile art.':
            'Cotton and polyester lace fabrics for clothing: wedding dresses, formal wear. But also for customization or decoration: appliqués, dream catchers. Also consider textile art.',
          'Water repellent': 'Water repellent',
          'Water-repellent fabrics can be used to make jackets and coats but also accessories. Softshell fabric is used to make windproof mid-season coats. It is made of a water-repellent membrane against the rain and a layer of breathable micro-fleece. Trench fabrics are fluid and light and will make it possible to make light rain jackets but also shopping bags for example. Water-repellent fabrics can be used to make bags or saddlebags.':
            'Water-repellent fabrics can be used to make jackets and coats but also accessories. Softshell fabric is used to make windproof mid-season coats. It is made of a water-repellent membrane against the rain and a layer of breathable micro-fleece. Trench fabrics are fluid and light and will make it possible to make light rain jackets but also shopping bags for example. Water-repellent fabrics can be used to make bags or saddlebags.',
          'double gauze': 'double gauze',
          'Double cotton gauze fabric for clothing and decoration. Double cotton gauze is actually two thin layers of cotton gauze connected by tiny, almost invisible stitches.':
            'Double cotton gauze fabric for clothing and decoration. Double cotton gauze is actually two thin layers of cotton gauze connected by tiny, almost invisible stitches.',
          Lining: 'Lining',
          'Satin lining for clothes, jackets, dresses, coats The satin lining has a nice hold and will also maintain your garment':
            'Satin lining for clothes, jackets, dresses, coats The satin lining has a nice hold and will also maintain your garment',
          Scottish: 'Scottish',
          'Scottish cut fabrics: burberry, checkered fabric, British fabric, Tartan... Different materials for this classic print.':
            'Scottish cut fabrics: burberry, checkered fabric, British fabric, Tartan... Different materials for this classic print.',
          Sponge: 'Sponge',
          '100% Oeko-tex certified cotton terry, thick quality 350 and 430 g/m² Very absorbent white and colored bamboo terry and microfiber, special washable diaper.':
            '100% Oeko-tex certified cotton terry, thick quality 350 and 430 g/m² Very absorbent white and colored bamboo terry and microfiber, special washable diaper.',
          // TODO: TRANS REMAINING

          //colors
          White: 'White',
          'Silver Grey': 'Silver Grey',
          'Pink Purple': 'Pink Purple',
          'Light Grey': 'Light Grey',
          'Cameo Brown': 'Cameo Brown',
          'Date Red': 'Date Red',
          Muave: 'Muave',
          'Bright Pink': 'Bright Pink',
          Red: 'Red',

          // Umar's
          'I agree': 'I agree',
          'Book call (on schedule) for measurement': 'Book call (on schedule) for measurement',
          'I also understand that any incomplete address, altered date of birth, use of an identity different from mine, or any falsified document will lead to the immediate and definitive suspension of my account and that I will therefore no longer be able to become a service provider on DCE.':
            'I also understand that any incomplete address, altered date of birth, use of an identity different from mine, or any falsified document will lead to the immediate and definitive suspension of my account and that I will therefore no longer be able to become a service provider on DCE.',
          'I declare on my honor that the information provided is accurate, as well as the identity document attached above is authentic, belongs to me, and meets all the required conditions.':
            'I declare on my honor that the information provided is accurate, as well as the identity document attached above is authentic, belongs to me, and meets all the required conditions.',
          Accept: 'Accept',
          'Urgent, Normal': 'Urgent, Normal',
          Urgent: 'Urgent',
          Normal: 'Normal',
          Address: 'Address',
          'Create Catalog After': 'Create Catalog After',
          'ORDER COMPLETION ?': 'ORDER COMPLETION ?',
          pending: 'pending',
          'in progress': 'in progress',
          completed: 'completed',
          discarded: 'discarded',
          'Sent you an order request.': 'Sent you an order request.',
          'Order request accepted.': 'Order request accepted.',
          'Order discarded.': 'Order discarded.',
          'Order completed.': 'Order completed.',
          'Feedback given by client.': 'Feedback given by client.',
          'Sent quote on your order.': 'Sent mission on your order.',
          'Accepted your quote.': 'Accepted your mission.',
          'Sent you a message.': 'Sent you a message.',
          'Type a message here': 'Type a message here',
          'Forgot Password?': 'Forgot Password?',
          Login: 'Login',
          "Don't have an account?": "Don't have an account?",
          'Register now': 'Register now',
          'Register As a': 'Register As a',
          Client: 'Client',
          Designer: 'Designer',
          'Sign up': 'Sign up',
          'Already have an account?': 'Already have an account?',
          'Sign in now': 'Sign in now',
          'Verification Code': 'Verification Code',
          'Create Account': 'Create Account',
          'Name of your company': 'Name of your company',
          'Phone No': 'Phone No',
          'I Have Physical Store': 'I Have Physical Store',
          'Store Name': 'Store Name',
          'Date of Birth': 'Date of Birth',
          'Select your gender': 'Select your gender',

          // TransFile
          // XYZ1
          'SHIRT / BLOUSE': 'SHIRT / BLOUSE',
          'JUMPSUIT / DUNGAREES': 'JUMPSUIT / DUNGAREES',
          VEST: 'VEST',
          SKIRT: 'SKIRT',
          'TROUSERS / SHORTS': 'TROUSERS / SHORTS',
          DRESS: 'DRESS',
          TUNIC: 'TUNIC',
          JACKET: 'JACKET',
          PANTS: 'PANTS',
          PYJAMAS: 'PYJAMAS',
          'SCHOOL APRON': 'SCHOOL APRON',
          DISGUISE: 'DISGUISE',

          // XYZ2
          INVOICE: 'INVOICE',
          'Payment Terms:': 'Payment Terms:',
          'Due Date:': 'Due Date:',
          'PO Number:': 'PO Number:',
          'Balance Due:': 'Balance Due:',
          'Bill To:': 'Bill To:',
          'Ship To:': 'Ship To:',
          'Subtotal:': 'Subtotal:',
          'Tax (0%):': 'Tax (0%):',
          'Shipping:': 'Shipping:',
          'Total:': 'Total:',

          // XYZ3
          'Fake fur': 'Fake fur',
          Festive: 'Festive',
          Felt: 'Felt',
          Net: 'Net',
          Gabardine: 'Gabardine',
          Jacquard: 'Jacquard',
          Jersey: 'Jersey',
          'Velor jersey': 'Velor jersey',
          'jersey sweatshirt': 'jersey sweatshirt',
          Woolen: 'Woolen',
          'Soft woolen fabric': 'Soft woolen fabric',
          Lange: 'Lange',
          Linen: 'LanLinene',
          Meshes: 'Meshes',
          Quilted: 'Quilted',
          Honeycomb: 'Honeycomb',
          'Cotton piqué': 'Cotton piqué',
          'Fleece / comforter': 'Fleece / comforter',
          'PUL washable diapers': 'PUL washable diapers',
          'Faux leather': 'Faux leather',
          Tulle: 'Tulle',
          Velvet: 'Velvet',
          Gingham: 'Gingham',

          // V2
          'Why DCE': 'Why DCE',
          'How Its Work': 'How Its Work',
          Register: 'Register',
          'Welcome to the Design Confection Ethiques': 'Welcome to the Design Confection Ethiques',
          'Hire The Best Designers For Your Confection': 'Hire The Best Designers For Your Confection',
          'Hire Designer': 'Hire Designer',
          Or: 'Or',
          'register as a Designer': 'register as a Designer',
          'Why Choose DCE': 'Why Choose DCE',
          'Post Ads': 'Post Ads',
          'Choose Designer': 'Choose Designer',
          'Pay Safely': 'Pay Safely',
          'At Your Door Step': 'At Your Door Step',
          'We Are Here To Help': 'We Are Here To Help',
          'Find Great Work': 'Find Great Work',
          'FIND OPPORTUNITIES': 'FIND OPPORTUNITIES',
          'EXPLORE DIFFERENT WAYS TO EARN': 'EXPLORE DIFFERENT WAYS TO EARN',
          'CONTROL WHEN, WHERE, AND HOW YOU WORK': 'CONTROL WHEN, WHERE, AND HOW YOU WORK',
        },
      },
      fr: {
        translations: {
          //----------------------------------------------------------Client-------------------------------------------------------

          // client home
          'Submit your idea,': 'Soumettez-nous votre idée,',
          'We make it real,': 'nous la concrétisons !',
          'You receive your creation': 'Vous recevez votre création',
          'at home!': 'à la maison!',
          'Place Your Ad': 'Placez votre annonce',
          'Orders List': 'Liste des commandes',
          'See all': 'Voir tout',
          Search: 'Recherche',
          Feedback: 'Retour',
          'I am concretizing my idea of tailoring': 'Je concrétise mon idée',
          'Do you have an idea for tailoring?': 'Vous avez une idée de confection couture ?',
          'Submit Your Project here!': 'DÉPOSEZ ici VOTRE PROJET !',
          'desired delivery date': 'date de livraison souhaitée',
          'Find your sewing assignments': 'Trouvez vos devoirs de couture',

          //client navbar
          Designers: 'Professionnels',
          Orders: 'Ordres',
          'My Ads': 'Mes annonces',
          Chats: 'Chats',
          'Terms and Conditions': 'Termes et conditions',
          Profile: 'Profil',
          Quotes: 'Devis',
          'Privacy Policy': 'Politique de confidentialité',
          'Place New Ad': 'Créer une nouvelle annonce',
          Support: 'Support',
          Logout: 'Se déconnecter',
          'Send Message': 'Envoyer le message',
          View: 'Voir',
          'Delivery Note': 'Bon de livraison',

          //Profile
          Edit: 'Modifier',
          Phone: 'Téléphone',
          Email: 'E-mail',
          'Date Of Birth': 'Date de naissance',
          City: 'Ville',
          Country: 'Pays',
          Location: 'Localisation',
          'Last Password Changed': 'Dernier mot de passe modifié',
          Password: 'Mot de passe',
          'Account Created': 'Compte créé',
          'Ad updated successfully.': 'Annonce mise à jour avec succès.',
          'Place this Order': 'Passer commande',

          //order

          Order: 'Commande',
          'Order Date': 'Date de commande',
          'New Order': 'Nouvelle commande',
          'Delivery Date': 'Date de livraison',
          'Coming soon!': 'Bientôt disponible!',
          Rating: 'Évaluation',
          Cancel: 'Annuler',
          Details: 'Détails',
          'Place Your Order': 'Passer commande',
          'Feedback provided successfully.': 'Commentaires envoyés avec succès.',
          'No Order': 'Aucune commande',
          //my ads
          Ads: 'Publicités',
          'No Ads Yet': 'Aucune annonce pour le moment',
          'Name of Creation': 'Nom de la création',
          'Ad for': 'Annonce pour',
          'Delivery Date': 'Date de livraison',
          min: 'min',
          max: 'max',
          Range: 'Fourchette',
          Responses: 'Réponses',
          Offer: 'Commande',
          Discard: 'Annuler',
          'Chat Here': 'Chattez ici',
          'Ad Basic': 'Annonce de base',
          Delivery: 'Livraison',
          Payment: 'Paiement',
          'Profile updated successfully.': 'Mise à jour du profil réussie.',
          "*I'm getting a tape measure": "Je me munis d'un mètre ruban",
          '*depending on the garment, I measure certain parts of the body in circumference and/or length.':
            'en fonction du vêtement, je mesure certaines parties du corps en circonférence et/ou en longueur',
          'Dominant color': 'Couleur dominante',
          'Dominant Fabric': 'TISSU dominant',
          'I select the category to which my con...': 'Je sélectionne la catégorie à laquelle mon con...',
          'I give a name to my confection': 'Je donne un nom à ma confection',
          'My Measurements': 'Des mesures',
          "I'm taking my measurements": 'je prends mes mesures',
          'upload an illustration of your creation': 'téléchargez une illustration de votre création',
          size: 'Taille',
          'I do desired not that my creation appears on the site': 'Je ne souhaite pas que ma création apparaisse sur le site',
          'MY PROJECT': 'Mon projet',
          'My delivery': 'Ma livraison',
          Remarks: 'Mon budget',
          'First Name': 'Prénom',
          'Last Name': 'Nom de famille',
          Height: 'Hauteur',
          'Plain Fabric': 'tissu uni',
          'Patterned Fabric': 'tissu à motif',
          'Fabric Description': 'Description du tissu',
          'any note (s) concerning the delivery': 'toute note concernant la livraison',
          'I agree with terms & condition & privacy policy of':
            "J'accepte les conditions générales et la politique de confidentialité de",
          Flowers: 'Fleurs',
          Cotton: 'coton',
          Muslin: 'mousseline',
          Satin: 'satin',
          Jersey: 'jersey',
          Garbadine: 'garbadine',
          Jacquard: 'jacquard',
          Wool: 'laine',
          Linen: 'lin',
          Polar: 'polaire',
          'Imitation Leather': 'simili cuir',
          Velvet: 'velours',
          Viscose: 'viscose',
          'OTHER: to write': 'AUTRE: à écrire',
          Experience: 'Experiences',
          Diploma: 'Diplome',
          'Area of Expertise': 'Domaine de competence',
          'Shop name': 'Nom de la boutique',
          Bio: 'Bio',

          //chats
          Online: 'En ligne',
          'Last Online': 'Dernière connexion',
          Chats: 'Chats',
          'Recent Chats': 'Chats récents',
          "Search Input can't be empty": 'La recherche ne peut pas être vide',

          Messages: 'Messages',
          Delete: 'Supprimer',
          'Stitching Price': 'Prix ​​de couture',
          Reviews: 'Commentaires',

          //faq
          'Frequently Asked Question': 'Question fréquemment posée',
          'A frequently asked questions list is often used in articles, websites, email lists, and online forums where common questions tend to recur, for example through posts or queries':
            'La liste de questions fréquemment posées est souvent utilisée dans les articles, les sites Web, les listes de diffusion et les forums en ligne où les questions courantes ont tendance à se reproduire, par exemple via des publications ou des requêtes.',

          //measurements
          Measurements: 'Mensurations',
          'Get a tape': 'Prenez une bande métrique',
          'Important: If you hesitate between two sizes, take the larger one.':
            'Important : Si vous hésitez entre deux tailles, prenez la plus grande.',
          'Standard Size Chart': 'Tableau des tailles standards',
          'Standard size': 'Taille standard',
          'Video Tutorial': 'Didacticiel vidéo',
          Measure: 'Mesure',
          'Tape Measurements': 'Mesures par bande métrique',
          Circumference: 'Circonférence',

          //orderFromCatalog
          'Catalogue Price': 'Prix ​​catalogue',
          'Extra Note': 'Remarque supplémentaire',
          'Place Order': 'Passer commande',

          //search results
          'Designers Found': 'Professionnels trouvés',
          Experience: 'Expérience',
          Speciality: 'Spécialité',

          //Terms & Conditions
          'Terms & Conditions': 'Termes et conditions',
          'Select size': 'Sélectionnez la taille',
          'You have already sent quote for this ad.': 'Vous avez déjà envoyé un devis pour cette annonce.',

          //ViewCatalog
          Description: 'Description',
          Charges: 'Tarifs',
          'Review & rating': 'Revue et évaluation',
          'Select one category for your ad': 'Sélectionnez une catégorie pour votre annonce',

          //viewOrder
          'Client Basic': 'Client de base',

          //view tailor
          'Designer Profile': 'Profil du professionnel',

          //--------------------------------------------------------------Designer--------------------------------------------------

          //catalogue
          'My Catalogue': 'Mon catalogue',

          //clientProfile
          Order: 'Commande',
          Bill: 'Facture',
          'Client Profile': 'Profil client',
          'Client Orders': 'Commandes clients',
          'Order Date': 'Date de commande',
          'Delivery Date': 'Date de livraison',

          //Edit Catalogue
          'Edit Catalogue': 'Modifier le catalogue',
          Name: 'Nom',
          Gender: 'Genre',
          Male: 'Homme',
          Female: 'Femme',
          Category: 'Catégorie',
          WOMAN: 'Femme',
          MAN: 'Homme',
          CHILD: 'Enfant',
          Other: 'Autre',
          Price: 'Prix',
          Attachments: 'Pièces jointes',
          ', Developed by Falcon Consulting. All rights reserved.': ', Développé par Falcon Consulting. Tous droits réservés.',
          'Select gender for your creation': 'Sélectionnez le genre pour votre création',
          'Write Measurement here': 'Entrez les mensurations ici',
          'Order completed successfully.': 'Commande terminée avec succès.',
          //home
          Fabric: 'Tissu',
          Date: 'Date',
          Note: 'Observations',
          'Welcome to the': 'Bienvenue à la',
          'Now You receive your': 'Maintenant, vous recevez votre',
          'order here': 'Commander ici',
          'Find Quotes': 'Demandes de devis',
          'Order Requests': 'Commande',
          'See all': 'Voir tout',
          'Recent Orders': 'Dernières commandes',
          'Quote sent successfully.': 'Devis envoyé avec succès.',
          'Describe about submit report': 'Décrivez à propos de la soumission du rapport',

          //HOW IT WORKS ?
          'HOW IT WORKS ?': 'COMMENT ÇA FONCTIONNE ?',
          in_progress: 'en cours',
          completed: 'terminé',
          discarded: 'mis au rebut',
          Help: 'Aide',
          'Privacy Policy': 'Politique de confidentialité',
          'In just a few clicks, Design Créations allows you to find one-off assignments':
            'En quelques clics, Design Créations vous permet de trouver des missions ponctuelles',

          'in the production and manufacture of clothing, decorative elements.':
            "dans la production et la fabrication de vêtements, d'éléments décoratifs.",

          'or household linen.': 'ou linge de maison.',

          'In just a few clicks, Design Créations allows you to find one-off assignments in the production and manufacture of clothing, decorative elements or household linen.In just a few clicks, Design Créations allows you to find one-off assignments ':
            "En quelques clics, Design Créations vous permet de trouver des missions ponctuelles dans la production et la confection de vêtements, d'éléments de décoration ou de linge de maison. En quelques clics, Design Créations vous permet de trouver des missions ponctuelles",
          '1 . Find the right clients for you': '1 . Trouvez les bons clients pour vous',
          'Design creation puts you in touch with potential customers suited to your profile':
            'La création de design vous met en relation avec des clients potentiels adaptés à votre profil',
          '2 . Focus on the essentials': "2 . Concentrez-vous sur l'essentiel",
          'Design creation manages all the formalities relating to the provision of services':
            'Design création gère toutes les formalités liées à la prestation de services',
          '3 . Post your ad (offer) in just a few clicks': '3 . Déposez votre annonce (offre) en quelques clics',
          'Post your add in 3 steps': 'Publiez votre annonce en 3 étapes',
          'Upload Drawing, Photo, Document, etc.': 'Télécharger un dessin, une photo, un document, etc.',

          'Seamstress selection based on the following criteria:': 'Sélection des couturières selon les critères suivants :',
          'Reliability / Seriousness': 'Fiabilité / Sérieux',
          'Rating on the site': 'Note sur le site',
          "Customers' opinion": 'Avis des clients',
          'Tailoring time': 'Temps de couture',
          Passionate: 'Passionné',
          Enthusiastic: 'Enthousiaste',
          Available: 'Disponible',
          Skills: 'Compétences',
          'Delivery Type': 'Type de livraison',
          small: 'petit',
          'Attachment must be selected': 'La pièce jointe doit être sélectionnée',

          Save: 'Sauver',
          'Know how': 'Savoir-faire',
          'General skills': 'Compétences générales',
          'Know and master the techniques of making a garment (cutting, stitching, etc.)':
            "Connaître et maîtriser les techniques de confection d'un vêtement (coupe, couture, etc.)",
          'Have knowledge of the different fabrics, materials, colors': 'Connaître les différents tissus, matières, couleurs',
          'Make drawings, sketches': 'Faire des dessins, des croquis',
          'Operate the right machinery': 'Utiliser les bonnes machines',
          'Prepare detailed quotes': 'Préparer des devis détaillés',
          'Meet deadlines': 'Respecter les délais',
          'Have knowledge of management': 'Avoir des connaissances en gestion',
          'Know how to handle computers in particular the Design CREATION site':
            "Savoir manier l'informatique notamment le site Design CREATION",
          Cut: 'Couper',

          //order
          'Orders Requests': 'Commandes',
          'In Progress': 'En cours',
          Completed: 'Terminé',
          Discarded: 'Mis au rebut',
          Offer: 'Offre',

          //profile
          'Hourly Rate': 'Taux horaire',
          'Free Shipping': 'Livraison gratuite',
          'Add Catalogue': 'Ajouter un catalogue',

          //quotes
          'Name of Creation': 'Nom de la création',
          'Ad for': 'Annonce pour',
          'No quotes yet': 'Pas encore de devis',
          //searchResults
          'Orders Found': 'Commandes trouvées',
          offer: 'offre',
          'Write any note regarding Delivery (Optional)': 'Écrivez toute note concernant la livraison (facultatif)',
          'Write any note regarding Payment (Optional)': 'Écrivez toute note concernant le paiement (facultatif)',
          //support center
          Review: 'La revue',
          'Bride Dress': 'Robe de mariée',
          Pending: 'En attente',
          Completed: 'Terminé',
          'Support Center': 'Centre de soutien',
          'Chat With Us': 'Discute avec nous',
          'Image must be selected': "L'image doit être sélectionnée",
          'Ad created successfully.': 'Annonce créée avec succès.',
          'Order created successfully.': 'Commande créée avec succès.',

          // terms n conditions
          'General informations': 'Informations générales',
          'Design CONFECTIONS ETHIQUES is an online platform (with free registration) allowing independent designers to unearth their customers in whole or in part':
            'Design CONFECTIONS ETHIQUES est une plateforme en ligne (avec inscription gratuite) permettant aux professionnels indépendants de dénicher tout ou partie de leurs clients',
          'Design CONFECTIONS ETHIQUES connects tailors looking for new assignments and/or new clients, with natural persons (individuals) and/or legal persons (companies) looking for a service: tailor-made tailoring clothing, decorative items or linens or any other creations':
            "Design CONFECTIONS ETHIQUES met en relation des tailleurs à la recherche de nouvelles missions et/ou de nouveaux clients, avec des personnes physiques (particuliers) et/ou morales (entreprises) à la recherche d'un service : confection sur-mesure de vêtements, d'objets de décoration ou de linge de maison ou toutes autres créations",
          'requiring the services of a designer': "nécessitant les services d'un designer",
          'Your responsibilities if you breach these Terms': 'Vos responsabilités si vous enfreignez ces Conditions',
          'As a seamstress you are bound by the general conditions of sale below, in the event of non-compliance (and this after 2 warnings from Design CRÉATIONS following dissatisfied customers), Design CONFECTIONS ETHIQUES reserves the right to remove you. definitely from his site.':
            'En tant que couturière vous êtes lié par les conditions générales de vente ci-dessous, en cas de non-respect (et ce après 2 avertissements de Design CRÉATIONS suite à des clients insatisfaits), Design CONFECTIONS ETHIQUES se réserve le droit de vous retirer définitivement de son site .',
          'The seamstress is also required to provide neat and quality work with selected quality materials.The seamstress must reside in France in order to respect the “made in France” label.':
            'La couturière est également tenue de fournir un travail soigné et de qualité avec des matières sélectionnées de qualité. La couturière doit résider en France afin de respecter le label -made in France.',
          'Orders are made directly by the customer via the Design CONFECTIONS ETHIQUES site, where the latter has selected the various choices offered to him as to his creation (type, fabric, deadline, etc.). Then his creation is routed to the professional interface of the seamstresses where various quotes will be offered to him.':
            "Les commandes sont passées directement par le client via le site DesignCONFECTIONS ETHIQUES, où ce dernier a sélectionné les différents choix qui lui sont proposés quant à sa création (type, tissu, délai, etc.). Puis sa création est acheminée vers l'interface professionnelle de les couturières où différents devis lui seront proposés.",
          Delivery: 'Livraison',
          'Delivery Address': 'Adresse de livraison',
          'The customer has the choice between various delivery times: 2 weeks, 1 month or to enter a delivery deadline. He can tick the indifferent box if he is not in too much of a hurry.':
            "Le client a le choix entre différents délais de livraison : 2 semaines, 1 mois ou saisir un délai de livraison. Il peut cocher la case indifférent s'il n'est pas trop pressé.",
          'The customer pays his entire order (+ delivery costs) directly online. The seamstress is paid (24 hours later) up to 30% (order - 20% commission) at the start of the mission and 70% (order - 20% commission) 48 hours after the end of the mission.':
            "Le client paie l'intégralité de sa commande (+ frais de livraison) directement en ligne. La couturière est payée (24h après) à hauteur de 30% (commande - 20% commission) au début de la mission et 70% (commande - 20% commission) 48h après la fin de la mission.",
          'Cancellation of an order/return procedure': "Annulation d'une commande/procédure de retour",
          'The service provider (in this case the seamstress) is free to suspend (due to illness, maternity or other), or to terminate the contract that binds it with Design CONFECTIONS ETHIQUES, only if it has no mission In progress. It must inform Design CONFECTIONS ETHIQUES as soon as possible.':
            "Le prestataire (en l'occurrence la couturière) est libre de suspendre (pour cause de maladie, maternité ou autre), ou de résilier le contrat qui le lie avec Design CONFECTIONS ETHIQUES, uniquement s'il n'a pas de mission en cours. Il doit en informer Design CONFECTIONS ETHIQUES dans les meilleurs délais.",
          'The service provider (in this case the seamstress) is free to suspend (due to illness, maternity or other), or to terminate the contract that binds it with Design CONFECTIONS ETHIQUES, only if it has no mission In progress. It must inform Design CONFECTIONS ETHIQUES as soon as possible.':
            "Le prestataire (en l'occurrence la couturière) est libre de suspendre (pour cause de maladie, maternité ou autre), ou de résilier le contrat qui le lie avec Design CONFECTIONS ETHIQUES, uniquement s'il n'a pas de mission en cours. Il doit en informer Design CONFECTIONS ETHIQUES dans les meilleurs délais.",
          'Cancellation of contract': 'Annulation de contrat',
          'The service provider (in this case the seamstress) is free to suspend (due to illness, maternity or other), or to terminate the contract that binds it with Design CONFECTIONS ETHIQUES, only if it has no mission In progress. It must inform Design CONFECTIONS ETHIQUES as soon as possible.':
            "Le prestataire (en l'occurrence la couturière) est libre de suspendre (pour cause de maladie, maternité ou autre), ou de résilier le contrat qui le lie avec Design CONFECTIONS ETHIQUES, uniquement s'il n'a pas de mission en cours. Il doit en informer Design CONFECTIONS ETHIQUES dans les meilleurs délais.",

          //viewOrder
          'Want to complete this order': 'Vous souhaitez finaliser cette commande',

          //placeholders
          'Name of your Creation': 'Nom de votre Création',
          'Select gender': 'Sélectionnez le genre',
          'Select category': 'Choisir une catégorie',
          'Set your Price': 'Fixez votre prix',
          'Tell us about your service': 'Parlez-nous de votre prestation',
          'Create Catalogue': 'Créer un catalogue',

          'See All Orders': 'Voir toutes les commandes',
          'See All Requests': 'Voir toutes les demandes',
          'Send Offer': 'Envoyer une offre',
          'Tell us': 'Dites-nous',
          'Certain Amount': 'Certain Montant',
          'Any Confection': "N'importe quelle confiserie",
          Diploma: 'Diplôme',
          'Shop Name': 'Nom de la boutique',
          'Fixed price': 'Prix fixe',
          offline: 'hors ligne',

          //others
          '*Measure either the circumference or the length depending on the part of the body.':
            '*Mesurer soit la circonférence soit la longueur selon la partie du corps.',
          '*Bring a tape measure': '*Apportez un mètre ruban',
          Colour: 'Couleur',

          'Select one colour for your Creations': 'Sélectionnez une couleur pour vos Créations',
          'Material Fabrics': 'Matériaux Tissus',
          'Select Fabric Style': 'Sélectionnez le style de tissu',

          'Do you Want': 'Veux-tu',
          'ALTREATION SERVICE ?': 'SERVICE DE MODIFICATION ?',
          '*Select Delivery Type according to your Demands': '*Sélectionnez le type de livraison en fonction de vos demandes',
          '*Select Date for delivery': '*Sélectionnez la date de livraison',
          'Write Here': 'Écrivez ici',
          'Choose Method': 'Choisir la méthode',
          'Hourly Rate': 'Tarif horaire',
          'Set Minimum Price': 'Définir le prix minimum',
          'Set Maximum Price': 'Définir le prix maximum',
          'Payment Note': 'Bulletin de paiement',

          'I agree to the design Confection Ethiques': "J'accepte le design Confection Ethiques",
          'Terms of Services': 'Conditions de services',
          and: 'et',
          'Privacy Policy': 'Politique de confidentialité',
          'Publish Ad': 'publier mon projet',
          Hip: 'Hanche',
          Thigh: 'La cuisse',
          'Head to floor height': 'Hauteur de la tête au sol',
          Ankle: 'La cheville',
          Calf: 'Veau',
          'Waist size': 'Tour de taille',
          'Chest size': 'Tour de poitrine',
          Arm: 'Bras',
          'From shoulder to floor': "De l'épaule au sol",
          'From waist to floor': 'De la taille au sol',
          'Arm length': 'Longueur de bras',
          '(handle)': '(manipuler)',
          'Leg length': 'Longueur de jambe',
          Next: 'Suivant',
          large: 'grand',
          medium: 'moyen',
          Basic: 'Basique',
          Delivery: 'Livraison',
          Notes: 'Remarques',
          'Catalogue created successfully.': 'Catalogue créé avec succès.',
          //colors
          White: 'blanche',
          'Silver Grey': 'Gris Argenté',
          'Pink Purple': 'Rose-mauve',
          'Light Grey': 'Gris clair',
          'Cameo Brown': 'Brun camée',
          'Date Red': 'Date Rouge',
          Muave: 'Muave',
          'Bright Pink': 'Rose vif',
          Red: 'Rouge',

          // fabrics
          'Ribbed edges': 'Bords côtelés',
          'The ribbing is used in sewing to make the edges of sleeves, collars, etc. stretch clothing in jersey, knit, fleece for sweatshirts etc. It is a knitted fabric which is mainly used to tighten certain parts of clothing.':
            "Le bord-côte est utilisé en couture pour réaliser les bords des manches, des cols, etc. des vêtements extensibles en jersey, en maille, en polaire pour les sweats etc. C'est une étoffe à mailles qui sert principalement à resserrer certaines parties des vêtements.",
          Chambray: 'Chambray',
          'Chambray fabric is a light canvas whose warp is a colored thread and the weft a white thread. It is often used to make shirts and can also be used to make light clothing and accessories.100% cotton':
            "Le tissu chambray est une toile légère dont la chaîne est un fil coloré et la trame un fil blanc. Il est souvent utilisé pour la confection de chemises et peut également être utilisé pour la confection de vêtements légers et d'accessoires 100% coton",
          'plain cotton': 'coton uni',
          'Range of quality plain poplin fabrics 100% cotton - 125 g/m²':
            'Gamme de tissus popeline unis de qualité 100% coton - 125 g/m²',
          'cotton fabric': 'tissu en coton',
          'Custom cotton fabrics: Polka dots, stars, stripes, checks, flowers... Light cotton fabrics for children and adults.':
            'Tissus coton sur mesure : Pois, étoiles, rayures, carreaux, fleurs... Tissus coton légers pour enfants et adultes.',
          'Crepe/Polyester': 'Crêpe/Polyester',
          'Fabrics made of polyester, muslin and textured crepe. Polyester fabrics are soft and fluid and can be transparent or opaque. Crepe is a fabric with a slight texture made from synthetic yarns crossed specifically to obtain an irregular effect. They are used to make blouses, skirts, flowing dresses with a nice drape. The crepe can even be used to make ceremonial clothes: wedding dress. This type of fabric also lends itself to being draped for fuzzier garments.':
            'Tissus en polyester, mousseline et crêpe texturé. Les tissus en polyester sont doux et fluides et peuvent être transparents ou opaques. Le crêpe est un tissu à texture légère composé de fils synthétiques croisés spécifiquement pour obtenir un effet irrégulier. On les utilise pour confectionner des blouses, des jupes, des robes fluides au joli tombé. Le crêpe peut même être utilisé pour confectionner des vêtements de cérémonie : robe de mariée. Ce type de tissu se prête également à être drapé pour des vêtements plus flous.',
          Lace: 'Dentelle',
          'Cotton and polyester lace fabrics for clothing: wedding dresses, formal wear. But also for customization or decoration: appliqués, dream catchers. Also consider textile art.':
            "Tissus dentelles en coton et polyester pour l'habillement : robes de mariée, tenues de cérémonie. Mais aussi pour la customisation ou la décoration : appliqués, attrape-rêves. Pensez aussi à l'art textile.",
          'Water repellent': 'Hydrofuge',
          'Water-repellent fabrics can be used to make jackets and coats but also accessories. Softshell fabric is used to make windproof mid-season coats. It is made of a water-repellent membrane against the rain and a layer of breathable micro-fleece. Trench fabrics are fluid and light and will make it possible to make light rain jackets but also shopping bags for example. Water-repellent fabrics can be used to make bags or saddlebags.':
            "Les tissus déperlants peuvent être utilisés pour confectionner des vestes et des manteaux mais aussi des accessoires. Le tissu softshell est utilisé pour confectionner des manteaux coupe-vent de mi-saison. Il est composé d'une membrane déperlante contre la pluie et d'une couche de micro-polaire respirante. Les tissus des trenchs sont fluides et légers et permettront de réaliser des imperméables légers mais aussi des cabas par exemple. Les tissus hydrofuges peuvent être utilisés pour fabriquer des sacs ou des sacoches.",
          'double gauze': 'double gaze',
          'Double cotton gauze fabric for clothing and decoration. Double cotton gauze is actually two thin layers of cotton gauze connected by tiny, almost invisible stitches.':
            "Tissu double gaze de coton pour l'habillement et la décoration. La double gaze de coton est en fait deux fines couches de gaze de coton reliées par de minuscules points presque invisibles.",
          Lining: 'Garniture',
          'Satin lining for clothes, jackets, dresses, coats The satin lining has a nice hold and will also maintain your garment':
            'Doublure satin pour vêtements, vestes, robes, manteaux La doublure satin a une belle tenue et maintiendra également votre vêtement',
          Scottish: 'Écossais',
          'Scottish cut fabrics: burberry, checkered fabric, British fabric, Tartan... Different materials for this classic print.':
            'Tissus coupe écossaise : burberry, tissu à carreaux, tissu britannique, Tartan... Différentes matières pour cet imprimé classique.',
          Sponge: 'Éponge',
          '100% Oeko-tex certified cotton terry, thick quality 350 and 430 g/m² Very absorbent white and colored bamboo terry and microfiber, special washable diaper.':
            '',
          // TODO: TRANS REMAINING

          //colors
          White: 'Blanche',
          'Silver Grey': 'Gris Argenté',
          'Pink Purple': 'Rose-mauve',
          'Light Grey': 'Gris clair',
          'Cameo Brown': 'Brun camée',
          'Date Red': 'Date Rouge',
          Muave: 'Mauve',
          'Bright Pink': 'Rose vif',
          Red: 'Rouge',

          // Umar's
          'I agree': "Je suis d'accord",
          'Book call (on schedule) for measurement': 'Rendez-vous téléphonique pour la prise de mesure',
          'I also understand that any incomplete address, altered date of birth, use of an identity different from mine, or any falsified document will lead to the immediate and definitive suspension of my account and that I will therefore no longer be able to become a service provider on DCE.':
            "Je comprends également que toute adresse incomplète, date de naissance altérée, utilisation d'une identité différente de la mienne, ou tout document falsifié entraînera la suspension immédiate et définitive de mon compte et que je ne pourrai donc plus travailler sur DCE.",
          'I declare on my honor that the information provided is accurate, as well as the identity document attached above is authentic, belongs to me, and meets all the required conditions.':
            "Je déclare sur l'honneur que les informations fournies sont exactes, comme ainsi que la pièce d'identité ci-jointe est authentique, appartient à moi, et remplit toutes les conditions requises.",
          Accept: 'Accepter',
          'Urgent, Normal': 'Urgente, Ordinaire',
          Urgent: 'Urgente',
          Normal: 'Ordinaire',
          Address: 'Adresse',
          'Create Catalog After': 'Créer un catalogue après',
          'ORDER COMPLETION ?': 'COMPLÉTER DE LA COMMANDE ?',
          pending: 'en attente',
          'in progress': 'en cours',
          completed: 'terminé',
          discarded: 'mis au rebut',
          'Sent you an order request.': 'Vous a envoyé une demande de commande.',
          'Order request accepted.': 'Demande de commande acceptée.',
          'Order discarded.': 'Commande rejetée.',
          'Order completed.': 'Commande complétée.',
          'Feedback given by client.': 'Commentaires donnés par le client.',
          'Sent quote on your order.': 'Devis envoyé sur votre commande.',
          'Accepted your quote.': "J'ai accepté votre devis.",
          'Sent you a message.': 'Vous a envoyé un message.',
          'Type a message here': 'Tapez un message ici',
          'Forgot Password?': 'Mot de passe oublié?',
          Login: 'Connexion',
          "Don't have an account?": "Vous n'avez pas de compte ?",
          'Register now': "S'inscrire maintenant",
          'Register As a': 'Inscrivez-vous en tant que',
          Client: 'Client',
          Designer: 'professionnel',
          'Sign up': "S'inscrire",
          'Already have an account?': 'Avez-vous déjà un compte?',
          'Sign in now': 'Connectez vous maintenant',
          'Verification Code': 'Code de vérification',
          'Create Account': 'Créer un compte',
          'Name of your company': 'Nom de votre entreprise',
          'Phone No': 'Numéro de téléphone',
          'I Have Physical Store': "J'ai un magasin physique",
          'Store Name': 'Nom du magasin',
          'Date of Birth': 'Date de naissance',
          'Select your gender': 'Sélectionnez votre genre',

          // TransFile
          // XYZ1
          'SHIRT / BLOUSE': 'SHIRT / BLOUSE',
          'JUMPSUIT / DUNGAREES': 'JUMPSUIT / DUNGAREES',
          VEST: 'VEST',
          SKIRT: 'SKIRT',
          'TROUSERS / SHORTS': 'TROUSERS / SHORTS',
          DRESS: 'DRESS',
          TUNIC: 'TUNIC',
          JACKET: 'JACKET',
          PANTS: 'PANTS',
          PYJAMAS: 'PYJAMAS',
          'SCHOOL APRON': 'SCHOOL APRON',
          DISGUISE: 'DISGUISE',

          // XYZ2
          INVOICE: 'FACTURE',
          'Payment Terms:': 'Payment Terms:',
          'Due Date:': 'Due Date:',
          'PO Number:': 'PO Number:',
          'Balance Due:': 'Balance Due:',
          'Bill To:': 'Bill To:',
          'Ship To:': 'Ship To:',
          'Subtotal:': 'Subtotal:',
          'Tax (0%):': 'Tax (0%):',
          'Shipping:': 'Shipping:',
          'Total:': 'Total:',

          // XYZ3
          'Fake fur': 'Fausse fourrure',
          Festive: 'Festive',
          Felt: 'Feutre',
          Net: 'Net',
          Gabardine: 'Gabardine',
          Jacquard: 'Jacquard',
          Jersey: 'Jersey',
          'Velor jersey': 'Velor jersey',
          'jersey sweatshirt': 'jersey sweatshirt',
          Woolen: 'Woolen',
          'Soft woolen fabric': 'Soft woolen fabric',
          Lange: 'Lange',
          Linen: 'LanLinene',
          Meshes: 'Meshes',
          Quilted: 'Quilted',
          Honeycomb: 'Honeycomb',
          'Cotton piqué': 'Cotton piqué',
          'Fleece / comforter': 'Fleece / comforter',
          'PUL washable diapers': 'PUL washable diapers',
          'Faux leather': 'Faux cuir',
          Tulle: 'Tulle',
          Velvet: 'Velvet',
          Gingham: 'Vichy',

          // V2
          'Why DCE': 'Pourquoi DCE',
          'How Its Work': 'Comment ça marche',
          Register: "S'inscrire",
          'Welcome to the Design Confection Ethiques': "Bienvenue à l'éthique de la conception de la confection",
          'Hire The Best Designers For Your Confection': 'Engagez les meilleurs designers pour votre confection',
          'Hire Designer': 'Embaucher un concepteur',
          Or: 'Ou',
          'register as a Designer': 'inscrivez-vous en tant que designer',
          'Why Choose DCE': 'Pourquoi choisir DCI',
          'Post Ads': 'Publier des annonces',
          'Choose Designer': 'Choisissez le concepteur',
          'Pay Safely': 'Payez en toute sécurité',
          'At Your Door Step': 'À votre porte',
          'We Are Here To Help': 'Nous sommes ici pour aider',
          'Find Great Work': 'Trouver un excellent travail',
          'FIND OPPORTUNITIES': 'TROUVEZ DES OPPORTUNITÉS',
          'EXPLORE DIFFERENT WAYS TO EARN': 'EXPLOREZ DIFFÉRENTES FAÇONS DE GAGNER',
          'CONTROL WHEN, WHERE, AND HOW YOU WORK': 'CONTRÔLEZ QUAND, OÙ ET COMMENT VOUS TRAVAILLEZ',
        },
      },
    },

    lng: 'fr', // default language
    fallbackLng: 'fr',
    debug: true,

    // have a common namespace used around the full app
    ns: ['translations'],
    defaultNS: 'translations',

    keySeparator: false, // we use content as keys
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
