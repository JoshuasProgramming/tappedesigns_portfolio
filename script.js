//grabbing the hamburger icon and hamburger menu
const hamburger_icon = document.getElementById("hamburger_icon");
const hamburger_menu = document.getElementById("hamburger_menu");

//setting a boolean variable to check id the user has clicked on the hamburger icon 
let clickedBefore = false;

//once the user has clicked on the hamburger icon...
hamburger_icon.addEventListener('click', (e) => {

    //open the menu function
    const open = () => {
        document.getElementById("hamburger_menu").style.display = 'flex';
        clickedBefore = true;
    }

    //close the menu function
    const close = () => {
        document.getElementById("hamburger_menu").style.display = 'none';
        clickedBefore = false;
    }

    //set a condition to check whether or not to open or close the menu
    clickedBefore == false ? open() : close();
});