window.onload = function () {
    // Определение контекста рисования
    canvas = document.getElementById("drawingCanvas");
    context = canvas.getContext("2d");

    canvas.onmousedown = canvasClick;
    canvas.onmouseup = stopDragging;
    canvas.onmouseout = stopDragging;
    canvas.onmousemove = dragCircle;
}

let previousSelectedCircle; //предыдущий выбраный круг

function canvasClick(e) {
    // Получаем координаты точки холста, в которой щелкнули
    let clickX = e.pageX - canvas.offsetLeft;
    let clickY = e.pageY - canvas.offsetTop;

    // Проверяем, щелкнули ли no кругу
    for (let i = circles.length - 1; i >= 0; i--) {
        let circle = circles[i];

        // С помощью теоремы Пифагора вычисляем расстояние от 
        // точки, в которой щелкнули, до центра текущего круга
        let distanceFromCenter = Math.sqrt(Math.pow(circle.x - clickX, 2) + Math.pow(circle.y - clickY, 2))

        // Определяем, находится ли точка, в которой щелкнули, в данном круге
        if (distanceFromCenter <= circle.radius) {
            // Сбрасываем предыдущий выбранный круг	
            if (previousSelectedCircle != null) previousSelectedCircle.isSelected = false;
            previousSelectedCircle = circle;
            // Устанавливаем новый выбранный круг и обновляем холст
            circle.isSelected = true;
            isDragging = true;
            drawCircles();

            // Прекращаем проверку
            return;
        }
    }
}

let isDragging = false;

//Функция прекращения перетаскивания
function stopDragging() {
    isDragging = false;
}

//Перетаскивание выбранного круга
function dragCircle(e) {
    // Проверка возможности перетаскивания
    if (isDragging == true) {
        // Проверка попадания
        if (previousSelectedCircle != null) {
            // Сохраняем позицию мыши
            var x = e.pageX - canvas.offsetLeft;
            var y = e.pageY - canvas.offsetTop;

            // Перемещаем круг в новую позицию
            previousSelectedCircle.x = x;
            previousSelectedCircle.y = y;

            // Обновляем холст
            drawCircles();
        }
    }
}

//Пользовательский объект Sircle
function Circle(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.isSelected = false;
}

//Этот массив хранит все окружности на холсте
let circles = [];

//Добавление произвольноого круга на холст
function addRandomCircle() {
    //Устанавливаем произвольный размер и позицию круга
    let radius = randomFromTo(10, 60);
    let x = randomFromTo(0, canvas.width);
    let y = randomFromTo(0, canvas.height);
    //Окрашиваем круг произвольным цветом
    let colors = ["green", "blue", "red", "yellow", "magenta", "orange", "brown", "purple", "pink"];
    let color = colors[randomFromTo(0, 8)];

    //Создаём новый круг
    let circle = new Circle(x, y, radius, color);
    //Сохраняем его в массиве
    circles.push(circle);
    //Обновляем отображение круга
    drawCircles();
}

//Функция генерирует числа в заданном диапозоне
function randomFromTo(from, to) {
    return Math.floor(Math.random() * (to - from + 1) + from);
}

//Прорисовка текущей коллекции кругов на холсте.
function drawCircles() {
    // Очистить холст
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Перебираем все круги
    for (let i = 0; i < circles.length; i++) {
        let circle = circles[i];

        // Рисуем текущий круг
        context.globalAlpha = 0.85;
        context.beginPath();
        context.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
        context.fillStyle = circle.color;
        context.strokeStyle = "black";

        // Выделяем выбранный круг рамкой 
        if (circle.isSelected) {
            context.lineWidth = 5;
        }
        else {
            context.lineWidth = 1;
        }
        context.fill();
        context.stroke();
    }
}

//Функция очистки холста и массива
function clearCanvas() {
    // Очистить массив
    circles = [];

    // Очистить холст
    drawCircles();
}

