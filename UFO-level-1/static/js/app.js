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

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    console.log(inputValue);

    // Filter data to match user input
    var filteredData = tableData.filter(row => row.datetime === inputValue);

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