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

// Chart Data
function createCharts() {
    const ctx1 = document.getElementById('chart1').getContext('2d');
    const ctx2 = document.getElementById('chart2').getContext('2d');
    const ctx3 = document.getElementById('chart3').getContext('2d');
    const ctx4 = document.getElementById('chart4').getContext('2d');
    const ctx5 = document.getElementById('chart5').getContext('2d');
    const ctx6 = document.getElementById('chart6').getContext('2d');

    const chartConfig = {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Performance',
                data: [65, 59, 80, 81, 56, 55],
                backgroundColor: ['#004aad', '#007bff', '#00aaff', '#00dfff', '#33ccff', '#99e6ff']
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    };

    // Create Charts
    new Chart(ctx1, chartConfig);
    new Chart(ctx2, chartConfig);
    new Chart(ctx3, chartConfig);
    new Chart(ctx4, chartConfig);
    new Chart(ctx5, chartConfig);
    new Chart(ctx6, chartConfig);
}

// Initialize Dashboard
function initDashboard() {
    fetchPerformanceScore();
    createCharts();
}

// Run on Load
window.onload = initDashboard;
