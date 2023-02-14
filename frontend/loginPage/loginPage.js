const dataBase = [
    {
        email: "skyzzlockzz@gmail.com",
        password: "123456",       
    },
    {
        email: "gpachecodiniz@gmail.com",
        password: "aabbcc",
    },
];
    const button = document.querySelector("#send");
    const email = document.querySelector("#email");
    const password = document.querySelector("#password");

button.addEventListener('click', (e) => {
    e.preventDefault();

    for(let data of dataBase) {
        const validation = (email.value === data.email) && (password.value === data.password)
        if(validation) {
            alert("Login aprovado");
            window.location.href = "http://127.0.0.1:5500/frontend/homePage/index.html";
        } else {
            console.log('deu ruim')
        }
    }
})
// NÃO APAGA NADA DAQUI PRA CIMA, SO COMENTA E DEIXA QUIETO, AGORA DAQUI PRA BAIXO SE QUISER SENTA O DELETE

// const init = () => {
//     const button = document.querySelector("#send");
//     const email = document.querySelector("#email");
//     const password = document.querySelector("#password");

//     const validateEmail = (event) => {
//         const input = event.currentTarget;
//         const regex = /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm;
//         const emailTest = regex.test(input.value);

//         if(emailTest) {
//             button.setAttribute('disabled', 'disabled');
//             input.classList.add('error')
//         } else {
//             button.removeAttribute('disabled', 'disabled');
//             input.classList.remove('error')
//         }
//     }

//     input.addEventListener('input', validateEmail);

//     if(button) {
//         button.addEventListener('click', (event) => {
//             event.preventDefault()

//             fetch('https://reqres.in/api/login', { // ONDE É FEITO O CONSUMO DA API 
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'aplication/json'
//                 },
//                 body: JSON.stringify({
//                     email: email.value,
//                     password: password.value,
//                 })
//             }).then((response) => {
//                if(response.status !== 200) {
//                 errorHandler();
//                }
//             }).catch(() => {
//                 errorHandler();
//             })
//         })
//     }
//     console.log("Carregou")
// }

// window.onload = init;


