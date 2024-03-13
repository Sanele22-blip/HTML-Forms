document.getElementById('surveyForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    
    let name = document.querySelector('.name-form').value;
    let email = document.querySelector('.mail-form').value;
    let password = document.querySelector('.word-form').value;
    let gender = document.getElementById('gender').value;
    let age = document.getElementById('Age').value;
    let learn = document.getElementById('learn').value;
    let importance = document.getElementById('importance').value;
    let overwhelmed = document.getElementById('overwhelmed').value;


    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Password: " + password);
    console.log("Gender: " + gender);
    console.log("Age: " + age);
    console.log("Learn: " + learn);
    console.log("Importance: " + importance);
    console.log("Overwhelmed: " + overwhelmed);
});