const ctx = document.getElementById('matrix-chart').getContext('2d');

const chart = new Chart(ctx, {
    type: 'matrix',
    data: {
        datasets: [{
            label: 'Matrix Demo',
            data: [
                {x: 1, y: 1, v: 10},
                {x: 2, y: 1, v: 20},
                {x: 3, y: 1, v: 30},
                {x: 1, y: 2, v: 15},
                {x: 2, y: 2, v: 25},
                {x: 3, y: 2, v: 35},
                {x: 1, y: 3, v: 5},
                {x: 2, y: 3, v: 40},
                {x: 3, y: 3, v: 45}
            ],
            backgroundColor: function(context) {
                const value = context.parsed.v;
                const alpha = value / 50; // Normalisierung für Transparenz
                return `rgba(255, 99, 132, ${alpha})`;
            },
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
            width: ({chart}) => (chart.chartArea || {}).width / 3 - 2,
            height: ({chart}) => (chart.chartArea || {}).height / 3 - 2,
        }]
    },
    options: {
        responsive: true,
        scales: {
            x: {
                type: 'linear',
                position: 'bottom',
                min: 0.5,
                max: 3.5
            },
            y: {
                type: 'linear',
                min: 0.5,
                max: 3.5
            }
        },
        plugins: {
            tooltip: {
                callbacks: {
                    title: function(context) {
                        return `Position: (${context[0].parsed.x}, ${context[0].parsed.y})`;
                    },
                    label: function(context) {
                        return `Wert: ${context.parsed.v}`;
                    }
                }
            }
        }
    }
});
