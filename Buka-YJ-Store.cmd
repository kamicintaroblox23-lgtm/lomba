@echo off
setlocal
cd /d "%~dp0"

where node >nul 2>&1
if errorlevel 1 (
  echo Node.js belum terpasang. Install Node.js 18 atau lebih baru terlebih dahulu.
  pause
  exit /b 1
)

start "YJ Store Server" /min cmd /c "node server\server.js"
timeout /t 2 /nobreak >nul
start "" "http://127.0.0.1:3000/"
endlocal
