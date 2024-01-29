import React from "react";

import { Img, Text } from "components";

const C2PopUpDarkVersionContent = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col justify-start mb-[3px] w-[89%] md:w-full">
          <div className="flex flex-row gap-4 items-start justify-end md:ml-[0] ml-[22px] w-[71%] md:w-full">
            <Img
              className="h-6 mt-1 w-6"
              src="defaultNoData.png"
              alt="thumbsup"
            />
            <Img
              className="h-4 w-4"
              src="defaultNoData.png"
              alt="checkmark_One"
            />
          </div>
          <Text
            className="mr-2.5 mt-[3px] text-sm text-white-A700"
            size="txtBarlowMedium14"
          >
            {props?.creditcardtext}
          </Text>
        </div>
      </div>
    </>
  );
};

C2PopUpDarkVersionContent.defaultProps = { creditcardtext: "Credit Card" };

export default C2PopUpDarkVersionContent;
