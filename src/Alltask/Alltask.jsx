import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../Hooks/useAxios";
import { Button, Modal } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Aos from "aos";
import "aos/dist/aos.css";

const customTheme = {
  color: {
    primary: "text-white bg-[#ff0000] hover:bg-[#960000] hover:text-slate-100",
    black: "text-white bg-[#000] hover:bg-[#ff0000] hover:text-slate-100",
  },
};

const Alltask = () => {
  const [openModal, setOpenModal] = useState(false);
  const [id, setId] = useState("");
  const { user } = useAuth();
  const fetchWithAxios = useAxios();
  const { data: AllTaskList = [], refetch } = useQuery({
    queryKey: ["AllTaskList"],
    queryFn: async () => {
      const result = await fetchWithAxios.get("/task");
      return result.data;
    },
  });

  useEffect(() => {
    Aos.init();
  });

  const handleDelete = async () => {
    // console.log(id);
    const res = await fetchWithAxios.delete(`/task/${id}`);
    if (res.data.deletedCount) {
      refetch();
      toast.success("Delete successfully");
    } else {
      toast.error("Something is wrong..!!! try again");
    }
  };
  return (
    <div className="md:px-[5%] mt-[60px] flex h-screen">
      <div className=" bg-slate-100 3-3/12 md:w-2/12 h-full">
        <div className="flex flex-col justify-center items-center mt-2 space-y-1">
          <img
            src={user?.photoURL}
            alt=""
            className="size-28 border-[1px] border-[#ff0000] rounded-full"
          />
          <p className="text-sm">{user?.displayName}</p>
          <p className="text-sm">{user?.email}</p>
          <div className="h-[1px] w-[90%] bg-slate-500"></div>
        </div>
        <div className="flex flex-col gap-2 mt-7">
          <Button theme={customTheme} color="black">
            <Link to="/dashboard">Dashboard</Link>
          </Button>
          <Button theme={customTheme} color="black">
            <Link to="/">Home</Link>
          </Button>
          <Button theme={customTheme} color="black">
            <Link to="/alltask">All Task</Link>
          </Button>
          <Button theme={customTheme} color="black">
            <Link to="/login">Sign In</Link>
          </Button>
          <Button theme={customTheme} color="black">
            <Link to="/register">Sign Up</Link>
          </Button>
        </div>
      </div>
      <div className="p-8 bg-slate-300  flex-1 h-full overflow-y-auto">
        <h1
          className="flex justify-center items-center gap-2 my-2 py-2 rounded-xl text-gray-200 text-center text-2xl font-extrabold bg-green-700"
          data-aos="zoom-in"
        >
          <span></span>
          <span>All Task</span>{" "}
          <span className="text-sm font-semibold bg-[#ff0000] h-5 w-5 rounded-full">
            {AllTaskList?.length}
          </span>
        </h1>
        <div className="grid grid-cols-1" data-aos="zoom-in">
          {AllTaskList.map((item) => (
            <div key={item._id} className="py-2 cursor-pointer">
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
                  <div>
                    <Button
                      onClick={() => {
                        setId(item._id);
                        setOpenModal(true);
                      }}
                      theme={customTheme}
                      color="primary"
                    >
                      Delete
                    </Button>
                    <Modal
                      item={item}
                      show={openModal}
                      size="md"
                      onClose={() => setOpenModal(false)}
                      popup
                    >
                      <Modal.Header />
                      <Modal.Body>
                        <div className="text-center">
                          <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                          <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                            Are you sure you want to delete this product?
                          </h3>
                          <div className="flex justify-center gap-4">
                            <Button
                              color="failure"
                              onClick={() => {
                                handleDelete();
                                setOpenModal(false);
                              }}
                            >
                              {"Yes, I'm sure"}
                            </Button>
                            <Button
                              color="gray"
                              onClick={() => {
                                setOpenModal(false);
                              }}
                            >
                              No, cancel
                            </Button>
                          </div>
                        </div>
                      </Modal.Body>
                    </Modal>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* <TaskSection
            todoTaskList={todoTaskList}
            deleteTask={deleteTask}
            refetch={refetch}
            todo={todo}
            ongoing={ongoing}
            complete={complete}
          ></TaskSection> */}
        </div>
      </div>
    </div>
  );
};

export default Alltask;
