import React from "react";

import { Button, Img, Text } from "components";

const C1HomepageDarkVersionContentitems = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row items-center justify-start w-full">
          <div className="flex flex-col items-center justify-start w-[53%]">
            <div className="flex flex-row gap-2 items-center justify-between w-full">
              <div className="flex flex-col h-10 items-center justify-start w-10">
                {!!props?.imagefour ? (
                  <Img
                    className="h-10 md:h-auto rounded-[50%] w-10"
                    alt="imageFour"
                    src={props?.imagefour}
                  />
                ) : null}
              </div>
              <div className="flex flex-col gap-1 items-start justify-start w-auto">
                {!!props?.spicytext ? (
                  <Text
                    className="text-sm text-white-A700 w-auto"
                    size="txtBarlowMedium14"
                  >
                    {props?.spicytext}
                  </Text>
                ) : null}
                {!!props?.pricetext ? (
                  <Text
                    className="text-blue_gray-200 text-xs w-auto"
                    size="txtBarlowMedium12"
                  >
                    {props?.pricetext}
                  </Text>
                ) : null}
              </div>
            </div>
          </div>
          <div className="bg-blue_gray-900_01 border border-blue_gray-800 border-solid flex flex-col items-center justify-center ml-[61px] px-3.5 py-[13px] rounded-lg w-12">
            {!!props?.quantitytext ? (
              <Text
                className="text-base text-white-A700 w-auto"
                size="txtBarlowMedium16"
              >
                {props?.quantitytext}
              </Text>
            ) : null}
          </div>
          <Text
            className="ml-[21px] text-base text-right text-white-A700"
            size="txtBarlowMedium16"
          >
            {props?.totalpricetext}
          </Text>
        </div>
        <div className="flex flex-row gap-4 items-center justify-between w-full">
          <div className="bg-blue_gray-900_01 border border-blue_gray-800 border-solid flex flex-col items-start justify-start pl-3.5 md:pr-10 pr-24 sm:pr-5 py-3.5 rounded-lg w-[297px]">
            {!!props?.notetext ? (
              <Text
                className="text-gray-300 text-sm w-auto"
                size="txtBarlowRegular14Gray300"
              >
                {props?.notetext}
              </Text>
            ) : null}
          </div>
          {!!props?.iconlinetrash ? (
            <Button
              className="flex h-12 items-center justify-center w-12"
              shape="round"
              color="cyan_700"
              size="sm"
              variant="outline"
            >
              <Img
                className="h-5"
                alt="iconlinetrash"
                src={props?.iconlinetrash}
              />
            </Button>
          ) : null}
        </div>
      </div>
    </>
  );
};

C1HomepageDarkVersionContentitems.defaultProps = { totalpricetext: "$ 4,58" };

export default C1HomepageDarkVersionContentitems;
