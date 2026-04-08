function validation(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var question = document.getElementById("question").value;
    
    error_message.style.padding = "10px"

    if(name.length <1){
        text = "Please enter your name"
        error_message.innerHTML = text;
        return false;
    }

    if(email.length <1){
        text = "Please enter your email address"
        error_message.innerHTML = text;
        return false;
    }

    if(question.length <1){
        text = "Please enter your question"
        error_message.innerHTML = text;
        return false;
    }

    if(question.length <50){
        text = "Please enter more than 50 characters"
        error_message.innerHTML = text;
        return false;
    }
alert("Form submitted successfully")
return true;
}
