for (let i = 1; i <= 6; i++) {
    document.getElementById(`nav-elem${i}`).addEventListener("mouseover", () => {
        // document.getElementById(`submenu${i}`).style.height = 'auto';
        // document.getElementById(`submenu${i}`).style.overflow = 'visible';
        // document.getElementById(`submenu${i}`).style.opacity = 1;
        document.getElementById(`submenu${i}`).style.display = 'flex';
        document.getElementById('dark-background').style.display = 'block';
    });

    document.getElementById(`nav-elem${i}`).addEventListener("mouseout", () => {
        // document.getElementById(`submenu${i}`).style.height = '0px';
        // document.getElementById(`submenu${i}`).style.overflow = 'hidden';
        // document.getElementById(`submenu${i}`).style.opacity = 0;
        document.getElementById(`submenu${i}`).style.display = 'none';
        document.getElementById('dark-background').style.display = 'none';
    });
}

