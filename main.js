console.log(data);
var members = data.results[0].members;
console.log(members);


// christin says: loop with vars - create table with createElement - fill it with vars - sort it with appendChild

var tbody = document.getElementById("tbody")
var members = data.results[0].members;
var table = "";
var rows = members.length;
var cols = 5;

for (var r = 0; r < rows; r++) {
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

// do i not have to insert this somewhere to make names links?
// <li> < a href = "members[r].contact_form" > name </a></li >

// console.log(table);
// console.log(tbody);
tbody.innerHTML = table;
console.log(tbody);




// var rows2 = document.createElement("tr")
// var cell1 = document.createElement("td")

// cell1.innerHTML = firstName;
// console.log(cell1)
// rows2.appendChild(cell1)
// console.log(rows2)
// tbody.appendChild(rows2)