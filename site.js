
//GET DIV FOR DISPLAYING WELCOME MESSAGE - Assignment 1
const welcomeMessageElement = document.querySelector('#welcome');


//GET DATE and CONDITIONAL VARIABLE LOGIC
const hours = new Date().getHours()

const isMorning = hours >= 4 && hours < 12 //morning
const isAfternoon = hours >= 12 && hours < 17 //afternoon
const isEvening = hours >=17 || hours < 4 //evening

//LOGIC FOR DISPLAYING WELCOME MESSAGE
if(isMorning){
    welcomeMessageElement.textContent = "Good Morning";
}
else if(isAfternoon){
    welcomeMessageElement.textContent = "Good Afternoon";
}
else if(isEvening){
    welcomeMessageElement.textContent = "Good Evening";
}
else{
    welcomeMessageElement.textContent = "Welcome";
}
///////////////////////////////////////////////////////////////////


////////////ASSIGNMENT 2 - SECRET MESSAGE/////////////////////////
localStorage.setItem("It's a secret to everybody.", "Google says this is a Zelda reference");