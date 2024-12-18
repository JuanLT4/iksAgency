import { GiBrain, GiCloudUpload, GiTechnoHeart } from 'react-icons/gi';
import { IoExtensionPuzzle } from 'react-icons/io5';
import { MdAddBusiness } from 'react-icons/md';
import { RiGovernmentFill } from 'react-icons/ri';
import { SiSimpleanalytics } from 'react-icons/si';
import { VscOrganization } from 'react-icons/vsc';

// NAVIGATION
export const NAV_LINKS = [
  { href: '/#', key: 'home', label: 'Home' },
  { href: '/#how-iks-work', key: 'how_iks_work', label: 'How IKS Work?' },
  { href: '/#services', key: 'services', label: 'Services' },
  { href: '/#clients', key: 'clients', label: 'Clients' },
  { href: '/#pricing', key: 'pricing', label: 'Pricing' },
  { href: '/#contact-us', key: 'contact_us', label: 'Contact Us' },
];

// CAMP SECTION
export const PEOPLE_URL = [
  '/person-1.png',
  '/person-2.png',
  '/person-3.png',
  '/person-4.png',
];

// FEATURES SECTION
export const FEATURES = [
  {
    title: 'Technology Transformation',
    icon: <GiTechnoHeart size={40} color='white'/>,
    variant: 'blue',
    description:
      'We guide organizations through comprehensive digital evolution, modernizing legacy systems and optimizing processes to boost efficiency and competitiveness. Our tailored approach ensures smooth transitions and maximizes ROI',
    href: '/features/technology-transformation',
  },
  {
    title: 'Cloud',
    icon: <GiCloudUpload  size={40} color='white'/>,
    variant: 'blue',
    description:
      "Our cloud services empower businesses with scalable, secure, and cost-effective solutions. We handle everything from migration to ongoing management, enabling you to harness the full potential of cloud technology",
    href: '/features/cloud',

  },
  {
    title: 'Data and Artificial Intelligence',
    icon: <GiBrain size={40} color='white'/>,
    variant: 'blue',
    description:
      'We leverage cutting-edge AI and machine learning to transform your data into actionable insights. Our solutions drive intelligent decision-making and automate complex tasks, giving you a competitive edge',
    href: '/features/data-ai',

  },
  {
    title: 'Data Analytics',
    icon: <SiSimpleanalytics size={40} color='white'/> ,
    variant: 'blue',
    description:
      'Turn your data into a strategic asset with our advanced analytics services. We provide real-time insights, predictive modeling, and intuitive visualizations to inform better business decisions and uncover new opportunities',
    href: '/features/data-analytics',

  },
  {
    title: 'Demo/Extensions',
    icon: <IoExtensionPuzzle size={40} color='white'/>,
    variant: 'blue',
    description:
      'Experience the power of our software through interactive demos and customizable extensions. We create tailored solutions that seamlessly integrate with your existing systems, addressing your unique business challenges',
    href: '/features/demo',

  },
  {
    title: 'Demo/Extensions',
    icon: <IoExtensionPuzzle size={40} color='white'/>,
    variant: 'blue',
    description:
      'Experience the power of our software through interactive demos and customizable extensions. We create tailored solutions that seamlessly integrate with your existing systems, addressing your unique business challenges',
    href: '/features/demo',

  },
];

export const TECHNOLOGY_TRANSFORMATION = [
  {
    title: 'Comprehensive digital transformation solutions',
    icon: '/timg.svg',
    variant: 'blue',
    description:
      "We guide organizations through holistic digital change, aligning technology with business goals. Our approach covers everything from IT infrastructure to customer experience, ensuring a complete digital overhaul that drives efficiency and innovation.",
  },
  {
    title: 'Legacy system modernization',
    icon: '/timg.svg',
    variant: 'blue',
    description:
      "We breathe new life into outdated systems, migrating them to modern platforms without disrupting operations. Our experts carefully balance preserving critical functionalities while introducing new capabilities, ensuring a smooth transition to cutting-edge technology.",
  },
  {
    title: 'Process automation and optimization',
    icon: '/timg.svg',
    variant: 'blue',
    description:
      "Leveraging the latest in robotic process automation (RPA) and AI, we streamline your workflows, reducing manual tasks and increasing accuracy. Our solutions adapt to your unique processes, maximizing efficiency and freeing your team to focus on high-value activities.",
  },
  {
    title: 'Customized technology roadmaps',
    icon: '/timg.svg',
    variant: 'blue',
    description:
      "We create tailored strategies that align your IT investments with your business objectives. Our roadmaps provide a clear path forward, prioritizing initiatives and ensuring your technology evolves in sync with your organization's growth and market demands.",
  },
  {
    title: 'Change management and adoption strategies',
    icon: '/timg.svg',
    variant: 'blue',
    description:
      "We understand that successful digital transformation goes beyond technology. Our change management experts ensure smooth transitions, fostering user adoption and maximizing the return on your technology investments through tailored training and communication plans.",
  },
];

