export default {
  API_URL: process.env.WEBPACK ? 'http://localhost:8080/app' : '/app',
  CLIENT_ROOT_URL: '',
  facebook: {
    appId: '1356860031017067',
  },
  routes: {
    user: {
      user: '/api/v1/user',
      activity: '/api/v1/user/activity',
    },
    activity: '/api/v1/activity',
    auth: {
      register: '/api/v1/auth/register',
      login: '/api/v1/auth/login',
      resetPassword: '/api/v1/auth/resetPassword',
    },
    events: {
      event: '/api/v1/event',
      past: '/api/v1/event/past',
      future: '/api/v1/event/future',
    },
    attendance: {
      fetch: '/api/v1/attendance',
      attend: '/api/v1/attendance/attend',
    },
    leaderboard: '/api/v1/leaderboard',
  },
  organization: {
    logo: '/assets/images/logo.png',
    logoLight: '/assets/images/logo-white.png',
    loginTileBackground: '/assets/images/login-tile-bg.jpg',
    shortName: 'UCLA ACM',
    name: 'UCLA Association for Computing Machinery',
    mission: 'To create and support an inclusive community for all of those interested in computer science at UCLA and cultivate the next generation of technology leaders by promoting the spirit of innovation, a culture of creativity, and aspiration of entrepreneurship.',
    officers: [
      {
        name: 'Kevin Tan',
        position: 'President',
        email: 'ktan17@ucla.edu',
        picture: '/assets/images/officers/KevinTan.jpg',
      },
      {
        name: 'Vivian Doan',
        position: 'External VP',
        email: 'viviandoan@engineering.ucla.edu',
        picture: '/assets/images/officers/VivianDoan.jpg',
      },
      {
        name: 'Rucha Patki',
        position: 'Internal VP',
        email: 'ruchapatki@gmail.com',
        picture: '/assets/images/officers/RuchaPatki.jpg',
      },
      {
        name: 'Megha Ilango',
        position: 'President of AI',
        email: 'meghailango@ucla.edu',
        picture: '/assets/images/officers/MeghaIlango.jpg',
      },
      {
        name: 'Connie Chen',
        position: 'Co-President of Hack',
        email: 'conniechen@engineering.ucla.edu',
        picture: '/assets/images/officers/ConnieChen.jpg',
      },
      {
        name: 'Lea Blum',
        position: 'Co-President of Hack',
        email: 'leab1308@gmail.com',
        picture: '/assets/images/officers/LeaBlum.jpg',
      },
      {
        name: 'Justin Li',
        position: 'President of ICPC',
        email: 'justindli@gmail.com',
        picture: '/assets/images/officers/JustinLi.jpg',
      },
      {
        name: 'Aaron Yoo',
        position: 'President of Cyber',
        email: 'atyoo99@gmail.com',
        picture: '/assets/images/officers/AaronYoo.jpg',
      },
      {
        name: 'Kevin Chuang',
        position: 'President of Game Studio',
        email: 'kevinchuang2@gmail.com',
        picture: '/assets/images/officers/KevinChuang.jpg',
      },
      {
        name: 'Baolinh Nguyen',
        position: 'President of ACM-W',
        email: 'Baolinh.nguyen@ucla.edu',
        picture: '/assets/images/officers/BaolinhNguyen.jpg',
      },
      {
        name: 'Isra Ameen',
        position: 'President of Design',
        email: 'israameen1@gmail.com',
        picture: '/assets/images/officers/IsraAmeen.jpg',
      },
      {
        name: 'Christina Indudhara',
        position: 'President of Teach LA',
        email: 'christina.indudhara@gmail.com',
        picture: '/assets/images/officers/ChristinaIndudhara.jpg',
      },
    ],
    resources: [
      {
        type: 'facebook',
        title: 'Facebook',
        subtitle: 'facebook.com/uclaacm',
        link: 'http://facebook.com/uclaacm',
      },
      {
        type: 'twitter',
        title: 'Twitter',
        subtitle: 'twitter.com/uclaacm',
        link: 'http://twitter.com/uclaacm',
      },
      {
        type: 'github',
        title: 'Github',
        subtitle: 'github.com/uclaacm',
        link: 'http://github.com/uclaacm',
      },
      {
        type: 'website',
        title: 'Website',
        subtitle: 'acm.cs.ucla.edu',
        link: 'http://acm.cs.ucla.edu',
      },
      {
        type: 'medium',
        title: 'Medium',
        subtitle: 'tech@ucla',
        link: 'https://medium.com/techatucla',
      },
      {
        type: 'slack',
        title: 'Slack',
        subtitle: 'uclaacm.slack.com',
        link: 'http://uclaacm.slack.com',
      },
    ],
  },
  levels: [
    { startsAt: 0, rank: 'Hello, World!' },
    { startsAt: 20, rank: 'Factorial Fly' },
    { startsAt: 40, rank: 'Exponential Elephant' },
    { startsAt: 80, rank: 'Cubic Chipmunk' },
    { startsAt: 120, rank: 'Quadratic Quokka' },
    { startsAt: 180, rank: 'Linearithmic Lizard' },
    { startsAt: 240, rank: 'Linear Lemur' },
    { startsAt: 320, rank: 'Square Root Sabre-Tooth' },
    { startsAt: 400, rank: 'Logarithmic Lynx' },
    { startsAt: 500, rank: 'Constant Cheetah' },
    { startsAt: 800, rank: 'Extraterrestrial Eagle' },
    { startsAt: 1000, rank: 'Binomial Baboon' },
    { startsAt: 1300, rank: 'Scalar Scorpion' },
  ],
};
