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
// Handle contact form submit
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

contactForm.addEventListener("submit", async function(event) {
  event.preventDefault();

  const name = contactForm.querySelector('input[type="text"]').value.trim();
  const email = contactForm.querySelector('input[type="email"]').value.trim();
  const message = contactForm.querySelector('textarea').value.trim();

  const data = { name, email, message };

  formStatus.textContent = "⏳ Sending...";
  formStatus.style.color = "orange";

  try {
    const response = await fetch("https://script.google.com/macros/s/AKfycbw0QSzQMnS6Dvv3qIfQeojcikW6Y23cQlZaS5kFNKLjca5nEaKTTqhd8biqy2hK72mp/exec", {
      method: "POST",
      mode: "no-cors", // important
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    formStatus.textContent = "✅ Message sent successfully!";
    formStatus.style.color = "#25D366";
    contactForm.reset();
  } catch (error) {
    formStatus.textContent = "❌ Error sending message. Try again!";
    formStatus.style.color = "red";
  }
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

