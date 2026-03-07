
const allTreeButtons = document.querySelectorAll('btn')
console.log(allTreeButtons.btn);

//  async function selectCategory() {         
// const allButtons = document.querySelectorAll(".btn");
// // console.log(allButtons);
// allButtons.forEach((btn) => {
//           // console.log(btn);
//           btn.classList.remove("btn-primary");
//           btn.classList.add("btn-outline");

// })
// btn.classList.add("btn-primary");
// btn.classList.remove("btn-outline");

// }
// selectCategory()



allTreeButtons.addEventListener("click", () => {
const allButtons = document.querySelectorAll(".btn");
allButtons.forEach ( btn => {
          btn.classList.remove("btn-primary");
          btn.classList.add("btn-outline");
})

})
allTreeButtons.classList.add("btn-primary");
allTreeButtons.classList.remove("btn-outline");






