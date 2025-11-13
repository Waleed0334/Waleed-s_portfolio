// Smooth scroll to section
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

// "Send Message" button Handler
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

contactForm.addEventListener("submit", function(event) {
  event.preventDefault(); 

  // alert when message is sent
  alert("Are You Sure");

  // Display success message in the page
  formStatus.textContent = "✅ Message submitted! ";
  formStatus.style.color = "#25D366";
  formStatus.style.opacity = "1";

  // Reset the form
  contactForm.reset();
});
//change name of mine
const changingTextElement = document.getElementById('changing-role');

const roles = [
    "Data Scientist",
    "Web Developer",
    "C programmer",
    "Waleed"
];

let roleIndex = 0;

function changeRoleText() {
    changingTextElement.classList.add('fade-out');
    
    setTimeout(() => {
        
        changingTextElement.textContent = roles[roleIndex];

        changingTextElement.classList.remove('fade-out');
        changingTextElement.classList.add('fade-in');
        
        roleIndex = (roleIndex + 1) % roles.length;

        setTimeout(() => {
            changingTextElement.classList.remove('fade-in');
        }, 400); 
    }, 400);
}

// Start text animation loop
setInterval(changeRoleText, 3500);
