const hamburger_icon = document.getElementById("hamburger_icon");
const hamburger_menu = document.getElementById("hamburger_menu");

let clickedBefore = false;

hamburger_icon.addEventListener('click', (e) => {

    const open = () => {
        document.getElementById("hamburger_menu").style.display = 'flex';
        clickedBefore = true;
    }

    const close = () => {
        document.getElementById("hamburger_menu").style.display = 'none';
        clickedBefore = false;
    }

    clickedBefore == false ? open() : close();
});





// if(toggle == true) {
//     hamburger_icon.addEventListener('click', (e) => {
//         document.getElementById("hamburger_menu").style.display = 'none';
//         toggle = false;
//         alert(2)
//     });
// }