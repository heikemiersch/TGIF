// Get checked box values and put them into an array.
// Use that array to filter the list of members to pass to your
// function to create the table.
// Call this code whenever a checkbox is changed, i.e., use an onchanged event listener.

document.getElementById("click").addEventListener("click", createChbox);

// element.addEventListener("click", createChbox);

function createChbox() {
    var arrRep = [];
    var arrDem = [];
    var arrInd = [];
    for (var r = 0; r > members[r].length; r++) {
        if (members[r].party === D) {
            arrDem.push;
        } else if (members[r].party === R) {
            arrRep.push;
        } else if (members[r].party === I) {
            arrInd.push;
        }
    }
};
createChbox();