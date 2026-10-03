@echo off
title Aditi Portfolio - Development Server
echo ========================================================
echo   Starting Aditi's Portfolio Local Dev Server
echo   Local Address: http://localhost:3000
echo ========================================================
timeout /t 2 /nobreak >nul
start "" "http://localhost:3000"
npm run dev
pause
