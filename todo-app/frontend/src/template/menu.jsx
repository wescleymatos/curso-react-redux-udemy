import React from 'react';

export default props => {
  return (
    <ul className="nav nav-pills">
      <li role="presentation" className="active">
        <a href="#">Home</a>
      </li>
      <li role="presentation">
        <a href="#/tarefas">Tarefas</a>
      </li>
      <li role="presentation">
        <a href="#/about">About</a>
      </li>
      <li role="presentation" className="dropdown">
        <a className="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
          Dropdown <span className="caret"></span>
        </a>
        <ul className="dropdown-menu">
        </ul>
      </li>
    </ul>
  )
}
