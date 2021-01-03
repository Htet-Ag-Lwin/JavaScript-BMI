function getInput(id) {
  var input = document.getElementById(id);
  var castedValue = Number(input.value);
  if (!validation(castedValue)) {
    alertReport();
    return 0;
  }
  return castedValue;
}
function calculate(weight, height) {
  var result = weight / (height * height);
  if (isNaN(result) || !isFinite(result)) {
    result = 0.0;
  } else {
    displayClose();
  }
  setDisplay(result);
  showHealthyRate(result);
}
function validation(input) {
  if (isNaN(input) || input == 0) {
    return false;
  }
  return true;
}
function setDisplay(result) {
  document.getElementById("result").innerHTML = result.toFixed(2);
}
function displayClose() {
  document.getElementsByClassName("alert")[0].style.display = "none";
}
function alertReport() {
  document.getElementsByClassName("alert")[0].style.display = "initial";
}

function showHealthyRate(result) {
  var healthyResult = document.getElementById("healthyResult");
  if (result < 18.5) {
    healthyResult.innerHTML = "Under weight.";
  } else if (result >= 18.5 && result < 24.9) {
    healthyResult.innerHTML = "Normal Weight.";
  } else if (result >= 25 && result < 29.5) {
    healthyResult.innerHTML = "Over Weight.";
  } else {
    healthyResult.innerHTML = "Obesity.";
  }
}