export const CLOUD = [
  {
    title: 'Cloud migration and implementation services',
    icon: '/timg.svg',
    variant: 'blue',
    description:
      `We orchestrate seamless transitions to the cloud, whether you're moving from on-premises systems or between cloud providers. Our experts handle everything from initial assessment and planning to execution and post-migration support, ensuring minimal disruption to your operations.`,
  },
  {
    title: 'Multi-cloud and hybrid cloud solutions',
    icon: '/timg.svg',
    variant: 'blue',
    description:
      'We design and implement flexible cloud architectures that leverage the strengths of multiple providers or combine on-premises and cloud resources. This approach optimizes performance, cost, and compliance, giving you the best of all worlds.',
  },
  {
    title: 'Cloud security and compliance',
    icon: '/timg.svg',
    variant: 'blue',
    description:
      'Our cloud security experts implement robust measures to protect your data and applications in the cloud. We ensure compliance with industry standards and regulations, implementing encryption, access controls, and continuous monitoring to keep your cloud environment secure.',
  },
  {
    title: 'Cloud-native application development',
    icon: '/timg.svg',
    variant: 'blue',
    description:
      'We build modern, scalable applications designed specifically for cloud environments. Leveraging microservices architecture and containerization, our cloud-native apps offer superior performance, flexibility, and cost-efficiency.',
  },
  {
    title: 'Managed cloud services and support',
    icon: '/timg.svg',
    variant: 'blue',
    description:
      'Our 24/7 managed services take the burden of cloud management off your shoulders. We handle monitoring, optimization, updates, and troubleshooting, ensuring your cloud infrastructure runs smoothly and efficiently at all times.',
  },
];

export const DATA_AI = [
  {
    title: 'AI-driven business intelligence',
    icon: '/timg.svg',
    variant: 'blue',
    description:
      `We transform your raw data into actionable insights using advanced AI algorithms. Our solutions provide deep, real-time analysis of your business data, uncovering patterns and opportunities that drive informed decision-making across your organization.`,
  },
  {
    title: 'Machine learning model development and deployment',
    icon: '/timg.svg',
    variant: 'blue',
    description:
      'Our data scientists create custom machine learning models tailored to your specific business challenges. From development to deployment and ongoing refinement, we ensure your ML models deliver accurate, valuable predictions and insights.',
  },
  {
    title: 'Natural language processing solutions',
    icon: '/timg.svg',
    variant: 'blue',
    description:
      'We harness the power of NLP to help you understand and interact with unstructured text data. Our solutions range from sentiment analysis and text classification to advanced chatbots and voice interfaces, enabling more natural human-computer interactions.',
  },
  {
    title: 'Predictive analytics and forecasting',
    icon: '/timg.svg',
    variant: 'blue',
    description:
      'Leveraging historical data and advanced statistical techniques, we build predictive models that forecast future trends, customer behavior, and business outcomes. These insights enable proactive decision-making and strategy development.',
  },
  {
    title: 'AI-powered chatbots and virtual assistants',
    icon: '/timg.svg',
    variant: 'blue',
    description:
      'We create intelligent, conversational AI agents that can handle customer inquiries, automate tasks, and provide personalized assistance. Our chatbots and virtual assistants learn and improve over time, offering 24/7 support and enhancing user experiences.',
  },
]

export const DATA_ANALYTICS = [
  {
    title: 'Big data processing and management',
    icon: '/timg.svg',
    variant: 'blue',
    description:
      `We implement scalable solutions to handle vast amounts of structured and unstructured data. Our big data architectures enable efficient storage, processing, and analysis of data from diverse sources, unlocking the full potential of your information assets.`,
  },
  {
    title: 'Real-time analytics dashboards',
    icon: '/timg.svg',
    variant: 'blue',
    description:
      'We design intuitive, interactive dashboards that provide up-to-the-minute insights into your key performance indicators. These customizable visualizations make it easy for stakeholders at all levels to monitor performance and make data-driven decisions.',
  },
  {
    title: 'Data visualization and reporting',
    icon: '/timg.svg',
    variant: 'blue',
    description:
      'Our experts transform complex data into clear, compelling visual narratives. We create customized reports and interactive visualizations that make it easy to communicate insights, identify trends, and drive action across your organization.',
  },
  {
    title: 'Predictive and prescriptive analytics',
    icon: '/timg.svg',
    variant: 'blue',
    description:
      'Going beyond descriptive analytics, we implement advanced models that not only predict future outcomes but also recommend optimal actions. These tools support strategic planning, risk management, and operational optimization.',
  },
  {
    title: 'Data governance and quality management',
    icon: '/timg.svg',
    variant: 'blue',
    description:
      'We establish robust frameworks for ensuring data accuracy, consistency, and security across your organization. Our data governance solutions include data cataloging, lineage tracking, and quality monitoring, ensuring you can trust the data driving your decisions.',
  },
]

