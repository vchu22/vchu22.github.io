var app = angular.module("app", []);

app.controller("linksController", function ($scope) {
  $scope.links = [
    {
      site: "Linkedin",
      link: "https://www.linkedin.com/in/vanessa-chu22/",
      class: "fab fa-linkedin fa-4x",
    },
    {
      site: "Github",
      link: "https://github.com/vchu22",
      class: "fab fa-github-square fa-4x",
    },
    {
      site: "GitLab",
      link: "https://gitlab.com/vchu22",
      class: "fab fa-gitlab fa-4x",
    },
    {
      site: "Codepen",
      link: "https://codepen.io/vchu22/",
      class: "fab fa-codepen fa-4x",
    },
    {
      site: "LeetCode",
      link: "https://leetcode.com/vchu22/",
      isimage: true,
      imglink: "https://unpkg.com/simple-icons@latest/icons/leetcode.svg",
    },
    {
      site: "Hackerrank",
      link: "https://www.hackerrank.com/vanessa_chu",
      class: "fab fa-hackerrank fa-4x",
    },
    {
      site: "My Blog",
      link: "https://code-expresso.netlify.com/",
      class: "fas fa-blog fa-3x",
    },
  ];
});

app.controller("skillsTab", function ($scope) {
  $scope.skills = [
    {
      category: "Web Development Technologies",
      items: [
        "HTML/CSS/Javascript",
        "Node.js",
        "Sequelize ORM",
        "React.js",
        "Redux",
        "Bootstrap",
        "Angular.js",
        "Socket.io",
        "Python Flask & Django",
      ],
    },
    {
      category: "Databases",
      items: ["PostgreSQL", "MySQL", "MongoDB"],
    },
    {
      category: "Programming Languages",
      items: ["Python", "Java", "C#", "C++"],
    },
    {
      category: "Game Development",
      items: ["Unity3D", "Blender"],
    },
    {
      category: "Others",
      items: [
        "Git & Github",
        "Project Management",
        "Heroku",
        "Google Cloud Platform",
        "Amazon Web Services",
      ],
    },
  ];
});

app.controller("expTab", function ($scope) {
  $scope.jobs = [
    {
      company: "OnHand",
      title: "Full-Stack Developer Intern",
      time: "12/2017 - 02/2018",
      bulletPts: [
        "Discussed the soware architecture of OnHand",
        "Evaluated third-party APIs for delivering emails and SMS",
        "Utilized Mailgun SMTP server, Twilio API, and Python Django for creating the messaging component",
      ],
    },
    {
      company: "FixMe",
      title: "Web Developer Intern",
      time: "12/2017 - 02/2018",
      bulletPts: [
        "Debugged frontend code and ensured the responsiveness of subscription modal",
        "Implemented new features using FancyGrid and Owl Carousel JavaScript libraries",
        "Utilized Git repository on Github and Bitbucket for version control and collaboration",
        "Utilized JIRA and Slack to communicate project requirements and discuss issues",
        "Proposed the use RESTful API to connect the frontend to the backend",
      ],
    },
  ];
});

