function saveData() {
    // Получаем значения текстовых полей
    var localData = document.getElementById("localData").value;
    var sessionData = document.getElementById("sessionData").value;

    // Сохраняем текст, введенный в текстовом поле, в локальном хранилище
    localStorage["localData"] = localData;

    // Сохраняем текст, введенный в текстовом поле, в хранилище сессий
    sessionStorage["sessionData"] = sessionData;
}

function loadData() {
    // Загружаем сохраненные данные из хранилищ
    var localData = localStorage["localData"];
    var sessionData = sessionStorage["sessionData"];

    // Отображаем эти данные в текстовых полях
    if (localData != null) {
        document.getElementById("localData").value = localData;
    }
    if (sessionData != null) {
        document.getElementById("sessionData").value = sessionData;
    }
}