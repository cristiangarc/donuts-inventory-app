// create an article with a donut that has specific details like name, price, in stock
const createDonut = (name, price=0, inStock=false, isVegan=false, calories=100, url="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn.onlinewebfonts.com%2Fsvg%2Fimg_480297.png&f=1&nofb=1&ipt=71ef17c03dd01f813313b86f2a2de6e0ee1105e019a1ca8efc8d62cafbd9663d&ipo=images") => {
  const article = document.createElement('article');
  
  article.classList.add("single-donut");

  // create a button, add text to the button, and add an event listener to the button to remove the article
  // append the button to the article
  const removeButton = document.createElement("button");

  removeButton.textContent = "Remove Donut";
  removeButton.addEventListener("click", (event) => {
    // find the closest li to this button and remove it
    event.target.closest(".single-donut").remove();
    // count--;
    // addCount(count);
  })

  if (name) {
      article.innerHTML = `<h3>${name}</h3>
      <img style="width: 150px" src="${url}">
      <h4 style="color: ${inStock ? "purple" : "#82FA2D"}">${inStock ? "In Stock" : "Out of Stock"}<h4/>
      <h4>$${Number(price).toFixed(2)}<h4/>
      <h4>kcal: ${calories}</h4>
      <h4 style="color: ${isVegan ? "green" : ""}">${isVegan ? "Vegan" : ""}<h4/>`;
      
      article.append(removeButton);
  }

  return article;
}

const addInStockDynamic = (article) => {
  let h4StockVal = article.children[2];
  const isFirstArticle = article.classList.value.includes("first-article");
  if (isFirstArticle) {
    h4StockVal = article.children[3];
  }
  h4StockVal.addEventListener("click", (event) => {
      const isInStock = h4StockVal.textContent == "In Stock";
      if (!isInStock) {
          h4StockVal.textContent = "In Stock";
          h4StockVal.setAttribute("style", "color: purple");
      } else {
        h4StockVal.textContent = "Out of Stock";
        h4StockVal.setAttribute("style", "color: #82FA2D");
      }
  })

  // return h4StockVal;
}

const generateDonut = (name, price, inStock, isVegan, url) => {

  // create a new article
  const article = createDonut(name, price, inStock, isVegan, url);
  addInStockDynamic(article);

  // grab the section .donuts from DOM
  const sectionDonuts = document.querySelector("section.donuts");
  // append the newly created article
  sectionDonuts.append(article);
}

const donuts = [
  {
    "name": "chocolate",
    "priceInCents": 100,
    "id": "RE0n",
    "inStock": true,
    "isVegan": false,
    "calories": 250
  },
  {
    "name": "vegan pumpkin",
    "priceInCents": 250,
    "id": "jcfr",
    "inStock": true,
    "isVegan": true,
    "calories": 150
  },
  {
    "name": "vegan maple bacon",
    "priceInCents": 225,
    "id": "ll5o",
    "inStock": false,
    "isVegan": true,
    "calories": 300
  },
  {
    "name": "vanilla",
    "priceInCents": 150,
    "id": "THdi",
    "inStock": true,
    "isVegan": false,
    "calories": 270
  },
  {
    "name": "powdered",
    "priceInCents": 100,
    "id": "zDWJ",
    "inStock": false,
    "isVegan": false,
    "calories": 300
  },
  {
    "name": "blueberry",
    "priceInCents": 100,
    "id": "l34g",
    "inStock": true,
    "isVegan": false,
    "calories": 150
  }
]

for (const i of '0123') {
  const donut = donuts[Number(i)];
  // generate an article
  generateDonut(donut.name, donut.priceInCents / 100, donut.inStock, donut.isVegan, donut.calories);
}

const buttons = document.querySelectorAll("input[type='submit'");
for (const button of buttons) {
  if (button.value != "Create New Donut") {
    button.addEventListener("click", (event) => {
      console.log(event.target);
      // console.log(button);
      event.target.closest(".single-donut").remove();
    })
  }
}