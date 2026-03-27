# 🎬 YouTube Converter (MP3 & MP4)

A modern web application that allows users to download YouTube videos as **MP3 (audio)** or **MP4 (video)** with a clean UI and simple workflow.

---

## 🚀 Features

- 🎵 Convert YouTube videos to **MP3 (audio)**
- 🎬 Download videos in **MP4 (video)**
- 🎚️ Select audio bitrate (128 / 192 / 320 kbps)
- 📺 Select video resolution (360p / 480p / 720p / 1080p)
- 🎨 Modern UI (glassmorphism style)
- 📊 Download progress bar (frontend)
- ⚡ Fast and reliable downloads using `yt-dlp`

---

## 🛠️ Tech Stack

- Frontend: HTML, CSS, JavaScript  
- Backend: Node.js + Express  
- Downloader Engine: yt-dlp  

---

## 📁 Project Structure

```
/yt-conversor
  ├── server.js
  ├── package.json
  ├── yt-dlp.exe (Windows only)
  └── /public
        ├── index.html
        ├── style.css
        └── script.js
```

---

## ⚙️ Installation

### 1. Clone the repository

git clone https://github.com/your-username/yt-conversor.git
cd yt-conversor

---

### 2. Install dependencies

npm install

---

### 3. Install yt-dlp

Option A (Windows):
Download from https://github.com/yt-dlp/yt-dlp/releases and place in root folder

Option B:
pip install yt-dlp
or
winget install yt-dlp

---

### 4. Run the server

node server.js

---

### 5. Open in browser

http://localhost:3000

---

## ⚠️ Disclaimer

This project is intended for **educational purposes only**.

Downloading content from YouTube may violate their Terms of Service.
Use this software responsibly.

---

## 💡 Future Improvements

* 🎬 Video preview (thumbnail + title)
* 📊 Real-time download progress (backend tracking)
* ⚡ Streaming download (no temporary file)
* ☁️ Cloud deployment (Vercel / Render)

---

## 👨‍💻 Author

Developed by **Keller Nz**

---

## ⭐ Contribute

Feel free to fork this project and submit pull requests!
