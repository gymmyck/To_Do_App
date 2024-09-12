import "react-datepicker/dist/react-datepicker.css";
import ToDoForm from "../../components/TodoForm";
import { useTodo } from "../../context/todoContext";

const AddTask = () => {
    const { addTodo } = useTodo();

    return (
        <ToDoForm title={'Add new task'} handleSubmitHook={addTodo}></ToDoForm>
    )
}


export default AddTask;