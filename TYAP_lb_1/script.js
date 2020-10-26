function Analyze() {

    //Получаем значение текстового поля
    let word = document.getElementById("word").value;

    let state = "H"; //Текущее состояние автомата

    //Очищаем список, если был заполнен до этого
    clearAll();

    //Получаем элемент <ul> для списка элементов данных
    let itemList = document.getElementById("itemList");


    for (let i = 0, x; (state != "ERR") && (i < word.length); i++) {
        x = word[i]; //Текущий символ

        switch (state) {

            case "H":
                if (x == "0") {
                    state = "B";
                    let newItem = document.createElement("li");
                    newItem.innerHTML = x + " --> " + state;
                    itemList.appendChild(newItem);
                }
                else {
                    state = "ERR";
                }
                break;

            case "B":
                if (x == "1") {
                    state = "BC";
                    let newItem = document.createElement("li");
                    newItem.innerHTML = x + " --> " + state;
                    itemList.appendChild(newItem);
                }
                else {
                    state = "ERR";
                }
                break;

            case "BC":
                if (x == "0") {
                    state = "B";
                    let newItem = document.createElement("li");
                    newItem.innerHTML = x + " --> " + state;
                    itemList.appendChild(newItem);
                }
                else if (x == "1") {
                    state = "BC";
                    let newItem = document.createElement("li");
                    newItem.innerHTML = x + " --> " + state;
                    itemList.appendChild(newItem);
                }
                else if (x == "*") {
                    state = "S";
                    let newItem = document.createElement("li");
                    newItem.innerHTML = x + " --> " + state;
                    itemList.appendChild(newItem);
                }
                else {
                    state = "ERR";
                }
                break;
        }
    }
    if (state == "S") {
        let newItem = document.createElement("li");
        newItem.innerHTML = state + " --> Цепочка принадлежит языку"
        itemList.appendChild(newItem);
        return;
    }
    if (state == "ERR") {
        let newItem = document.createElement("li");
        newItem.innerHTML = "Цепочка не принадлежит языку";
        itemList.appendChild(newItem);
        return;
    }
}

function clearAll() {
    let itemList = document.getElementById("itemList");
    while (itemList.firstChild)
        itemList.removeChild(itemList.firstChild);
}
