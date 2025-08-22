const urlParameter = new URLSearchParams(window.location.search);
const project = urlParameter.get("project");

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// project-section
const projectContainer = document.getElementById("project-section");
const projectTitle = document.createElement("h1");
const description = document.createElement("p");

// E-COLLECT
const eCollectBasePath = "/images/Projects/e-collect/";
const eCollectImages = [
  eCollectBasePath + 'first-picture.jpg',
  eCollectBasePath + 'second-picture.jpg',
  eCollectBasePath + 'third-picture.jpeg',
  eCollectBasePath + 'fourth-picture.jpeg'
];

const eCollect = [
  // Title
  `e-Collect Vending Machine for Plastic Bottle 
  and Tin Cans for City Environment Waste Management Office (CEWMO) - Antipolo City (Preview)`,
  // Images
  eCollectImages,
  // Videos
  'https://drive.google.com/file/d/1uFjPvuweQsP3g5Hwvfjliil5kCAlb4lv/preview',
  // Description
  '',
  // Repo Links
];

// Images
if(project == "eCollect"){
  projectTitle.textContent = eCollect[0];
  projectTitle.classList.add("project-title");
  projectContainer.appendChild(projectTitle);

  const slideshowContainer = document.createElement("div");
  slideshowContainer.classList.add("slideshow-container");

  // Looping through images
  eCollect[1].forEach(image => {
    const imageNumber = (eCollect[1].indexOf(image) + 1);
    // Parent creation
    const parentDiv = document.createElement("div");
    parentDiv.classList.add("slideshow");
    parentDiv.classList.add("fade");
  
    // Child creation
    const childDiv = document.createElement("div");
    childDiv.classList.add("numbertext")
    childDiv.textContent = imageNumber + " / " + eCollectImages.length;
    const img = document.createElement("img");
    img.src = image;
    img.style.objectFit = "cover";
    img.alt = "slide show image " + imageNumber;
    parentDiv.appendChild(childDiv);
    parentDiv.appendChild(img);
    slideshowContainer.appendChild(parentDiv);
  });
  
  const prev = document.createElement("a");
  prev.classList.add("prev");
  prev.setAttribute("onclick", "plusSlides(-1)");
  prev.innerHTML = "&#10094;";
  const next = document.createElement("a");
  next.classList.add("next");
  next.setAttribute("onclick", "plusSlides(1)");
  next.innerHTML = "&#10095;";
  slideshowContainer.appendChild(prev);
  slideshowContainer.appendChild(next);
  projectContainer.appendChild(slideshowContainer);
  
  // Video
  const videoContainer = document.createElement("div");
  videoContainer.classList.add("video-container");
  const iframe = document.createElement("iframe");
  iframe.src = eCollect[2];
  iframe.width = "100%";
  iframe.height = "100%";
  videoContainer.appendChild(iframe);
  projectContainer.appendChild(videoContainer);
}

let slideIndex = 1;
showSlides(slideIndex);

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slideshow");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}