// Dados para o gráfico de pessoas que gostam de esportes
const dataGlobal = [
    {
        x: ['Futebol', 'Basquete', 'Vôlei', 'Natação', 'Outros'],
        y: [30, 20, 25, 15, 10], // Percentagens globais
        type: 'bar',
        marker: {
            color: ['#ff80ab', '#ff9fbb', '#ffbfd0', '#ffdfd9', '#ffe9e9']
        }
    }
];

const layoutGlobal = {
    title: {
        text: 'Distribuição Global de Preferências por Esportes (2024)',
        font: { family: 'Russo One', size: 24 }
    },
    xaxis: {
        title: 'Esportes',
        titlefont: { family: 'Roboto', size: 18 },
        tickfont: { family: 'Roboto', size: 14 }
    },
    yaxis: {
        title: 'Percentagem (%)',
        titlefont: { family: 'Roboto', size: 18 },
        tickfont: { family: 'Roboto', size: 14 }
    },
    plot_bgcolor: '#fff0f5',
    paper_bgcolor: '#fff0f5'
};

// Exibe o gráfico na seção com id 'grafico'
Plotly.newPlot('grafico', dataGlobal, layoutGlobal);

// Dados para o gráfico de esportes no Colégio Morelli
const dataMorelli = [
    {
        x: ['Futebol', 'Basquete', 'Vôlei', 'Natação', 'Outros'],
        y: [40, 30, 20, 5, 5], // Percentagens no Colégio Morelli
        type: 'bar',
        marker: {
            color: ['#ff80ab', '#ff9fbb', '#ffbfd0', '#ffdfd9', '#ffe9e9']
        }
    }
];

const layoutMorelli = {
    title: {
        text: 'Distribuição de Preferências no Colégio Morelli (2024)',
        font: { family: 'Russo One', size: 24 }
    },
    xaxis: {
        title: 'Esportes',
        titlefont: { family: 'Roboto', size: 18 },
        tickfont: { family: 'Roboto', size: 14 }
    },
    yaxis: {
        title: 'Percentagem (%)',
        titlefont: { family: 'Roboto', size: 18 },
        tickfont: { family: 'Roboto', size: 14 }
    },
    plot_bgcolor: '#fff0f5',
    paper_bgcolor: '#fff0f5'
};

// Exibe o gráfico na seção com id 'grafico-morelli'
Plotly.newPlot('grafico-morelli', dataMorelli, layoutMorelli);
