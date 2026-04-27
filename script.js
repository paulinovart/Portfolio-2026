const projects = document.querySelectorAll(".home-page-project");
const workExperienceElementTitles = document.querySelectorAll(".work-experience-element-title");
const formationElementTitles = document.querySelectorAll(".formation-element-title");
const seeElementArrows = document.querySelectorAll(".see-element-arrow");
const workExperienceElements = document.querySelectorAll(".work-experience-element");
const formationElements= document.querySelectorAll(".formation-element");
const formationImg = document.querySelector(".formation-img");
const workExperienceImg = document.querySelector(".work-experience-img");
const homePageCoverImages = document.querySelectorAll(".home-page-project-cover");

//redirection vers les pages des projets spécifiques quand on clique dessus

projects.forEach(project => {
  project.addEventListener("click", () => {

    const id = project.dataset.id;

    window.location.href = `project.html?id=${id}`;
  });
});


//curseur personnalisé

const cursor = document.querySelector('.custom-cursor');


homePageCoverImages.forEach(element => {

 element.addEventListener('mousemove', (e) => {
  cursor.style.left = e.pageX + 'px';
  cursor.style.top = e.pageY + 'px';
  console.log(cursor.style.top);
});
// on eleve la classe invisible, et on la remet au mouse leave
element.addEventListener('mouseenter',(e) => {
   cursor.classList.remove("invisible");
}) ;

element.addEventListener('mouseleave',(e) => {
    cursor.classList.add("invisible");
}) 

    
});


//menu déroulant des experiences professionnelles

workExperienceElementTitles.forEach (element => {
    
    element.addEventListener("click", () =>{
    const imageId = element.dataset.id;
    workExperienceImg.innerHTML= `<img src="images/work-experience/${imageId}.png" alt="" />`;
       
    const parent = element.closest(".work-experience-element");
    const p = parent.querySelector(".work-experience-description");

    p.classList.toggle("invisible");


    } )
    
});

//menu déroulant formations

formationElementTitles.forEach (element => {
    
    element.addEventListener("click", () =>{
        const imageId = element.dataset.id;
        formationImg.innerHTML= `<img src="images/formation/${imageId}.png" alt="" />`;
       
    const parent = element.closest(".formation-element");
    const p = parent.querySelector(".formation-description");

    p.classList.toggle("invisible");




    } );



/*element.addEventListener("mouseover", ()=>{

    const seeElementArrow = document.querySelector(".see-element-arrow");
    seeElementArrow

})*/


    
});

