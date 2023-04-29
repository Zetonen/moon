import { refs } from './refs';

export function renderCard({ taskName, taskText, id }) {
  const markup = `<li class="task-list-item">
      <button class="task-list-item-btn" data-id="${id}">Удалить</button>
      <h3>${taskName}</h3>
      <p>${taskText}</p>
  </li>`;

  refs.list.insertAdjacentHTML('beforeend', markup);
}
