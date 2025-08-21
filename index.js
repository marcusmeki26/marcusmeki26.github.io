import { 
  changeHeaderBackgroundColor, 
  changeHeaderLinks,
  displayContentChild,
  displaySkillImgAndText
} from "./functions.js";

const ulParent = document.getElementById("header-links"); // Fetches the parent
const ulChildren = Array.from(ulParent.children); // Gets the children
// Loops through the children and check for any click
ulChildren.forEach(element => {
  element.onclick = function (){
    ulChildren.forEach(element => element.classList.remove("active"));
    this.classList.add("active");
  }
});

// Certification DOM
// Create an a tag where it links to my certificate
const certificationItems = [
  ['./files/C-certificate.pdf', 'CodeChum C II Course (2022)'],
  ['./files/introduction-to-networks.pdf', 'CCNAv7: Introduction to Networks (2023)'],
  ['./files/introduction-to-cybersecurity.pdf', 'Introduction to Cybersecurity (2023)'],
  ['', 'Participated in Cybersecurity during the 13 IT Skills Olympics (2024)'],
  ['./files/python-certiport.pdf', 'Information Technology Specialist in Python (2025)'],
  ['./files/networking-certiport.pdf', 'Information Technology Specialist in Networking(2025)'],
  ['./files/cybersecurity-certiport.pdf', 'Cisco Certified Support Technician Cybersecurity (2025)']
];

const certificationItemsContainer = document.getElementById("certification-items");
certificationItems.forEach(item => {
  const li = document.createElement('li');
  const a = document.createElement("a");
  a.textContent = item[1];
  a.href = item[0];
  a.target = "_blank";
  a.title = "View Certificate";

  li.appendChild(a);
  certificationItemsContainer.appendChild(li);
  // li.textContent = item;
  // certificationItemsContainer.appendChild(li);
});

// Upskilling DOM
const currentlyUpskillingItems = [
  ['https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg', 'Java Spring Boot'],
  ['https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg', 'Angular']
];

const currentlyUpskillingContainer = document.getElementById("currently-upskilling-items");
currentlyUpskillingItems.forEach(item => {
  const li = document.createElement("li");
  li.classList.add("skill-item");

  // Creates the image and span tag
  displaySkillImgAndText(item, li);

  // Append to the parent
  currentlyUpskillingContainer.appendChild(li);
});

// Skills/Knowledge DOM
const skillKnowledgeItems = [
  ['Frontend:',
    ['https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg','Angular'], 
    ['https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg', 'Vue.js'], 
    ['https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg', 'HTML 5'], 
    ['https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg', 'CCS 3'], 
    ['https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg', 'JavaScript'], 
    ['https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg', 'Tailwind CSS']
  ],
  ['Backend:', 
    ['https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg', 'PHP'], 
    ['https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg', 'Java']
  ],
  ['Database:', 
    ['https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg', 'MySQL'], 
    ['https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg', 'Oracle'], 
    ['https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mariadb/mariadb-original.svg', 'MariaDB'], 
    ['https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg', 'Firebase']
  ],
  ['Tools:', 
    ['https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg', 'Git'], 
    ['https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg', 'Github'], 
    ['https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg', 'Postman'], 
    ['https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/elasticsearch/elasticsearch-original.svg', 'Elasticseach'], 
    ['https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg', 'Flutter'], 
    ['https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/chartjs/chartjs-original.svg', 'ChartJS'], 
    'Flyway'
  ],
  ['Other Skills:', 
    ['https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg', 'Linux/Unix OS'], 
    ['https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg', 'Python'], 
    ['https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg', 'C'], 
    'LAMP Stack', 
    'Networking', 
    'Cybersecurity'
  ],
];

