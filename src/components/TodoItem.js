import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleCopmlete,DeleteTodo } from '../redux/TodoSlice';


const TodoItem = ({ id, title, completed }) => {
	const dispatch = useDispatch();
	const HandlComplete= () =>{ dispatch(toggleCopmlete ({ id:id , completed :!completed })) }
// delete todo
 const HandlDelete=()=>{dispatch(DeleteTodo({id:id}))}



	return (
		<li className={`list-group-item ${completed && 'list-group-item-success'}`}>
			<div className='d-flex justify-content-between'>
				<span className='d-flex align-items-center'>
					<input type='checkbox' className='mr-3' checked={completed} onChange={HandlComplete}></input>
					{title}
				</span>
				<button className='btn btn-danger' onClick={HandlDelete}>Delete</button>
			</div>
		</li>
	);
};

export default TodoItem;