// REQUEST

async function postData(url = '', data = {}) {
    const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data)
    });
    return await response.json();
}

function validation (form) {
    let result = true

    function removeError(input) {
        const parent = input.parentNode

        if(input.classList.contains('error')) {
            parent.querySelector('.error-label').remove()
            input.classList.remove('error')
        }
    }
    function createError(input, text) {
        const parent = input.parentNode
        const errorLabel = document.createElement('label')

        errorLabel.classList.add('error-label')
        errorLabel.textContent = text

        parent.append(errorLabel)

        input.classList.add('error')
    }

    const allInputs = form.querySelectorAll('input')
    const allTextareas = form.querySelectorAll('textarea')


    for(let input of allInputs) {
        removeError(input)

        if(input.value == "") {
            createError(input, "Поле ввода не может быть пустым")
            return false
        }
    }

    for(let textarea of allTextareas) {
        removeError(textarea)

        if(textarea.value == "") {
            createError(textarea, "Поле ввода не может быть пустым")
            return false
        }
    }

    return result
}

document.getElementById('add-form').addEventListener('submit', function (event) {
    event.preventDefault()

    const allInputs = this.querySelectorAll('input')
    const allTextareas = this.querySelectorAll('textarea')

    const login = allInputs[0].value
    const email = allInputs[1].value

    const text = allTextareas[0].value

    if(validation(this)) {
        // Всё в порядке, форма отвалидирована
        postData('https://your_url.com/user', {login, email, text})
    }
})

const checkbox = document.getElementById("menu__toggle");



function check() {
    const checkBox = document.getElementById('menu__toggle')
    const scrollLocker = document.querySelector(".scroll-locker");

    if(checkBox.checked) {
        const bg = document.createElement('div')

        bg.classList.add('white')

        document.body.style.overflow = "hidden";
        scrollLocker.style.pointerEvents = "auto";

        document.body.prepend(bg)
    } else {
        document.body.style.overflow = "";
        scrollLocker.style.pointerEvents = "none";

        document.querySelector('.white').remove()
    }
}

checkbox.addEventListener("click", function(event) {
     // Отменить действие по умолчанию (прокрутку страницы)

    // Дополнительный код, который будет выполняться при клике на флажок
});
