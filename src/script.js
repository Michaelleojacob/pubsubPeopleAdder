import './style.css';
import preventSubmit from './forminput/preventSubmit';
import getFormInput from './forminput/forminput';
import peopleArr from './peopleObj/peopleObj';
import renderPeopleAndCounter from './updateContainerAndCounter/updateContainerAndCounter';

preventSubmit();
getFormInput();

peopleArr.addPerson('mike');
peopleArr.addPerson('sam');
peopleArr.addPerson('anya');

renderPeopleAndCounter(peopleArr.getCurrPeopleArr());

//* on page load
// if array is not empty, we want to render array

//* add person
// people counter should update
// people holder thing should update

//* delete person
// people counter should update
// people holder thing should update
