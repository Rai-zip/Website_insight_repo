
function closeNav() {
    let sidebar = document.getElementById('side-bar');
    sidebar.style.right = '-100%'; // Move the sidebar completely out of view
}

function openNav() {
    let sidebar = document.getElementById('side-bar');
    sidebar.style.right = '0';
}