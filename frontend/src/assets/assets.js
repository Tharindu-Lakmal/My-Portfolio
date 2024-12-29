import user from './user.png'
import userbig from './userbig.jpeg'

import cv from './cv.pdf'
import cvarrow from './cvarrow.png'

import whatsapp from './whatsapp.png'
import hello from './hello.png'
import right_quotation from './right_quotation.png'
import right_quotation_ from './right_quotation_.png'
import right_quotation_white from './right_quotation_white.png'
import right_quotation_white_ from './right_quotation_white_.png'
import aim from './aim.png'
import design_icon from './design_icon.png'
import development_icon from './development_icon.png'
import check from './check.png'
import arrowRightDown from './arrow-right-down.svg'


// card images
import artisanLanka from './artisanLanka.png'
import Earn_Learn from './Earn&Learn.png'
import JurisConnect from './JurisConnect.png'
import FoodBuddy from './foodBuddy.png'
import MyPortfolio from './MyPortfolio.png'
import SUSLWebPeoject from './SUSLWebPeoject.png'
import Desha from './Desha.png'
import PortfolioDesign from './PortfolioDesign.png'


//details images
import food from './food.jpg'
import metekaan from './metekaan.jpg'
import handcrafts from './handcrafts.jpg'
import handmade from './handmade.jpg'
import students from './students.jpg'
import profile from './profile.jpg'
import esercice from './esercice.jpg'
import profileDesign from './profileDesign.jpg'

import star from './star.png'
import feature from './feature.png'
import challenge from './challenge.png'


// details images 3
import pdev1 from './details/pdev1.png'
import pdev2 from './details/pdev2.png'
import pdev3 from './details/pdev3.png'
import FoodBuddy1 from './details/FoodBuddy1.png'
import FoodBuddy2 from './details/FoodBuddy2.png'
import FoodBuddy3 from './details/FoodBuddy3.png'
import Desha1 from './details/Desha1.png'
import Desha2 from './details/Desha2.png'
import Desha3 from './details/Desha3.png'
import pDesign1 from './details/pDesign1.png'
import pDesign2 from './details/pDesign2.png'
import pDesign3 from './details/pDesign3.png'
import Juris1 from './details/Juris1.png'
import Juris2 from './details/Juris2.png'
import Juris3 from './details/Juris3.png'
import Artic1 from './details/Artic1.png'
import Artic2 from './details/Artic2.png'
import Artic3 from './details/Artic3.png'
import Learn1 from './details/Learn1.png'
import Learn2 from './details/Learn2.png'
import Learn3 from './details/Learn3.png'

import SUJCS1 from './details/SUJCS1.png'


// tools
import bootstrap from './bootstrap.svg'
import figma from './figma.svg'
import git from './git.svg'
import html5 from './html5.svg'
import JavaScript from './JavaScript.svg'
import mongodb from './mongodb.svg'
import nodejs from './nodejs.svg'
import photoshop from './photoshop.svg'
import ReactJS from './ReactJs.svg'
import tailwind from './tailwind.svg'
import firebase from './firebase.svg'
import css from './css.svg'

export const assets = {
    cv,
    cvarrow,
    user,
    userbig,
    whatsapp,
    hello,
    right_quotation,
    right_quotation_,
    right_quotation_white,
    right_quotation_white_,
    aim,
    design_icon,
    development_icon,
    check,
    arrowRightDown,

}

