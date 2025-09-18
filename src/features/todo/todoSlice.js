//reducers
import { createSlice , nanoid} from '@reduxjs/toolkit'

const initialState = {
    todos: [{id: "abc", task: "Learn Redux", isDone: false}],
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        //Reducer 1
        addTodo: (state, action) => {
            const newTodo = {
                id: nanoid(),
                task: action.payload,
                isDone: false
            };
            state.todos.push(newTodo); // Redux Toolkit allows direct mutation
        },
        //Reducer 2
        deleteTodo: (state, action) => {
            state.todos=state.todos.filter((todo) => todo.id !== action.payload);
        },
        //Reducer 3
        markAsDone: (state, action) => {
            state.todos = state.todos.map((todo) =>
                todo.id === action.payload
                    ? { ...todo, isDone: !todo.isDone }
                    : todo
            );
        }

    },
});

export const { addTodo, deleteTodo, markAsDone } = todoSlice.actions;
export default todoSlice.reducer;