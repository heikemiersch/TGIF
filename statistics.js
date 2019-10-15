var members = data.results[0].members;

// ↓ creating the glance table for senate-attendance and house-attendance ↓

var tbody = document.getElementById("tbody1")

var statistics = {
    numberOfDemocrats: 0,
    numberOfRepublicans: 0,
    numberOfIndependents: 0,
    total: 0,

    democratsVotedWithParty: 0,
    republicansVotedWithParty: 0,
    independentsVotedWithParty: 0,
    totalVotedWithParty: 0
}

function createGlanceTable() {
    for (var r = 0; r < members.length; r++) {
        if (members[r].party === "D") {
            statistics.numberOfDemocrats++;
            if (typeof members[r].votes_with_party_pct !== "undefined") {
                statistics.democratsVotedWithParty +=
                    members[r].votes_with_party_pct;
            }
            // console.log(statistics.democratsVotedWithParty)

        } else if (members[r].party === "R") {
            statistics.numberOfRepublicans++;
            if (typeof members[r].votes_with_party_pct !== "undefined") {
                statistics.republicansVotedWithParty +=
                    members[r].votes_with_party_pct;
            }

        } else if (members[r].party === "I") {
            statistics.numberOfIndependents++;
            if (typeof members[r].votes_with_party_pct !== "undefined") {
                statistics.independentsVotedWithParty +=
                    members[r].votes_with_party_pct;
            }
        }
    }
    statistics.totalVotedWithParty = (statistics.democratsVotedWithParty + statistics.republicansVotedWithParty + statistics.independentsVotedWithParty) / members.length;

    statistics.democratsVotedWithParty = statistics.democratsVotedWithParty / statistics.numberOfDemocrats;
    statistics.republicansVotedWithParty = statistics.republicansVotedWithParty / statistics.numberOfRepublicans;
    statistics.independentsVotedWithParty = statistics.independentsVotedWithParty / statistics.numberOfIndependents;
    statistics.total = members.length;

    statistics.democratsVotedWithParty = (Math.floor(statistics.democratsVotedWithParty * 100) / 100);
    statistics.republicansVotedWithParty = (Math.floor(statistics.republicansVotedWithParty * 100) / 100);
    statistics.independentsVotedWithParty = (Math.floor(statistics.republicansVotedWithParty * 100) / 100);
    statistics.totalVotedWithParty = (Math.floor(statistics.totalVotedWithParty * 100) / 100);
};
createGlanceTable();

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
    statistics.independentsVotedWithParty +
    "</td>" +
    "</tr>" +
    "<tr>" +
    "<td>" +
    "Total" +
    "</td>" +
    "<td>" +
    statistics.total +
    "</td>" +
    "<td>" +
    statistics.totalVotedWithParty +
    "</td>" +
    "</tr>";

// ↓ this is the second table on the senate-attendance page ↓

var members = data.results[0].members;
var table3 = "";

const arrEng = [];

for (r = 0; r < members.length; r++) {
    if (members[r].missed_votes != null && members[r].votes_with_party_pct !== "undefined") {
        arrEng.push({
            missedVotes: members[r].missed_votes,
            name: (members[r].first_name + " ") +
                (members[r].middle_name || "") +
                (" " + members[r].last_name),
            missedVotesPercentage: members[r].missed_votes_pct

        })
    }
};


// ↓ this sorts arrEng into ascending order 
arrEng.sort((a, b) => (a.missedVotesPercentage < b.missedVotesPercentage ? 1 : -1));

// ↓ this seems to be the easiest and shortest way  to do that ↓
// list.sort((a, b) => (a.color > b.color) ? 1 : -1)

// ↓ and here we have the least engaged 10% ↓

var arrEngLeast = [];
for (var r = 0; r < arrEng.length; r++) {
    if (arrEngLeast.length < (arrEng.length * 0.1)) {
        arrEngLeast.push(arrEng[r]);
    }
};

for (var r = 0; r < arrEngLeast.length; r++) {

    var leastTable = document.getElementById("leastEngaged")
    table3 +=
        "<tr>" +
        "<td>" +
        arrEngLeast[r].name +
        "</td>" +
        "<td>" +
        arrEngLeast[r].missedVotes +
        "</td>" +
        "<td>" +
        arrEngLeast[r].missedVotesPercentage +
        "</td>" +
        "</tr>";
}

// console.log(table3);
// console.log(tbody);
leastTable.innerHTML = table3;

// this would be the approach to create the tables in nodejs, so without strings

// var rows2 = document.createElement("tr")
// var cell1 = document.createElement("td")

// cell1.innerHTML = firstName;
// console.log(cell1)
// rows2.appendChild(cell1)
// console.log(rows2)
// tbody.appendChild(rows2)

// ↓ this is the third table on the senate-attendance page ↓
arrEng.sort((a, b) => (a.missedVotesPercentage > b.missedVotesPercentage ? 1 : -1));

var members = data.results[0].members;
var table2 = "";
var rows = members.length;
var arrEngMost = []

// ↓ and here we have the most engaged 10 % ↓

var arrEngMost = [];
for (var r = 0; r < arrEng.length; r++) {
    if (arrEngMost.length < (arrEng.length * 0.1)) {
        arrEngMost.push(arrEng[r]);
    }
};

console.log(arrEngMost.length)
for (var r = 0; r < arrEngMost.length; r++) {
    var tableMost = document.getElementById("mostEngaged");

    table2 +=
        "<tr>" +
        "<td>" +
        arrEngMost[r].name +

        "</td>" +
        "<td>" +
        arrEngMost[r].missedVotes +
        "</td>" +
        "<td>" +
        arrEngMost[r].missedVotesPercentage +
        "</td>" +
        "</tr>";

}
console.log(table2)

// console.log(tbody);
tableMost.innerHTML = table2;

// ↓ this was my attempt to sort out the 10% ↓

// var highestTen = [];

// function highestTenPercent(a, b) {

//     for (var r = 0; r < arrEng.length; r++) {
//         if (highestTen < (arrEng.length * 0.1)) {
//             highestTen.push(Math.max(arrEng.missed_votes_pct))
//         }
//     }
//     highestTenPercent(highestTen)
// };
// console.log(highestTen);

// console.log(highestTen.push(Math.max(arrEng.missed_votes_pct)));

// 216 this is where i want to push the results of the function

// 218 the function which i guess cannot work with just a and b
// 220 loop through arrEng.length
// 221 as long as highestTen is smaller than 10& of arrEng.length
// 222 push result of loop (the max number than was found) into var highestTen
// 225 call function
// 227 console.log it to check


// var tbody = document.getElementById("mostLoyal")