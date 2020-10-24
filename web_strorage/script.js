function saveData() {
    // Получаем значения текстовых полей
    let localData = document.getElementById("localData").value;
    let sessionData = document.getElementById("sessionData").value;

    // Сохраняем текст, введенный в текстовом поле, в локальном хранилище
    localStorage["localData"] = localData;

    // Сохраняем текст, введенный в текстовом поле, в хранилище сессий
    sessionStorage["sessionData"] = sessionData;
}

function loadData() {
    // Загружаем сохраненные данные из хранилищ
    let localData = localStorage["localData"];
    let sessionData = sessionStorage["sessionData"];

    // Отображаем эти данные в текстовых полях
    if (localData != null) {
        document.getElementById("localData").value = localData;
    }
    if (sessionData != null) {
        document.getElementById("sessionData").value = sessionData;
    }
}

function findAllItems() {
    //Получаем элемент <ul> для списка элементов данных
    let itemList = document.getElementById("itemList");

    //Очищаем список
    itemList.innerHTML = "";

    //Перебираем все элементы данных в цикле
    for (let i = 0; i < localStorage.length; i++) {
        //Получаем ключ текущего элемента
        let key = localStorage.key(i);
        //Получаем сам элемент, хранящийся под этим ключом
        let item = localStorage[key];
        //Заполняем список
        let newItem = document.createElement("li");
        newItem.innerHTML = key + ": " + item;
        itemList.appendChild(newItem);
    }
}

//Данные для примера
window.onload = function () {
    localStorage.username = "Alex";
    localStorage.password = "12345";
    localStorage.work = "programmer";
    localStorage.lang = "Java";
};