const skillKnowledgeContainer = document.getElementById("skills-knowledge-lists");
skillKnowledgeItems.forEach(items => {
  const parentDiv = document.createElement("div");
  parentDiv.classList.add("skills-category");

  const h3 = document.createElement("h3");
  h3.textContent = items[0];
  parentDiv.appendChild(h3);

  const childDiv = document.createElement("div");
  childDiv.classList.add("skill-item-container")
  items.slice(1).forEach(item => {
    if(item instanceof Array){
      const skillItemDiv = document.createElement("div");
      skillItemDiv.classList.add("skill-item");

      // Creates the image and span tag
      displaySkillImgAndText(item, skillItemDiv);

      childDiv.appendChild(skillItemDiv);
    }else{
      const span = document.createElement("span");
      span.textContent = item;
      childDiv.appendChild(span);
    }
  });

  parentDiv.appendChild(childDiv);
  skillKnowledgeContainer.appendChild(parentDiv);
});

// Research/Projects DOM
const researchProjecrtsItems = [
  ['2021', 'Project: Command-Line Application Banking Simulation', 'Programming Language: C'],
  ['2022', 'Project: Point of Sales System', 'Programming Language: Java'],
  ['2023-2024', 'Research: A Web Based Reservation Management System with Email and SMS Verification for A and Z Events Management', 'Tech Stack: HTML - CSS - JavaScript - PHP - MySQL'],
  ['2024-2025', 'Research: e-Collect Vending Machine for Plastic Bottle and Tin Cans for City Environment Waste Management Office (CEWMO) - Antipolo City', 'Tech Stack: HTML - CSS - JavaScript - PHP - MySQL - Arduino'],
  ['2025', 'Personal Project: Currently working on Shopping Website', 'Tech Stack: Angular - Java Spring Boot - MySQL & Elasticsearch - Flyway']
];

const timeLineContainer = document.getElementById("timeline");
researchProjecrtsItems.forEach(arrItems => {
  if((researchProjecrtsItems.indexOf(arrItems) % 2) == 0){
    // creating parent container
    const divLeft = document.createElement("div");
    divLeft.classList.add("timeline-container");
    divLeft.classList.add("left");
    // creating child div
    const divChild = document.createElement("div");
    divChild.classList.add("content");
    // child div children
    displayContentChild(divChild, arrItems);
    divLeft.appendChild(divChild);
    timeLineContainer.appendChild(divLeft);
  }else{
    // creating parent container
    const divLeft = document.createElement("div");
    divLeft.classList.add("timeline-container");
    divLeft.classList.add("right");
    // creating child div
    const divChild = document.createElement("div");
    divChild.classList.add("content");
    // child div children
    displayContentChild(divChild, arrItems);
    divLeft.appendChild(divChild);
    timeLineContainer.appendChild(divLeft);
  }
});

// Internship Experience DOM
const internshipExperienceItems = [
  'Developed front-end views using Vue.js',
  'Developed the registration module implementing form validation and state management',
  'Created base components for form inputs with customizable layouts and typography via props',
  'Created a component for a doughnut chart using chartJS',
  'Utilized pinia for handling complex User Interface',
  'Utilized git for managing local files & github for team collaboration',
];

const internshipExperienceContainer = document.getElementById("internship-experience-content");
const ul = document.createElement("ul");
internshipExperienceItems.forEach(item => {
  const li = document.createElement("li");
  li.textContent = item;
  ul.appendChild(li);
});
internshipExperienceContainer.appendChild(ul);

// Dynamically changes the header link based on which section is currently viewed
const sections = document.querySelectorAll("section");

const header = document.getElementById("header-container"); // Fetches the header parent
document.addEventListener("scroll", () => {
  // Used to dynamically change the header links
  changeHeaderLinks(sections, ulChildren)

  // Used to identify whether the Y axis changed
  changeHeaderBackgroundColor(window.scrollY, header);
});

// For opening resume
const viewResume = document.getElementById("view-resume");
viewResume.onclick = () => {
  window.open("./files/RESUME.pdf", "_blank");
}