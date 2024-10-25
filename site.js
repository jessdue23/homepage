
//GET DIV FOR DISPLAYING WELCOME MESSAGE - Assignment 1
const welcomeMessageElement = document.querySelector('#welcome');
const btnNext = document.querySelector('#next')
const btnPrev = document.querySelector('#prev')
const btnAdd = document.querySelector('#add')
const todoList = document.querySelector(".todo-list")
const todo = document.querySelector("#new-todo")



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
localStorage.setItem("It's a secret to everybody.", "Google says this is a Zelda reference?");

////carousel///////
const urls = [
    'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/933964/pexels-photo-933964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1251861/pexels-photo-1251861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
].map(url => { (new Image()).src = url; return url })

const images = document.querySelectorAll('#carousel img')

let currentImage = 0
const showImages = () => {
    const offset = currentImage % urls.length
    images.forEach((image, index) => {
        const imageIndex = (index + offset + urls.length) % urls.length
        image.src = urls[imageIndex]
    })
}

showImages()

setInterval(() => {
    currentImage++
    showImages()
}, 5000)

//next button event listener
btnNext.addEventListener('click', () => {
    currentImage++
    showImages()
})


//previous button
btnPrev.addEventListener('click', () => {
    currentImage--
    showImages()
})

////////////////////////TO DO LIST////////////////


//Render Arrow Function - Create & Add New List Item to DOM
const renderToDos = () => {
    // Clear the li's before we recreate them
    todoList.innerHTML = ''
    console.log(todo.value)
    const li = document.createElement('li')
    //changed text to value for textcontent from input
    li.textContent = todo.value
    todoList.appendChild(li) 
    // Get the list from local storage
    const todos = JSON.parse(localStorage.getItem('todo-list')) || []

    // Add a new item to the list
    todos.push({ text: todo.value, completed: false })
    // Save the list to local storage
    localStorage.setItem('todo-list', JSON.stringify(todos))

    console.log(todos)

    //loop thru list of the items
    todos.forEach((todo) => {
        const li = document.createElement('li')
        li.textContent = todo.text
        todoList.appendChild(li) 
    })
}


//ADD ITEM BUTTON//
btnAdd.addEventListener('click', () => {
   console.log("Hello")
   renderToDos()

})








// Clear the li's before we recreate them
todoList.innerHTML = ''




