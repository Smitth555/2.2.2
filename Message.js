
const token = "6320351732:AAFZH1rHdwIowlRoMOckUrLNNQ236dFvQi4";
const chat_id = "-1001893432449";
const URL_API = `https://api.telegram.org/bot${token}/sendMessage`;

document.getElementById('tg').addEventListener('submit', function(e) {
    e.preventDefault();

// Использование сохраненных данных в message
let message = '<b>Заявка с сайта</b>n';
message += '<b>Отправитель:</b> ' + this.name.value + 'n';
message += '<b>Номер телефона:</b> ' + this.number.value + 'n';
message += '<b>Адрес доставки:</b> ' + this.local.value + 'n';
message += '<b>Комментарий клиента:</b> ' + this.coment.value;

console.log(message);
    
    axios.post(URL_API, {
        chat_id: chat_id,
        parse_mode: 'html',
        text: message
    })
    .then((res) => {
      
    })
    .catch((err) => {
      console.log('Erorr404');
    })
    .finally(() => {
        console.log('Konec');
    })
});
// Получаем кнопку по ее идентификатору
var button = document.getElementById('orderButton');

// Назначаем обработчик события на нажатие кнопки
button.addEventListener('click', handleClick);

function handleClick(event) {
  // Проверяем, все ли обязательные поля формы заполнены
  var inputs = document.querySelectorAll('#tg input[required]');
  var isFormValid = true;
  for (var i = 0; i < inputs.length; i++) {
    if (!inputs[i].value) {
      isFormValid = false;
      break;
    }
  }

  if (isFormValid) {
    var message = document.createElement('div');
    message.innerHTML = 'Ваш заказ оформлен ждите ответа!';
    message.classList.add('message');
    document.body.appendChild(message);
  } 
}
document.getElementById("tg").addEventListener("submit", function(event){
  document.getElementById("orderButton").disabled = true; // Отключение кнопки отправки

  // Вывод сообщения о запрете повторной отправки
  var message1 = document.createElement("div");
  message1.id = "message1"; // Добавление идентификатора "message1" к элементу
  message1.innerHTML = "Форма уже отправлена. Повторная отправка запрещена.";
  document.body.appendChild(message1);

  event.preventDefault(); // Предотвращает фактическую отправку формы
});


  