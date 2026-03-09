// issues-filter.js
const treeDetailsModal = document.getElementById("tree-details-modal");
const buttons = document.querySelectorAll("#categoriesContainer button");
const buttonAll = document.getElementById("all");
const buttonOpen = document.getElementById("open");
const buttonClose = document.getElementById("closed");
const treesContainer = document.getElementById("treesContainer");
const loadingSpinner = document.getElementById("loadingSpinner");

// console.log();

const high =document.getElementById("high");
const title =document.getElementById("title");
const description =document.getElementById("description");
const label =document.getElementById("label");
const author =document.getElementById("author");
const assignee =document.getElementById("assignee");
const createdAt =document.getElementById("createdAt");
const updatedAt =document.getElementById("updatedAt");

const allCount =document.getElementById("allCount");
// console.log(allCount.innerText);

let allIssues = [];

// loadingSpinner
function showLoading() {
  loadingSpinner.classList.remove("hidden")
  treesContainer.innerHTML ="";
}
function hideLoading() {
  loadingSpinner.classList.add("hidden");
}



// button-bg

buttons.forEach(btn => {

btn.addEventListener("click", function(){

// সব button কে outline করা   0
buttons.forEach(b => {
b.classList.remove("btn-primary");
b.classList.add("btn-outline");

})

// যেটাতে click করা হয়েছে সেটাকে primary করা
this.classList.add("btn-primary");
this.classList.remove("btn-outline");

})

});


// Load API
async function loadAllCard() {
  showLoading()
  const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues");
  const data = await res.json();
 
  allIssues = data.data;
  displayIssues(allIssues);
hideLoading()

}

loadAllCard();

// "id": 1,
// "title": "Fix navigation menu on mobile devices",
// "description": "The navigation menu doesn't collapse properly on mobile devices. Need to fix the responsive behavior.",
// "status": "open",
// "labels": [
// "bug",
// "help wanted"
// ],
// "priority": "high",
// "author": "john_doe",
// "assignee": "jane_smith",
// "createdAt": "2024-01-15T10:30:00Z",
// "updatedAt": "2024-01-15T10:30:00Z"



// Display cards
function displayIssues(issues) {
  treesContainer.innerHTML = "";

  issues.forEach(issue => {
    // console.log(issue);
    const card = document.createElement("div");

    card.className = `max-w-[380px] border-t-4 ${
      issue.status === "open" ? "border-green-500" : "border-purple-500"
    } bg-white rounded-sm shadow-md p-4 space-y-6  `;

    card.innerHTML = `
    <div onclick="openTreeModal(${issue.id})">
      <div class="flex justify-between mb-2">
       <img src="./assets/Open-Status.png" alt="">
       <h2  class="uppercase bg-[#FEECEC] py-2 px-4 rounded-lg text-[#EF4444]">${issue.priority}</h2>
      </div>
<div>
          <h2  class="text-[20px] font-bold">${issue.title}</h2>
          <p class="text-gray-300 line-clamp-2">${issue.description}</p>
</div>

<div>
          <div class="py-3">${issue.labels}</div>
</div>

      

      <div class="flex justify-between text-xs text-gray-400">
<div>
                    
          <span>Author: ${issue.author}</span>
          <span>Priority: ${issue.assignee}</span>
</div>

<div>
          
<span>Author: ${issue.createdAt}</span>
<span>Priority: ${issue.updatedAt}</span>
</div>
      </div>

</div>
    `;

    treesContainer.appendChild(card);
  });
}

// Button events
buttonAll.addEventListener("click", () => {
  displayIssues(allIssues);
  calculateCount()

});

buttonOpen.addEventListener("click", () => {
 
  const openIssues = allIssues.filter(issue => issue.status === "open");

  displayIssues(openIssues);
calculateCount()


});

buttonClose.addEventListener("click", () => {
  const closedIssues = allIssues.filter(issue => issue.status === "closed");
  displayIssues(closedIssues);
  calculateCount()


});



//--------
async function openTreeModal(issueId) {
  // console.log(issueId);
const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issue/${issueId}`);
const data = await res.json();
// console.log(data,issueId);
const plantDetails = data.data;
console.log(plantDetails);
high.innerText = plantDetails.priority;
title.innerText = plantDetails.title;
description.innerText = plantDetails.description;
label.innerText = plantDetails.labels;
author.innerText = plantDetails.author;
assignee.innerText=plantDetails.assignee;
createdAt.innerText =plantDetails.createdAt;
updatedAt.innerText =plantDetails.updatedAt;
treeDetailsModal.showModal();

}

//--------------------------------
document.getElementById("btn-search").addEventListener("click", () => {

  showLoading()

 const input=document.getElementById('input-search');
  const searchValue =input.value.trim().toLowerCase();
  console.log(searchValue);


  fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
  .then(res => res.json())
  .then(data => {
    const allWords = data.data;
    // console.log(allWords);

    const filterWords = allWords.filter(word => word.title.toLowerCase().includes(searchValue));
    displayIssues(filterWords);
    hideLoading()
// console.log(filterWords);

  })

})

//-------------------------
function calculateCount() {
allCount.innerText = treesContainer.children.length;
}

//-------------------------



