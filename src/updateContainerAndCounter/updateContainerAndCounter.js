import renderCards from '../renderCards/renderCards';
import updateCounter from '../counterLogic/counter';

export default function renderPeopleAndCounter(arr) {
  renderCards(arr);
  updateCounter();
}
