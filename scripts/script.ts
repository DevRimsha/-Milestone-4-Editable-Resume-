console.log("Welcome to my Editable Resume Builder!");

const formEleement = document.getElementById('resume-form') as HTMLFormElement | null;
const nameDisplayEelement = document.getElementById('display-name') as HTMLParagraphElement | null;
const skillDisplayElement = document.getElementById('display-skills') as HTMLParagraphElement | null;
const editButtonn = document.getElementById('edit-btn') as HTMLButtonElement | null;
function loadStoredesumeData() {
  const savedName = localStorage.getItem('name');
  const savedSkills = localStorage.getItem('skills');
  if (savedName && savedSkills) {
    if (nameDisplayElement && skillsDisplayElement) {
      nameDisplayElement.textContent = `Name: ${savedName}`;
      skillsDisplayElement.textContent = `Skills: ${savedSkills}`;
    }
  }
}
window.addEventListener('load', loadStoredResumeData);
if (editButton) {
  editButton.addEventListener('click', () => {
    console.log("Edit button clicked!");

    if (nameDisplayElement && skillsDisplayElement) {
      const name = nameDisplayElement.textContent?.replace('Name: ', '') || '';
      const skills = skillsDisplayElement.textContent?.replace('Skills: ', '') || '';
      const nameInput = document.getElementById('name') as HTMLInputElement;
      const skillsInput = document.getElementById('skills') as HTMLInputElement;

      nameInput.value = name;
      skillsInput.value = skills;
    }
  });
}

if (formElement && nameDisplayElement && skillsDisplayElement) {
  formElement.addEventListener('submit', (event) => {
    event.preventDefault();
    const nameInput = document.getElementById('name') as HTMLInputElement;
    const skillsInput = document.getElementById('skills') as HTMLInputElement;
    const name = nameInput.value;
    const skills = skillsInput.value;
    localStorage.setItem('name', name);
    localStorage.setItem('skills', skills);
    if (nameDisplayElement && skillsDisplayElement) {
      nameDisplayElement.textContent = `Name: ${name}`;
      skillsDisplayElement.textContent = `Skills: ${skills}`;
    }
    nameInput.value = '';
    skillsInput.value = '';
  });
} else {
  console.error('Form or display elements not found!');
}
