// Получаем id мероприятия из параметров URL
const urlParams = new URLSearchParams(window.location.search);
const eventId = urlParams.get('id');

// Функция для загрузки информации о мероприятии по его id
async function loadEventDetails(eventId) {
    // Загрузка данных о мероприятии по его id, например, через API или из JSON файла
    // Здесь вы можете использовать асинхронный запрос для получения данных о мероприятии
    // Предположим, что eventDetails - объект с информацией о мероприятии
    
    // Пример заполнения информации о мероприятии на странице
    document.getElementById('event-title').textContent = eventDetails.title;
    document.getElementById('event-location').textContent = eventDetails.location;
    document.getElementById('event-time').textContent = eventDetails.time;
    document.getElementById('event-tickets').textContent = eventDetails.tickets;
}

// Загрузка информации о мероприятии при загрузке страницы
window.onload = function() {
    loadEventDetails(eventId);
};
