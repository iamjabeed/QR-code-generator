const generateBtn= document.getElementById("submit");
const mainContainer= document.getElementById("main");
const scannerImg= document.getElementById("img");


generateBtn.addEventListener("click", () => {
    const inputValue= document.getElementById("input").value;
    if(!inputValue) return alert("Please enter valid input");
    scannerImg.src=` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;
   scannerImg.addEventListener("load", () => {
    mainContainer.classList.add("active");
   })
});