export const all_work = [
    {
        card_img: FoodBuddy,
        big_img: food,
        category: "Design",
        name: "FoodBuddy",
        team: ["Design: Tharindu Lakmal"],
        type: "Individual",
        description: "FoodBuddy is a user-friendly website crafted specifically for restaurants to showcase their menu, promote special offers, and enable seamless online food ordering and delivery services. Customers can browse categories, view dish details, and place orders conveniently from any device. The platform ensures a modern and engaging interface that prioritizes user experience and accessibility. It also provides restaurants with tools to update their menus in real time, manage orders efficiently, and track customer preferences for personalized service. The responsive design ensures compatibility across various screen sizes, offering a consistent experience for both mobile and desktop users.",
        tools: ["Figma", "Photoshop"],

        images: [FoodBuddy1, FoodBuddy2, FoodBuddy3],

        key_points : [
            {
                icon: feature,
                topic: "Feature",
                desc: "FoodBuddy enables restaurants to highlight their dishes with appealing visuals and detailed descriptions. Customers can filter menus based on categories and dietary preferences, enhancing their ordering experience. The platform includes an integrated payment gateway, location tracking, and order notifications to keep customers informed throughout the process."
            },
            {
                icon: challenge,
                topic: "Challenges",
                desc: "Designing a responsive layout that maintains consistent user experience across devices while integrating interactive elements like hover effects and dynamic menus was a critical challenge addressed during development. Optimizing the performance for faster loading times and ensuring compatibility with third-party APIs were also significant aspects of the project."
            },
            {
                icon: star,
                topic: "Knowdelage",
                desc: "Gained proficiency in creating scalable UI/UX designs, improving accessibility features, and leveraging tools like Figma and Photoshop to deliver polished prototypes. Additionally, learned techniques for optimizing web performance and implementing secure payment systems to enhance customer trust."
            }
        ],

        Link: "https://www.figma.com/proto/VYlWP6A8AC6MGD4jfVy4nG/Untitled?node-id=95-9&node-type=frame&t=naoWvZoJOp1bPBwM-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1"
    },
    {
        card_img: JurisConnect,
        big_img: metekaan,
        category: "Design & Development",
        name: "JurisConnect",
        team: ["Forntend: Sasindu Fernando", "Forntend: Jayaru Perera", "Forntend: Kaumadi Sandakal", "Development & Design: Tharindu Lakmal"],
        type: "Group",
        description: "JurisConnect is a comprehensive web platform designed to facilitate real-time legal consultations, resource sharing, and collaborative discussions for legal professionals and clients. It provides intuitive navigation, secure messaging, and resource libraries, making legal support more accessible to users. The platform allows users to schedule appointments, manage case files, and access a knowledge base for legal insights. Built with scalability in mind, JurisConnect ensures data privacy and seamless integration with external tools, enabling users to work efficiently.",
        tools: ["Figma", "Photoshop", "ReactJS", "CSS", "NodeJS", "MongoDB"],

        images: [Juris2, Juris1, Juris3],

        key_points : [
            {
                icon: feature,
                topic: "Feature",
                desc: "JurisConnect allows users to connect with lawyers instantly, explore legal resources, and participate in discussions, offering an all-in-one legal solution. The platform also includes video conferencing options, document sharing capabilities, and a secure login system with multi-factor authentication."
            },
            {
                icon: challenge,
                topic: "Challenges",
                desc: "Developing a secure backend to handle user data, integrating real-time messaging, and implementing role-based access controls required careful planning and testing. Ensuring compliance with legal data privacy regulations and providing multilingual support for broader accessibility were additional challenges."
            },
            {
                icon: star,
                topic: "Knowdelage",
                desc: "Enhanced my understanding of full-stack development with ReactJS and NodeJS, database management with MongoDB, and user-centric design techniques using Figma. Also gained experience in implementing secure authentication methods and optimizing databases for large-scale applications."
            }
        ],

        Link: "https://github.com/Tharindu-Lakmal/Juris-Connect.git"
    },
    {
        card_img: Desha,
        big_img: esercice,
        category: "Design",
        name: "Desha E-Mart",
        team: ["Design: Tharindu Lakmal"],
        type: "Individual",
        description: "Desha E-Mart is an online platform developed as part of a university project to modernize the operations of a mobile shop. It provides customers with features like product browsing, service booking, and repair status tracking, ensuring a seamless digital experience. The platform supports integration with Google Maps to display shop locations and offers SMS notifications for updates, keeping customers informed about their service status. It also includes an admin panel to manage products, monitor analytics, and update repair statuses.",
        tools: ["Figma"],

        images: [Desha1, Desha2, Desha3],

        key_points : [
            {
                icon: feature,
                topic: "Feature",
                desc: "Offers real-time updates on repair statuses, Google reviews integration, and online payment processing, enhancing customer satisfaction. Customers can filter products, add them to their wishlist, and track ongoing orders."
            },
            {
                icon: challenge,
                topic: "Challenges",
                desc: "Designing a mobile-first interface and integrating multiple features like SMS notifications and analytics dashboards without compromising performance. Ensuring smooth transitions between features and securing sensitive customer data were also addressed."
            },
            {
                icon: star,
                topic: "Knowdelage",
                desc: "Gained expertise in user experience optimization, prototyping in Figma, and implementing responsive designs to improve customer engagement. Additionally, learned techniques for integrating APIs and managing databases effectively."
            }
        ],

        Link: "https://www.figma.com/proto/9jXo8jIRbiVyMh7ertHNtJ/Community---Desha-E-Mart?node-id=2-2&starting-point-node-id=2%3A2&t=hm5NFWWAfxl0dc5s-1"
    },
    {
        card_img: MyPortfolio,
        big_img: profile,
        category: "Design & Development",
        name: "My Portfolio",
        team: ["Forntend & Design: Tharindu Lakmal"],
        type: "Individual",
        description: "A personal portfolio showcasing my projects in UI/UX design and web development. It highlights my ability to create visually engaging, responsive web applications while emphasizing interactivity and modern aesthetics. The portfolio serves as a professional profile, featuring project descriptions, case studies, and contact options. It demonstrates my expertise in front-end frameworks, animations, and dynamic layouts, providing potential employers and clients with insights into my skill set.",
        tools: ["Figma", "ReactJS", "CSS", "GSAP", "EmailJS"],

        images: [pdev1, pdev2, pdev3],

        key_points : [
            {
                icon: feature,
                topic: "Feature",
                desc: "Displays interactive project showcases, contact forms, and smooth transitions using GSAP animations and ReactJS. Includes dark and light mode toggles, responsive layouts, and embedded links to live projects and repositories."
            },
            {
                icon: challenge,
                topic: "Challenges",
                desc: "Ensuring consistent performance across browsers, optimizing animations for smooth rendering, and implementing EmailJS for contact forms. Overcoming limitations of third-party libraries while maintaining responsiveness and accessibility was also tackled."
            },
            {
                icon: star,
                topic: "Knowdelage",
                desc: "Strengthened skills in ReactJS, CSS animations, and integrating external libraries like GSAP and EmailJS to enhance functionality. Learned techniques for creating modular components, improving SEO performance, and deploying projects using modern platforms."
            }
        ],

        Link: "https://github.com/Tharindu-Lakmal/My-Portfolio.git"
    },
    {
        card_img: Earn_Learn,
        big_img: handcrafts,
        category: "Design & Development",
        name: "Learn&Earn",
        team: ["Forntend & Backend: Tharindu Lakmal", "Forntend & Backend: Akela Dumidu", "Forntend: Hamitha Apsara"],
        type: "Group",
        description: "Learn&Earn is a platform aimed at helping students sell handmade crafts to fund their education. It serves as an online marketplace where students can showcase their products, manage orders, and connect with potential buyers. The platform features user accounts, order tracking, and secure payment gateways to create a trusted environment for transactions. It also highlights popular products and offers promotional tools to boost sales.",
        tools: ["HTML", "CSS", "PHP", "MySQL", "Bootstrap", "Figma"],

        images: [Learn1, Learn2, Learn3],

        key_points : [
            {
                icon: feature,
                topic: "Feature",
                desc: "Provides an intuitive product listing and purchasing system, secure payment gateway, and user profiles for personalized experiences. Includes order management tools, wishlist functionality, and an admin dashboard for tracking sales and performance metrics."
            },
            {
                icon: challenge,
                topic: "Challenges",
                desc: "Designing a backend to support product management and transactions while ensuring data security and scalability was a key focus. Implementing secure payment integrations and managing product inventories dynamically posed additional challenges."
            },
            {
                icon: star,
                topic: "Knowdelage",
                desc: "Developed strong backend development skills using PHP and MySQL and improved front-end design capabilities with Bootstrap and Figma. Learned how to implement responsive interfaces and optimize database queries for scalability."
            }
        ],

        Link: "https://github.com/Tharindu-Lakmal/Learn-and-Earn.git"
    },
    {
        card_img: artisanLanka,
        big_img: handmade,
        category: "Design",
        name: "artisanLanka",
        team: ["Design: Tharindu Lakmal"],
        type: "Individual",
        description: "artisanLanka is a web platform that empowers local artisans by providing them with a digital space to promote and sell handmade crafts globally. It offers a simple, elegant design to attract potential buyers. Artisans can create profiles, upload product images, and receive orders directly through the platform. The website supports multi-currency payments and shipping options, enabling global reach.",
        tools: ["Figma", "Photoshop"],

        images: [Artic1, Artic2, Artic3],

        key_points : [
            {
                icon: feature,
                topic: "Feature",
                desc: "Showcases detailed product galleries, pricing, and contact options to help artisans market their creations effectively. Provides order tracking and social media sharing features to improve visibility."
            },
            {
                icon: challenge,
                topic: "Challenges",
                desc: "Balancing aesthetics with performance, enabling global payment systems, and ensuring mobile responsiveness were major challenges. Handling multi-language support and managing product catalogs dynamically added complexity."
            },
            {
                icon: star,
                topic: "Knowdelage",
                desc: "Mastered design principles for e-commerce platforms using Figma and Photoshop to build an impactful user interface. Developed techniques for implementing payment integrations and enhancing user engagement."
            }
        ],

        Link: "https://www.figma.com/proto/3yAbisyXSzbZwrhHr11eJN/artisanLanka?node-id=91-2&node-type=canvas&t=7Y2YqcdfUgv3O5u0-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=91%3A2"
    },
    {
        card_img: PortfolioDesign,
        big_img: profileDesign,
        category: "Design",
        name: "Portfolio Design",
        team: ["Design: Tharindu Lakmal"],
        type: "Individual",
        description: "This design-focused version of my portfolio emphasizes UI/UX design work, highlighting conceptual projects and interactive prototypes. Built with Figma, it showcases wireframes, visual mockups, and design systems that prioritize usability and aesthetics. It serves as a visual resume for clients and employers, demonstrating expertise in modern design principles and tools.",
        tools: ["Figma"],

        images: [pDesign1, pDesign2, pDesign3],

        key_points : [
            {
                icon: feature,
                topic: "Feature",
                desc: "Displays design prototypes, project workflows, and case studies with detailed explanations. Provides links to live design files, enabling real-time feedback and collaboration."
            },
            {
                icon: challenge,
                topic: "Challenges",
                desc: "Maintaining visual consistency while experimenting with innovative layouts and styles. Ensuring designs are adaptable for implementation in development and optimizing visuals for various screen sizes were major challenges."
            },
            {
                icon: star,
                topic: "Knowdelage",
                desc: "Enhanced my skills in Figma for wireframing, prototyping, and creating responsive designs. Learned how to collaborate with developers and stakeholders to bridge the gap between design and implementation effectively."
            }
        ],

        Link: "https://www.figma.com/proto/3cEdVjLfpR421bqWzrFnXB/My-Portfolio?node-id=1-6&node-type=canvas&t=ue5uyXlgegoIVB12-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A6"
    },
    {
        card_img: SUSLWebPeoject,
        big_img: students,
        category: "Design & Development",
        name: "SUJCS Web Peoject",
        team: ["Frontend & Backend: Tharindu Lakmal", "Backend: Akela Dumidu", "Forntend: Tharushi Wijethunga", "Frontend: Kalpani Ariyawansha"],
        type: "Group",
        description: "The SUJCS Web Project is a collaborative platform developed to support researchers, scholars, and students in sharing groundbreaking findings in computer science. It features sections for publishing peer-reviewed articles, survey studies, and case reports, enabling academic collaboration. The platform simplifies content submission, categorization, and filtering, making it easier to access relevant research. It also offers user accounts for personalized dashboards and submission tracking.",
        tools: ["HTML", "CSS", "PHP", "JavaScript", "MySQL"],

        images: [SUJCS1],

        key_points : [
            {
                icon: feature,
                topic: "Feature",
                desc: "Supports research article submissions, categorization, and filtering for quick access. Also includes author profiles, citation tools, and review management systems to streamline academic publishing."
            },
            {
                icon: challenge,
                topic: "Challenges",
                desc: "Implementing a database-driven publication system, securing user data, and maintaining high performance with dynamic content were significant tasks. Handling multiple content formats, ensuring responsive design, and managing permissions for editors and authors added to the complexity."
            },
            {
                icon: star,
                topic: "Knowdelage",
                desc: "Improved expertise in PHP, MySQL, and JavaScript for backend integration and front-end development, creating a scalable academic platform. Gained insights into data security, access control systems, and dynamic content rendering techniques."
            }
        ],
        
        Link: "https://github.com/Tharindu-Lakmal/SUJCS_Web_Project.git"
    }
]

