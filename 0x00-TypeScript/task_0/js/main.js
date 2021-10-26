;
var student1 = {
    firstName: "Jack",
    lastName: "Malik",
    age: 31,
    location: "Morocco"
};
var student2 = {
    firstName: "Jane",
    lastName: "Michelle",
    age: 17,
    location: "London"
};
var tableHeaders = ["firstName", "location"];
var studentsList = [student1, student2];
function generateHeaders(table, tableHeaders) {
    var thead = table.createTHead();
    var row = thead.insertRow();
    tableHeaders.forEach(function (headerTitle, index) {
        var cell = row.insertCell(index);
        var text = document.createTextNode(headerTitle);
        cell.appendChild(text);
        thead.appendChild(row);
    });
}
function createTable(table, data) {
    var tbody = document.createElement("tbody");
    table.appendChild(tbody);
    data.forEach(function (element) {
        var row = tbody.insertRow();
        var cell1 = row.insertCell(0);
        var text1 = document.createTextNode(element.firstName);
        cell1.appendChild(text1);
        var cell2 = row.insertCell(1);
        var text2 = document.createTextNode(element.location);
        cell2.appendChild(text2);
    });
}
var body = document.getElementsByTagName("body")[0];
var table = document.createElement("table");
body.appendChild(table);
generateHeaders(table, tableHeaders);
createTable(table, studentsList);
