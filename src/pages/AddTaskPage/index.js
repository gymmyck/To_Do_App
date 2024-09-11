import "react-datepicker/dist/react-datepicker.css";
import ToDoForm from "../../components/TodoForm";
import { useTodo } from "../../context/todoContext";

const AddTask = () => {
    const { addTodo } = useTodo();

    return (
        <ToDoForm handleSubmitHook={addTodo}></ToDoForm>
    )
}


export default AddTask;