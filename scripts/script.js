console.log("Welcome to my Editable Resume Builder!");

var formElement = document.getElementById('resume-form');
var nameDisplayElement = document.getElementById('display-name');
var skillsDisplayElement = document.getElementById('display-skills');
var editButton = document.getElementById('edit-btn');

function loadStoredResumeData() {
    var savedName = localStorage.getItem('name');
    var savedSkills = localStorage.getItem('skills');

    if (savedName && savedSkills) {
        if (nameDisplayElement && skillsDisplayElement) {
            nameDisplayElement.textContent = "Name: ".concat(savedName);
            skillsDisplayElement.textContent = "Skills: ".concat(savedSkills);
        }
    }
}
window.addEventListener('load', loadStoredResumeData);
if (editButton) {
    editButton.addEventListener('click', function () {
        var _a, _b;
        console.log("Edit button clicked!");
        if (nameDisplayElement && skillsDisplayElement) {
        
            var name_1 = ((_a = nameDisplayElement.textContent) === null || _a === void 0 ? void 0 : _a.replace('Name: ', '')) || '';
            var skills = ((_b = skillsDisplayElement.textContent) === null || _b === void 0 ? void 0 : _b.replace('Skills: ', '')) || '';

            var nameInput = document.getElementById('name');
            var skillsInput = document.getElementById('skills');
            nameInput.value = name_1;
            skillsInput.value = skills;
        }
    });
}
if (formElement && nameDisplayElement && skillsDisplayElement) {
    formElement.addEventListener('submit', function (event) {
        event.preventDefault();
        var nameInput = document.getElementById('name');
        var skillsInput = document.getElementById('skills');
        var name = nameInput.value;
        var skills = skillsInput.value;
        localStorage.setItem('name', name);
        localStorage.setItem('skills', skills);
        if (nameDisplayElement && skillsDisplayElement) {
            nameDisplayElement.textContent = "Name: ".concat(name);
            skillsDisplayElement.textContent = "Skills: ".concat(skills);
        }
        nameInput.value = '';
        skillsInput.value = '';
    });
}
else {
    console.error('Form or display elements not found!');
}
