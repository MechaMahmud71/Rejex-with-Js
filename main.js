const rejax = {
    username: /^[a-z\d-_]{5,12}$/i,
    email: /^([a-z\d\-])+@\w+.(com|net|org|co.in|edu)/,
    telephone: /^\d{11}/,
    password: /^[\w-_@]{8,20}$/,
    slug: /^[a-zA-Z\d-]{8,20}$/
}

let inputs = document.querySelectorAll("input");
let text = document.querySelectorAll("p");


inputs.forEach((input, index) => {
    input.addEventListener("keyup", (e) => {
        validation(e.target, rejax[e.target.name], index);
    });
});

function validation(input, rejax, index) {
    if (rejax.test(input.value)) {
        input.className = "valid";
        text[index].className = "valid";
    }
    else {
        input.className = "invalid";
        text[index].className = "invalid";
    }
}