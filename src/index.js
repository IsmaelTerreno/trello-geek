import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/AppContainer';
import reportWebVitals from './reportWebVitals';
import Provider from 'react-redux/es/components/Provider';
import { MainStore } from './redux/store/configureStore';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const store = MainStore();

ReactDOM.render(
  <DndProvider backend={HTML5Backend}>
    <Provider store={store}>
        <App /> 
    </Provider>
  </DndProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
