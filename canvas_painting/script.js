var canvas; //Глобальные переменные, доступные для всего кода
var context;
var previousColorElement;
var previousThicknessElement;

window.onload = function () {
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");

    //Подключаем требуемые для рисования события
    canvas.onmousedown = startDrawing;
    canvas.onmouseup = stopDrawing;
    canvas.onmouseout = stopDrawing;
    canvas.onmousemove = draw;
}

function changeColor(color, imgElement) {
    //Меняем текущий цвет рисования
    context.strokeStyle = color;
    //Меняем стиль элемента <img>, по которому щёлкнули
    imgElement.className = "Selected";
    //Возвращаем ранее выбранный <img> в нормальное состояние
    if (previousColorElement != null)
        previousColorElement.className = "";

    previousColorElement = imgElement;
}

function changeThickness(thickness, imgElement) {
    //Изменяем текущую толщину линии
    context.lineWidth = thickness;
    //Меняем стиль элемента <img>, по которому щёлкнули
    imgElement.className = "Selected";
    //Возвращаем ранее выбранный <img> в нормальное состояние
    if (previousThicknessElement != null)
        previousThicknessElement.className = "";

    previousThicknessElement = imgElement;
}

function startDrawing(e) {
    //Начинаем рисовать
    isDrawing = true;
    //Создаем новый путь (с текущим цветом и толщиной линии)
    context.beginPath();
    //Нажатием левойо кнопки мыши помещаем "кисть" на холст
    context.moveTo(e.pageX - canvas.offsetLeft, e.pageY - canvas.offsetTop);
}

function draw(e) {
    if (isDrawing == true) {
        //Определяем текущие координаты указателя мыши
        var x = e.pageX - canvas.offsetLeft;
        var y = e.pageY - canvas.offsetTop;
        //Рисуем линию до новой координаты
        context.lineTo(x, y);
        context.stroke();
    }
}

function stopDrawing() {
    isDrawing = false;
}

function clearCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);
}

function saveCanvas() {
    // Находим элемент <img>
    var imageCopy = document.getElementById("savedImageCopy");

    // Отображаем данные холста в элементе <img>
    imageCopy.src = canvas.toDataURL();

    // Показываем элемент <div>, делая изображение видимым
    var imageContainer = document.getElementById("savedCopyContainer");
    imageContainer.style.display = "block";
}