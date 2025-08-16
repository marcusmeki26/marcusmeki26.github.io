import { 
  changeHeaderBackgroundColor, 
  changeHeaderLinks,
  displayContentChild
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
const certificationItems = [
  'CodeChum C II Course (2022)',
  'CCNAv7: Introduction to Networks (2023)',
  'Introduction to Cybersecurity (2023)',
  'Participated in Cybersecurity during the 13 IT Skills Olympics (2024)',
  'Information Technology Specialist in Python (2025)',
  'Information Technology Specialist in Networking(2025)',
  'Cisco Certified Support Technician Cybersecurity (2025)'
];

const certificationItemsContainer = document.getElementById("certification-items");
certificationItems.forEach(item => {
  const li = document.createElement('li');
  li.textContent = item;
  certificationItemsContainer.appendChild(li);
});

// Upskilling DOM
const currentlyUpskillingItems = [
  'Java Spring Boot',
  'Angular'
];

const currentlyUpskillingContainer = document.getElementById("currently-upskilling-items");
currentlyUpskillingItems.forEach(item => {
  const li = document.createElement("li");
  li.textContent = item;
  currentlyUpskillingContainer.appendChild(li);
});

// Skills/Knowledge DOM
const skillKnowledgeItems = [
  ['Fontend:','Angular', 'Vue.js', 'HTML 5', 'CCS 5', 'JavaScript', 'Tailwind CSS'],
  ['Backend:', 'PHP', 'Java'],
  ['Database:', 'MySQL', 'Oracle', 'MariaDB', 'Firebase'],
  ['Tools:', 'Git', 'Github', 'Postman', 'Elasticseach', 'Flyway', 'Flutter', 'ChartJS'],
  ['Other Skills:', 'Networking', 'Cybersecurity', 'Linux/Unix OS', 'LAMP Stack', 'Python', 'C'],
];

const skillKnowledgeContainer = document.getElementById("skills-knowledge-lists");
skillKnowledgeItems.forEach(items => {
  const div = document.createElement("div");
  div.classList.add("skills-category");

  const h3 = document.createElement("h3");
  h3.textContent = items[0];
  div.appendChild(h3);

  const childDiv = document.createElement("div");

  items.slice(1).forEach(item => {
    const span = document.createElement("span");
    span.textContent = item;
    if(items[items.length-1] != item){
      span.textContent = span.textContent +  " -"; 
    }
    span.style.marginRight = ".5em";
    childDiv.appendChild(span);
  });

  div.appendChild(childDiv);
  skillKnowledgeContainer.appendChild(div);
});

// Research/Projects DOM
const researchProjecrtsItems = [
  ['2021', 'Project: Command-Line Application Banking Simulation', 'Programming Language: C'],
  ['2022', 'Project: Point of Sales System', 'Programming Language: Java'],
  ['2023-2024', 'Research: A Web Based Reservation Management System with Email and SMS Verification for A and Z Events Management', 'Tech Stack: HTML - CSS - JavaScript - PHP - MySQL'],
  ['2024-2025', 'Research: e-Collect: Vending Machine for Plastic Bottle and Tin Cans for City Environment Waste Management Office (CEWMO) - Antipolo City', 'Tech Stack: HTML - CSS - JavaScript - PHP - MySQL'],
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
  window.open("./resume.pdf", "_blank");
}