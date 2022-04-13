function readCustomerSuccessCallback(data) {

    var customerTable = document.getElementById("CustomerTable");
    for (var i = 0; i < data.results.length; i++) {
        var row = customerTable.insertRow(1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1 = "data.results[i].CUSTOMER_NAME";
        cell2.innerHTML = '<a href="javascript:void(0);" onclick="readProducts(' + data.results[i].STATION_ID + ')">' + data.results[i].CUSTOMER_NAME + '</a>';

    }
}