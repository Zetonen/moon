import localStorageApi from './localStorage';

export function onSubmitForm(e) {
  e.preventDefault();
  const formValues = {};

  new FormData(e.currentTarget).forEach((value, name) => {
    formValues[name] = value;
  });

    localStorageApi.save(formValues);
    
    e.currentTarget.reset();
}
