
let article1 = document.querySelector("#article1");
let article2 = document.querySelector("#article2");



document.querySelector("#message").addEventListener("keyup", function(event) {
    article1.textContent = event.target.value;
    article2.textContent = event.target.value;
})






    

