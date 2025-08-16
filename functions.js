export function changeHeaderBackgroundColor(yValue, header){
  if(yValue < 5){
    header.style.backgroundColor = "transparent";
  }else{
    header.style.backgroundColor = "#32127A";
    header.style.transition = "all .4s linear";
  }
}

export function changeHeaderLinks(sections, ulChildren){
  for(const section of sections){
    const rect = section.getBoundingClientRect();
    if(rect.top >= 0 && rect.top <= window.innerHeight / 4) { // Adjust threshold as needed
      ulChildren.forEach(li => {
        const hash = li.children[0].hash;
        const cleanedHash = hash.replace("#", "");
        if(cleanedHash == section.id){
          li.classList.add("active");
        }else{
          li.classList.remove("active");
        }
      });
    }
  }
  return null;
}

// Helper methods
export function displayContentChild(divChild, arrItems){
  return arrItems.forEach(item => {
    if(arrItems.indexOf(item) == 0){
      const h2 = document.createElement("h2");
      h2.textContent = item;
      divChild.appendChild(h2);
    }else{
      const p = document.createElement("p");
      p.textContent = item;
      divChild.appendChild(p);
    }
  })
}