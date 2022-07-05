
'use strict';


//initial variables
let age,userName,gender, userAnswers= new Array(3);

//invoks Functions
getName();
getGender();
getAge();
confirmWelcome();
askUser();
pringToConsole();




//Functions
function getName() {
    userName = prompt(`Please Enter Your Name : `);
}

function getGender() {
    gender = prompt(`Please Enter Your Gender Male/Female : `);
}

function getAge() {    
    age = prompt(`Please Enter Your Age : `);
    if (age<=0)
        alertZeroCase(age);
 
}

function alertZeroCase(age) {
    alert(`your Age  : ${age} is less than or Equal Zero`);
}

function confirmWelcome(age) {
    let confirmUser = confirm(`Would you like to skip the welcome message ?  `);
    if (!confirmUser) 
         welcomeMessage();
    

}
function welcomeMessage() {

    switch (gender) {
        case "Male":
            alert(`Welcome Mr ${userName}`);
            break;
        case "Female":
                alert(`Welcome Ms ${userName}`);
                break;
        default:
            alert(`Welcome ${userName}`);
            break;
    }

}

function askUser() {
        let value ;
        value= prompt(`Do You Like Netflix (Yes/No) : `);    
        value.length==0 ? userAnswers[0] = "invalid" : userAnswers[0] = value;
        
        value= prompt(`Do You Like Shahid VIP (Yes/No) : `);    
        value.length==0 ? userAnswers[1] = "invalid" : userAnswers[1] = value;
        
        value= prompt(`Do You Like EgyBest (Yes/No) : `);    
        value.length==0 ? userAnswers[2] = "invalid" : userAnswers[2] = value;
}

function pringToConsole() {
    for (let index = 0; index < userAnswers.length; index++) {
        console.log(`Your Answers is : ${userAnswers[index]} `);
        
    }
}