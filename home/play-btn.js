document.getElementById("playButton").addEventListener("click", function() {
    // Создаем URL для подключения к игре
    var ip = "194.147.90.86";
    var port = "25544";
    var appId = "304930"; // Идентификатор приложения Unturned в Steam
    var gameUrl = "steam://connect/" + ip + ":" + port + "/" + "304930/Unturned";
    
    // Открываем ссылку в новой вкладке
    window.open(gameUrl);
});
