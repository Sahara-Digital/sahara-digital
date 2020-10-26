type PageContent = 'id' | 'paragraph';
type PageNavigation = 'id' | 'to' | 'name';
type ContactPage =
    | 'id'
    | 'question'
    | 'subheading'
    | 'coordinates'
    | 'subintro'
    | 'paragraph';

export const values: Array<Record<string, string>> = [
    {
        id: '1',
        title: 'Why choose us?',
        name: 'Integrity',
        paragraph:
            'We value honesty and uphold strong moral principles. Each and everyone holds themselves accountable, and we own up to our shortcomings.',
    },
    {
        id: '2',
        name: 'Teamwork',
        paragraph:
            'We focus on working collaboratively to achieve our common goal effectively, providing effective Web Development and software development services to a broad spectrum of clients. Teamwork is at the heart of what we do.',
    },
    {
        id: '3',
        name: 'Quality',
        paragraph:
            'We are dedicated to providing a high standard of services across the board, making us competitive with other companies in our field. We understand that clean, good-quality code makes software more robust, usable, and easier to maintain.',
    },
    {
        id: '4',
        name: 'Simplicity',
        paragraph:
            '‘Simple is beautiful’ is a programming mantra we embrace, by embracing the beauty of simplicity, we commit to uncomplicated and design-focused websites and applications.',
    },
    {
        id: '5',
        name: 'Passion',
        paragraph:
            'We love what we do, and we are fuelled by a mutual enthusiasm to make premium quality solutions for a range of customers.',
    },
];

export const aboutPage: Array<Record<string, any>> = [
    {
        id: '1',
        pageTitle: 'About us',
        paragraph: `We specialize in web and software development practices, our aim is to provide a full-stack service in the future, which will allow focus on the client or customers' needs and let the innovation takeplace naturally throughout the software development life cycle.`,
    },
    {
        id: '2',
        paragraph:
            'Our core business structure involves a system called OKR; (Objectives and Key Results) we use this system to align ourselves with our companies objectives, our clients’ objectives, or even a developer’s learning objectives. This is what makes us different from other businesses in our sector.',
    },
    {
        cardcontent: [
            {
                id: '1',
                paragraph:
                    'We encompasse our knowledge to provide you with a range of services including Web Developement, Responsive Web Design and Google Analytics.',
            },
        ],
    },
];

export const homepageIntro: Array<Record<PageContent, any>> = [
    {
        id: '1',
        paragraph:
            'Welcome to Sahara Digital, we provide Web Development and Application Services.',
    },
    {
        id: '2',
        paragraph:
            ' People and products are at the core of everything that we do, whether it’s our team of knowledgeable developers, or you and your unique business. we bring together a well-rounded skill set to provide the quality that you are looking for. Whether you are a small business or large company, we have the design and navigation solution to make you stand out from the crowd.',
    },
];

export const homepage: Array<Record<string, any>> = [
    {
        id: '1',
        title: 'Web Consulting',
        paragraph:
            'Our approach allows us to intergrate with your business to accomplish your objectives, solve problems and implement solutions.',
    },
    {
        id: '2',
        title: 'Web Development',
        paragraph: `Your website is your companies digital portfolio to your customers, so don't just tell them how awesome you are, let's show them!`,
    },
];

export const contactUs: Array<Record<ContactPage, any>> = [
    {
        id: '1',
        question: 'How can we help?',
        subheading: 'Getting in touch is easy, you can find us at: -',
        coordinates: `23° 48' 21.8808'' N and 11° 17' 18.4272'' E.`,
        subintro: 'We would love to help you.',
        paragraph:
            'If you have any queries, do not hesitate to contact us on our socials, Facebook, Twitter, LinkedIn; or via the email address below: - ',
    },
];

export const team: Array<Record<PageContent, any>> = [
    {
        id: '1',
        paragraph:
            'Sahara Digital was founded with the idea that everyone is equal. We have one goal in mind to share knowledge and work together as a team to improve because, without people, products or services would not exist.',
    },
    {
        id: '2',
        paragraph: `We develop each person's skills and abilities alongside a core learning structure, treating everyone as an equal on their journey, we incorporate our Objective and Key Results (OKR) system at a developer level as we understand that each individual is at a different stage in their development.`,
    },
    {
        id: '3',
        paragraph: `Everything has a beginning, a middle, and an end. This is just the beginning.`,
    },
    {
        id: '4',
        paragraph: `Meet the team`,
    },
];

export const navigation: Array<Record<PageNavigation, any>> = [
    {
        id: '1',
        to: '/',
        name: 'Home',
    },
    {
        id: '2',
        to: '/about',
        name: 'About',
    },
    // {
    //     id: '3',
    //     to: '/services',
    //     name: 'Services',
    // },
    // {
    //     id: '4',
    //     to: '/team',
    //     name: 'Team',
    // },
    // {
    //     id: '5',
    //     to: '/careers',
    //     name: 'Careers',
    // },
    {
        id: '6',
        to: '/contact',
        name: 'Contact',
    },
];
