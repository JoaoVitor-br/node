// async e await - usamos quando trabalahamos com coisas ou processos que podem demorar

async function salvar() {
    let palavra = document.getElementById("palavra").value;

    await fetch("/salvar",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ palavra })
    }) 
}