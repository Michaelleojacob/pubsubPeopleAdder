import cached from '../queryObj/queryObj';
import personCard from '../personCard/personCard';
import removeAllChildNodes from '../removeChildNodes/removeChildNodes';

export default function renderCards(arr) {
  const { peoplecontainer } = cached;
  removeAllChildNodes(peoplecontainer);
  return arr.map((x) => peoplecontainer.appendChild(personCard(x)));
}
