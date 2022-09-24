

var sheep_count, other_count;

function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}



document.getElementById('button').addEventListener('click', (event) => {
  if (getNumberOrString(document.getElementById('text').value) == 'sheep') {
    let element_sheep_count = document.getElementById('sheep_count');
    sheep_count = (typeof sheep_count === 'number' ? sheep_count : 0) + 1;
    element_sheep_count.innerText = sheep_count;
  }

});

document.getElementById('button').addEventListener('click', (event) => {
  if (!(getNumberOrString(document.getElementById('text').value) == 'sheep')) {
    let element_other_count = document.getElementById('other_count');
    other_count = (typeof other_count === 'number' ? other_count : 0) + 1;
    element_other_count.innerText = other_count;
  }

});

