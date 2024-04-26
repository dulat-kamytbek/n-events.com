// Функция для чтения файла JSON
async function fetchJSON(jsonPath) {
    const response = await fetch(jsonPath);
    const data = await response.json();
    return data;
}

// Функция для добавления мероприятия в список на странице
function addEventToList(event) {
    // Создаем элемент списка для мероприятия
    const eventItem = document.createElement('li');
    eventItem.classList.add('event-item');

    // Формируем HTML-разметку для мероприятия
    eventItem.innerHTML = `
        <h3>${event.title}</h3>
        <p><strong>Время проведения:</strong> ${event.time}</p>
        <p><strong>Место проведения:</strong> ${event.location}</p>
    `;

    // Добавляем мероприятие в список
    document.getElementById('event-list').appendChild(eventItem);
}

// Чтение JSON файла и добавление данных на страницу
async function loadEventsFromJSON(jsonPath) {
    const eventsData = await fetchJSON(jsonPath);

    // Добавляем каждое мероприятие из JSON на страницу
    eventsData.forEach(event => {
        addEventToList(event);
    });
}

// Запуск загрузки данных из JSON файла
loadEventsFromJSON('eventssko-v9.json'); // Укажите путь к вашему JSON файлу
