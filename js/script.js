const chartData = [
    { id: "chart1", type: "bar", label: "Traffic Volume", data: [12, 19, 3, 5, 2, 3] },
    { id: "chart2", type: "line", label: "Engagement Trend", data: [15, 10, 8, 18, 22, 30] },
    { id: "chart3", type: "pie", label: "Audience Split", data: [60, 40] },
    { id: "chart4", type: "doughnut", label: "Device Usage", data: [70, 30] },
    { id: "chart5", type: "polarArea", label: "Traffic Sources", data: [10, 20, 15, 25] },
    { id: "chart6", type: "radar", label: "Ad Effectiveness", data: [20, 30, 15, 10, 25] }
];

chartData.forEach(({ id, type, label, data }) => {
    const ctx = document.querySelector(`#${id} canvas`).getContext("2d");
    new Chart(ctx, {
        type,
        data: {
            labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            datasets: [{
                label,
                data,
                backgroundColor: "rgba(52, 152, 219, 0.5)",
                borderColor: "rgba(52, 152, 219, 1)",
                borderWidth: 1
            }]
        },
        options: { responsive: true }
    });
});