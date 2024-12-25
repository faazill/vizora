// Firebase Configuration (Replace with your config)
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    databaseURL: "YOUR_DATABASE_URL",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Fetch Performance Score
function fetchPerformanceScore() {
    database.ref('/performanceScore').on('value', (snapshot) => {
        const score = snapshot.val();
        document.getElementById('score').textContent = score;
    });
}

// Fetch Chart Data and Render Charts
function fetchChartData() {
    database.ref('/chartData').once('value', (snapshot) => {
        const data = snapshot.val();
        renderCharts(data);
    });
}

// Render Charts
function renderCharts(data) {
    const chartIds = ['chart1', 'chart2', 'chart3', 'chart4', 'chart5', 'chart6'];
    chartIds.forEach((chartId, index) => {
        const ctx = document.getElementById(chartId).getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['A', 'B', 'C', 'D', 'E'],
                datasets: [{
                    label: `Chart ${index + 1}`,
                    data: data[chartId],
                    backgroundColor: ['#004aad', '#007bff', '#00aaff', '#33ccff', '#99e6ff']
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true
            }
        });
    });
}

// Initialize Dashboard
function initDashboard() {
    fetchPerformanceScore();
    fetchChartData();
}

// Run on Load
window.onload = initDashboard;
