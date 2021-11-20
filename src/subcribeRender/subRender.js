import ps from '../pubsub/pubsub';
import renderPeopleAndCounter from '../updateContainerAndCounter/updateContainerAndCounter';

export default function subRender() {
  return ps.subscribe('updatedArr', renderPeopleAndCounter);
}