export const design = [
    {
        card_img: FoodBuddy,
        category: "Design",
        name: "FoodBuddy",
        description: "FoodBuddy is a website designed for restaurants to showcase their menu and offer online food delivery, allowing customers to order their favorite dishes with ease.",
        tools: ["Figma", "Photoshop"],
        Link: "https://www.figma.com/proto/VYlWP6A8AC6MGD4jfVy4nG/Untitled?node-id=95-9&node-type=frame&t=naoWvZoJOp1bPBwM-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1"
    },
    {
        card_img: artisanLanka,
        category: "Design",
        name: "artisanLanka",
        description: "A web platform designed to help local sellers showcase and sell their handmade crafts globally, providing them with opportunities to grow their businesses.",
        tools: ["Figma", "Photoshop"],
        Link: "https://www.figma.com/proto/3yAbisyXSzbZwrhHr11eJN/artisanLanka?node-id=91-2&node-type=canvas&t=7Y2YqcdfUgv3O5u0-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=91%3A2"
    },
    {
        card_img: MyPortfolio,
        category: "Design",
        name: "My Portfolio",
        description: "Showcases my projects in UI/UX design and web development, utilizing ReactJS and CSS. It highlights my skills in creating engaging and responsive web interfaces.",
        tools: ["Figma"],
        Link: "https://www.figma.com/proto/3cEdVjLfpR421bqWzrFnXB/My-Portfolio?node-id=1-6&node-type=canvas&t=ue5uyXlgegoIVB12-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A6"
    },
    {
        card_img: Desha,
        category: "Design",
        name: "Desha E-Mart",
        description: "Our university community project was designed for Desha E-Mart, a mobile shop, to deliver their services and provide customers with a seamless online experience and quick access.",
        tools: ["Figma"],
        Link: "https://www.figma.com/proto/9jXo8jIRbiVyMh7ertHNtJ/Community---Desha-E-Mart?node-id=2-2&starting-point-node-id=2%3A2&t=hm5NFWWAfxl0dc5s-1"
    }
]

