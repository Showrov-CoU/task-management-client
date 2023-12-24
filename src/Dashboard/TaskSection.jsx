import Todo from "../Components/Todo";
import PropTypes from "prop-types";
import { MdCreateNewFolder } from "react-icons/md";
import { MdIncompleteCircle } from "react-icons/md";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import { DragDropContext, Droppable } from "react-beautiful-dnd";

const TaskSection = ({
  deleteTask,
  refetch,
  todo,
  ongoing,
  complete,
  setTodo,
  setComplete,
  setOngoing,
}) => {
  const [draggableId, setDraggableId] = useState("");
  useEffect(() => {
    Aos.init();
  });

  const handleDragEnd = (result) => {
    // console.log(result);
    const { source, destination, type } = result;
    if (!destination) return;
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return;

    const updatedTodo = [...todo];
    const updatedComplete = [...complete];
    const updatedOngoing = [...ongoing];
    const draggedTask = updatedTodo.find((task) => task._id === draggableId);

    if (
      source.droppableId === "todoList" &&
      destination.droppableId === "completeList"
    ) {
      // Move task from todo to complete
      updatedTodo.splice(source.index, 1);
      updatedComplete.splice(destination.index, 0, draggedTask);
    } else if (
      source.droppableId === "completeList" &&
      destination.droppableId === "ongoingList"
    ) {
      // Move task from complete to ongoing
      updatedComplete.splice(source.index, 1);
      updatedOngoing.splice(destination.index, 0, draggedTask);
    } else if (
      source.droppableId === "ongoingList" &&
      destination.droppableId === "completeList"
    ) {
      // Move task from ongoing to complete (if needed)
      updatedOngoing.splice(source.index, 1);
      updatedComplete.splice(destination.index, 0, draggedTask);
    }

    // Update the state variables with the new task order
    setTodo(updatedTodo);
    setComplete(updatedComplete);
    setOngoing(updatedOngoing);
    // if(type === 'group'){

    // }
  };
  return (
    <>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="todoList" type="group">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              data-aos="zoom-in"
            >
              <h1 className="flex justify-center items-center gap-2 my-2 py-2 rounded-xl text-center text-2xl font-extrabold bg-cyan-600 text-gray-200">
                <span>
                  <MdCreateNewFolder fill="orange"></MdCreateNewFolder>
                </span>
                <span>To Do</span>{" "}
                <span className="text-sm font-semibold bg-[#ff0000] h-5 w-5 rounded-full">
                  {todo?.length}
                </span>
              </h1>

              <div className="py-2">
                {/* {todo.map((item, index) => (
                  // <Draggable
                  //   draggableId={item._id}
                  //   key={item._id}
                  //   index={index}
                  // >
                  //   {(provided) => (
                  //     <Todo
                  //       {...provided.dragHandleProps}
                  //       {...provided.draggableProps}
                  //       ref={provided.innerRef}
                  //       item={item}
                  //       deleteTask={deleteTask}
                  //       refetch={refetch}
                  //     ></Todo>
                  //   )}
                  // </Draggable>

                ))} */}
                {todo.map((item, index) => (
                  <Todo
                    setDraggableId={setDraggableId}
                    key={item._id}
                    index={index}
                    item={item}
                    deleteTask={deleteTask}
                    refetch={refetch}
                  ></Todo>
                ))}
              </div>
            </div>
          )}
        </Droppable>

        <Droppable droppableId="ongoingList" type="group">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              data-aos="zoom-in"
            >
              <h1 className="flex justify-center items-center gap-2 my-2 py-2 rounded-xl text-gray-200 text-center text-2xl font-extrabold bg-teal-700">
                <span>
                  <MdIncompleteCircle fill="fuchsia"></MdIncompleteCircle>
                </span>
                <span>Ongoing</span>{" "}
                <span className="text-sm font-semibold bg-[#ff0000] h-5 w-5 rounded-full">
                  {ongoing?.length}
                </span>
              </h1>

              <div className="py-2">
                {/* {ongoing.map((item, index) => (
                  <Draggable
                    draggableId={item._id}
                    key={item._id}
                    index={index}
                  >
                    {(provided) => (
                      <Todo
                        {...provided.dragHandleProps}
                        {...provided.draggableProps}
                        ref={provided.innerRef}
                        item={item}
                        deleteTask={deleteTask}
                        refetch={refetch}
                      ></Todo>
                    )}
                  </Draggable>
                ))} */}
                {ongoing.map((item, index) => (
                  <Todo
                    setDraggableId={setDraggableId}
                    key={item._id}
                    index={index}
                    item={item}
                    deleteTask={deleteTask}
                    refetch={refetch}
                  ></Todo>
                ))}
              </div>
            </div>
          )}
        </Droppable>

        <Droppable droppableId="completeList" type="group">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              data-aos="zoom-in"
            >
              <h1 className="flex justify-center items-center gap-2 my-2 py-2 rounded-xl text-gray-200 text-center text-2xl font-extrabold bg-green-700">
                <span>
                  <IoCheckmarkDoneCircleSharp fill="lime"></IoCheckmarkDoneCircleSharp>
                </span>
                <span>Complete</span>{" "}
                <span className="text-sm font-semibold bg-[#ff0000] h-5 w-5 rounded-full">
                  {complete?.length}
                </span>
              </h1>

              <div className="py-2">
                {/* {complete.map((item, index) => (
                  <Draggable
                    draggableId={item._id}
                    key={item._id}
                    index={index}
                  >
                    {(provided) => (
                      <Todo
                        {...provided.dragHandleProps}
                        {...provided.draggableProps}
                        ref={provided.innerRef}
                        item={item}
                        deleteTask={deleteTask}
                        refetch={refetch}
                      ></Todo>
                    )}
                  </Draggable>
                ))} */}
                {complete.map((item, index) => (
                  <Todo
                    setDraggableId={setDraggableId}
                    key={item._id}
                    index={index}
                    item={item}
                    deleteTask={deleteTask}
                    refetch={refetch}
                  ></Todo>
                ))}
              </div>
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
};

TaskSection.propTypes = {
  todo: PropTypes.array,
  ongoing: PropTypes.array,
  complete: PropTypes.array,
  deleteTask: PropTypes.func,

  refetch: PropTypes.func,
  setTodo: PropTypes.func,
  setOngoing: PropTypes.func,
  setComplete: PropTypes.func,
};

export default TaskSection;
