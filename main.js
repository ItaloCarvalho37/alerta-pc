
const { app, BrowserWindow } = require("electron");
const path = require("path");

function criarJanela() {
    const janela = new BrowserWindow({
        width: 450,
        height: 300,
        center: true,


    });

    janela.loadFile(path.join(__dirname, "index.html")).catch((erro) => {
        console.log("Erro ao carregar HTML;", erro);
    });

}

app.whenReady().then(criarJanela);
