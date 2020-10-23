window.onload = function () {
    //Определение контекста рисования
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");

    //Рисуем прямоугольник с тенью
    /*   context.rect(20, 20, 200, 100);
       context.fillStyle = "#8ED6FF";
       context.shadowColor = "#bbbbbb";
       context.shadowBlur = 20;
       context.shadowOffsetX = 15;
       context.shadowOffsetY = 15;
       context.fill();
   
       //Рисуем три строчки с тенью
       context.Baseline = "top";
       context.font = "bold 20px Arial";
   
       context.shadowBlur = 3;
       context.shadowOffsetX = 2;
       context.shadowOffsetY = 2;
       context.fillStyle = "steelblue";
       context.fillText("Едва различимая, слегка старомодная тень.", 10, 175);
   
       context.shadowBlur = 5;
       context.shadowOffsetX = 20;
       context.shadowOffsetY = 20;
       context.fillStyle = "green";
       context.fillText("Здесь используется \"далекая\" тень...", 10, 225);
   
       context.shadowBlur = 15;
       context.shadowOffsetX = 0;
       context.shadowOffsetY = 0;
       context.shadowColor = "black";
       context.fillStyle = "white";
       context.fillText("Эта тень не смещена от исходного изображения и создаёт эффект ореола.", 10, 300);
   
       //Рисуем звезду с тенью (загрузка изображения)
      context.shadowOffsetX = 10;
       context.shadowOffsetY = 10;
       context.shadowColor = "#bbbbbb";
       context.shadowBlur = 4;
   
       let img = new Image();
       img.onload = function () {
           context.drawImage(img, 250, 30);
           //Пример 2
           let pattern = context.createPattern(img, "repeat");
           context.fillStyle = pattern;
           context.rect(0, 0, canvas.width, canvas.height);
           context.fill();
       };
       //    img.src = "http://professorweb.ru/downloads/star.png";
     //  img.src = "http://professorweb.ru/downloads/brick_tile.gif"; */

    //Пример 3, градиент
    //Создаём радиент от точко (10,0) до точки (100,0))
    let gradient = context.createLinearGradient(10, 0, 100, 0);
    //Добавляем цвета
    gradient.addColorStop(0, "magenta");
    gradient.addColorStop(1, "yellow");
    //Вызываем функцию для рисования
    drawHeart(60, 50);
    //Рисуем фигуру
    context.fillStyle = gradient;
    context.fill();
    context.stroke();
    //Вспомогательная функция для рисования фигуры в виде сердца
    function drawHeart(x, y) {
        context.beginPath();
        context.moveTo(x, y);
        context.bezierCurveTo(x, y - 40, x - 45, y - 40, x - 48, y);
        context.bezierCurveTo(x - 45, y + 30, x, y + 40, x, y + 80);
        context.bezierCurveTo(x, y + 90, x + 45, y + 40, x + 45, y);
        context.bezierCurveTo(x + 45, y - 30, x, y - 30, x, y);
        context.closePath();
    }

    //Двуцветный радиальный градиент
    gradient = context.createRadialGradient(180, 100, 10, 180, 100, 50);
    gradient.addColorStop(0, "magenta");
    gradient.addColorStop(1, "yellow");
    drawHeart(180, 100);
    context.fillStyle = gradient;
    context.fill();
    context.stroke();

    //Многоцветный линейный градиент
    gradient = context.createLinearGradient(10, 0, 100, 0);
    gradient.addColorStop("0", "magenta");
    gradient.addColorStop(".25", "blue");
    gradient.addColorStop(".5", "green");
    gradient.addColorStop(".75", "yellow");
    gradient.addColorStop("1", "red");
    drawHeart(80, 180);
    context.fillStyle = gradient;
    context.fill();
    context.stroke();

    //Многоцветный радиальный градиент
    gradient = context.createRadialGradient(180, 250, 10, 180, 250, 50);
    gradient.addColorStop(0, "magenta");
    gradient.addColorStop(.25, "blue");
    gradient.addColorStop(.5, "green");
    gradient.addColorStop(.75, "yellow");
    gradient.addColorStop(1, "red");
    drawHeart(180, 230);
    context.fillStyle = gradient;
    context.fill();
    context.stroke();
}

