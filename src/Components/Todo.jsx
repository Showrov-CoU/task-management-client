import {
  Button,
  Label,
  Modal,
  Select,
  TextInput,
  Textarea,
} from "flowbite-react";
import PropTypes from "prop-types";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin2Line } from "react-icons/ri";
import { MdIncompleteCircle } from "react-icons/md";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { MdCreateNewFolder } from "react-icons/md";
import DatePicker from "react-datepicker";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useAxios from "../Hooks/useAxios";
import toast from "react-hot-toast";
import Aos from "aos";
import "aos/dist/aos.css";
import { Draggable } from "react-beautiful-dnd";

const Todo = ({ item, deleteTask, refetch, index, setDraggableId }) => {
  const fetchWithAxios = useAxios();
  const { register, handleSubmit, reset } = useForm();
  const [openModal, setOpenModal] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [id, setId] = useState("");

  function onCloseModal() {
    setOpenModal(false);
  }

  const handleTaskEdit = async (data) => {
    const inputDate = new Date(startDate);
    const day = String(inputDate.getDate()).padStart(2, "0");
    const month = String(inputDate.getMonth() + 1).padStart(2, "0");
    const year = inputDate.getFullYear();

    const newDate = `${day}-${month}-${year}`;
    data["date"] = newDate;
    // console.log(data);
    // console.log(id);

    const res = await fetchWithAxios.patch(`/task/${id}`, data);
    console.log(res.data);
    if (res.data.modifiedCount > 0) {
      refetch();
      toast.success("Update successfully");
      reset();
    } else {
      toast.error("Something is wrong..!!! try again");
    }
  };

  const handleDrag = async (status, id) => {
    // console.log(status, id);
    const result = await fetchWithAxios.patch(
      `/task?status=${status}&id=${id}`
    );
    // console.log(result.data);
    if (result.data.modifiedCount > 0) {
      refetch();
      toast.success(`${status} now`);
    } else {
      toast.error("Somethis is wrong!! try again");
    }
  };

  useEffect(() => {
    Aos.init();
    setDraggableId(item._id);
  });

  return (
    <Draggable draggableId={item._id} key={item._id} index={index}>
      {(provided) => (
        <div
          {...provided.dragHandleProps}
          {...provided.draggableProps}
          ref={provided.innerRef}
          className="py-2 cursor-pointer"
          // data-aos="zoom-in"
        >
          <div href="#" className="w-full bg-slate-50 p-4 rounded-lg">
            <div className="flex">
              <div className="w-11/12">
                <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {item.title}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  <span className="text-sm font-bold">Description: </span>
                  {item.desc}
                </p>

                <p className="text-sm font-normal text-gray-700">
                  <span className="text-sm font-bold">Deadline:</span>{" "}
                  {item.date}
                </p>

                <p className="text-sm font-normal text-gray-700">
                  <span className="text-sm font-bold">Priority:</span>{" "}
                  {item.priority}
                </p>
                <p className="text-sm font-normal text-gray-700">
                  <span className="text-sm font-bold">Status:</span>{" "}
                  {item.action}
                </p>
              </div>
              <div className="self-center">
                <div className="flex flex-col gap-2.5">
                  <button
                    className=""
                    onClick={() => {
                      setOpenModal(true);
                      setId(item._id);
                    }}
                  >
                    <CiEdit size={20} fill="green"></CiEdit>
                    {/* modal */}
                  </button>
                  <Modal
                    show={openModal}
                    size="md"
                    onClose={onCloseModal}
                    popup
                  >
                    <Modal.Header />
                    <Modal.Body>
                      <div className="space-y-6">
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                          Update Your Task
                        </h3>
                        <form onSubmit={handleSubmit(handleTaskEdit)}>
                          <div>
                            <div className="mb-2 block">
                              <Label htmlFor="title" value="Your task title" />
                            </div>
                            <TextInput
                              defaultValue={item.title}
                              {...register("title")}
                              id="title"
                              placeholder="Task title"
                              required
                            />
                          </div>
                          <div className="flex items-center gap-5">
                            <div className="flex-1">
                              <div className="mb-2 block">
                                <Label
                                  htmlFor="priorities"
                                  value="Select your priority"
                                />
                              </div>
                              <Select
                                defaultValue={item.priority}
                                {...register("priority")}
                                id="countries"
                                required
                              >
                                <option value="Low">Low</option>
                                <option value="Moderate">Moderate</option>
                                <option value="High">High</option>
                              </Select>
                            </div>
                            <div className="flex-1">
                              <div className="mb-2 block">
                                <Label htmlFor="date" value="Deadline" />
                              </div>
                              <DatePicker
                                defaultValue={item.date}
                                className="w-full border border-gray-300 text-gray-900 rounded-lg  p-2.5 text-center text-sm font-medium focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500  bg-gray-100"
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                              />
                              {/* <Datepicker type="date" title="Flowbite Datepicker" /> */}
                            </div>
                          </div>
                          <div>
                            <div className="mb-2 block">
                              <Label htmlFor="desc" value="Task description" />
                            </div>
                            <Textarea
                              defaultValue={item.desc}
                              {...register("desc")}
                              id="comment"
                              placeholder="Add some details..."
                              required
                              rows={4}
                            />
                          </div>
                          <div className="w-full mt-2">
                            <Button type="submit">
                              Update your to-do list
                            </Button>
                          </div>
                        </form>
                      </div>
                    </Modal.Body>
                  </Modal>
                  <button onClick={() => deleteTask(item._id)}>
                    <RiDeleteBin2Line size={20} fill="red"></RiDeleteBin2Line>
                  </button>
                  {item.action !== "to-do" && (
                    <button onClick={() => handleDrag("to-do", item._id)}>
                      <MdCreateNewFolder
                        size={20}
                        fill="orange"
                      ></MdCreateNewFolder>
                    </button>
                  )}
                  {item.action !== "ongoing" && (
                    <button onClick={() => handleDrag("ongoing", item._id)}>
                      <MdIncompleteCircle
                        size={20}
                        fill="fuchsia"
                      ></MdIncompleteCircle>
                    </button>
                  )}
                  {item.action !== "complete" && (
                    <button onClick={() => handleDrag("complete", item._id)}>
                      <IoCheckmarkDoneCircleSharp
                        size={20}
                        fill="lime"
                      ></IoCheckmarkDoneCircleSharp>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
};

Todo.propTypes = {
  item: PropTypes.object.isRequired,
  deleteTask: PropTypes.func,
  refetch: PropTypes.func,
  index: PropTypes.number,
  setDraggableId: PropTypes.func,
};

export default Todo;
