import localStorageApi from './localStorage';
import { refs } from './refs';

export function renderCards() {
  const cards = localStorageApi.load();
    
    if (!cards) {
        return;
    }
    
  const markup = cards
    .map(({ taskName, taskText }) => {
      return `<li class="task-list-item">
      <button class="task-list-item-btn">Удалить</button>
      <h3>${taskName}</h3>
      <p>${taskText}</p>
  </li>`;
    })
    .join('');

  refs.list.insertAdjacentHTML('beforeend', markup);
};
