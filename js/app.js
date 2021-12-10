// Scrollbar
window.onscroll = function(){
    var pos = document.documentElement.scrollTop;
    var calc_height = document.documentElement.scrollHeight-
                    document.documentElement.clientHeight;
    var scroll = pos * 100 / calc_height;
    document.getElementById("progress").style.width = scroll + "%"; 
}



// Navbar Toggle
function toggle() {
    var header = document.getElementById("header")
    header.classList.toggle('active')
}


// For light and dark modes
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const switchTheme = (e) => {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
}
// For current theme
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}
toggleSwitch.addEventListener('change', switchTheme);

// For navbar animation
// var prevScrollpos = window.pageYOffset;
// window.onscroll = function () {

//     var currentScrollpos = window.pageYOffset;
//     if (prevScrollpos > currentScrollpos) {
//         document.getElementById("header").style.top = "0";
//     } else {
//         document.getElementById("header").style.top = "-60px";
//     }
//     prevScrollpos = currentScrollpos;
// }

// For box-shadow at navbar animation
window.addEventListener('scroll', function () {
    let header = document.querySelector('header');
    let windowPosition = window.scrollY > 0;
    header.classList.toggle('scrolling-active', windowPosition);
})


