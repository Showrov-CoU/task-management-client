import { Button, Card } from "flowbite-react";
import PropTypes from "prop-types";
const customTheme = {
  color: {
    primary: "text-white bg-[#ff0000] hover:bg-[#960000] hover:text-slate-100",
  },
};
const BenefitCard = ({ data }) => {
  return (
    <div>
      <Card className="max-w-68 m-0 p-0">
        <div className="flex flex-col items-center pb-10">
          <img src="" alt="" />
          <img alt="Bonnie image" src={data.gif} className="mb-3 size-20" />
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            {data.type}
          </h5>

          <div className="mt-4 flex space-x-3 lg:mt-6">
            <Button theme={customTheme} color="primary">
              See more
            </Button>
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
