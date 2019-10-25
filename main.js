var askFor = "";

if (document.title.includes("Senate")) {
    askFor = "senate"
} else if (document.title.includes("House")) {
    askFor = "house"
};

fetch(`https://api.propublica.org/congress/v1/113/${askFor}/members.json`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "X-API-Key": "thiscontainsapikey"
        }
    })
    .then(function (response) {

        return response.json();
    })
    .then(function (data) {

        var members = data.results[0].members;

        if (
            document.title == "Senate" ||
            document.title == "House"
        ) {
            createTable(members);
            createEvent(members);
            createDropdown(members);

            createEventForDropdown(members)
        };
        if (
            document.title == "Senate Attendance" ||
            document.title == "House Attendance"
        ) {
            createStatisticGlanceTable(members);
            createAttendanceList(members);
        }
        if (
            document.title == "Senate Party Loyalty" ||
            document.title == "House Party Loyalty"
        ) {
            createStatisticGlanceTable(members);
            createLoyList(members);
        }
    });

function createEvent(members) {
    var chbox = Array.from(document.getElementsByClassName("chbox"));

    chbox.forEach(function (oneCheckbox) {
        oneCheckbox.addEventListener("change", function () {
            createTable(members)
        })
    })
}

function createTable(members) {
    var checkboxes = getCheckboxValue()
    var dropdowns = getDropdownValue()

    var tbody = document.getElementById("tbody")
    var table = "";
    var rows = members.length;

    for (var r = 0; r < rows; r++) {
        if (checkboxes.includes(members[r].party)) {
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
    }
    tbody.innerHTML = table;
}

//////// ↓ this would be the approach to create the tables in nodejs, so without strings ↓ ////////

// var rows2 = document.createElement("tr")
// var cell1 = document.createElement("td")

// cell1.innerHTML = firstName;
// console.log(cell1)
// rows2.appendChild(cell1)
// console.log(rows2)
// tbody.appendChild(rows2)


//////// ↓ checkboxes party ↓ ////////

function getCheckboxValue() {
    var chbox = document.getElementsByClassName("chbox");

    var arrCheckedBox = [];
    for (var r = 0; r < chbox.length; r++) {
        if (chbox[r].checked == true) {
            arrCheckedBox.push(chbox[r].value);
        }
    }
    return arrCheckedBox
}

//////// ↓ filter by state ↓ ////////

function createEventForDropdown(members) {
    var filter = document.getElementById("dropdown-state")
    console.log(filter)
    filter.addEventListener("change", function () {
        createTable(members)
    })
}

function createDropdown(members) {
    var filter = document.getElementById("dropdown-state")
    var arrState = [];

    for (var r = 0; r < members.length; r++) {
        if (!arrState.includes(members[r].state)) {
            arrState.push(members[r].state);
            arrState.sort();
        }
    }
    for (var r = 0; r < arrState.length; r++) {
        var optionItem = document.createElement("option")
        optionItem.innerHTML = arrState[r];
        filter.appendChild(optionItem);
    }
    console.log(arrState);
}

function getDropdownValue() {
    var dropdown = document.getElementById("dropdown-state").value;
    return dropdown
}