import localStorageApi from './localStorage';
import { renderCard } from './renderCard';

export function onSubmitForm(e) {
  e.preventDefault();
  const formValues = {
    id: Date.now(),
  };

  new FormData(e.currentTarget).forEach((value, name) => {
    formValues[name] = value;
  });

  localStorageApi.save(formValues);

  renderCard(formValues);
  e.currentTarget.reset();
}
