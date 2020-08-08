for (let i = 1; i <= 6; i++) {
    const submenu = document.getElementById(`submenu${i}`);
    const background = document.getElementById('dark-background');

    if (screen.width > 768) {
        addDesktopListeners(submenu, background, i);
    } else {
        addMobileListeners(submenu, i);
    }
}

if (screen.width < 768) {
    createArrows();
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

function addMobileListeners(submenu, i) {
    document.getElementById(`nav-elem${i}`).addEventListener("click", function () {
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
    });
}

function createArrows() {
    const elements = document.getElementsByClassName('elem');
    for (const element of elements) {
        let arrow = document.createElement('div');
        arrow.classList.add('arrow');
        element.appendChild(arrow);
    }
}


document.getElementById('burger-button').addEventListener('click', function () {
    this.classList.toggle('active');
    document.getElementById('navigation').classList.toggle('active');
})