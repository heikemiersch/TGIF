var members = data.results[0].members;


// ↓ this is the first table on senate-attendance page ↓

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

// ↓ the following two loops could have gone into the previous one, i know that now ↓

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

// ↓ this is the second table on the senate-attendance page ↓

var members = data.results[0].members;
var tablo = "";


const arrEng = [];

for (r = 0; r < members.length; r++) {
    arrEng.push({
        missedVotes: members[r].missed_votes,
        name: (members[r].first_name + " ") +
            (members[r].middle_name || "") +
            (" " + members[r].last_name),
        missedVotesPercentage: members[r].missed_votes_pct
    })
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

    var leastTable = document.getElementById("least")
    tablo +=
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


// console.log(tablo);
// console.log(tbody);
leastTable.innerHTML = tablo;


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
var tabla = "";
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
    var tableMost = document.getElementById("most");

    tabla +=
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
console.log(tabla)


// console.log(tbody);
tableMost.innerHTML = tabla;





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