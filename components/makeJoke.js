import renderToDom from '../utils/renderToDom';
import getJoke from './getJoke';
import newJokeBtn from './newJokeBtn';

const makeJoke = () => {
  getJoke().then((response) => {
    const btn = document.querySelector('#jokeBtn');
    const { setup, delivery } = response;
    btn.addEventListener('click', () => {
      if (btn.innerHTML.includes('Joke')) {
        renderToDom('#jokeSetup', setup);
        btn.innerHTML = 'Get Punchline!';
      } else if (btn.innerHTML === 'Get Punchline!') {
        renderToDom('#jokePunchline', delivery);
        renderToDom('#jokeBtnDiv', '');
        renderToDom('#newJokeBtnDiv', newJokeBtn);
      }
    });
  });
};

export default makeJoke;