export const development = [
    {
        card_img: JurisConnect,
        category: "Design & Development",
        name: "JurisConnect",
        type: "Group",
        description: "A web platform for real-time legal advice, expert resources, and community discussions. Users can easily access specialized lawyer content and engage in meaningful legal discussions.",
        tools: ["Figma", "Photoshop", "ReactJS", "CSS", "NodeJS", "MongoDB"],
        Link: "https://github.com/Tharindu-Lakmal/Juris-Connect.git"
    },
    {
        card_img: MyPortfolio,
        category: "Design & Development",
        name: "My Portfolio",
        description: "Showcases my projects in UI/UX design and web development, utilizing ReactJS and CSS. It highlights my skills in creating engaging and responsive web interfaces.",
        tools: ["Figma", "ReactJS", "CSS", "GSAP", "EmailJS"],
        Link: "https://github.com/Tharindu-Lakmal/My-Portfolio.git"
    },
    {
        card_img: Earn_Learn,
        category: "Design & Development",
        name: "Learn&Earn",
        type: "Group",
        description: "A platform created to help students sell their handmade crafts to fund their education. It provides a marketplace for students to showcase talents and connect with buyers.",
        tools: ["Figma", "Photoshop", "HTML", "CSS", "PHP", "MySQL", "Bootstrap"],
        Link: "https://github.com/Tharindu-Lakmal/Learn-and-Earn.git"
    },
    {
        card_img: SUSLWebPeoject,
        category: "Design & Development",
        name: "SUJCS Web Peoject",
        type: "Group",
        description: "A platform for researchers, scholars, and students to share groundbreaking findings in computer science. It publishes articles and studies that contribute to societal well-being.",
        tools: ["HTML", "CSS", "PHP", "JavaScript", "MySQL"],
        Link: "https://github.com/Tharindu-Lakmal/SUJCS_Web_Project.git"
    }
]

