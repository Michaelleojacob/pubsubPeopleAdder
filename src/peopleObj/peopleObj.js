function peopleObj() {
  const peopleArr = [];

  const getCurrPeopleArr = () => peopleArr;

  const logPeopleArr = () => console.log(peopleArr);

  const getArrLength = () => peopleArr.length;

  const addPerson = (person) => peopleArr.push(person);

  const removePerson = (person) =>
    peopleArr.indexOf(person) !== -1 && peopleArr.splice(peopleArr.indexOf(person), 1);
  // peopleArr.splice(peopleArr.indexOf(person), 1);

  return { getCurrPeopleArr, logPeopleArr, getArrLength, addPerson, removePerson };
}

const peopleArr = peopleObj();

export default peopleArr;
