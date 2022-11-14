const renderToDom = (div, htmlString) => {
  document.querySelector(div).innerHTML = htmlString;
};

export default renderToDom;
