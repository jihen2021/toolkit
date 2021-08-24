
import React from 'react';

import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';
import TotalCompleteItem from './components/TotalCompleteItem';


const App = () => {
	return (
		<div className='container bg-white p-4 mt-5'>
			<h1 style={{color:'red', }}>My Todo List</h1>
			<AddTodoForm />
			<TodoList />
			<TotalCompleteItem />
		</div>
	);
};

export default App;

