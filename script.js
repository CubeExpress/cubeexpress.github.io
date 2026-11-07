
/* Contact form popup */

// Get the elements from the HTML
const contactBtn = document.getElementById("contactBtn");
const contactModal = document.getElementById("contactModal");
const closeContact = document.getElementById("closeContact");

// Opens the contact form
contactBtn.addEventListener("click", function() {
    contactModal.classList.add("show");
    document.body.classList.add("modal-open");
});

// Close the contact form
function closeModal() {
    contactModal.classList.remove("show");
    document.body.classList.remove("modal-open");
}

// Close when clicking the X
closeContact.addEventListener("click", closeModal);

// Close when clicking outside the form
contactModal.addEventListener("click", function(event) {
    if (event.target === contactModal) {
        closeModal();
    }
});

// Close when pressing Escape
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        closeModal();
    }
});
