import renderToDom from '../utils/renderToDom';
import jokeBtn from './jokeBtn';
import logo from '../public/images/logo.svg';

const initHTML = () => {
  const domStr = `
  <div id="jokeBtnDiv">
    ${jokeBtn}
  </div>
  <div id="newJokeBtnDiv"></div>
  <div id="jokeSetup"></div>
  <div id="jokePunchline"></div>
`;
  const footerStr = `
  <img src=${logo} alt="" class="logo">
    <p>2022</p>`;
  renderToDom('#app', domStr);
  renderToDom('#footer', footerStr);
};

export default initHTML;
