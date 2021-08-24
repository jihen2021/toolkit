import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/TodoSlice';
import { Icon } from 'semantic-ui-react'


const AddTodoForm = () => {
	const [value, setValue] = useState('');

	const dispatch = useDispatch();
	const onSubmit = (event) => {
		event.preventDefault();
		dispatch(addTodo(
			{
				title: value,
			}
		))
	};

	return (
		<form onSubmit={onSubmit} className='form-inline mt-3 mb-3' >

			<input
				type='text'
				className='form-control mb-2 mr-sm-2'
				placeholder='Add todo...'
				value={value}
				onChange={(event) => setValue(event.target.value)}
			></input>

			<Icon.Group size='huge'>
				<Icon name='puzzle' />
				<Icon corner name='add circle' />
			</Icon.Group>
			{/* <button type='submit' className='btn btn-primary mb-2'>
				Submit
			</button> */}
		</form>
	);
};

export default AddTodoForm;