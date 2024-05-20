
function closeNav() {
    let sidebar = document.getElementById('side-bar');
    sidebar.style.right = '-100%'; // Move the sidebar completely out of view
    document.body.classList.remove('no-scroll');
}

function openNav() {
    let sidebar = document.getElementById('side-bar');
    sidebar.style.right = '0';
    document.body.classList.add('no-scroll');
}

