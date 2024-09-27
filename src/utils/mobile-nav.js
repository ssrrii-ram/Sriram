
const mobileNav = () =>{
    const headerBtn = document.querySelector('.header__bars');
    const mobileNav = document.querySelector('.mobile-nav');

    const mobilLinks = document.querySelectorAll('.mobile-nav__link')

    // state 
    let isMobileNavOpen = false;

    
    headerBtn.addEventListener('click', ()=>{
        if (isMobileNavOpen){
            mobileNav.style.display = 'flex';
            document.body.style.overflowY = 'hidden'
    
        }else{
            mobileNav.style.display = 'none';
            document.body.style.overflowY = 'auto'
        }

        isMobileNavOpen = !isMobileNavOpen

        mobilLinks.forEach((link) =>{
            link.addEventListener('click', ()=>{
            isMobileNavOpen = false
            mobileNav.style.display = 'none';
            document.body.style.overflowY = 'auto'
                
            })
        })
    
})

}


export default mobileNav
