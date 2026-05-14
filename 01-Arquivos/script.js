const fs = require('fs')

fs.writeFileSync(
    "arquivo.txt",
    "João Vitor Amorim de Oliveira"+
    "3º Ano A Desenvouvimento de Sistemas"+
    "Super-Man"
)
console.log("Arquivo criado com sucesso!")

const pessoa = {
    nome: "João",
    idade: 25,
    cidade: "Suzano"
}
fs.writeFileSync(
    "pessoa.json",
    JSON.stringify(pessoa)
)
console.log("json criado com sucesso")

const {
    Document,
    Packer,
    Paragraph,
    TextRun
} = require("docx")

const doc = new Document ({
    sections: [
        {
            properties:{},

            children: [
                new Paragraph({
                    children:[
                        new TextRun("Arquivo Word")
                    ]
                }),
                new Paragraph({
                    children: [
                        new TextRun("Textos importantes")
                    ]
                })
            ]
        }
    ]
})
Packer.toBuffer(doc)
.then((buffer) => {
    fs.writeFileSync (
        "relatorio.docx",
        buffer
    )
    console.log("O word foi criado")
})