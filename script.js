var fruit, array;



document.getElementById('button').addEventListener('click', (event) => {
  fruit = ['apple', 'banana', 'cherry'];
  fruit.forEach((array) => {
    if (fruit) {
      let element_list = document.getElementById('list');
      let new_li = document.createElement('li');
      new_li.innerText = array;

      element_list.appendChild(new_li);
    }
  });

});
