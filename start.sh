#!/bin/bash

# Calculadora de Produção de Suco - Script de Inicialização
# Execute este script para iniciar o servidor de desenvolvimento

cd "$(dirname "$0")"

echo "🧃 Iniciando Calculadora de Produção de Suco..."
echo "📦 Verificando dependências..."

if [ ! -d "node_modules" ]; then
    echo "📥 Instalando dependências..."
    npm install
fi

echo "🚀 Iniciando servidor de desenvolvimento..."
echo "ℹ️  Acesse http://localhost:3000 no seu navegador"
echo "🛑 Pressione Ctrl+C para parar o servidor"
echo ""

npm run dev
