import React from 'react';

export default props => {
  return (
    <ul class="nav nav-pills">
      <li role="presentation" class="active">
        <a href="#">Home</a>
      </li>
      <li role="presentation">
        <a href="#/tarefas">Tarefas</a>
      </li>
      <li role="presentation">
        <a href="#/about">About</a>
      </li>
      <li role="presentation" class="dropdown">
        <a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
          Dropdown <span class="caret"></span>
        </a>
        <ul class="dropdown-menu">
        </ul>
      </li>
    </ul>
  )
}
