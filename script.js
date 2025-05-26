function getJoke() {
  const setup = document.getElementById('setup');
  const punchline = document.getElementById('punchline');

  fetch('https://official-joke-api.appspot.com/random_joke')
    .then(response => response.json())
    .then(data => {
      setup.textContent = data.setup;
      punchline.textContent = data.punchline;
    })
    .catch(error => {
      setup.textContent = 'Oops! Something went wrong.';
      punchline.textContent = '';
      console.error('Error fetching joke:', error);
    });
}
