// const inputBox = document.getElementById("input-box");
// const listContainer = document.getElementById("list-container");
// const addButton = document.getElementById("addTask");
// const dateDisplay = document.getElementById("current-date");

// function addTask(){
//     if(inputBox.value === ''){
//         alert("You must write something!");
//     }
//     else{
//         let li = document.createElement("li");
//         li.innerHTML = inputBox.value;
//         listContainer.appendChild(li);
//         let span = document.createElement("span");
//         span.innerHTML = "\u00d7";
//         li.appendChild(span);
//     }
//     inputBox.value = "";
//     saveData();
// }

// listContainer.addEventListener("click", function(e){
//     if(e.target.tagName === "LI"){
//         e.target.classList.toggle("checked");
//         saveData();
//     }
//     else if (e.target.tagName === "SPAN"){
//         e.target.parentElement.remove();
//         saveData();
//     }
// }, false);

// function displayDate() {
//         const today = new Date();
//         const options = {
//             weekday: "long",
//             day: "numeric",
//             month: "long",
//             year: "numeric"
//         };
//         const day = today.toLocaleDateString("en-US", options); // Ensure correct locale
//         dateDisplay.textContent = day;
// }
// function saveData(){
//     localStorage.setItem("data", listContainer.innerHTML);
// }
// function showTask(){
//     listContainer.innerHTML = localStorage.getItem("data");
// }
// displayDate();
// showTask();



const inputBox = document.getElementById("input-box");
const dateInput = document.getElementById("task-date"); // New date input field
const listContainer = document.getElementById("list-container");
const addButton = document.getElementById("addTask");
const dateDisplay = document.getElementById("current-date");

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something !");
    } else {
        let li = document.createElement("li");
        li.innerHTML = `${inputBox.value} (${dateInput.value || "No date selected" })`;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    dateInput.value = ""; // Reset date input
    saveData();
}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function displayDate() {
    const today = new Date();
    const options = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    };
    const day = today.toLocaleDateString("en-US", options); // Ensure correct locale
    dateDisplay.textContent = day;
}

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

displayDate();
showTask();
