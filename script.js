const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menuNav");
const menuIcon = document.getElementById("menuIcon");
const phone = "2349043590554"

menuBtn.addEventListener("click", () => {
    menuNav.classList.toggle("hidden");
    menuNav.classList.toggle("flex");


    menuIcon.classList.toggle("fa-bars");
    menuIcon.classList.toggle("fa-xmark");
})

document.querySelectorAll(".order-btn"). forEach((btn) => {
    btn.addEventListener("click", (e) =>{
        e.preventDefault();
    const message = `I want to order ${btn.dataset.item}`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    console.log(url);
    window.open(url, "_blank");    
    })
})