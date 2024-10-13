const wheel = document.getElementById("wheel");
const spinBtn = document.getElementById("spinBtn");
const finalValue = document.getElementById("final-value");

const colour1 = "#B836E7"
const colour2 = "#EE4266"
const colour3 = "#FFD23F"
const colour4 = "#3BCEAC"
const colour5 = "#0EAD69"

//wheel.style.display = "none";
//Object that stores values of minimum and maximum angle for a value
const rotationValues = [
  { minDegree: 0, maxDegree: 9, value: 0 },
  { minDegree: 10, maxDegree: 18, value: 1 },
  { minDegree: 19, maxDegree: 27, value: 2 },
  { minDegree: 28, maxDegree: 36, value: 3 },
  { minDegree: 37, maxDegree: 45, value: 4 },
  { minDegree: 46, maxDegree: 54, value: 5 },
  { minDegree: 55, maxDegree: 63, value: 6 },
  { minDegree: 64, maxDegree: 72, value: 7 },
  { minDegree: 73, maxDegree: 81, value: 8 },
  { minDegree: 82, maxDegree: 90, value: 9 },
  { minDegree: 91, maxDegree: 99, value: 10 },
  { minDegree: 100, maxDegree: 108, value: 11 },
  { minDegree: 109, maxDegree: 117, value: 12 },
  { minDegree: 118, maxDegree: 126, value: 13 },
  { minDegree: 127, maxDegree: 135, value: 14 },
  { minDegree: 136, maxDegree: 144, value: 15 },
  { minDegree: 145, maxDegree: 153, value: 16 },
  { minDegree: 154, maxDegree: 162, value: 17 },
  { minDegree: 163, maxDegree: 171, value: 18 },
  { minDegree: 172, maxDegree: 180, value: 19 },
  { minDegree: 181, maxDegree: 189, value: 20 },
  { minDegree: 190, maxDegree: 198, value: 21 },
  { minDegree: 199, maxDegree: 207, value: 22 },
  { minDegree: 208, maxDegree: 216, value: 23 },
  { minDegree: 217, maxDegree: 225, value: 24 },
  { minDegree: 226, maxDegree: 234, value: 25 },
  { minDegree: 235, maxDegree: 243, value: 26 },
  { minDegree: 244, maxDegree: 252, value: 27 },
  { minDegree: 253, maxDegree: 261, value: 28 },
  { minDegree: 262, maxDegree: 270, value: 29 },
  { minDegree: 271, maxDegree: 279, value: 30 },
  { minDegree: 280, maxDegree: 288, value: 31 },
  { minDegree: 289, maxDegree: 297, value: 32 },
  { minDegree: 298, maxDegree: 306, value: 33 },
  { minDegree: 307, maxDegree: 315, value: 34 },
  { minDegree: 316, maxDegree: 324, value: 35 },
  { minDegree: 325, maxDegree: 333, value: 36 },
  { minDegree: 334, maxDegree: 342, value: 37 },
  { minDegree: 343, maxDegree: 351, value: 38 },
  { minDegree: 352, maxDegree: 359, value: 39 },
];
//Size of each piece
const data = [2.4, 2.4, 2.4, 2.4, 2.4, 2.4, 2.4, 2.4,2.4, 2.4, 2.4, 2.4, 2.4, 2.4, 2.4, 2.4,
    2.4, 2.4, 2.4, 2.4, 2.4, 2.4, 2.4, 2.4,2.4, 2.4, 2.4, 2.4, 2.4, 2.4, 2.4, 2.4,
    2.4, 2.4, 2.4, 2.4, 2.4, 2.4, 2.4, 2.4,
 ];
//background color for each piece
var pieColors = [
  colour1,
  colour2,
  colour3,
  colour4,
  colour5,
  colour1,
  colour2,
  colour3,
  colour4,
  colour5,
  colour1,
  colour2,
  colour3,
  colour4,
  colour5,
  colour1,
  colour2,
  colour3,
  colour4,
  colour5,
  colour1,
  colour2,
  colour3,
  colour4,
  colour5,
  colour1,
  colour2,
  colour3,
  colour4,
  colour5,
  colour1,
  colour2,
  colour3,
  colour4,
  colour5,
  colour1,
  colour2,
  colour3,
  colour4,
  colour5,
];
//Create chart
let myChart = new Chart(wheel, {
  //Plugin for displaying text on pie chart
  plugins: [ChartDataLabels],
  //Chart Type Pie
  type: "pie",
  data: {
    //Labels(values which are to be displayed on chart)
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
        11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28,
        29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40
    ],
    //Settings for dataset/pie
    datasets: [
      {
        backgroundColor: pieColors,
        data: data,
      },
    ],
  },
  options: {
    //Responsive chart
    responsive: true,
    animation: { duration: 0 },
    plugins: {
      //hide tooltip and legend
      tooltip: false,
      legend: {
        display: false,
      },
      //display labels inside pie chart
      datalabels: {
        color: "#ffffff",
        formatter: (_, context) => context.chart.data.labels[context.dataIndex],
        font: { size: 24 },
      },
    },
  },
});

//display value based on the randomAngle
const valueGenerator = (angleValue) => {
  for (let i of rotationValues) {
    //if the angleValue is between min and max then display it
    if (angleValue >= i.minDegree && angleValue <= i.maxDegree) {
      var finalValue = document.getElementById("final-value")
      finalValue.innerHTML = `<p>Value: <span id="moveValue">${i.value}</span></p>`;
      var spinBtn = document.getElementById("spinBtn")
      $("#valueOptions").show()
      spinBtn.disabled = false;
      return i.value;
    }
  }
};

//Spinner count
let count = 0;
//100 rotations for animation and last rotation for result
let resultValue = 101;
//Start spinning
spinBtn.addEventListener("click", spinnerFunc);

 function spinnerFunc () {
  {
    var spinBtn = document.getElementById("spinBtn")
    spinBtn.disabled = true;
    spinValue = 0;
    //Empty final value
    var finalValue = document.getElementById("final-value")
    finalValue.innerHTML = `<p>Good Luck!</p>`;
    //Generate random degrees to stop at
    let randomDegree = Math.floor(Math.random() * (355 - 0 + 1) + 0);
    //Interval for rotation animation
    let rotationInterval = window.setInterval(() => {
      //Set rotation for piechart
      /*
      Initially to make the piechart rotate faster we set resultValue to 101 so it rotates 101 degrees at a time and this reduces by 1 with every count. Eventually on last rotation we rotate by 1 degree at a time.
      */
      myChart.options.rotation = myChart.options.rotation + resultValue;
      //Update chart with new value;
      myChart.update();
      //If rotation>360 reset it back to 0
      if (myChart.options.rotation >= 360) {
        count += 1;
        //console.log(count)
        resultValue -= 5;
        myChart.options.rotation = 0;
      } else if (count > 15 && myChart.options.rotation == randomDegree) {
        spinValue = valueGenerator(randomDegree);
        clearInterval(rotationInterval);
        count = 0;
        resultValue = 101;
        return spinValue;
      }
    }, 10);    
  }
}

function checkRealMoney(){
  return Number(document.getElementById("globalbalance").innerHTML);
}

function updateRealMoney(amount){
  document.getElementById("globalbalance").innerHTML = amount;
}

function respin(){
  var currentMoney = checkRealMoney();
  if (currentMoney >= 10){
    currentMoney = currentMoney - 10;
    updateRealMoney(currentMoney)
    $("#valueOptions").hide()
    spinnerFunc()
  }
}