export const DEMO = [
  {
    title: 'Interactive product demonstrations',
    icon: '/timg.svg',
    variant: 'blue',
    description:
      `We create engaging, hands-on demos that showcase the full capabilities of your software. These interactive experiences allow potential clients to explore features and benefits in a realistic environment, accelerating the sales cycle.`,
  },
  {
    title: 'Customizable software extensions and plugins',
    icon: '/timg.svg',
    variant: 'blue',
    description:
      'We develop flexible add-ons and extensions that enhance the functionality of your core software. These customizable components allow clients to tailor the solution to their specific needs, increasing the value and applicability of your offerings.',
  },
  {
    title: 'Integration with existing systems',
    icon: '/timg.svg',
    variant: 'blue',
    description:
      'Our integration experts ensure seamless connections between our solutions and your existing IT ecosystem. We develop robust APIs and connectors that enable smooth data flow and process continuity across diverse platforms and applications.',
  },
  {
    title: 'Proof-of-concept development',
    icon: '/timg.svg',
    variant: 'blue',
    description:
      'We rapidly prototype and develop proof-of-concept solutions to validate ideas and demonstrate value. This approach minimizes risk and accelerates innovation, allowing you to test new concepts before full-scale implementation.',
  },
  {
    title: 'Tailored solutions for specific industry needs',
    icon: '/timg.svg',
    variant: 'blue',
    description:
      'Recognizing that each industry has unique challenges, we develop specialized solutions that address sector-specific requirements. From healthcare to finance to manufacturing, our industry-focused approach ensures our solutions deliver maximum relevance and impact.',
  },
]



export const CLIENTS = [
  {
    title: 'Government',
    icon: <RiGovernmentFill size={40} color='white'/>,
    variant: 'blue',
    description:
      'We empower government agencies with efficient, secure, and innovative software solutions that streamline operations and enhance public service delivery. Our tailored systems help agencies meet compliance requirements, improve transparency, and make data-driven decisions for better governance.',
    href: '',
  },
  {
    title: 'Businesses',
    icon: <MdAddBusiness size={40} color='white'/>,
    variant: 'blue',
    description:
      "Our cutting-edge software solutions help businesses of all sizes boost productivity, reduce costs, and stay competitive in rapidly evolving markets. We provide scalable, customizable tools that drive growth, enhance customer experiences, and unlock new revenue streams.",
    href: '',

  },
  {
    title: 'Non-Profit Organizations',
    icon: <VscOrganization size={40} color='white'/>,
    variant: 'blue',
    description:
      'We equip non-profits with affordable, powerful software that maximizes their impact and stretches limited resources. Our solutions help these organizations improve donor management, streamline operations, and focus more on their core mission of making a difference in communities.',
    href: '',
  },
  {
    title: 'Businesses',
    icon: <MdAddBusiness size={40} color='white'/>,
    variant: 'blue',
    description:
      "Our cutting-edge software solutions help businesses of all sizes boost productivity, reduce costs, and stay competitive in rapidly evolving markets. We provide scalable, customizable tools that drive growth, enhance customer experiences, and unlock new revenue streams.",
    href: '',

  },
  
];

export const PRICES = [
  {
    title: 'Basic Plan',
    price: '$9.99/month',
    buttonText: 'Sign Up',
    description: 'Basic features for individuals.',
    features: [
      'Feature 1',
      'Feature 2',
      'Feature 3',
    ]
  
  },
  {
    title: 'Pro Plan',
    price: '$29.99/month',
    buttonText: 'Get Started',
    description:
      "Advanced features for professionals.",
      features: [
        'Feature 1',
        'Feature 2',
        'Feature 3',
        'Feature 4',
        'Feature 5',

      ]
  },
  {
    title: 'Enterprise Plan',
    price: '$99.99/month',
    buttonText: 'Contact Us',
    description:
      'Comprehensive features for businesses.',
      features: [
        'Feature 1',
        'Feature 2',
        'Feature 3',
        'Feature 4',
        'Feature 5',
        'Feature 6',
        'Feature 7',
      ]
  },
  
];
// FOOTER SECTION
export const FOOTER_LINKS = [
  {
    title: 'Learn More',
    links: [
      'About IKS',
      'Press Releases',
      'Jobs',
      'Privacy Policy',
      'Contact Us',
    ],
  },
  {
    title: 'Our Community',
    links: ['Placeholder', 'Placeholder', 'Placeholder'],
  },
];

export const FOOTER_CONTACT_INFO = {
  title: 'Contact Us',
  links: [
    { label: 'Admin Officer', value: '123-456-7890' },
    { label: 'Email Officer', value: 'info@ikstechnologies.com' },
  ],
};

export const SOCIALS = {
  title: 'Social',
  links: [
    '/facebook.svg',
    '/instagram.svg',
    '/twitter.svg',
    '/youtube.svg',
    '/wordpress.svg',
  ],
};
