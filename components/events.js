import newJoke from './newJoke';

const events = () => {
  document
    .querySelector('#newJokeBtnDiv')
    .addEventListener('click', newJoke);
};

export default events;
