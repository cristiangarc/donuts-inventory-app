const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const { donut, price, inStock, isVeganYes, calories } = event.target;

    console.log(event.target);

    let isInStock = false;
    const inStockVal = inStock.value;
    if (typeof inStockVal == 'string') {
        if (inStockVal == 'true') {
        isInStock = true;
        }
    };

    generateDonut(donut.value, price.value, isInStock, isVeganYes.checked, calories.value);
    
    form.reset();
})

// reset the form when the reset button is pressed
form.addEventListener("reset", (event) => {
    form.reset();
})