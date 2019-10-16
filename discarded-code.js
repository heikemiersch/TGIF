// var features = firstName + middleName + lastName + state + party + yearsInOffice + votesWithParty;

// console.log(features);


// var table = "";
// var rows = members.length;
// var cols = 7;
// for (var r = 0; r < rows; r++) {
//   table += "<tr>";
//   for (var c = 1; c <= cols; c++) {
//     table += "<td>" + c + "</td>";
//   }
//   table += "</tr>";
// }
// console.log(table);

// if members[i] < members.length

// for (i = 0; members.length; i++);
// console.log(members[i]);

// console.log(data);
// var members = data.results[0].members;
// console.log(members);



// var members = data.results[0].members;
// var table = "";
// var rows = members.length;

// for (var r = 0; r < rows; r++) {
//     var tbody = document.getElementById("tbody3")
//     var name =
//         (members[r].first_name + " ") +
//         (members[r].middle_name || "") +
//         (" " + members[r].last_name);

//     table +=
//         "<tr>" +
//         "<td>" +
//         name +
//         "</td>" +
//         "<td>" +
//         members[r].missed_votes +
//         "</td>" +
//         "<td>" +
//         members[r].missed_votes_pct +
//         "</td>"
//     "</tr>";
// }

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

var arrEng = [];


for (r = 0; r < members.length; r++) {
    arrEng.push({
        missedVotes: members[r].missed_votes,
        name: (members[r].first_name + " ") +
            (members[r].middle_name || "") +
            (" " + members[r].last_name),
        missedVotesPercentage: members[r].missed_votes_pct
    })
};

console.log(arrEng);

// this is test to find out biggest 10 %

// var biggestEng = [arrEng];

// function lulu(a, b) {
//     for (var r = 0; r < members.length; r++) {
//         if arrEng < biggestEng
//     }

//     biggestEng.sort(a, b) {
//         return b - a
//     });
// }

// lulu(biggestEng);

// var num = [arrEng];

// function lulu(arr) {
//     var testUpperTen = arr[0];
//     for (var r = 0; r < members.length; r++) {
//         if (arr[r] > testUpperTen) {
//             testUpperTen = arr[r];
//         }
//     }
//     console.log(testUpperTen);
//     }
//     lulu(num);