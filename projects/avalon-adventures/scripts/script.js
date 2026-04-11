function validation() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var question = document.getElementById("question").value;
    var errorEl = document.getElementById("error_message");

    errorEl.style.padding = "12px";
    errorEl.style.display = "block";

    if (name.length < 1) {
        errorEl.innerHTML = "Please enter your name.";
        return false;
    }

    if (email.length < 1) {
        errorEl.innerHTML = "Please enter your email address.";
        return false;
    }

    // Basic email format check
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        errorEl.innerHTML = "Please enter a valid email address.";
        return false;
    }

    if (question.length < 1) {
        errorEl.innerHTML = "Please enter your message.";
        return false;
    }

    if (question.length < 50) {
        errorEl.innerHTML = "Please enter at least 50 characters in your message.";
        return false;
    }

    errorEl.style.padding = "0";
    errorEl.style.display = "none";
    alert("Thank you! Your message has been submitted successfully.");
    return true;
}