app.controller("portfolioTab", function ($scope) {
  $scope.show = false;
  $scope.toggle = (project) => {
    $scope.show = !$scope.show;
    $scope.item = project;
  };
  $scope.portfolio = [
    {
      category: "UI Designs",
      projects: [
        {
          links: [{ type: "link", url: "prototypes/ResearchCrew/" }],
          title: "Research Crew",
          img: "prototypes/ResearchCrew/assets/Landing Page.png",
          desc: `A web app concept I created during the Technology Development Lab course at Queens College, a class that teaches the basics of turning your dream app into a startup. I came up with this idea because it was hard to find a platform where non-science majors like myself can contribute interesting science ideas, be involved in science projects, or connect with experts in the field. I also wanted to solve the problem that many students who majored in natural science couldn't jobs in relevant fields.

          Therefore, I sketched out this idea of a platform that allows anyone, including non-experts, to contribute ideas to an academic field of their interest by proposing research projects, and contribute their skills to existing projects. The platform also creates more freelance opportunities for students who are looking for works in their fields of study.`,
        },
        {
          links: [{ type: "link", url: "prototypes/DegreeAssociate/" }],
          title: "DegreeAssociate",
          img: "prototypes/DegreeAssociate/assets/Login.png",
          desc: `A UI design I created during the Software Engineering class at Queens College. My team intended to create a web app that allows CUNY students to quickly select the courses they need for their next semesters. Our idea is that the app will compare your major's requirements with the courses you have taken and suggest the best schedule for your next semester. We also designed the functionality of sending notifications when the courses you selected becomes available.
          I created the visuals using Adobe Photoshops and the interactive prototype using InVisionApp.`,
        },
      ],
    },
    {
      category: "Websites",
      projects: [
        {
          links: [
            {
              type: "code",
              url: "https://gitlab.com/quickreview/quickreview",
            },
          ],
          title: "QuickReview",
          img: "img/QuickReview.png",
          tech: ["Django", "Python", "Webpack", "SASS", "React", "PostgreSQL"],
          desc: `A project I started in August 2019. The goal is to create a website that leveraging the power of online community to help people getting their resumes and cover letters reviewed faster. I also designed it with gamification features to incentivize providing feedbacks for other users.
          As a project lead, I was responsible for a lot of things in this project, including designing the UI, setting up the project structure, writing documentations, managing the team, in addition to coding in Python Django and React.
          The main coding contributions were writing Django unit tests, building a basic login form, securing the passwords with advanced hashing algorithm, and writing other backend code.`,
        },
        {
          links: [
            {
              type: "link",
              url: "https://c-ar-d-server.herokuapp.com",
            },
            {
              type: "code",
              url: "https://github.com/c-ar-d/c-AR-d-Server",
            },
          ],
          title: "c-AR-d",
          img: "img/cARd.png",
          tech: [
            "NodeJS",
            "Javascript",
            "CSS",
            "React",
            "Heroku",
            "PostgreSQL",
            "Amazon-S3",
          ],
          desc: `This is the Capstone Project my team created during The Grace Hopper Program at Fullstack Academy of Code. It is a combination of a web app the allows users to create a custom greeting card for a friend and a mobile app that allows the receiver to scan the QR code on the card and view the AR/VR video uploaded by the sender.
          I functioned mainly as a backend developer to implement the service that takes in user input and stores them in the database, uploads multimedia files to Amazon S3, and generates custom greeting cards based on user inputs. We implemented the functionalities to handle information storage using Node.js, Sequelize ORM, PostgreSQL, AWS SDK, and multer middleware. Other than that, I used a few small third-party Node.js libraries to implement the QR code generation and image merging functionality on the backend.`,
        },
        {
          links: [
            {
              type: "link",
              url: "https://academic-center-chatbot.herokuapp.com/",
            },
            {
              type: "code",
              url: "https://github.com/vchu22/1901-GH-Stackathon",
            },
          ],
          title: "Academic Center Chatbot",
          img: "img/AcademicBot.png",
          tech: [
            "NodeJS",
            "Javascript",
            "CSS",
            "React",
            "Redux",
            "Heroku",
            "PostgreSQL",
            "Dialogflow",
          ],
          desc:
            "This project was created for the Grace Hopper Stackathon. It's a web interface for a fictional college academic advising center with a chatbot that gives extra hands to the busy college advising center to handle repetitive student requests. I coded the UI using React.js, Redux and CSS and built the backend using Node.js/Express, PostgreSQL, and Google Dialogflow. I utilized Google Dialogflow to create the chatbot interface and used for their platform for Natural Language Processing tasks, such as defining all the possible intents and classify user's utterances. On the server-side, I created a webhook route for the Dialogflow server hosted on the Google Cloud to communicate with my Node.js server hosted on Heroku, for the Dialogflow chatbot to retrieve information stored on the PostgreSQL database.",
        },
        {
          links: [
            {
              type: "link",
              url: "https://pluto-vegetables.herokuapp.com/",
            },
            {
              type: "code",
              url: "https://github.com/pluto-gh-1901/Pluto",
            },
          ],
          title: "Pluto Vegetables - Grace Shopper",
          img: "img/Pluto.png",
          tech: [
            "NodeJS",
            "Javascript",
            "CSS",
            "React",
            "Redux",
            "PostgreSQL",
            "Heroku",
          ],
          desc:
            "A fictional vegetable E-commerce site for the Grace Shopper project during The Grace Hopper Program. I collaborated with three other members to build this website using Node.js, Express.js, Sequelize ORM, PostgreSQL, React, and Redux. My most important contribution there was implementing the user authentication middleware to secure our REST API routes.",
        },
        {
          links: [
            {
              type: "link",
              url: "https://recipes-calc.herokuapp.com/",
            },
            {
              type: "code",
              url: "https://github.com/vchu22/recipes-calc",
            },
          ],
          tech: ["NodeJS", "Javascript", "Bootstrap", "AngularJS", "Heroku"],
          title: "RecipesCalc",
          img: "img/RecipesCalc.png",
          date: "03/2018 - 08/2018",
          desc:
            "A recipe search & nutrition calculator app I created for my final project at the NYC Tech Talent Pipeline pre-internship training. During the program, I initially used Bootstrap and jQuery to implement the basic functionalities, including recipe search, auto-populating the ingredients list and nutritional values. After the program, I enhanced the visuals by installing a custom Bootstrap theme, changing the CSS code, and adding loading animations and responsive design. To make the Javascript code more modular, I replaced the original pure jQuery code with AngularJS code.",
        },
        // {
        //   links: [
        //     {
        //       type: 'link',
        //       url: 'https://foodhub-cuny-hackathon.herokuapp.com/',
        //     },
        //   ],
        //   title: 'FoodHub',
        //   img: 'img/FoodHub.png',
        //   desc:
        //     'A project I made for CUNY hackathon 2017. My team created this food order website that is cater to college students as college campus are often very big while most food ordering app does not allow designating a drop off location inside the campus. I was mainly responsible for designing the webpages and implement the frontend code using HTML, CSS, Bootstrap, Javascript, jQuery, and PHP.',
        // },
      ],
    },
    {
      category: "Mini Projects",
      projects: [
        {
          links: [
            {
              type: "link",
              url: "https://covid19-data-visualization.now.sh/",
            },
            {
              type: "code",
              url: "https://github.com/vchu22/covid19-visualization",
            },
          ],
          title: "COVID Watch",
          img: "img/COVID-Watch.png",
          tech: ["React", "Webpack"],
          desc: `During the COVID-19 pandemic, I made a small website that displays the current metrics for COVID cases. I also made a chart that visualizes the trend in each country. The libraries I used in this project include Recharts, styled-components, Flux, and React Mapbox GL.`,
        },
        {
          links: [
            {
              type: "link",
              url: "https://vchu22.github.io/Game-of-life/",
            },
          ],
          title: "Game of life",
          img: "img/Game-of-Life.gif",
          tech: ["HTML", "CSS", "Javascript"],
          desc: `An exercise project I worked on during the Grace Hopper Program junior phase. It's implemented based on the rule of Conway's Game of Life, which is a cellular automaton devised by the British mathematician John Horton Conway. You can initialize the cell positions by clicking on those cells, and click 'Step' or 'Play' to generate the next cell positions based on Conway's Game of Life rules.`,
        },
        {
          links: [
            {
              type: "link",
              url: "https://vchu22.github.io/guessing-game/",
            },
          ],
          title: "Guessing Game",
          img: "img/Guessing-Game.png",
          tech: ["HTML", "CSS", "Javascript"],
          desc: `A Guessing Game exercise project I created during the Grace Hopper Program Foundation Period. In each game, there will be a predefined number for you to guess. Your job is to guess the number based on the hints showed. You will have a maximum of 5 tries until the game ends.`,
        },
      ],
    },
  ];
});
