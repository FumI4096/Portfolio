document.addEventListener("DOMContentLoaded", function(event) { 
    var scrollpos = localStorage.getItem('scrollpos');
    if (scrollpos) window.scrollTo(0, scrollpos);
});

window.onbeforeunload = function(e) {
    localStorage.setItem('scrollpos', window.scrollY);
};

function toIndexPhp(){
    window.location.href = "../index.php?prevent_redirect=true";
}

document.addEventListener('DOMContentLoaded', function(){
    var theButton = document.getElementById('backbutton');
    theButton.addEventListener('click',toIndexPhp);
});