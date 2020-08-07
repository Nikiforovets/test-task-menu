for (let i = 1; i <= 6; i++) {
    const submenu = document.getElementById(`submenu${i}`);
    const background = document.getElementById('dark-background');

    if (screen.width > 768) {
        addDesktopListeners(submenu, background, i);
    } else {
        addMobileListeners(submenu, i);
    }

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
    document.getElementById(`nav-elem${i}`).addEventListener("click", () => {
        submenu.classList.toggle('active');
    })
}


document.getElementById('burger-button').addEventListener('click', function () {
    this.classList.toggle('active');
    document.getElementById('navigation').classList.toggle('active');
})