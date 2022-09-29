
function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}



document.getElementById('button').addEventListener('click', => {
  let element_outputName = document.getElementById('outputName');
  element_outputName.innerText = getNumberOrString(document.getElementById('inputName').value);
  let element_outputText = document.getElementById('outputText');
  element_outputText.innerText = getNumberOrString(document.getElementById('inputComment').value);

});
