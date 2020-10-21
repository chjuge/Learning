function validateComments(input) {
    if (input.value.length < 20) {
        input.setCustomValidity("Дайте более развёрнутый ответ.");
    }
    else {
        // Длина комментария отвечает требованию
        // Поэтому сообщение об ошибке
        input.setCustomValidity("");
    }
}