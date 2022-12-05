//const elHtml = document.querySelector('h1')
//const elHtml = document.getElementsByClassName('titre')
/*const titre = document.querySelector('h1');*/
/*const btn =document.querySelector('.btn');*/
/*document.addEventListener('keydown',presentation)
btn.addEventListener('click',()=>{
    presentation()
})*/
const btn = document.querySelector('.btn1');

btn.addEventListener('click', presentation)

function presentation() {
    // titre.classList.add('taille-txt')
    btn.classList.toggle('active')
}
