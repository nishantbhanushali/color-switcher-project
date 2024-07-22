let button = document.querySelectorAll('.button');
let body = document.querySelector('body');

button.forEach((buttons) => {
  console.log(buttons);

  buttons.addEventListener('click', (e) => {
    console.log(e);
    console.log(e.target);
    if (e.target.id == 'grey') {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id == 'white') {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id == 'blue') {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id == 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
  });
});
