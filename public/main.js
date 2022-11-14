import 'bootstrap'; // import bootstrap elements and js
import events from '../components/events';
import initHTML from '../components/initHTML';
import makeJoke from '../components/makeJoke';
import '../styles/main.scss';

const init = () => {
  initHTML();
  makeJoke();
  events();
};

init();
