
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

    if(contain){
        window.scrollTo({top: contain.scrollHeight, behavior: 'smooth'});
    }else {
        console.log("Not found");
    }
}