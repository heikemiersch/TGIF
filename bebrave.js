// ↓ this is the second table on the loyalty pages ↓

var table5 = "";

const arrLoy = [];

if (document.title == "Senate Party Loyalty" || document.title == "House Party Loyalty") {
    createLoyList();


    function createLoyList() {
        for (r = 0; r < members.length; r++) {
            if (members[r].total_votes != null && members[r].votes_with_party_pct !== "undefined") {
                arrLoy.push({
                    totalPartyVotes: ((members[r].total_votes - members[r].missed_votes) / 100) * members[r].votes_with_party_pct,
                    name: (members[r].first_name + " ") +
                        (members[r].middle_name || "") +
                        (" " + members[r].last_name),
                    partyVotesPercentage: members[r].votes_with_party_pct
                })
            }
        };

        // ↓ this sorts arrLoy into ascending order 
        arrLoy.sort((a, b) => (a.partyVotesPercentage < b.partyVotesPercentage ? 1 : -1));
        // ↓ this seems to be the easiest and shortest way  to do that ↓
        // list.sort((a, b) => (a.color > b.color) ? 1 : -1)

        var arrLoyLeast = [];
        for (var r = 0; r < arrLoy.length; r++) {
            if (arrLoyLeast.length < (arrLoy.length * 0.1)) {
                arrLoyLeast.push(arrLoy[r]);
            }
        };
        createLoyLeastTable(arrLoyLeast);


        arrLoy.sort((a, b) => (a.partyVotesPercentage > b.partyVotesPercentage ? 1 : -1));


        var arrLoyMost = [];
        for (var r = 0; r < arrEng.length; r++) {
            if (arrLoyMost.length < (arrLoy.length * 0.1)) {
                arrLoyMost.push(arrLoy[r]);
            }
        };
        createLoyMostTable(arrLoyMost);
    }

    function createLoyLeastTable(arr) {
        var leastTable = document.getElementById("leastLoyal")
        for (var r = 0; r < arrLoyLeast.length; r++) {
            table5 +=
                "<tr>" +
                "<td>" +
                arr[r].name +
                "</td>" +
                "<td>" +
                arr[r].totalPartyVotes +
                "</td>" +
                "<td>" +
                arr[r].partyVotesPercentage +
                "</td>" +
                "</tr>";
        }
        leastTable.innerHTML = table5;
    }

    // ↓ this is the third table on the Loyality page ↓
    // arrLoy.sort((a, b) => (a.partyVotesPercentage > b.partyVotesPercentage ? 1 : -1));

    // var members = data.results[0].members;
    // var table4 = "";
    // var rows = members.length;
    // var arrLoyMost = []

    // // ↓ and here we have the most engaged 10 % ↓

    // var arrLoyMost = [];
    // for (var r = 0; r < arrLoy.length; r++) {
    //     if (arrLoyMost.length < (arrLoy.length * 0.1)) {
    //         arrLoyMost.push(arrLoy[r]);
    //     }
    // };


    function createLoyMostTable(arrLoyMost) {
        var tableMost = document.getElementById("mostLoyal");
        var table4 = "";
        for (var r = 0; r < arrLoyMost.length; r++) {

            table4 +=
                "<tr>" +
                "<td>" +
                arrLoyMost[r].name +
                "</td>" +
                "<td>" +
                arrLoyMost[r].totalPartyVotes +
                "</td>" +
                "<td>" +
                arrLoyMost[r].partyVotesPercentage +
                "</td>" +
                "</tr>";
        }
        tableMost.innerHTML = table4;
    }