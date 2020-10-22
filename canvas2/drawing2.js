window.onload = function () {

    let canvas = document.getElementById("canvas");
    let context = canvas.getContext("2d");

    context.rect(1, 1, 31, 31);
    //Сдвигаем систему координат на 50 пикселов
    context.translate(50, 50);
    context.rect(1, 1, 31, 31);
    //Ещё сдвигаем, начало отсчёта теперь (100,100)
    context.translate(50, 50);
    context.rect(1, 1, 31, 31);
    context.stroke();

}