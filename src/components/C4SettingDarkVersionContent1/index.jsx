import React from "react";

import { Img, Line, Text } from "components";

const C4SettingDarkVersionContent1 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-2 items-start justify-start w-[79%]">
          <Img
            className="h-4 mt-0.5 w-4"
            src="defaultNoData.png"
            alt="iconlinediscoun_One"
          />
          <div className="flex flex-col gap-1 items-start justify-start w-auto">
            <Text
              className="text-cyan-700 text-sm w-auto"
              size="txtBarlowMedium14Cyan700"
            >
              {props?.titletext}
            </Text>
            <Text
              className="text-blue_gray-200 text-xs w-auto"
              size="txtBarlowRegular12"
            >
              {props?.descriptiontext}
            </Text>
          </div>
        </div>
        <Line className="bg-cyan-700 h-[39px] rounded-sm w-1" />
      </div>
    </>
  );
};

C4SettingDarkVersionContent1.defaultProps = {
  titletext: "Products Management",
  descriptiontext: "Manage your product, pricing, etc",
};

export default C4SettingDarkVersionContent1;
