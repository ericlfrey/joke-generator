import renderToDom from '../utils/renderToDom';
import jokeBtn from './jokeBtn';
import makeJoke from './makeJoke';

const newJoke = (e) => {
  if (e.target.id === 'getNewJoke') {
    renderToDom('#newJokeBtnDiv', '');
    renderToDom('#jokeSetup', '');
    renderToDom('#jokePunchline', '');
    renderToDom('#jokeBtnDiv', jokeBtn);
    makeJoke();
  }
};

export default newJoke;
