import {
  Button,
  Datepicker,
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

const customTheme = {
  color: {
    primary:
      "rounded-2xl text-white bg-[#ff0000] hover:bg-[#960000] hover:text-slate-100",
  },
};
const Dashboard = () => {
  const { user } = useAuth();
  const [openModal, setOpenModal] = useState(false);
  function onCloseModal() {
    setOpenModal(false);
  }

  return (
    <div className="px-[5%] mt-[60px] flex">
      <div className=" bg-slate-100 w-2/12 h-full">
        <div className="flex flex-col justify-center items-center space-y-2">
          <img
            src={user?.photoURL}
            alt=""
            className="size-28 border-[1px] border-[#ff0000] rounded-full"
          />
          <p className="text-sm">{user?.displayName}</p>
          <p className="text-sm">{user?.email}</p>
          <div className="h-[2px] w-full bg-slate-500"></div>
        </div>
        <div className="flex flex-col">
          <NavLink>Sign Up</NavLink>
          <NavLink>Sign Up</NavLink>
          <NavLink>Sign Up</NavLink>
          <NavLink>Sign Up</NavLink>
          <NavLink>Sign Up</NavLink>
        </div>
      </div>
      <div className=" bg-slate-300  flex-1 h-full">
        <div className="p-8 flex justify-between">
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
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="title" value="Your task title" />
                    </div>
                    <TextInput id="title" placeholder="" required />
                  </div>
                  <div className="flex items-center gap-5">
                    <div className="flex-1">
                      <div className="mb-2 block">
                        <Label
                          htmlFor="countries"
                          value="Select your country"
                        />
                      </div>
                      <Select id="countries" required>
                        <option>Low</option>
                        <option>Moderate</option>
                        <option>High</option>
                      </Select>
                    </div>
                    <div className="flex-1">
                      <div className="mb-2 block">
                        <Label htmlFor="countries" value="Deadline" />
                      </div>
                      <Datepicker type="date" title="Flowbite Datepicker" />
                    </div>
                  </div>
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="desc" value="Task description" />
                    </div>
                    <Textarea
                      id="comment"
                      placeholder="Leave a comment..."
                      required
                      rows={4}
                    />
                  </div>

                  <div className="w-full">
                    <Button>Add a task to your to-do list</Button>
                  </div>
                </div>
              </Modal.Body>
            </Modal>
            <span>
              <HiDotsVertical size={32} fill="#ff0000"></HiDotsVertical>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
