// Your code goes here
function popup(mylink, windowname) { 
    if (! window.focus)return true;
    var href;
    if (typeof(mylink) == 'string') href=mylink;
    else href=mylink.href; 
    window.open(href, windowname, 'width=600,height=600,scrollbars=no'); 
    return false; 
  }

  const Sbtn = document.querySelector('.destination .btn');
    Sbtn.addEventListener('click', e => {
       // document.body.style.backgroundColor = "linear-gradient(#FFF200 0%, #FFFFFF)";
       document.body.style.backgroundColor = "#FFF200";
});

//tried to make the Great btn dispaer but couldnt figure out how :(
//const Gbtn = document.querySelector('.modal .message .options .btn1');
//    Sbtn.addEventListener('click', e => {
//        button.style.visibility = "hidden";
//});



