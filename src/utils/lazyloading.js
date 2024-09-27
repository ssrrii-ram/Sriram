const lazyloading =() =>{
    const lazyImg = document.querySelectorAll('.lazy')
const observer = new IntersectionObserver((entries, observer)=>{
    entries.forEach(entry =>{
        if (entry.isIntersecting){
            let img = entry.target;
            img.src = img.dataset.src
            observer.unobserve(entry.target)
        }
    })

},{
    root:null,
    rootMargin:'0px',
    threshold:0
})


lazyImg.forEach(img =>{
    observer.observe(img)
})

}


export default lazyloading