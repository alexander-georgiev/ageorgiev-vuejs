function toggle_menu() {
    var toggle_button = document.getElementsByClassName('navbar-burger')[0],
        menu_container = document.getElementById('navbarNav');
    toggle_button.addEventListener('click', function() {
        menu_container.classList.toggle("is-active");
        toggle_button.classList.toggle("is-active");
    });
}

function test() {
    console.log('asd');
}
export {
    toggle_menu,
    test
}