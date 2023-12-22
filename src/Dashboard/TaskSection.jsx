import Todo from "../Components/Todo";
import PropTypes from "prop-types";

const TaskSection = ({ todoTaskList, deleteTask, refetch }) => {
  return (
    <>
      <div className="">
        <h1 className="my-2 text-center text-2xl font-extrabold text-cyan-600">
          To Do ({todoTaskList?.length})
        </h1>
        <div className="h-[2px] w-full bg-[#ff0000]"></div>
        <div className="py-2">
          {todoTaskList.map((item) => (
            <Todo
              key={item._id}
              item={item}
              deleteTask={deleteTask}
              refetch={refetch}
            ></Todo>
          ))}
        </div>
      </div>
      <div className="">
        <h1 className="my-2 text-center text-2xl font-extrabold text-teal-700">
          Ongoing
        </h1>
        <div className="h-[2px] w-full bg-[#ff0000]"></div>
      </div>
      <div className="">
        <h1 className="my-2 text-center text-2xl font-extrabold text-green-700">
          Completed
        </h1>
        <div className="h-[2px] w-full bg-[#ff0000]"></div>
      </div>
    </>
  );
};

TaskSection.propTypes = {
  todoTaskList: PropTypes.array,
  deleteTask: PropTypes.func,
  refetch: PropTypes.func,
};

export default TaskSection;
