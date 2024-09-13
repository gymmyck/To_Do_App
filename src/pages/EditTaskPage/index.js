import "react-datepicker/dist/react-datepicker.css";
import ToDoForm from "../../components/TodoForm";
import { useParams } from "react-router-dom";
import { useTodo } from "../../context/todoContext";

const EditTask = () => {
    const { id } = useParams();
    const { getTodo, editTodo } = useTodo();
    const todo = getTodo(id);

    const handleSubmit = (task) => {
        editTodo(id, task);
    }

    return (
        <ToDoForm title={'Edit task'} todo={todo} handleSubmitHook={handleSubmit}></ToDoForm>
    )
}

export default EditTask;