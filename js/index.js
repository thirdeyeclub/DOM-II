// Your code goes here

//1
function popup(mylink, windowname) { 
    if (! window.focus)return true;
    var href;
    if (typeof(mylink) == 'string') href=mylink;
    else href=mylink.href; 
    window.open(href, windowname, 'width=600,height=600,scrollbars=no'); 
    return false; 
  }

  //2
  const Sbtn = document.querySelector('.destination .btn');
    Sbtn.addEventListener('click', e => {
       // document.body.style.backgroundColor = "linear-gradient(#FFF200 0%, #FFFFFF)";
       document.body.style.backgroundColor = "#FFF200";
});

//3
//tried to make the Great btn dispaer but couldnt figure out how :(
//const Gbtn = document.querySelector('.modal .message .options .btn1');
//    Sbtn.addEventListener('click', e => {
//        button.style.visibility = "hidden";
//});

//4
window.addEventListener('scroll', () => {
    console.log("MOVE IT! MOVE IT!")
})

//5
const topImg = document.querySelector('.intro img');
document.addEventListener('wheel', e => {
    TweenMax.to('.intro', 1, {rotation:-2})
});

//6
const mapImg = document.querySelector('.img-content img');
mapImg.addEventListener('dblclick', e => {
    TweenMax.to('.img-content', 1, {scaleY:1.2, scaleX:1.2});
    e.stopPropagation();
});

//7 currently bugged
//const navA = document.querySelectorAll('nav')
//    navA.addEventListener('click', e => {
//    
//    document.body.style.color = "#FFF200";
//});

//8
const body = document.querySelector('body')
body.addEventListener('dblclick', () => { 
    location.reload();
});

//9
const change = document.querySelector('.content-destination img');
change.addEventListener("mouseover", e => {
    
    document.getElementsByTagName("img")[3].src = "img/Hell.jpg";
    console.log(e);
       }
)

//10
window.onload = () => {
    document.getElementById("my_audio").play();
}