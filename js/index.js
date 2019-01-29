// Your code goes here
function popup(mylink, windowname) { 
    if (! window.focus)return true;
    var href;
    if (typeof(mylink) == 'string') href=mylink;
    else href=mylink.href; 
    window.open(href, windowname, 'width=600,height=600,scrollbars=no'); 
    return false; 
  }

  
