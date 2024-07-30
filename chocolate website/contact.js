function validateForm() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    if (!firstName || !lastName || !email || !subject || !message) {
        alert('Please fill in all required fields.');
        return false;
    }
    return true;
}
