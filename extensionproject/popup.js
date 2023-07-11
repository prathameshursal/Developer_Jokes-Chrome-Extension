document.addEventListener('DOMContentLoaded', function() {
  var jokeTextElement = document.getElementById('joke-text');
  var newJokeBtn = document.getElementById('new-joke-btn');

  newJokeBtn.addEventListener('click', function() {
    fetchJoke();
  });

  fetchJoke();

  function fetchJoke() {
    fetch('https://official-joke-api.appspot.com/jokes/random')
      .then(response => response.json())
      .then(data => {
        jokeTextElement.textContent = data.setup + " " + data.punchline;
      })
      .catch(error => {
        jokeTextElement.textContent = 'Error fetching joke.';
      });
  }
});
