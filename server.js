// Importa bibliotecas
const express = require('express'); // servidor web
const cors = require('cors'); // permite requisições externas
const path = require('path'); // manipulação de caminhos
const { exec } = require('child_process'); // executa comandos no sistema
const fs = require('fs'); // manipula arquivos

const app = express();

// Middlewares
app.use(cors());
app.use(express.static(path.join(__dirname, 'public'))); // serve o frontend

// Rota principal de download
app.get('/download', (req, res) => {
    const { url, format } = req.query; // pega parâmetros da URL

    // Validação básica
    if (!url) {
        return res.status(400).send('URL inválida');
    }

    // Nome do arquivo final
    const fileName = format === 'mp3' ? 'audio.mp3' : 'video.mp4';

    // Comando usando yt-dlp
    const command =
        format === 'mp3'
            ? `yt-dlp -x --audio-format mp3 -o "${fileName}" "${url}"`
            : `yt-dlp -f mp4 -o "${fileName}" "${url}"`;

    console.log('Executando:', command);

    // Executa o comando
    exec(command, (error) => {
        if (error) {
            console.error('Erro:', error);
            return res.status(500).send('Erro ao baixar o vídeo');
        }

        // Envia o arquivo para download
        res.download(fileName, (err) => {
            if (err) {
                console.error('Erro ao enviar arquivo:', err);
            }

            // Remove o arquivo após envio
            fs.unlink(fileName, (err) => {
                if (err) console.error('Erro ao deletar:', err);
            });
        });
    });
});

// Inicializa servidor
app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});

