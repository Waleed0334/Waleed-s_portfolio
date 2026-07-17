// =====================================
// Smooth Scroll Function
// =====================================
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);

    if (section) {
        section.scrollIntoView({
            behavior: "smooth"
        });
    }
}

// =====================================
// Dynamic Hero Text Animation
// =====================================
const changingTextElement = document.getElementById("changing-role");

const roles = [
    "Data Scientist",
    "Web Developer",
    "C Programmer",
    "Waleed Ahmed Siddiqui"
];

let roleIndex = 0;

function changeRoleText() {

    if (!changingTextElement) return;

    changingTextElement.classList.add("fade-out");

    setTimeout(() => {

        changingTextElement.textContent = roles[roleIndex];

        changingTextElement.classList.remove("fade-out");
        changingTextElement.classList.add("fade-in");

        roleIndex = (roleIndex + 1) % roles.length;

        setTimeout(() => {
            changingTextElement.classList.remove("fade-in");
        }, 400);

    }, 400);
}

// Change text every 3.5 seconds
setInterval(changeRoleText, 3500);

// =====================================
// Contact Form + EmailJS
// =====================================
document.addEventListener("DOMContentLoaded", function () {

    const contactForm = document.getElementById("contact-form");
    const formStatus = document.getElementById("form-status");

    if (!contactForm) return;

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const submitButton = contactForm.querySelector("button");

        const params = {
            name: document.getElementById("from_name").value,
            email: document.getElementById("email_id").value,
            message: document.getElementById("message").value,
            time: new Date().toLocaleString()
        };

        submitButton.disabled = true;
        submitButton.textContent = "Sending...";

        formStatus.textContent = "Sending message...";
        formStatus.style.color = "#007bff";

        emailjs.send(
            
            "service_sr7habh",
            "template_tiaclv9",
            params
        )
        .then(function () {

            formStatus.textContent =
                "✅ Message sent successfully!";
            formStatus.style.color = "#25D366";

            alert("Your message has been sent successfully!");

            contactForm.reset();

            submitButton.disabled = false;
            submitButton.textContent = "Send Message";

        })
        .catch(function (error) {

            console.error("EmailJS Error:", error);

            formStatus.textContent =
                "❌ Failed to send message. Please try again.";

            formStatus.style.color = "red";

            alert("Failed to send message.");

            submitButton.disabled = false;
            submitButton.textContent = "Send Message";
        });

    });

});

