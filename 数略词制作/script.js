// window.onload = init;

init();

function init() {
    let el = document.querySelector('.word');
    initWordElement(el);
    console.log(el);
}

function initWordElement(el) {
    let middles = el.querySelectorAll('.middle');
    el.onclick = () => {
        middles.forEach(m => m.classList.toggle('hide'))
    };
    // el.onclick = function() {
    //     middles.forEach(function(m) {
    //         m.classList.toggle('hide');
    //     })
    // }
}
