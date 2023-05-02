const checkTextInputs = (selector) => {
    const txtInputs = document.querySelectorAll(selector);
    const engChars = /[a-z]/ig;

    txtInputs.forEach(input => {
        input.addEventListener('input', function() {
            input.value = input.value.replace(/[^а-яё 0-9]/ig, '');
        }) // согласно ТЗ:
    }); // Заполнение имени и комментария - только на РУССКОМ языке.
};

export default checkTextInputs;