export const top_work = [
    // {
    //     card_img: artisanLanka,
    //     category: "Design",
    //     name: "artisanLanka",
    //     description: "A web platform designed to help local sellers showcase and sell their handmade crafts globally, providing them with opportunities to grow their businesses.",
    //     tools: ["Figma", "Photoshop"],
    //     Link: "https://www.figma.com/proto/3yAbisyXSzbZwrhHr11eJN/artisanLanka?node-id=91-2&node-type=canvas&t=7Y2YqcdfUgv3O5u0-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=91%3A2"
    // },
    {
        card_img: JurisConnect,
        category: "Design & Development",
        name: "JurisConnect",
        type: "Group",
        description: "A web platform for real-time legal advice, expert resources, and community discussions. Users can easily access specialized lawyer content and engage in meaningful legal discussions.",
        tools: ["Figma", "Photoshop", "ReactJS", "CSS", "NodeJS", "MongoDB"],
        Link: "https://github.com/Tharindu-Lakmal/Juris-Connect.git"
    },
    {
        card_img: FoodBuddy,
        category: "Design",
        name: "FoodBuddy",
        description: "FoodBuddy is a website designed for restaurants to showcase their menu and offer online food delivery, allowing customers to order their favorite dishes with ease.",
        tools: ["Figma", "Photoshop"],
        Link: "https://www.figma.com/proto/VYlWP6A8AC6MGD4jfVy4nG/Untitled?node-id=95-9&node-type=frame&t=naoWvZoJOp1bPBwM-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1"
    },
    {
        card_img: Earn_Learn,
        category: "Design & Development",
        name: "Learn&Earn",
        type: "Group",
        description: "A platform created to help students sell their handmade crafts to fund their education. It provides a marketplace for students to showcase talents and connect with buyers.",
        tools: ["Figma", "Photoshop", "HTML", "CSS", "PHP", "MySQL", "Bootstrap"],
        Link: "https://github.com/Tharindu-Lakmal/Learn-and-Earn.git"
    },
    {
        card_img: Desha,
        category: "Design",
        name: "Desha E-Mart",
        description: "Our university community project was designed for Desha E-Mart, a mobile shop, to deliver their services and provide customers with a seamless online experience and quick access.",
        tools: ["Figma"],
        Link: "https://www.figma.com/proto/9jXo8jIRbiVyMh7ertHNtJ/Community---Desha-E-Mart?node-id=2-2&starting-point-node-id=2%3A2&t=hm5NFWWAfxl0dc5s-1"
    }
]


