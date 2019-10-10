console.log(data);
var members = data.results[0].members;
console.log(members);

// this is the second table on the senate-attendance page

var members = data.results[0].members;
var table = "";
var rows = members.length;

// function name() {
//     var name =
//         (members[r].first_name + " ") +
//         (members[r].middle_name || "") +
//         (" " + members[r].last_name);
//     return name;
// }


for (var r = 0; r < rows; r++) {
    var tbody = document.getElementById("tbody2")
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
        members[r].missed_votes +
        "</td>" +
        "<td>" +
        members[r].missed_votes_pct +
        "</td>"
    "</tr>";
}


// console.log(table);
// console.log(tbody);
tbody.innerHTML = table;
console.log(tbody);

// this would be the approach to create the tables in nodejs, so without strings

// var rows2 = document.createElement("tr")
// var cell1 = document.createElement("td")

// cell1.innerHTML = firstName;
// console.log(cell1)
// rows2.appendChild(cell1)
// console.log(rows2)
// tbody.appendChild(rows2)


//this is the first table on senate-attendance page

var tbody = document.getElementById("tbody1")

var statistics = {
    numberOfDemocrats: 0,
    numberOfRepublicans: 0,
    numberOfIndependents: 0,
    total: 0,

    democratsVotedWithParty: 0,
    republicansVotedWithParty: 0
}

for (var r = 0; r < members.length; r++) {
    if (members[r].party === "D") {
        statistics.numberOfDemocrats++;
    } else if (members[r].party === "R") {
        statistics.numberOfRepublicans++;
    } else if (members[r].party === "I") {
        statistics.numberOfIndependents++;
    }
}

for (var r = 0; r < members.length; r++) {
    if (members[r].party === "D") {
        statistics.democratsVotedWithParty +=
            members[r].votes_with_party_pct
    }
}

statistics.democratsVotedWithParty = statistics.democratsVotedWithParty / statistics.numberOfDemocrats;

statistics.democratsVotedWithParty = (Math.floor(statistics.democratsVotedWithParty * 100) / 100);


for (var r = 0; r < members.length; r++) {
    if (members[r].party === "R") {
        statistics.republicansVotedWithParty +=
            members[r].votes_with_party_pct
    }
}

statistics.republicansVotedWithParty = statistics.republicansVotedWithParty / statistics.numberOfRepublicans;

statistics.republicansVotedWithParty = (Math.floor(statistics.republicansVotedWithParty * 100) / 100);

statistics.total = (statistics.numberOfDemocrats + statistics.numberOfRepublicans + statistics.numberOfIndependents);


tbody.innerHTML +=
    "<tr>" +
    "<td>" +
    "Republicans" +
    "</td>" +
    "<td>" +
    statistics.numberOfRepublicans +
    "</td>" +
    "<td>" +
    statistics.republicansVotedWithParty +
    "</td>" +
    "</tr>" +
    "<tr>" +
    "<td>" +
    "Democrats" +
    "</td>" +
    "<td>" +
    statistics.numberOfDemocrats +
    "</td>" +
    "<td>" +
    statistics.democratsVotedWithParty +
    "</td>" +
    "</tr>" +
    "<tr>" +
    "<td>" +
    "Independents" +
    "</td>" +
    "<td>" +
    statistics.numberOfIndependents +
    "</td>" +
    "<td>" +
    "</td>" +
    "</tr>" +
    "<tr>" +
    "<td>" +
    "Total" +
    "</td>" +
    "<td>" +
    statistics.total +
    "</td>" +
    "</tr>";

// this is the third table on the senate-attendance page

var members = data.results[0].members;
var table = "";
var rows = members.length;

for (var r = 0; r < rows; r++) {
    var tbody = document.getElementById("tbody3")
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
        members[r].missed_votes +
        "</td>" +
        "<td>" +
        members[r].missed_votes_pct +
        "</td>"
    "</tr>";
}

// console.log(table);
// console.log(tbody);
tbody3.innerHTML = table;
console.log(tbody);