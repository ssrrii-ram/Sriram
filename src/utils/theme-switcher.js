const darkmode = ()=>{
    const toggleThemeBtn = document.querySelectorAll('#theme-toggle');
    // state
    const theme = localStorage.getItem('theme');

    // on mount
    theme && document.body.classList.add(theme)


    // handlers
    
    

    toggleThemeBtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        document.body.classList.toggle('lightmode');
        if(document.body.classList.contains('lightmode')){
            localStorage.setItem('theme', 'lightmode')
        }else{
            localStorage.removeItem('theme');
        }
        
    })
})
}

export default darkmode