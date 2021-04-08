import React from "react";
import { render, screen, fireEvent } from '@testing-library/react';
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./redux/reducers";
import { v4 as uuidv4 } from 'uuid';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

let columnTasksDemoData = [
  {
    id: uuidv4(),
    title: "Todo",
    order: 1,
    tasks: [
      {
          id: uuidv4(),
          labelColor: 'green',
          description: 'This is a Todo list with items that can be marked off',
          order: 1,
      },
      {
          id: uuidv4(),
          labelColor: 'yellow',
          description: 'You can categorize each item with a Color (Red, Yellow, Green)',
          order: 2,
      },
      {
          id: uuidv4(),
          labelColor: 'red',
          description: 'Hover on a item to edit',
          order: 3
      },
    ],  
  },
  {
    id: uuidv4(),
    title: "In progress",
    order: 2,
    tasks: [
      {
          id: uuidv4(),
          labelColor: 'green',
          description: 'You can click and drag items up and down the list',
          order: 1,
      },
      {
          id: uuidv4(),
          labelColor: 'yellow',
          description: 'As well drag items from one column to the other',
          order: 2,
      }
    ],  
  },
  {
    id: uuidv4(),
    title: "Done",
    order: 3,
    tasks: [
      {
          id: uuidv4(),
          labelColor: 'red',
          description: 'As well rename the Columns',
          order: 1,
      }
    ]  
  }
];

const initState = {
  current: null,
  list: columnTasksDemoData,
  isEditionMode: false,
};

const renderWithState = (
  ui,
  { initialState, ...renderOptions } = {}
) => {
  const store = createStore(reducer, initialState);
  const Wrapper = ({ children }) => (
    <DndProvider backend={HTML5Backend}>
      <Provider store={store}>
        {children} 
      </Provider>
    </DndProvider>
  );

  return render(ui, { wrapper: Wrapper, ...renderOptions });
};

export {
  screen,
  renderWithState,
  initState,
  fireEvent
};