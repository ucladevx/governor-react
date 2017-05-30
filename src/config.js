export default {
    health: {
        url: '/app/api/health/check',
    },
    API_URL: process.env.WEBPACK ? 'http://localhost:8080/app' : '/app',
    CLIENT_ROOT_URL: '',
    info: {
        msg: 'Hello World!',
    },
    routes: {
        user: '/api/v1/user',
        auth: {
            register: '/api/v1/auth/register',
            login: '/api/v1/auth/login'
        },
        events: {
            event: '/api/v1/event',
            past: '/api/v1/event/past',
            future: '/api/v1/event/future'
        },
        attendance: {
            attend: '/api/v1/attendance/attend',
        }
    },
    organization: {
        logo: "/assets/images/logo.png",
        logoLight: "/assets/images/logo-white.png",
        loginTileBackground: "/assets/images/login-tile-bg.jpg",
        shortName: "UCLA ACM",
        name: "UCLA Association for Computing Machinery",
        mission: "To create and support an inclusive community for all of those interested in computer science at UCLA and cultivate the next generation of technology leaders by promoting the spirit of innovation, a culture of creativity, and aspiration of entrepreneurship.",
        officers: [
            {
                name: "Mihir Mathur",
                position: "President",
                email: "mihir.mathur@ucla.edu",
                picture: "/assets/images/officers/mihir.jpg"
            },
            {
                name: "Nikhil Kansal",
                position: "Vice President",
                email: "nkansal@ucla.edu",
                picture: "/assets/images/officers/nikhil.jpg"
            },
            {
                name: "Jennifer Liaw",
                position: "Vice President",
                email: "jdliaw@ucla.edu",
                picture: "/assets/images/officers/jennifer.jpg"
            }
        ],
        resources: [
            {
                type: "facebook",
                title: "Facebook",
                subtitle: "facebook.com/uclaacm"
            },
            {
                type: "twitter",
                title: "Twitter",
                subtitle: "twitter.com/uclaacm"
            },
            {
                type: "github",
                title: "Github",
                subtitle: "github.com/uclaacm"
            },
            {
                type: "website",
                title: "Website",
                subtitle: "acm.cs.ucla.edu"
            },
            {
                type: "medium",
                title: "Medium",
                subtitle: "tech@ucla"
            },
            {
                type: "slack",
                title: "Slack",
                subtitle: "uclaacm.slack.com"
            },
        ]
    },
    levels: [
        { startsAt: 0, rank: "Newbie" },
        { startsAt: 20, rank: "Newbie II" },
        { startsAt: 50, rank: "Newbie III" },
        { startsAt: 100, rank: "Hacker" },
        { startsAt: 150, rank: "Hacker II" }
    ],

};
