
function bar(opcl) {
    switch (opcl) {
        case "open":
            document.getElementById("bar-side").style.right = 0;
            document.getElementById('close').style.width = 100 + '%';
            break;

        case "clos":
            document.getElementById("bar-side").style.right = -100 + "%";
            document.getElementById('close').style.width = 0 + '%';
            break;
    }
}

document.querySelector('body').style.opacity = 1;
document.querySelectorAll('h1')[0].style.opacity = 1;
document.querySelectorAll('p')[0].style.opacity = 1;

window.onscroll = function () {
    scrol();
};

function scrol() {

    if(Math.floor(scrollY) >= 100){
        document.getElementById("nav").style.position = 'fixed';
        document.getElementById('focus').style.marginTop = document.getElementById('nav').offsetHeight + 'px';
    }else{
        document.getElementById('nav').style.position = 'unset';
        document.getElementById('focus').style.marginTop = 0;
    }

}

function respons(){
    if(window.innerWidth > 1023){
            var styleElem = document.getElementById('focus');
            var styleElem = document.head.appendChild(document.createElement("style"));
            styleElem.innerHTML = "#focus::before {display:none}";
            document.getElementById('video').style.display = 'block';
    }else{
        var styleElem = document.getElementById('focus');
        var styleElem = document.head.appendChild(document.createElement("style"));
        styleElem.innerHTML = "#focus::before {display:block}";
        document.getElementById('video').style.display = 'none';
    }
}

setInterval(respons, 3000)
