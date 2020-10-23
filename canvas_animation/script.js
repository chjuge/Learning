//Контекст рисования
let canvas;
let context;

//Рисуем при загрузке страницы
window.onload = function () {
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");
    canvas.onmousedown = canvasClick;
    //Обновляем холст через 0.02 секунды
    setTimeout("drawFrame()", 20);
}

//Тип данных, представляющих определённый мячик
function Ball(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.strokeColor = "black";
    this.fillColor = "red";
}

//Массив всех данных о мячиках
let balls = [];

//Функция добавления мячика после нажатии кнопки
function addBall() {
    //Устанавливаем размер мячика
    let radius = parseFloat(document.getElementById("ballSize").value);
    //Создаём новый мячик
    let ball = new Ball(50, 50, 1, 1, radius);
    //Сохраняем его в массиве
    balls.push(ball);
}

//Функция очистки холста очищает холст (массив из мячиков)
function clearBalls() {
    balls = [];
}

//Функция рисует мячики, вычисляет их позицию и скорость
function drawFrame() {
    //Очищаем холст
    context.clearRect(0, 0, canvas.width, canvas.height);
    //Вызываем метод beginPath(), чтобы убедиться, что мы не рисуем
    //часть уже нарисованного содержимого холста
    context.beginPath();
    //Перебираем все мячики
    for (let i = 0; i < balls.length; i++) {
        //Перемящаем каждый мячик в его новую позицию
        let ball = balls[i];
        ball.x += ball.dx;
        ball.y += ball.dy;
        //Добавляем эффект "гравитации", который ускоряет падение мячика
        if (ball.y < canvas.height) ball.dy += 0.22;
        //Добавляем эффект трения
        ball.dx *= .998;
        //Если мячик натолкнулся на край холста - отбиваем его
        if ((ball.x + ball.radius > canvas.width) || (ball.x - ball.radius < 0)) {
            ball.dx = -ball.dx;
        }
        //Если мячик упал вниз - отбиваем его, но слегка уменьшаем скорость
        if ((ball.y + ball.radius > canvas.height) || (ball.y - ball.radius < 0)) {
            ball.dy = -ball.dy * 0.998;
        }
        //Проверяем, хочет ли пользователь соединительные линии
        if (!document.getElementById("connectedBalls").checked) {
            context.beginPath();
            context.fillStyle = ball.fillColor;
        }
        else {
            context.fillStyle = "white";
        }
        //Рисуем мячик
        context.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
        context.lineWidth = 1;
        context.fill();
        context.stroke();
    }
    //Рисуем следующий кадр через 20 милисекунд
    setTimeout("drawFrame()", 20);
}

//Функция взаимодействия с мячиком по нажатию по нему ЛКМ
function canvasClick(e) {
    //координаты щелчка мыши
    let clickX = e.pageX - canvas.offsetLeft;
    let clickY = e.pageY - canvas.offsetTop;

    for (let i in balls) {
        let ball = balls[i];
        //Проверка попадания
        if ((clickX > (ball.x - ball.radius)) && (clickX < (ball.x + ball.radius))) {
            if ((clickY > (ball.y - ball.radius)) && (clickY < (ball.y + ball.radius))) {
                //Изменить скорость мячика
                ball.dx -= 2;
                ball.dy -= 3;
                return;
            }
        }
    }
}