window.onload = function () {
    //Определение контекста рисования
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");

    //Рисуем прямоугольник с тенью
    context.rect(20, 20, 200, 100);
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
    };
    img.src = "http://professorweb.ru/downloads/star.png";
}

