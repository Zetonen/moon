const LOCAL__KEY = 'notes';

const load = () => {
  try {
    const serializedState = localStorage.getItem(LOCAL__KEY);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};
const save = value => {
  try {
    const arrFormValues = JSON.parse(localStorage.getItem(LOCAL__KEY)) || [];
    arrFormValues.push(value);
    const serializedState = JSON.stringify(arrFormValues);
    localStorage.setItem(LOCAL__KEY, serializedState);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
};

export default {
  save,
  load,
};
