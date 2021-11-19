function cacheContainer() {
  const container = document.querySelector('#container');
  return container;
}

function cacheForm() {
  const parent = cacheContainer();
  return {
    form: parent.querySelector('#form'),
    input: parent.querySelector('#input'),
    peoplecontainer: parent.querySelector('#peoplecontainer'),
    counter: parent.querySelector('#counter'),
  };
}

const cached = cacheForm();
export default cached;
