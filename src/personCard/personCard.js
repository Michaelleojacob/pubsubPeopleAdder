import dom from '../domCreator/dom';
import peopleArr from '../peopleObj/peopleObj';
import ps from '../pubsub/pubsub';

function handleDelete(e) {
  // console.log(e.target.parentNode.childNodes[0].textContent);
  peopleArr.removePerson(e.target.parentNode.childNodes[0].textContent);
  return ps.publish('updatedArr', peopleArr.getCurrPeopleArr());
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
