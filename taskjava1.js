document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (validateForm()) {
      addRow();
    }
  });

  function validateForm() {
    let id = document.getElementById("idInput").value;
    let phone = document.getElementById("phoneInput").value;

    if (!/^\d+$/.test(id)) {
      alert("Enter valid numeric ID");
      return false;
    }

    if (!/^[6-9]\d{9}$/.test(phone)) {
      alert("Enter valid 10 digit Indian phone number");
      return false;
    }

    return true;
  }

  function addRow() {
    let name = document.getElementById("nameInput").value;
    let id = document.getElementById("idInput").value;
    let phone = document.getElementById("phoneInput").value;

    let tableBody = document.querySelector("#dataTable tbody");
    let newRow = tableBody.insertRow();

    newRow.insertCell(0).innerText = id;
    newRow.insertCell(1).innerText = name;
    newRow.insertCell(2).innerText = phone;

    document.getElementById("nameInput").value = "";
    document.getElementById("idInput").value = "";
    document.getElementById("phoneInput").value = "";
  }
});