export const tools = [
    figma,
    photoshop,
    bootstrap,
    tailwind, 
    ReactJS,
    JavaScript,
    html5,
    css,
    nodejs,
    git,
    mongodb,
    firebase
]

export const tools2 = [
    {
        tools_icon: figma,
        tools_name: "Figma"
    },
    {
        tools_icon: photoshop,
        tools_name: "Photoshop"
    },
    {
        tools_icon: bootstrap,
        tools_name: "Bootstrap"
    },
    {
        tools_icon: tailwind,
        tools_name: "Tailwind"
    },
    {
        tools_icon: ReactJS,
        tools_name: "ReactJS"
    },
    {
        tools_icon: JavaScript,
        tools_name: "JavaScript"
    },
    {
        tools_icon: html5,
        tools_name: "HTML5"
    },
    {
        tools_icon: css,
        tools_name: "CSS"
    },
    {
        tools_icon: nodejs,
        tools_name: "NodeJS"
    },
    {
        tools_icon: git,
        tools_name: "Git"
    },
    {
        tools_icon: mongodb,
        tools_name: "MongoDB"
    },
    {
        tools_icon: firebase,
        tools_name: "Firebase"
    }
]

export const slider = [artisanLanka, FoodBuddy, JurisConnect, MyPortfolio, Earn_Learn, SUSLWebPeoject, Desha, PortfolioDesign]


export const frontend_skills = [
    {
        number: "01",
        type: "ReactJS"
    },
    {
        number: "02",
        type: "JavaScript"
    },
    {
        number: "03",
        type: "HTML"
    },
    {
        number: "04",
        type: "CSS"
    },
    {
        number: "05",
        type: "Bootstrap"
    },
    {
        number: "06",
        type: "Tailwind"
    },
    {
        number: "07",
        type: "GSAP"
    },
    {
        number: "08",
        type: "Figma"
    }
]

export const backend_skills = [
    {
        number: "01",
        type: "NodeJS"
    },
    {
        number: "02",
        type: "PHP"
    },
    {
        number: "03",
        type: "MongoDB"
    },
    {
        number: "04",
        type: "MySQL"
    },
    {
        number: "05",
        type: "Firebase"
    },
    {
        number: "06",
        type: "Git"
    }
]