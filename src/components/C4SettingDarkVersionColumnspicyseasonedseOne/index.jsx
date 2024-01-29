import React from "react";

import { Img, Text } from "components";

const C4SettingDarkVersionColumnspicyseasonedseOne = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col h-[127px] items-center justify-start w-[127px]">
          <div className="flex flex-col h-[127px] items-center justify-start w-[127px]">
            {!!props?.userimage ? (
              <Img
                className="h-[127px] md:h-auto rounded-[50%] w-[127px]"
                alt="imageFour"
                src={props?.userimage}
              />
            ) : null}
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center justify-center w-auto">
          {!!props?.dishname ? (
            <Text
              className="leading-[130.00%] max-w-[144px] md:max-w-full text-center text-sm text-white-A700"
              size="txtBarlowMedium14"
            >
              {props?.dishname}
            </Text>
          ) : null}
          <div className="flex flex-row gap-2 items-center justify-center w-auto">
            {!!props?.dishprice ? (
              <Text
                className="text-blue_gray-200 text-center text-sm w-auto"
                size="txtBarlowRegular14"
              >
                {props?.dishprice}
              </Text>
            ) : null}
            {!!props?.ellipsefiftytwo ? (
              <div className="bg-gray-400 h-1 rounded-[50%] w-1"></div>
            ) : null}
            {!!props?.dishcount ? (
              <Text
                className="text-blue_gray-200 text-center text-sm w-auto"
                size="txtBarlowRegular14"
              >
                {props?.dishcount}
              </Text>
            ) : null}
          </div>
        </div>
        <div className="bg-cyan-700_70 flex flex-col items-center justify-start p-4 rounded-bl-lg rounded-br-lg w-full">
          <div className="flex flex-row gap-2 items-start justify-center w-[44%] md:w-full">
            <Img
              className="h-5 w-5"
              src="defaultNoData.png"
              alt="iconlineedit"
            />
            <Text
              className="mt-0.5 text-cyan-700 text-sm"
              size="txtBarlowSemiBold14"
            >
              {props?.edittext}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

C4SettingDarkVersionColumnspicyseasonedseOne.defaultProps = {
  edittext: "Edit dish",
};

export default C4SettingDarkVersionColumnspicyseasonedseOne;
