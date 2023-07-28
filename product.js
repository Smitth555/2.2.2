
    // Получаем радио-кнопки и элемент фотографии товара
    const colorRadios = document.querySelectorAll('input[name="color"]');
    const productPhoto = document.getElementById('product-photo');
  
    // Добавляем обработчик событий для каждой радио-кнопки
    colorRadios.forEach(radio => {
      radio.addEventListener('change', () => {
        // Получаем выбранный цвет
        const selectedColor = document.querySelector('input[name="color"]:checked').id;
  
        // Обновляем фотографию в соответствии с выбранным цветом
        switch (selectedColor) {
          case 'color1':
            productPhoto.src = 'testes.jpg';
            break;
          case 'color2':
            productPhoto.src = 'черный.jpg';
            break;
          case 'color3':
            productPhoto.src = 'зеленый.jpg';
            break;
          case 'color4':
            productPhoto.src = 'синий.jpg';
            break;
          default:
            productPhoto.src = 'default-photo.jpg';
        }
      });
    });
  
  function addToCart(productId) {
    // Get the image source, the text description, the price, and the link
    var imageSrc = document.getElementById("product-photo").src;
  
    // Retrieve the existing cart items from localStorage
    var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
            
          

    var textDescription = "Женский пиджак от ZARA";
var price = 100;
var PRICE2 = 690 + " 000"+ " сум";
var link = "product.html";
var text1 = "Дополнительный текст 1";
var text2 = "Дополнительный текст 2 олнительный текст 2 олнительный текст 2 олнительный текст 2 олнительный текст 2 олнительный текст 2 олнительный текст 2";
var text3 = "Дополнительный текст 3";

// Create a new product object with image source, text description, price, and link
var product = {
  imageSrc: imageSrc,
  textDescription: textDescription,
  price: price,
  link: link,
  PRICE2: PRICE2,
  text1: text1,
  text2: text2,
  text3: text3
};

    // Add the new product to the cart items array
    cartItems.push(product);
  
    // Store the updated cart items in localStorage
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }
  //
  //
  //
  //
  