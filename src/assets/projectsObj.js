/* eslint-disable */
// import coffeeShop from './img/projects/pic1.jpg';
// import toDoList from './img/projects/toDoList.png';
// import newGame from './img/projects/newGame.png';
// import blog from './img/projects/pic2.jpg';
// import carRental from './img/projects/pic3.png';

const projectsObj = [
  {
    id: 1,
    title: 'Coffee Shop',
    img: require('./img/projects/pic1.jpg'),
    projectDetailSecond: 'Front End Dev',
    projectDate: '10-2022',
    languages: ['html', 'css', 'javaScript', 'React'],
    description: 'It\'s a small store where you can buy your favorite coffee',
    githubLink: 'https://github.com/a-laarabi/Coffee_Shop',
    deployLink: '',
  },
  {
    id: 2,
    title: 'To-do list',
    img: require('./img/projects/toDoList.png'),
    projectDetailSecond: 'Front End Dev',
    projectDate: '07-2022',
    languages: ['html', 'css', 'javaScript'],
    description: 'This is an educational project to make a TodoList web application, where the users can add new, remove, edit, mark as completed and remove all tasks',
    githubLink: 'https://github.com/a-laarabi/To-Do-list',
    deployLink: 'https://a-laarabi.github.io/To-Do-list/dist/',
  },
  {
    id: 3,
    title: 'My New Game',
    img: require('./img/projects/newGame.png'),
    projectDetailSecond: 'Front End Dev',
    projectDate: '11-2022',
    languages: ['html', 'css', 'javaScript', 'React'],
    description: 'A website is a web application that provide the data for the newest game in the market',
    githubLink: 'https://github.com/a-laarabi/React-Capstone',
    deployLink: 'https://lighthearted-quokka-21d8f2.netlify.app/',
  },
  {
    id: 4,
    title: 'Blog',
    img: require('./img/projects/pic2.jpg'),
    projectDetailSecond: 'Back End Dev',
    projectDate: '12-2022',
    languages: ['html', 'css', 'javaScript', 'Ruby'],
    description: 'The Blog app will be a classic example of a blog website. I will create a fully functional website that will show the list of posts and empower readers to interact with them by adding comments and liking posts.',
    githubLink: 'https://github.com/a-laarabi/Blog',
    deployLink: '',
  },
  {
    id: 5,
    title: 'Car Rental',
    img: require('./img/projects/pic3.png'),
    projectDetailSecond: 'Back End Dev',
    projectDate: '01-2022',
    languages: ['html', 'css', 'javaScript', 'Node.js'],
    description: 'This is a website for a car rental company where you can book a car. "still under construction" you can check it later ;)',
    githubLink: 'https://github.com/a-laarabi',
    deployLink: '',
  },
];

export default projectsObj;
