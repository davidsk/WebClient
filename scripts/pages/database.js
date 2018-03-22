require(["idGenerator"], function(idGenerator){

    var body = document.querySelector("#content");
    var table = body.children[1];

    function addRow(){
        var row = document.createElement("tr");
        var idCell = document.createElement("td");
        var nameCell = document.createElement("td")

        var newId = idGenerator.getNextId();
        idCell.textContent = newId;
        nameCell.textContent = "New Person " + Math.abs(newId);

        row.appendChild(idCell);
        row.appendChild(nameCell);

        table.appendChild(row);
    }

    document.querySelector("#addRow").addEventListener("click", addRow);
});