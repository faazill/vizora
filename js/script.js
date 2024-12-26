const chartData = [
    { id: "chart1", type: "bar", label: "Traffic Volume", data: [12, 19, 3, 5, 2, 3], labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'] },
    { id: "chart2", type: "line", label: "Engagement Trend", data: [15, 10, 8, 18, 22, 30], labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'] },
    { id: "chart3", type: "pie", label: "Audience Split", data: [60, 40], labels: ['Male', 'Female'] },
    { id: "chart4", type: "doughnut", label: "Device Usage", data: [70, 30], labels: ['Mobile', 'Desktop'] },
    { id: "chart5", type: "polarArea", label: "Traffic Sources", data: [10, 20, 15, 25], labels: ['Organic', 'Paid', 'Referral', 'Direct'] },
    { id: "chart6", type: "radar", label: "Ad Effectiveness", data: [20, 30, 15, 10, 25], labels: ['Reach', 'Clicks', 'Conversions', 'Bounce', 'Impressions'] }
];

const canvases = document.querySelectorAll('canvas');

canvases.forEach((canvas) => {
    const chartInfo = chartData.find((chart) => chart.id === canvas.id); // Match canvas ID with chart data
    if (chartInfo) {
        const ctx = canvas.getContext('2d');
        new Chart(ctx, {
            type: chartInfo.type, // Use the chart type from the data
            data: {
                labels: chartInfo.labels, // Use the labels from the data
                datasets: [{
                    label: chartInfo.label, // Use the label from the data
                    data: chartInfo.data, // Use the data from the data
                    backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'],
                    borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        display: true,
                        position: 'top'
                    }
                }
            }
        });
    }
});