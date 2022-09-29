const circle = document.querySelector('#circle');


//events 

circle.addEventListener('mouseenter', () => {
    //if circle does not contain hover
    // make sure its classList not classlist
if(!circle.classList.contains('hover')) {
    circle.classList.add('hover');
}
});

//mouseenter and mouseleave
circle.addEventListener('mouseleave', ()=>{
    if(circle.classList.contains('hover')){
        circle.classList.remove('hover');
    }
})