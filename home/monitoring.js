const serverIDs = ['17433026', '23324021', '24287959'];
const apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6ImNjNjU5YWUwMTYzMDlmOTIiLCJpYXQiOjE3MDgxMjk4MDcsIm5iZiI6MTcwODEyOTgwNywiaXNzIjoiaHR0cHM6Ly93d3cuYmF0dGxlbWV0cmljcy5jb20iLCJzdWIiOiJ1cm46dXNlcjo4MjQwMjYifQ.X3C-We37p4aRS7csZv_PHM9SYG77nSMAmQJ6gVR4b5o';

// Объект для хранения данных о серверах
const serversData = {};

// Функция для загрузки данных о сервере по его ID
function loadServerData(serverID) {
    const apiUrl = `https://api.battlemetrics.com/servers/${serverID}`;

    fetch(apiUrl, {
        headers: {
            'Authorization': `Bearer ${apiKey}`
        }
    })
    .then(response => response.json())
    .then(data => {
        const serverData = data.data.attributes;
        serversData[serverID] = { name: serverData.name, playerCount: serverData.players };

        // Проверяем, все ли серверы загружены
        if (Object.keys(serversData).length === serverIDs.length) {
            displayServers();
        }
    })
    .catch(error => console.error('Error fetching server data:', error));
}

// Функция для отображения данных о серверах в заданном порядке
function displayServers() {
    const serverInfoContainer = document.querySelector('.server-info');
    serverInfoContainer.innerHTML = '';

    // Отображаем серверы в порядке serverIDs
    serverIDs.forEach(serverID => {
        const serverData = serversData[serverID];
        const serverElement = document.createElement('div');
        serverElement.classList.add('server');
        serverElement.innerHTML = `
            <h3>${serverData.name}</h3>
            <p class="player-count">Онлайн: <span>${serverData.playerCount}</span></p>
        `;
        serverInfoContainer.appendChild(serverElement);
    });
}

// Загружаем данные о каждом сервере
serverIDs.forEach(serverID => {
    loadServerData(serverID);
});

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6ImNjNjU5YWUwMTYzMDlmOTIiLCJpYXQiOjE3MDgxMjk4MDcsIm5iZiI6MTcwODEyOTgwNywiaXNzIjoiaHR0cHM6Ly93d3cuYmF0dGxlbWV0cmljcy5jb20iLCJzdWIiOiJ1cm46dXNlcjo4MjQwMjYifQ.X3C-We37p4aRS7csZv_PHM9SYG77nSMAmQJ6gVR4b5o