import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import "./todoList.scss";
import { Todo } from '../../components/todo/todo.jsx'



const TodoList = ({ list, setList }) => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');



    const onSubmit = (e) => {
        e.preventDefault();

        setList({
            title: title,
            description: description,
        });
    }

    const onTitleInputChange = (e) => {
        setTitle(e.target.value)
    }

    const onDescriptionInputChange = (e) => {
        setDescription(e.target.value)
    }



    return (
        <div className='container'>
            <ul>
                {list.map((elem) => <Todo header={elem.title} description={elem.description} key={elem.title + elem.description} />)}
            </ul>

            <form action="">
                <input name='title' placeholder='title' onChange={onTitleInputChange} />
                <input name='description' placeholder='description' onChange={onDescriptionInputChange} />
                <button onClick={onSubmit}>Add</button>
            </form>


        </div>

    )
}


const mapStateToProps = (state) => {
    return {
        list: state.list,
    };
}


const mapDispatchToProps = (dispatch) => {
    return {
        setList: (todo) => {
            dispatch({
                type: 'ADD',
                payload: todo
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)