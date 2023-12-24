import { Button, Card, Modal } from "flowbite-react";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import icon from "../assets/icons8-right.gif";
import Aos from "aos";
import "aos/dist/aos.css";

const customTheme = {
  color: {
    primary: "text-white bg-[#ff0000] hover:bg-[#960000] hover:text-slate-100",
  },
};
const BenefitCard = ({ data }) => {
  const [openModal, setOpenModal] = useState(false);
  useEffect(() => {
    Aos.init();
  });
  return (
    <div data-aos="zoom-in">
      <Card className="md:max-w-68 m-0 p-0">
        <div className="flex flex-col items-center pb-10">
          <img src="" alt="" />
          <img alt="Bonnie image" src={data.gif} className="mb-3 size-20" />
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            {data.type}
          </h5>

          <div className="mt-4 flex space-x-3 lg:mt-6">
            <Button
              theme={customTheme}
              color="primary"
              onClick={() => setOpenModal(true)}
            >
              See more
            </Button>
            {/* Modal */}
            <Modal show={openModal} onClose={() => setOpenModal(false)}>
              <Modal.Header>{data.type}</Modal.Header>
              <Modal.Body>
                <div className="space-y-6">
                  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    {data.benefits.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 mb-2">
                        <img src={icon} alt="" className="size-7" />
                        <p>{item}</p>
                      </div>
                    ))}
                  </p>
                </div>
              </Modal.Body>
              <Modal.Footer>
                {/* <Button onClick={() => setOpenModal(false)}>I accept</Button> */}
                <Button
                  color="gray"
                  className="text-[#ff0000]"
                  onClick={() => setOpenModal(false)}
                >
                  Decline
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </Card>
    </div>
  );
};

BenefitCard.propTypes = {
  data: PropTypes.object.isRequired,
};

export default BenefitCard;
