import { renderWithState, initState, screen } from './test-utils';
import '@testing-library/jest-dom/extend-expect';
import App from './App';
import { v4 as uuidv4 } from 'uuid';

describe('App component', () => {
  const columnTasksDemoData = [
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
  
  const getTestPropsApp = ()=> {
    const baseTestProps = {
      columnTasks: [...columnTasksDemoData],
      onAddTask: jest.fn(() => []),
      onDeleteTask: jest.fn(() => []),
      onEditCard: jest.fn(() => []),
      currentTask: null,
      isEditionMode: false,
      onCancelEdit: jest.fn(() => []),
      onSaveTask: jest.fn(() => []),
      onDragItemTask: jest.fn(() => []),
      onEditColumnName: jest.fn(() => []),
    }
    return {...baseTestProps};
  }

  test('Should render the App component.', () => {
    renderWithState(
      <App {...getTestPropsApp()} />,
      initState
    );
    expect(screen.getByTestId('App')).toBeInTheDocument();
  });

  test('Should call onLoad one time.', () => {
    renderWithState(
      <App 
        {...getTestPropsApp()}
      />,
      initState
    );
    //expect(onLoadMock.mock.calls.length).toBe(1);
  });
  
  

  test('Should have 3 ColumnCards components.', () => {
    renderWithState(
      <App {...getTestPropsApp()}/>,
      initState
    );
    expect(screen.getAllByTestId('ColumnCards').length).toBe(3);
  });

  
  
});