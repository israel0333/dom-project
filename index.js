const addBtn = document.querySelectorAll(".addBtn");
const cartQuantity = document.querySelector(".cart p");
const total = document.querySelector(".total span");
const removeBtn = document.querySelectorAll(".removeBtn");

addBtn.forEach(btn => {
    btn.addEventListener('click', (e) => {
        cartQuantity.textContent++;
        total.textContent = parseInt(total.textContent) + parseInt(e.target.parentNode.querySelector(".priceCon .price").textContent);
    })
})


removeBtn.forEach(btn => {
    btn.addEventListener('click', (e) => {
        total.textContent = parseInt(total.textContent) - parseInt(e.target.parentNode.querySelector(".price").textContent);
    })
})
