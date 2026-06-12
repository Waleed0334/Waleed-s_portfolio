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
  alert("Are You Sure to send message!");

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

function sendMail(){
  let params = {
    from_name : document.getElementById("from_name").value,
    email_id : document.getElementById("email_id").value,
    message : document.getElementById("message").value }
    emailjs.send("service_sr7habh", "template_tiaclv9", params)
.then(function(response) {
    alert("Your message has been sent successfully!");
})
.catch(function(error) {
    alert("Failed to send message.");
    console.log(error);
});
}
