window.addEventListener("scroll", onScroll);
onScroll();

function onScroll(){
    showNavOnScroll();
    showBackToTopButtonOnScroll();
    activeteMenuAtCurrentSection(home);
    activeteMenuAtCurrentSection(services);
    activeteMenuAtCurrentSection(about);
    activeteMenuAtCurrentSection(contact);
}

function activeteMenuAtCurrentSection(section){
    const targetLine = scrollY + innerHeight / 2;

    // Check if the section has passed the line
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop;

    // Check if the section is below the target line
    const sectionEndsAt = sectionTop + sectionHeight;
    const sectionEndPassedTargetLine = sectionEndsAt <= targetLine;

    // Section limits
    const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine;

    const sectionId = section.getAttribute('id');
    const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`);

    menuElement.classList.remove('active');
    if(sectionBoundaries){
        menuElement.classList.add('active');
    }
}

function showNavOnScroll(){
    const navigation = document.getElementById("navigation");
    if(scrollY > 0){
        navigation.classList.add("scroll");
    } else{
        navigation.classList.remove("scroll");
    }
}

function showBackToTopButtonOnScroll(){
    const navigation = document.getElementById("backToTopButton");
    if(scrollY > 550){
        navigation.classList.add("show");
    } else{
        navigation.classList.remove("show");
    }
}

function openMenu(){
    const body = document.body;
    body.classList.add("menu-expanded");
}

function closeMenu(){
    const body = document.body;
    body.classList.remove("menu-expanded");
}

ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
}).reveal(`#home, #home img, #home .stats, #services, #services header, #services .card, #about, #about header, #about .content`);