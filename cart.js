// Функция для очистки корзины
function clearCart() {
    localStorage.removeItem("cartItems");
    renderCart();
  }

  function renderCart() {
    const cartItems = document.getElementById("cartItems");
    cartItems.innerHTML = "";

    const savedItems = localStorage.getItem("cartItems");

    if (savedItems) {
      const items = JSON.parse(savedItems);
      items.forEach(item => {
        const li = document.createElement("li");

        const image = document.createElement("img");
        image.src = item.imageSrc;
        image.alt = "Изображение товара";
        li.appendChild(image);

        const description = document.createElement("span");
        description.textContent = item.textDescription;
        li.appendChild(description);

        cartItems.appendChild(li);
        
      });
    }
  }

  renderCart();
  function renderCart() {
const cartItems = document.getElementById("cartItems");
cartItems.innerHTML = "";

const savedItems = localStorage.getItem("cartItems");

if (savedItems) {
  const items = JSON.parse(savedItems);
  items.forEach(item => {
    const li = document.createElement("li");

    const link = document.createElement("a");
    link.href = item.link;

    const image = document.createElement("img");
    image.src = item.imageSrc;
    image.alt = "Изображение товара";
    link.appendChild(image);
    li.appendChild(link);

    const description = document.createElement("span");
    description.textContent = item.textDescription;
    li.appendChild(description);
    
    const description2 = document.createElement("label");
    description2.textContent = item.PRICE2;
    li.appendChild(description2);

    cartItems.appendChild(li);
  });
}
}