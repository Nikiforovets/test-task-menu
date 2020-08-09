for (let i = 1; i <= 6; i++) {
    const submenu = document.getElementById(`submenu${i}`);
    const background = document.getElementById('dark-background');

    if (screen.width > 768) {
        addDesktopListeners(submenu, background, i);
    } else {
        addBurgerTopListeners(submenu, i);
    }
}

if (screen.width < 768) {
    createArrows();
    addBurgerLowListeners();
}

function addDesktopListeners(submenu, background, i) {
    document.getElementById(`nav-elem${i}`).addEventListener("mouseover", () => {
        submenu.classList.add('active');
        background.style.opacity = 0.3;
        background.style.visibility = 'visible';
    });

    document.getElementById(`nav-elem${i}`).addEventListener("mouseout", () => {
        submenu.classList.remove('active');
        background.style.opacity = 0;
        background.style.visibility = 'hidden';
    });
}

function addBurgerTopListeners(submenu, i) {
    document.getElementById(`nav-elem${i}`).addEventListener("click", function (e) {
        if (e.target.classList.contains('elem') || e.target.classList.contains('arrow')) {
            const activeTabs = document.getElementsByClassName('elem active');
            for (tab of activeTabs) {
                if (document.getElementById(`elem${i}`) != tab)
                    tab.className = 'elem';
            }
            const activeSubmenues = document.getElementsByClassName('submenu active');
            for (activeSubmenu of activeSubmenues) {
                if (activeSubmenu != submenu)
                    activeSubmenu.className = 'submenu';
            }
            submenu.classList.toggle('active');
            for (element of this.childNodes) {
                if (element.className == 'elem' || element.className == 'elem active') {
                    element.classList.toggle('active');
                }
            }
            subArrows = document.getElementsByClassName('subelement-arrow');
            for (disableArrow of subArrows) {
                disableArrow.parentNode.nextElementSibling.classList.remove('active');
                disableArrow.classList.remove('active');
            }
        }
    });
}

function addBurgerLowListeners() {
    subArrows = document.getElementsByClassName('subelement-arrow');
    lowMenues = document.getElementsByClassName('low-level-menu');
    console.log(subArrows);
    for (arrow of subArrows) {
        arrow.addEventListener("click", function () {
            for (disableArrow of subArrows) {
                if (disableArrow != this) {
                    disableArrow.parentNode.nextElementSibling.classList.remove('active');
                    disableArrow.classList.remove('active');
                }
            }
            this.parentNode.nextElementSibling.classList.toggle('active');
            this.classList.toggle('active');
        });
    }
}

function createArrows() {
    const elements = document.getElementsByClassName('elem');
    for (const element of elements) {
        let arrow = document.createElement('div');
        arrow.classList.add('arrow');
        element.appendChild(arrow);
    }
    const subElements = document.getElementsByClassName('label-low-lavel-menu');
    for (const subElement of subElements) {
        let arrow = document.createElement('div');
        arrow.classList.add('subelement-arrow');
        subElement.appendChild(arrow);
    }
}


document.getElementById('burger-button').addEventListener('click', function () {
    this.classList.toggle('active');
    document.getElementById('navigation').classList.toggle('active');
})