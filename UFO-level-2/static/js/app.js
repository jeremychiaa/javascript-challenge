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

    // Create empty array to store values of filters
    var filters = [];

    // Variable to hold filter IDs
    var filter_ids = ["datetime", "city", "state", "country", "shape"];

    // Store current value of each field in an array
    for (var i = 0; i < 5; i++) {
        var inputElement = d3.select(`#${filter_ids[i]}`);
        filters.push(inputElement.property("value"));
    };

    console.log(filters);

    // Filter data to match all user inputs
    for (var i = 0; i < 5; i++) {
        if (filters[i] !== "") {
            filteredData = tableData.filter(row => row[filter_ids[i]] === filters[i]);
        };
    };

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
