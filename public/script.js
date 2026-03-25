function toggleQuality() {
    const format = document.getElementById('format').value;
    const quality = document.getElementById('quality');

    quality.innerHTML = '';

    if (format === 'mp3') {
        ['128 kbps', '192 kbps', '320 kbps'].forEach(q => {
            let opt = document.createElement('option');
            opt.value = q;
            opt.innerText = q;
            quality.appendChild(opt);
        });
    } else {
        ['360p', '480p', '720p', '1080p'].forEach(q => {
            let opt = document.createElement('option');
            opt.value = q;
            opt.innerText = q;
            quality.appendChild(opt);
        });
    }
}

// Inicializa opções
toggleQuality();

function download() {
    const url = document.getElementById('url').value;
    const format = document.getElementById('format').value;

    if (!url) {
        alert('Insira um link');
        return;
    }

    const progressBar = document.getElementById('progress');
    const status = document.getElementById('status');

    status.innerText = 'Baixando...';

    // Simulação de progresso (frontend)
    let progress = 0;
    const interval = setInterval(() => {
        progress += 10;
        progressBar.style.width = progress + '%';

        if (progress >= 100) {
            clearInterval(interval);
            status.innerText = 'Download iniciado!';
        }
    }, 300);

    window.location.href = `/download?url=${encodeURIComponent(url)}&format=${format}`;
}

