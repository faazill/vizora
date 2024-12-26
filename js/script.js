// Example Charts using Chart.js
const ctx1 = document.getElementById('chart1').getContext('2d');
const ctx2 = document.getElementById('chart2').getContext('2d');

// Chart 1: Traffic Density
new Chart(ctx1, {
    type: 'bar',
    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
            label: 'Traffic Volume',
            data: [12, 19, 3, 5, 2, 3, 10],
            backgroundColor: 'rgba(52, 152, 219, 0.5)',
            borderColor: 'rgba(52, 152, 219, 1)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Chart 2: Audience Engagement
new Chart(ctx2, {
    type: 'pie',
    data: {
        labels: ['Engaged', 'Not Engaged'],
        datasets: [{
            label: 'Audience Engagement',
            data: [75, 25],
            backgroundColor: ['rgba(46, 204, 113, 0.5)', 'rgba(231, 76, 60, 0.5)']
        }]
    },
    options: {
        responsive: true
    }
});
