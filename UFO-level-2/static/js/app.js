// Assign the data from `data.js` to a descriptive variable
var datatable = data;
console.log(datatable);

var tablebody = d3.select("tbody")
console.log(tablebody)

// creation of table for data to be appeneded and added to web page
data.forEach(function(sightings){
  console.log(sightings);
  var row = tablebody.append("tr");
  Object.entries(sightings).forEach(function([key,value]){
      console.log(key,value);
      var cell = tablebody.append("td");
      cell.text(value);
  });
});

// linking to html buttons
var button = d3.select("#filter-btn");

button.on("click", function(event){
  d3.event.preventDefault();
  tablebody.html("");
  var inputElement = d3.select("#datetime");
  var inputValue = inputElement.property("value");
  var cityInput = d3.select('#city').property("value");
  var stateInput = d3.select("#state").property("value");
  var countryInput = d3.select("#country").property("value");
  var shapeInput = d3.select("#shape").property("value");
  console.log(cityInput);

  var filteredData = datatable;
  if (inputValue) {
    filteredData = filteredData.filter(row => row.datetime === inputValue);
  }
  if (cityInput){
    filteredData = filteredData.filter(row => row.city === cityInput);
  }
  if (stateInput){
    filteredData = filteredData.filter(row => row.state === stateInput);
  }
  if (countryInput){
    filteredData = filteredData.filter(row => row.country === countryInput)
  }
  if (shapeInput){
    filteredData = filteredData.filter(row => row.shape === shapeInput)
  }

filteredData.forEach(function(dateData){
  var row=tablebody.append("tr");
  Object.entries(dateData).forEach(function([key,value]){
  var cell=tablebody.append("td");
  cell.text(value);
        })
    })
})