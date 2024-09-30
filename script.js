const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');

menuToggle.addEventListener('click', () => {
    sidebar.style.display = sidebar.style.display === 'flex' ? 'none' : 'flex';
});

function showSection(sectionId) {
    const sections = document.querySelectorAll('.content section');
    sections.forEach(section => section.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');

    const links = document.querySelectorAll('.sidebar a');
    links.forEach(link => link.classList.remove('active'));
    document.querySelector(`.sidebar a[onclick="showSection('${sectionId}')"]`).classList.add('active');
}
