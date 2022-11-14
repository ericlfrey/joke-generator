import renderToDom from '../utils/renderToDom';
import jokeBtn from './jokeBtn';

const initHTML = () => {
  const domStr = `
  <div id="jokeBtnDiv">
    ${jokeBtn}
  </div>
  <div id="newJokeBtnDiv"></div>
  <div id="jokeSetup"></div>
  <div id="jokePunchline"></div>
`;
  renderToDom('#app', domStr);
};

export default initHTML;
