window.onload = function () {

    let canvas = document.getElementById("drawingCanvas");
    let context = canvas.getContext("2d");
    //Код рисования 
    context.moveTo(10, 10);
    context.lineTo(400, 40);
    context.stroke();
    //Толщина и цвет всех линий
    context.lineWidth = 20;
    context.strokeStyle = "blue";
    //Линия с концами типа butt
    context.moveTo(10, 50);
    context.lineTo(400, 50);
    context.lineCap = "butt";
    context.stroke();
    //Линия с концами типа round
    context.beginPath();
    context.moveTo(10, 120);
    context.lineTo(400, 120);
    context.lineCap = "round";
    context.stroke();
    //Линии с концами типа square
    context.beginPath();
    context.moveTo(10, 190);
    context.lineTo(400, 190);
    context.lineCap = "square";
    context.stroke();
    //Треугольник на том же холсте
    context.beginPath();
    context.moveTo(250, 50);
    context.lineTo(50, 250);
    context.lineTo(450, 250);
    context.lineTo(250, 50);
    //   context.closePasth(); Не работает
    //Заливка
    context.fillStyle = "#109bfc";
    context.fill();
    //Контур
    context.lineWidth = 10;
    context.strokeStyle = "red";
    context.stroke();
    //Делаем прямоугольник
    context.beginPath();
    context.fillStyle = "#1ffbfc";
    context.stroke = "orange";
    context.lineWidth = 10;
    context.fillRect(0, 0, 100, 100);
    context.strokeRect(0, 0, 100, 100);
    //Рисуем дугу
    context.beginPath();
    context.arc(75, 75, 50, 0, 2 * Math.PI);
    context.stroke();
    //Не рисуется. Хотя если делать отдельно, то всё нормально. WTF
}
