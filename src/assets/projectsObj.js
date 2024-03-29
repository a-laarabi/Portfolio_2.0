/* eslint-disable */
// import coffeeShop from './img/projects/pic1.jpg';
// import toDoList from './img/projects/toDoList.png';
// import newGame from './img/projects/newGame.png';
// import blog from './img/projects/pic2.jpg';
// import carRental from './img/projects/pic3.png';

const projectsObj = [
  {
    id: 1,
    title: 'My New Game',
    backImg: require('./img/projects/newGame.png'),
    homeImg: require('./img/projects/newGameTab.jpg'),
    PhoneImg: require('./img/projects/newGamePhone.png'),
    tabImg: require('./img/projects/newGameTab.jpg'),
    projectDetailSecond: 'Front End Dev',
    projectDate: '11-2022',
    languages: ['html', 'css', 'JavaScript', 'React'],
    description: 'My new Game is a website built with React, is a web application that showcases the latest and most popular games. The website\'s user interface is built using React, a JavaScript library for building user interfaces. The website features a clean and modern design, making it easy for users to navigate and find the games they are interested in. On the homepage, users can find the latest and trending games, with the option to filter by different platforms or genres. Each game on the website has its dedicated page, which includes information such as a game\'s release date, developer, publisher, and a brief description of the game\'s storyline and gameplay mechanics. Additionally, users can find screenshots and trailers for the game.',
    githubLink: 'https://github.com/a-laarabi/React-Capstone',
    deployLink: 'https://lighthearted-quokka-21d8f2.netlify.app/',
  },
  {
    id: 2,
    title: 'We Love Horses!',
    backImg: require('./img/projects/loveHorses.png'),
    homeImg: require('./img/projects/loveHorsesTab.png'),
    PhoneImg: require('./img/projects/loveHorsesPhone.png'),
    tabImg: require('./img/projects/loveHorsesTab.png'),
    projectDetailSecond: 'Front End Dev',
    projectDate: '05-2022',
    languages: ['html', 'css', 'JavaScript'],
    description: 'We Love Horses is a website I have built for a horse club using HTML, CSS, and JavaScript. The website is designed to provide members and visitors with all the information they need about the club, including its mission, membership information, and upcoming events. I have also included a gallery of beautiful photos and videos of the horses, as well as information about the club\'s trainers and other staff members.',
    githubLink: 'https://github.com/a-laarabi/capstone_project-1',
    deployLink: 'https://a-laarabi.github.io/capstone_project-1/',
  },
  {
    id: 3,
    title: 'Coffee Shop',
    backImg: require('./img/projects/coffeShop.png'),
    homeImg: require('./img/projects/coffeShopTab.png'),
    PhoneImg: require('./img/projects/coffeShopPhone.png'),
    tabImg: require('./img/projects/coffeShopTab.png'),
    projectDetailSecond: 'Front End Dev',
    projectDate: '10-2022',
    languages: ['html', 'css', 'JavaScript', 'React'],
    description: 'A web application built using React that allows users to browse, order, and pay for coffee from their favorite local coffee shops. The app is designed to be intuitive and user-friendly, allowing customers to quickly find the perfect cup of coffee without the hassle of lines or confusing menus.',
    githubLink: 'https://github.com/a-laarabi/Coffee_Shop',
    deployLink: 'https://dainty-naiad-40d657.netlify.app/',
  },
  {
    id: 7,
    title: 'To-do list',
    backImg: require('./img/projects/toDoList.png'),
    homeImg: require('./img/projects/toDoListTab.jpg'),
    PhoneImg: require('./img/projects/toDoListPhone.png'),
    tabImg: require('./img/projects/toDoListTab.jpg'),
    projectDetailSecond: 'Front End Dev',
    projectDate: '07-2022',
    languages: ['html', 'css', 'JavaScript'],
    description: 'To-do application is a digital tool that allows users to create and manage a list of tasks or activities that they need to complete. The application have a user-friendly interface that makes it easy for users to add, edit, and organize their tasks. The homepage of the application display a list of the user\'s tasks, with each task represented by its title and a checkbox to mark it as completed. Users would be able to add new tasks by clicking on a button or a link that says "Add a Task." The application also include a feature that allows users to archive completed tasks.',
    githubLink: 'https://github.com/a-laarabi/To-Do-list',
    deployLink: 'https://a-laarabi.github.io/To-Do-list/dist/',
  },
  // {
  //   id: 4,
  //   title: 'Blog',
  //   homeImg: require('./img/projects/pic2.jpg'),
  //   projectDetailSecond: 'Back End Dev',
  //   projectDate: '12-2022',
  //   languages: ['html', 'css', 'JavaScript', 'Ruby'],
  //   description: 'The Blog app will be a classic example of a blog website. I will create a fully functional website that will show the list of posts and empower readers to interact with them by adding comments and liking posts.',
  //   githubLink: 'https://github.com/a-laarabi/Blog',
  //   deployLink: '',
  // },
  // {
  //   id: 5,
  //   title: 'Car Rental',
  //   homeImg: require('./img/projects/pic3.jpg'),
  //   projectDetailSecond: 'Back End Dev',
  //   projectDate: '01-2022',
  //   languages: ['html', 'css', 'JavaScript', 'Node.js'],
  //   description: 'This is a website for a car rental company where you can book a car. "still under construction" you can check it later ;)',
  //   githubLink: 'https://github.com/a-laarabi',
  //   deployLink: '',
  // },
  // {
  //   id: 6,
  //   title: 'Space Travelers\' Hub',
  //   backImg: require('./img/projects/spaceHubTabSecond.jpg'),
  //   homeImg: require('./img/projects/spaceHubTab.jpg'),
  //   PhoneImg: require('./img/projects/spaceHubTab.jpg'),
  //   tabImg: require('./img/projects/spaceHub.png'),
  //   projectDetailSecond: 'Back End Dev',
  //   projectDate: '09-2022',
  //   languages: ['JavaScript', 'ReactJs', 'Redux'],
  //   description: 'Space Travelers\' Hub is a web application for commercial and scientific space travel services, built using the powerful combination of React and Redux. Our application allows users to easily book rockets and join selected space missions with just a few clicks. The sleek and modern user interface is designed to make the space travel booking process as simple and straightforward as possible. With this application, users can explore a wide range of options for space travel, including destinations, duration of mission and type of spacecraft, all in one place. The application also features detailed information about each spacecraft and mission, including technical specifications, safety features, and more.',
  //   githubLink: 'https://github.com/a-laarabi/spaceTravelers-Hub',
  //   deployLink: 'https://resilient-sunshine-bc7cea.netlify.app/',
  // },
];

export default projectsObj;
