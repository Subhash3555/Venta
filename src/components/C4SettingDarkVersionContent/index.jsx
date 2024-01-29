import React from "react";

import { Img, Text } from "components";

const C4SettingDarkVersionContent = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-2 items-start justify-start w-[73%]">
          <Img
            className="h-4 mt-0.5 w-4"
            alt="iconlineapperea"
            src={props?.imageicon}
          />
          <div className="flex flex-col gap-1 items-start justify-start w-auto">
            <Text
              className="text-sm text-white-A700 w-auto"
              size="txtBarlowMedium14"
            >
              {props?.textappereance}
            </Text>
            <Text
              className="text-blue_gray-200 text-xs w-auto"
              size="txtBarlowRegular12"
            >
              {props?.textdarkandlightmode}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

C4SettingDarkVersionContent.defaultProps = {
  imageicon: "images/img_iconlineappereance.svg",
  textappereance: "Appereance",
  textdarkandlightmode: "Dark and Light mode, Font size",
};

export default C4SettingDarkVersionContent;
