// JavaScript Document
var ctx = document.getElementById('myChart').getContext('2d');
//Global options
Chart.defaults.global.defaultFontSize=20;
Chart.defaults.global.defaultFontFamily="Rubik";


var chart = new Chart(ctx, {
    type: 'bar',
    // The data for our dataset
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept","Oct","Nov","Dec"],
        datasets: [
        {
            label: ["Tempeture"],
            data: [25,22,23,20,17,15,13,14,16,17,19,20],
            backgroundColor: '#EBDE82',
            hoverBackgroundColor: '#FFF5AF',
            hoverBorderWidth: '7',
        }
     ]
 },
    // Configuration options go here
    options: {
    	title: {
    	display: true,
        text: 'Monthly House Stats',
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