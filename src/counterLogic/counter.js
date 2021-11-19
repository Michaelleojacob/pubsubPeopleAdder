import peopleArr from '../peopleObj/peopleObj';
import cached from '../queryObj/queryObj';

export default function updateCounter() {
  const { counter } = cached;
  counter.textContent = peopleArr.getArrLength();
}
