
window.addEventListener('scroll',()=>{
document.querySelector('header').classList.toggle('sticky',window.scrollY>50);
});

console.log("Premium Pet Zone Website Loaded");
