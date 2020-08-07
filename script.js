for (let i = 1; i <= 6; i++) {
    document.getElementById(`nav-elem${i}`).addEventListener("mouseover", () => {
        document.getElementById(`submenu${i}`).style.opacity = 1;
        document.getElementById(`submenu${i}`).style.visibility = 'visible';
        document.getElementById('dark-background').style.opacity = 0.3;
        document.getElementById('dark-background').style.visibility = 'visible';
    });

    document.getElementById(`nav-elem${i}`).addEventListener("mouseout", () => {
        document.getElementById(`submenu${i}`).style.opacity = 0;
        document.getElementById(`submenu${i}`).style.visibility = 'hidden';
        document.getElementById('dark-background').style.opacity = 0;
        document.getElementById('dark-background').style.visibility = 'hidden';
    });
}

