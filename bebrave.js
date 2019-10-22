var members = data.results[0].members;

////////// checkboxes party /////////////

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

////////// filter by state /////////////

function createDropdown() {
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

  // // dropdownData = arrState.push(members[r].state);
  // dropdownData.innerHTML = arrState;
  console.log(arrState);
}
createDropdown();


function getDropdownValue() {
  var dropdown = document.getElementById("dropdown-state").value;
  return dropdown

}