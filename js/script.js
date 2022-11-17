const sections=document.querySelectorAll('.section');

console.log(sections);

const observer=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        entry.target.classList.toggle('show',entry.isIntersecting);
        if(entry.isIntersecting){
            observer.unobserve(entry.target);
        }
    });
},{
    threshold:.25
});

sections.forEach(section=>{
    observer.observe(section);
});