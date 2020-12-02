// from data.js
var tableData = data;

// Using d3 to select html table body element
var tbody = d3.select("tbody");

// Append data into table
tableData.forEach((x) => {
    var row = tbody.append("tr");

    Object.entries(x).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});

// Use d3 to select html form and button elements
var button = d3.select("#filter-btn");
var form = d3.select(".form-control");

// Create event handlers
button.on("click", runFilter);
form.on("submit",runFilter);

// Define event handler function
function runFilter() {

    // Prevent page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node also get the value property of the input element
    var inputDateElement = d3.select("#datetime");
    var inputDateValue = inputDateElement.property("value");

    var inputCityElement = d3.select("#city");
    var inputCityValue = inputCityElement.property("value");

    var inputStateElement = d3.select("#state");
    var inputStateValue = inputStateElement.property("value");

    var inputCountryElement = d3.select("#country");
    var inputCountryValue = inputCountryElement.property("value");

    var inputShapeElement = d3.select("#shape");
    var inputShapeValue = inputShapeElement.property("value");

    // Filter data to match user input
    var filteredData = tableData.filter(row => row.datetime === inputDateValue &
        row.city === inputCityValue & row.state === inputStateValue & row.country === inputCountryValue &
        row.shape === inputShapeValue);

    console.log(filteredData);

    // Selecting the table element
    var tbody = d3.select("tbody");

    // Remove pre-existing information
    tbody.html("");

    // Write filtered data into table
    filteredData.forEach((x) => {
        var row = tbody.append("tr");
    
        Object.entries(x).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
};
