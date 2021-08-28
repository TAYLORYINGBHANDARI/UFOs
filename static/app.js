// import the data from data.js
const tableData = data;
// Reference the HTML table using d3
var tbody = d3.select("tbody");
function buildTable(data) {
    // First, clear out any existing data
    tbody.html("");  
    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    data.foreach((dataRow)=>{
        let row=tbody.append("tr");
        // Loop through each field in the dataRow and add
        // each value as a table cell (td)
        Object.values(dataRow).foreach((val)=>{
            let cell=row.append("td");
            cell.text(val);
        });
     });
}
