import { useSelector } from "react-redux";
import AddForm from "./AddForm";
import { useDispatch } from "react-redux";
import { deleteTodo, markAsDone } from "../features/todo/todoSlice";

export default function Todo() {
    const todos=useSelector((state) => state.todos);
    console.log(todos);

    const dispatch=useDispatch();
    const clickHandler=(id) => {
        console.log("Delete", id);
        dispatch(deleteTodo(id));
    }

    const markAsDoneHandler=(id) => {
        console.log("Mark as Done", id);
        dispatch(markAsDone(id));
    }

    return (
        <>
            <AddForm />
            <h2>Todo List App</h2>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id} style={{ textDecoration: todo.isDone ? "line-through" : "none" }}>
                        {todo.task}
                        <button onClick={()=>clickHandler(todo.id)}>Delete</button>
                        <button onClick={() => dispatch(markAsDone(todo.id))}>
                            {todo.isDone ? "Undo" : "Mark as Done"}
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
}