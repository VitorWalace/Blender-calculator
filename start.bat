@echo off
REM Calculadora de Produção de Suco - Script de Inicialização (Windows)
REM Execute este script para iniciar o servidor de desenvolvimento

setlocal enabledelayedexpansion

echo.
echo 🧃 Iniciando Calculadora de Producao de Suco...
echo 📦 Verificando dependencias...

if not exist "node_modules" (
    echo 📥 Instalando dependencias...
    call npm install
)

echo.
echo 🚀 Iniciando servidor de desenvolvimento...
echo ℹ️  Acesse http://localhost:3000 no seu navegador
echo 🛑 Pressione Ctrl+C para parar o servidor
echo.

call npm run dev

pause
