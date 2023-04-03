function Drawer(el, open = false) { // A 
    this.el = el;
    this.isOpen = open;
    (this.isOpen) ? this.open() : this.close();
}
Drawer.prototype.open = function() {  // B 
this.isOpen = true;
this.el.style.transform = 'translate(0)'; 
}
Drawer.prototype.close = function() { 
this.isOpen = false;
this.el.style.transform = 'translate(-100%)';
}

const sideMenu = new Drawer(document.querySelector('.side_menu')); // C
const menuOpner = document.querySelectorAll('.menu_opner');

for(let i=0; i<menuOpner.length; i++){
    menuOpner[i].addEventListener('click', e => {  
        if(!sideMenu.isOpen){
            sideMenu.open();
            menuOpner[1].style.opacity = '1';
        }
        else {
            sideMenu.close();
            menuOpner[1].style.opacity = '0';
        }
    });
}