// JavaScript Document
var ctx = document.getElementById('myChart1').getContext('2d');
//Global options
Chart.defaults.global.defaultFontSize=20;
Chart.defaults.global.defaultFontFamily="Rubik";


var chart = new Chart(ctx, {
    type: 'bar',
    // The data for our dataset
    data: {
        labels: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"],
        datasets: [
        {
            label: ["Tempeture"],
            data: [20, 25,13,17,15,25,22],
            backgroundColor: '#F8CBAC',
            hoverBackgroundColor: '#FFDCC4',
            hoverBorderWidth: '7',
        }
     ]
 },
    // Configuration options go here
    options: {
    	title: {
    	display: true,
    	text: 'Weekly House Stats',
    	fontsize: 20,
    	fontFamily: "Merriweather Sans",
    	fontStlye: 'Bold',
        matainApectRatio: false
    },

    legend: {
    	display: false,
        position: 'center',
    },
    layout: {
    	padding: {
    		left: 50,
    		right: 0,
    		bottom: 0,
    		top: 50
    	}
    }
}
});