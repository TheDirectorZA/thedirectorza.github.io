function showSection(sectionId) {
    const sections = document.querySelectorAll('.content section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    document.getElementById(sectionId).classList.add('active');

    const links = document.querySelectorAll('.sidebar a');
    links.forEach(link => {
        link.classList.remove('active');
    });

    document.querySelector(`.sidebar a[onclick="showSection('${sectionId}')"]`).classList.add('active');

    if (window.innerWidth <= 768) {
        document.querySelector('.sidebar').classList.remove('active');
    }
}

function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('active');
}
