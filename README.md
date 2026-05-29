# 🧃 Calculadora de Produção de Suco - 8 Liquidificadores

Uma aplicação web moderna e responsiva para gerenciar e calcular o consumo diário de suco em 8 liquidificadores com fluxo dinâmico de produção.

## 🚀 Características

- ✅ **Grid Responsivo**: 8 cards para os liquidificadores, adapta-se a qualquer tela
- 📊 **Fluxo Dinâmico**: Rastreia entradas (transferências recebidas) e saídas (envase/transferências)
- 🎯 **3 Categorias de Suco**: Orange, Clarificado e Misturado
- 📈 **Produção Líquida**: Cálculo avançado usando a fórmula: `(Volume Final + Saídas) - (Volume Inicial + Entradas)`
- 📱 **Painel de Resumo**: Totalizações por categoria com produção líquida
- 🏆 **Produção Final**: Cálculo especial (Misturado × 256) com destaque visual
- 🎨 **Design Moderno**: Cores intuitivas e interface limpa com Tailwind CSS
- 📐 **TypeScript**: Tipagem forte e segura
- ⚡ **Vite**: Build rápido e otimizado
- 📏 **Unidade Padrão**: tbs (tablespoons)

## 📋 Requisitos

- Node.js 16+ 
- npm ou yarn

## 🛠️ Instalação

1. **Clone ou entre no diretório do projeto:**
   ```bash
   cd "Projetos estudo/Blender calculator"
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

## 🎮 Como Usar

### Desenvolvimento
```bash
npm run dev
```
O aplicativo estará disponível em `http://localhost:3000`

### Build para Produção
```bash
npm run build
```
Os arquivos otimizados estarão em `dist/`

### Preview do Build
```bash
npm run preview
```

## 📐 Estrutura do Projeto

```
src/
├── components/
│   ├── App.tsx              # Componente principal
│   ├── BlenderCard.tsx      # Card individual de cada liquidificador
│   └── SummaryPanel.tsx     # Painel de resumo e resultados
├── types.ts                 # Tipos TypeScript e funções de utilidade
├── main.tsx                 # Ponto de entrada React
└── index.css                # Estilos com Tailwind
```

## 🎯 Fluxo de Produção Real

Cada liquidificador rastreia 4 valores principais:

1. **Volume Inicial (tbs)**: Quantidade no começo do turno/dia
2. **Entradas (tbs)**: Suco recebido de outro blender ou fonte
3. **Saídas / Envase (tbs)**: Suco retirado para garrafas ou transferido para outro blender
4. **Volume Final (tbs)**: Quantidade restante no liquidificador

### Fórmula de Produção Líquida

```
Produção Líquida = (Volume Final + Saídas) - (Volume Inicial + Entradas)
```

**Exemplo Prático:**
- Blender 1 começa com 100 tbs
- Recebe 50 tbs de suco (entrada)
- Remove 200 tbs para envase (saída)
- Termina com 30 tbs

Produção Líquida = (30 + 200) - (100 + 50) = **80 tbs**

## 🎨 Cores e Design

- **Orange**: Cor laranja (#FF8C00) para suco Orange
- **Clarificado**: Amarelo suave (#FCD34D) para suco Clarificado
- **Misturado**: Laranja escuro (#B45309) para suco Misturado
- **Produção Final**: Verde vibrante com gradiente
- **Entradas**: Verde claro (destacar adições)
- **Saídas**: Vermelho claro (destacar remoções)

## 📊 Painel de Resumo

O painel inferior agrupa os resultados por categoria:

- **Total Orange**: Soma de todas as produções líquidas de suco Orange
- **Total Clarificado**: Soma de todas as produções líquidas de suco Clarificado
- **Total Misturado**: Soma de todas as produções líquidas de suco Misturado
- **Produção Final**: Total Misturado × 256 (conversão para unidades de garrafas/embalagens)

## 🔧 Tecnologias

- **React 18**: Framework UI
- **TypeScript 5**: Linguagem tipada
- **Tailwind CSS 3**: Utility-first CSS
- **Vite 5**: Build tool
- **PostCSS + Autoprefixer**: Processamento de CSS

## 📝 Notas

- Todos os valores são em **tbs** (tablespoons)
- Suporta decimais até 1 casa (ex: 10.5 tbs)
- Todos os cálculos são feitos no cliente (sem backend)
- A aplicação preserva o estado enquanto aberta (sem persistência)
- Valores podem ser negativos se mais suco foi retirado do que produzido

## 💡 Desenvolvido por

Assistente AI - Copilot CLI Runtime

---

**Aproveite a Calculadora de Produção de Suco! 🧃**

