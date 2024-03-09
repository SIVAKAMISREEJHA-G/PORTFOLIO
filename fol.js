
document.addEventListener("DOMContentLoaded", function () {
    var changingElement = document.getElementById("changing");
    var textArray = ['UI/UX Developer', 'App Developer', 'Full Stack Developer'];
    var index = 0;

    function changeText() {
        changingElement.textContent = textArray[index];
        index = (index + 1) % textArray.length;
    }

    setInterval(changeText, 1500); 
});

function showSection(sectionId) {

    var sections = document.querySelectorAll('section');
    sections.forEach(function (section) {
        section.style.display = 'none';
    });

    
    var selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }
}