var members = data.results[0].members;

function createTable() {
    var checkboxes = getCheckboxValue()
    var dropdowns = getDropdownValue()
    // console.log(dropdowns)

    var tbody = document.getElementById("tbody")
    var table = "";
    var rows = members.length;
    var cols = 5;

    for (var r = 0; r < rows; r++) {
        if (checkboxes.includes(members[r].party))
            if (dropdowns == members[r].state || dropdowns == "ALL") {
                var name =
                    (members[r].first_name + " ") +
                    (members[r].middle_name || "") +
                    (" " + members[r].last_name);

                table +=
                    "<tr>" +
                    "<td>" +
                    name +
                    "</td>" +
                    "<td>" +
                    members[r].state +
                    "</td>" +
                    "<td>" +
                    members[r].seniority +
                    "</td>" +
                    "<td>" +
                    members[r].party +
                    "</td>" +
                    "<td>" +
                    members[r].votes_with_party_pct + " %" +
                    "</td>"
                "</tr>";
            }

    }

    tbody.innerHTML = table;
    console.log(tbody);
}
createTable()

// var rows2 = document.createElement("tr")
// var cell1 = document.createElement("td")

// cell1.innerHTML = firstName;
// console.log(cell1)
// rows2.appendChild(cell1)
// console.log(rows2)
// tbody.appendChild(rows2)