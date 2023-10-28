/*Chart JS Doughtnut Starts*/
const data = {
    labels: [
        'Not Publish',
        'Published',
    ],
    datasets: [{
        // label: ['Yet to Publish', 'Published'],
        data: [30, 70],
        backgroundColor: [
            '#bebebe',
            '#5344f5',
        ],
        hoverOffset: 4
    }]
};

var chartOptions = {
    maintainAspectRatio: false, // Disable aspect ratio maintenance
    responsive: true, // Set to true to make the chart responsive to window resizing
    height: 150, // Set the height in pixels
    width: 150,  // Set the width in pixels
    // Other chart options
};

function loadPie() {
    const chart = new Chart(document.getElementById('myChart'), {
        type: 'doughnut',
        data: data,
        options: {
            onClick: (e) => {
                const canvasPosition = getRelativePosition(e, chart);

                // Substitute the appropriate scale IDs
                const dataX = chart.scales.x.getValueForPixel(canvasPosition.x);
                const dataY = chart.scales.y.getValueForPixel(canvasPosition.y);
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
}
/*Chart JS Doughtnut Ends*/