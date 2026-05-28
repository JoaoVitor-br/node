let senha = document.getElementById("senha")
let confirmar = document.getElementById("confirmar")
let mensagem = document.getElementById("mensagem")

confirmar.addEventListener("input", function() {
    let numeros = /[0-9]/.test(senha.value)
    let letras = /[a-zA-Z]/.test(senha.value)
    let especial = /[!@#$%*]/.test(senha.value)
    let tamanho = senha.value.length >= 8


    if (senha.value == confirmar.value && numeros && letras && especial && tamanho) {
        mensagem.innerText = "As senhas são iguais"
        mensagem.classList.add("certo")
        mensagem.classList.remove("errado")
    } else {
        mensagem.innerText = "A senha deve conter 8 caracteres, incluindo letras, números e caracteres especiais, e as senhas devem ser iguais"
        mensagem.classList.add("errado")
        mensagem.classList.remove("certo")
    }
});