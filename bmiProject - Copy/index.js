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
  if (document.getElementById("fps").checked) {
    var result = (weight / (height * 12 * (height * 12))) * 703.0704;
  } else if (document.getElementById("cgs").checked) {
    var result = (weight / (height * height)) * 10000; //(kg *1000 = g)/(cm2)
    console.log(result);
  }

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

function setUnit(system) {
  const height = document.getElementById("height-unit");
  const weight = document.getElementById("weight-unit");

  switch (system) {
    case "fps-system":
      height.innerHTML = "feet(ft)";
      weight.innerHTML = "pound(lb)";
      break;

    case "cgs-system":
      height.innerHTML = "centimeter(cm)";
      weight.innerHTML = "kilogram(kg)";
      break;
  }
}

// function getSystem(id) {
//   const element = document.getElementById(id);
//   return element.value;
// }
