// JavaScript Document
var ctx = document.getElementById('myChart').getContext('2d');
//Global options
Chart.defaults.global.defaultFontSize=13;
Chart.defaults.global.defaultFontFamily="Rubik";


var chart = new Chart(ctx, {
    type: 'line',
    // The data for our dataset
    data: {
        labels: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"],
        datasets: [
        {
            label: ["Tempeture"],
            data: [20, 25,12,17,15,25,22],
            backgroundColor: '#FEA265',
            borderColor: 'white',
            pointBackgroundColor: '#BF7C50',
            pointBorderWidth:1,
            pointHoverRadius:8,
            hoverBorderWidth:3,
            pointRadius:5
        }
     ]
 },
    // Configuration options go here
    options: {
    	title: {
    	display: true,
    	text: 'Weekly',
    	fontsize: 20,
    	fontFamily: "Merriweather Sans",
    	fontStlye: 'Bold',
        matainAspectRatio:false
    },

    yAxes: [{
            fontFamily: 'Rubik',
        }],

    legend: {
    	display: false,
    	position: 'center',
    },
    layout: {
    	padding: {
    		left:0,
    		right: 0,
    		bottom: 0,
    		top: 0
    	}
    }
}
});