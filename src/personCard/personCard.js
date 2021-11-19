import dom from '../domCreator/dom';
import peopleArr from '../peopleObj/peopleObj';

function handleDelete(e) {
  // console.log(e.target.parentNode.childNodes[0].textContent);
  return peopleArr.removePerson(e.target.parentNode.childNodes[0].textContent);
}

export default function personCard(person) {
  const card = dom({
    text: person,
    children: [
      dom({ tag: 'button', text: 'X', events: [{ type: 'click', handler: handleDelete }] }),
    ],
  });
  return card;
}
