let clicker = document.querySelector('.main-button-2'); // Кнопка на которую будет происходить клик

function reloadPage(){
	location.reload();
}

function relpage(){
	clicker.click();
	setTimeout(reloadPage,3000); // Обновление страницы после срабатывания основной функции

} 

setInterval(relpage,3610000); // Время через которое будет происходит клик в мл


