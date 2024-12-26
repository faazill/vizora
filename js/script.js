// Data for the charts
const chartData = [
    { id: "chart1", type: "bar", label: "Traffic Volume", data: [12, 19, 3, 5, 2, 3], labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'] },
    { id: "chart2", type: "line", label: "Engagement Trend", data: [15, 10, 8, 18, 22, 30], labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'] },
    { id: "chart3", type: "pie", label: "Audience Split", data: [60, 40], labels: ['Male', 'Female'] },
    { id: "chart4", type: "doughnut", label: "Device Usage", data: [70, 30], labels: ['Mobile', 'Desktop'] },
    { id: "chart5", type: "polarArea", label: "Traffic Sources", data: [10, 20, 15, 25], labels: ['Organic', 'Paid', 'Referral', 'Direct'] },
    { id: "chart6", type: "radar", label: "Ad Effectiveness", data: [20, 30, 15, 10, 25], labels: ['Reach', 'Clicks', 'Conversions', 'Bounce', 'Impressions'] }
];

let selectedBillboard = '';
let charts = [];

// Enable the Time Span dropdown when a Billboard is selected
function enableTimeSpanDropdown(billboard) {
    selectedBillboard = billboard;
    document.getElementById('timespan-dropdown').disabled = false;
    document.getElementById('billboard-btn').innerText = `Selected: ${billboard}`;
}

// Update all charts when a Time Span is selected
function updateCharts(timeSpan) {
    if (!selectedBillboard) {
        alert('Please select a billboard first!');
        return;
    }

    console.log(`Updating charts for ${selectedBillboard} and ${timeSpan}`);

    // Simulated data for different time spans
    let updatedData;
    if (timeSpan === 'day') {
        updatedData = [5, 10, 15, 20, 25];
    } else if (timeSpan === 'week') {
        updatedData = [25, 30, 35, 40, 45];
    } else if (timeSpan === 'month') {
        updatedData = [50, 60, 70, 80, 90];
    } else if (timeSpan === 'lifetime') {
        updatedData = [100, 120, 140, 160, 180];
    }

    // Update all charts with the new data
    charts.forEach((chart) => {
        chart.data.datasets[0].data = updatedData.slice(0, chart.data.labels.length); // Adjust the data to match the labels
        chart.update(); // Refresh the chart
    });
}

// Initialize charts based on `chartData`
function initializeCharts() {
    const canvases = document.querySelectorAll('canvas');

    canvases.forEach((canvas) => {
        const chartInfo = chartData.find((chart) => chart.id === canvas.id); // Match canvas ID with chart data
        if (chartInfo) {
            const ctx = canvas.getContext('2d');
            const chart = new Chart(ctx, {
                type: chartInfo.type, // Use the chart type from the data
                data: {
                    labels: chartInfo.labels, // Use the labels from the data
                    datasets: [{
                        label: chartInfo.label, // Use the label from the data
                        data: chartInfo.data, // Use the data from the data
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
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

            charts.push(chart); // Store chart instance
        }
    });
}

// Handle dropdown selection
document.getElementById('timespan-dropdown').addEventListener('change', (event) => {
    const timeSpan = event.target.value;
    updateCharts(timeSpan); // Update charts with the selected time span
});

// Call the function to initialize charts on page load
initializeCharts();

document.addEventListener("DOMContentLoaded", () => {
    const billboardDropdownButton = document.getElementById("billboard-dropdown-button");
    const timespanDropdownButton = document.getElementById("timespan-dropdown-button");
    const billboardDropdown = document.getElementById("billboard-dropdown");
    const timespanDropdown = document.getElementById("timespan-dropdown");

    let selectedBillboard = "";

    // Billboard dropdown logic
    billboardDropdown.addEventListener("click", (event) => {
        const value = event.target.dataset.value;
        if (value) {
            selectedBillboard = value;
            billboardDropdownButton.textContent = value;
            timespanDropdownButton.disabled = false; // Enable the timespan dropdown
        }
    });

    // Timespan dropdown logic
    timespanDropdown.addEventListener("click", (event) => {
        const value = event.target.dataset.value;
        if (value) {
            timespanDropdownButton.textContent = value;
            updateCharts(selectedBillboard, value); // Call chart update function
        }
    });

    // Dummy function to simulate chart updates
    function updateCharts(billboard, timespan) {
        console.log(`Updating charts for ${billboard} and ${timespan}`);
        // Chart update logic goes here
    }
});
