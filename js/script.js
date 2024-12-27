// Data for the charts
const chartData = [
    { id: "chart1", type: "bar", label: "Traffic Volume", data: [12, 19, 3, 5, 2, 3], labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'] },
    { id: "chart2", type: "line", label: "Engagement Trend", data: [15, 10, 8, 18, 22, 30], labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'] },
    { id: "chart3", type: "pie", label: "Audience Split", data: [60, 40], labels: ['Male', 'Female'] },
    { id: "chart4", type: "doughnut", label: "Device Usage", data: [70, 30], labels: ['Person', 'Vehicle'] },
    { id: "chart5", type: "polarArea", label: "Age group", data: [10, 20, 15, 25], labels: ['Below 20', '20-30', '30-40', '40-50' , '50 above'] },
    { id: "chart6", type: "radar", label: "Salary range of Audience", data: [20, 30, 15, 10, 25], labels: ['below 10k', '10k-40k', '40k-100k', '100k-200k', 'above 200k'] }
];

let selectedBillboard = "";
let charts = [];

// Billboard details
const billboardDetails = {
    "Billboard 1": {
        location: "Times Square, New York",
        type: "Digital",
        period: "Jan 2024 - Present",
        image: "images/billboard1.jpg",
        map: "https://www.google.com/maps/embed/v1/place?q=Times+Square,+New+York&key=YOUR_API_KEY"
    },
    "Billboard 2": {
        location: "Piccadilly Circus, London",
        type: "Traditional",
        period: "Mar 2023 - Dec 2023",
        image: "images/billboard2.jpg",
        map: "https://www.google.com/maps/embed/v1/place?q=Piccadilly+Circus,+London&key=YOUR_API_KEY"
    },
    "Billboard 3": {
        location: "Shibuya Crossing, Tokyo",
        type: "Digital",
        period: "Jun 2022 - Feb 2023",
        image: "images/billboard3.jpg",
        map: "https://www.google.com/maps/embed/v1/place?q=Shibuya+Crossing,+Tokyo&key=YOUR_API_KEY"
    },
    "All Billboards": {
        location: "Various Locations",
        type: "Mixed",
        period: "Lifetime",
        image: "images/all-billboards.jpg",
        map: "https://www.google.com/maps/embed/v1/place?q=Earth&key=YOUR_API_KEY"
    }
};

// Initialize charts based on `chartData`
function initializeCharts() {
    const canvases = document.querySelectorAll("canvas");

    canvases.forEach((canvas) => {
        const chartInfo = chartData.find((chart) => chart.id === canvas.id);
        if (chartInfo) {
            const ctx = canvas.getContext("2d");
            const chart = new Chart(ctx, {
                type: chartInfo.type,
                data: {
                    labels: chartInfo.labels,
                    datasets: [{
                        label: chartInfo.label,
                        data: chartInfo.data,
                        backgroundColor: [
                            "rgba(255, 99, 132, 0.2)",
                            "rgba(54, 162, 235, 0.2)",
                            "rgba(255, 206, 86, 0.2)",
                            "rgba(75, 192, 192, 0.2)",
                            "rgba(153, 102, 255, 0.2)",
                            "rgba(255, 159, 64, 0.2)"
                        ],
                        borderColor: [
                            "rgba(255, 99, 132, 1)",
                            "rgba(54, 162, 235, 1)",
                            "rgba(255, 206, 86, 1)",
                            "rgba(75, 192, 192, 1)",
                            "rgba(153, 102, 255, 1)",
                            "rgba(255, 159, 64, 1)"
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            display: true,
                            position: "top"
                        }
                    }
                }
            });

            charts.push(chart);
        }
    });
}

// Update charts when a time span is selected
function updateCharts(timeSpan) {
    if (!selectedBillboard) {
        alert("Please select a billboard first!");
        return;
    }

    console.log(`Updating charts for ${selectedBillboard} and ${timeSpan}`);

    let updatedData;
    if (timeSpan === "day") updatedData = [5, 10, 15, 20, 25];
    else if (timeSpan === "week") updatedData = [25, 30, 35, 40, 45];
    else if (timeSpan === "month") updatedData = [50, 60, 70, 80, 90];
    else if (timeSpan === "lifetime") updatedData = [100, 120, 140, 160, 180];

    charts.forEach((chart) => {
        chart.data.datasets[0].data = updatedData.slice(0, chart.data.labels.length);
        chart.update();
    });
}

// Billboard dropdown logic
document.getElementById("billboard-dropdown").addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
        selectedBillboard = e.target.dataset.value;
        const details = billboardDetails[selectedBillboard];

        if (details) {
            document.getElementById("billboard-title").innerText = `${selectedBillboard} `;
            document.getElementById("billboard-location").innerText = details.location;
            document.getElementById("billboard-type").innerText = details.type;
            document.getElementById("billboard-period").innerText = details.period;
            document.getElementById("billboard-image").querySelector("img").src = details.image;
            document.getElementById("map-frame").src = details.map;

            document.getElementById("timespan-dropdown").disabled = false;
        }
    }
});

// Time span dropdown logic
document.getElementById("timespan-dropdown").addEventListener("change", (event) => {
    const timeSpan = event.target.value;
    updateCharts(timeSpan);
});

// Initialize everything on page load
document.addEventListener("DOMContentLoaded", () => {
    initializeCharts();
});