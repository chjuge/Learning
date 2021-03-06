window.onload = function () {

    let canvas = document.getElementById("canvas");
    let context = canvas.getContext("2d");

    //   context.rect(1, 1, 31, 31);
    //Сдвигаем систему координат на 50 пикселов
    //   context.translate(50, 50);
    //  context.rect(1, 1, 31, 31);
    //Ещё сдвигаем, начало отсчёта теперь (100,100)
    //  context.translate(50, 50);
    //   context.rect(1, 1, 31, 31);
    //   context.stroke();

    //Делаем сложную фигуру на базе квадратов и вращения
    //  context.translate(300, 250);
    // Рисуем 9 квадратов
    //   let copies = 10;
    //   for (let i = 1; i < copies; i++) {
    // Прежде чем рисовать следующий квадрат, вращаем систему координат. 
    // Угол полного оборота составляет 2*Math.PI. Этот код вращает систему 
    // координат для каждого нового квадрата лишь на долю этого угла, 
    // выполняя полный оборот при рисовании последнего квадрата,
    //       context.rotate(2 * Math.PI * 1 / (copies - 1));

    // Рисуем квадрат
    //       context.rect(0, 0, 70, 70);
    //   }
    //   context.strokeStyle = "#109bfc";
    //  context.stroke();

    //Цвета заливки и контура (пример на прозрачность)
    context.fillStyle = "rgb(100,150,185)";
    context.lineWidth = 10;
    context.strokeStyle = "red";

    //Рисуем круг
    context.arc(110, 120, 100, 0, 2 * Math.PI);
    context.fill();
    context.stroke();

    context.beginPath();
    //Рисуем треугольник
    context.moveTo(215, 50);
    context.lineTo(15, 250);
    context.lineTo(315, 250);
    context.closePath(); //При закрывании пути, линия начертится сама

    //Заполняем треуготльник прозрачным цветом
    context.fillStyle = "rgba(100,150,185,0.5)";
    context.fill();
    context.stroke();

    //Прозрачность другим методом
    //   context.globalAlpha = 0.5;
    // Теперь этому цвету автоматически присваивается 
    // значение альфа-канала, равное 0.5
    //context.fillStyle = "rgb(100,150,185)"; 
}