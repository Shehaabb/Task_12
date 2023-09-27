const allItems = document.querySelector(".items")
const items = [
    {
        img: "1.png",
        color: "Red",
        currentPrice: "120$",
        previousPrice:"150$"
    },
    {
        img: "2.png",
        color: "Black",
        currentPrice: "130$",
        previousPrice:"180$"
    },
    {
        img: "3.png",
        color: "Blue",
        currentPrice: "160$",
        previousPrice:"200$"    },
]
items.forEach(item => {
    allItems.innerHTML += `
    <div class="item">
        <div class="left">
            <div class="image">
            <img src="./${item.img}" alt="${item.color}-Tshirt">
            </div>
            <div class="item-header">
                <h2>${item.color} T-Shirt</h2>
            </div>
            <div class="current-price">
                <h2>${item.currentPrice}</h2>
            </div>
            <div class="previous-price">
                <p>${item.previousPrice}</p>
            </div>
        </div>
        <div class="right">
            <div class="buttons">
                <span class="minus">-</span>
                <span class="counter">1</span>
                <span class="plus">+</span>
            </div>
            <div class="x">
                <img src="./Dell@2x.png" alt="">
            </div>
        </div>
    </div>
    `
})
const minus =document.querySelectorAll('.minus');
const plus =document.querySelectorAll('.plus');

minus.forEach(min=>{
    min.addEventListener("click",function(){
        const amountBefore= this.closest('.buttons').querySelector('.counter');
        const amount = parseInt(amountBefore.textContent);
        if(amount>1)
        {
            amountBefore.textContent= amount-1;
        }
    })
})

plus.forEach(pls=>{
    pls.addEventListener("click",function(){
        const amountBefore= this.closest('.buttons').querySelector('.counter');
        const amount = parseInt(amountBefore.textContent);
        if(amount<9)
        {
            amountBefore.textContent= amount+1;
        }    
    })
})

