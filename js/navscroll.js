
function scrollFuncMeni()
{
    var contain = document.querySelector('.container');
    var aboutUs = document.querySelector('.aboutUs').offsetTop;

    if(contain && aboutUs){
        var top = aboutUs - 950;

        window.scrollTo({top: top, behavior: 'smooth'});
    }else {
        console.log("Not found");
    }
}


function scrollFuncAbout()
{
    var contain = document.querySelector('.container');
//    var aboutText = document.querySelector('.about');


    if(contain){
       window.scrollTo({top: contain.scrollHeight, behavior: 'smooth'});
        //aboutText.classList.add('visible');
       // aboutText.innerHTML = "scrolled!";
    }
    else {
        console.log("Not found");
    }
}


