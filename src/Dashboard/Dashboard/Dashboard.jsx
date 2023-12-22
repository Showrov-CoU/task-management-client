import {
  Button,
  Label,
  Modal,
  Select,
  TextInput,
  Textarea,
} from "flowbite-react";
import useAuth from "../../Hooks/useAuth";
import { FaPlus } from "react-icons/fa";
import { HiDotsVertical } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { useState } from "react";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";

import useAxios from "../../Hooks/useAxios";
import toast from "react-hot-toast";
import TaskSection from "../TaskSection";
import { useQuery } from "@tanstack/react-query";

const customTheme = {
  color: {
    primary:
      "rounded-2xl text-white bg-[#ff0000] hover:bg-[#960000] hover:text-slate-100",
  },
};

const Dashboard = () => {
  const { register, handleSubmit, reset } = useForm();
  const [startDate, setStartDate] = useState(new Date());
  const { user } = useAuth();
  const fetchWithAxios = useAxios();
  const [openModal, setOpenModal] = useState(false);
  function onCloseModal() {
    setOpenModal(false);
  }

  const { data: todoTaskList = [], refetch } = useQuery({
    queryKey: ["todoTaskList"],
    queryFn: async () => {
      const result = await fetchWithAxios.get("/todo");
      // console.log(result.data);
      return result.data;
    },
  });

  const handleTask = async (data) => {
    const inputDate = new Date(startDate);
    const day = String(inputDate.getDate()).padStart(2, "0");
    const month = String(inputDate.getMonth() + 1).padStart(2, "0");
    const year = inputDate.getFullYear();

    const newDate = `${day}-${month}-${year}`;
    data["date"] = newDate;
    // console.log(data);

    const res = await fetchWithAxios.post("/todo", data);
    console.log(res.data);
    if (res.data.insertedId) {
      refetch();
      toast.success("Create successfully");
      reset();
    } else {
      toast.error("Something is wrong..!!! try again");
    }
  };

  const deleteTask = async (id) => {
    const res = await fetchWithAxios.delete(`/todo/${id}`);
    if (res.data.deletedCount) {
      refetch();
      toast.success("Delete successfully");
    } else {
      toast.error("Something is wrong..!!! try again");
    }
  };

  return (
    <div className="px-[5%] mt-[60px] flex h-screen">
      <div className=" bg-slate-100 w-2/12 h-full">
        <div className="flex flex-col justify-center items-center space-y-2">
          <img
            src={user?.photoURL}
            alt=""
            className="size-28 border-[1px] border-[#ff0000] rounded-full"
          />
          <p className="text-sm">{user?.displayName}</p>
          <p className="text-sm">{user?.email}</p>
          <div className="h-[1px] w-full bg-slate-500"></div>
        </div>
        <div className="flex flex-col">
          <NavLink>Sign Up</NavLink>
          <NavLink>Sign Up</NavLink>
          <NavLink>Sign Up</NavLink>
          <NavLink>Sign Up</NavLink>
          <NavLink>Sign Up</NavLink>
        </div>
      </div>
      <div className="p-8 bg-slate-300  flex-1 h-full overflow-y-auto">
        <div className="mb-5 flex justify-between">
          <p className="text-2xl font-extrabold">Manage Task</p>
          <div className="flex justify-center items-center">
            <Button
              onClick={() => setOpenModal(true)}
              theme={customTheme}
              color="primary"
            >
              <FaPlus className="mr-2"></FaPlus> Add new task
            </Button>
            {/* modal */}
            <Modal show={openModal} size="md" onClose={onCloseModal} popup>
              <Modal.Header />
              <Modal.Body>
                <div className="space-y-6">
                  <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                    Create a new task to our platform
                  </h3>
                  <form onSubmit={handleSubmit(handleTask)}>
                    <div>
                      <div className="mb-2 block">
                        <Label htmlFor="title" value="Your task title" />
                      </div>
                      <TextInput
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
                          {...register("priority")}
                          id="countries"
                          required
                        >
                          <option>Low</option>
                          <option>Moderate</option>
                          <option>High</option>
                        </Select>
                      </div>
                      <div className="flex-1">
                        <div className="mb-2 block">
                          <Label htmlFor="date" value="Deadline" />
                        </div>
                        <DatePicker
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
                        {...register("desc")}
                        id="comment"
                        placeholder="Add some details..."
                        required
                        rows={4}
                      />
                    </div>
                    <div className="w-full mt-2">
                      <Button type="submit">
                        Add a task to your to-do list
                      </Button>
                    </div>
                  </form>
                </div>
              </Modal.Body>
            </Modal>
            <span>
              <HiDotsVertical size={32} fill="#ff0000"></HiDotsVertical>
            </span>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-10">
          <TaskSection
            todoTaskList={todoTaskList}
            deleteTask={deleteTask}
            refetch={refetch}
          ></TaskSection>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
