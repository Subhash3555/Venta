import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Button, Img, Input, Line, List, Text } from "components";
import C1HomepageDarkVersionContentitems from "components/C1HomepageDarkVersionContentitems";
import C1HomepageDarkVersionStackdishname from "components/C1HomepageDarkVersionStackdishname";
import Sidebar1 from "components/Sidebar1";

const HomepageDarkVersionPage = () => {
  const c1HomepageDarkVersionStackdishnamePropList = [
    {
      imagefourFour: "images/img_image4_2.png",
      imagefourSix: "images/img_image4_4.png",
      imagefourEight: "images/img_image4_6.png",
      imagefourSeven: "images/img_image4_5.png",
      imagefourFive: "images/img_image4_3.png",
    },
    {
      price: "$ 2.69",
      imagefourFive: "images/img_image4_3.png",
      imagefourSeven: "images/img_image4_7.png",
      availablebowls: "11 Bowls available",
      imagefourFour: "images/img_image4_2.png",
      dishname: "Salted Pasta with mushroom sauce",
      imagefourSix: "images/img_image4_4.png",
    },
    {
      price: "$ 2.99",
      imagefourFive: "images/img_image4_3.png",
      dishname: "Beef dumpling in hot and sour soup",
      imagefourSix: "images/img_image4_4.png",
      imagefourFour: "images/img_image4_2.png",
      availablebowls: "16 Bowls available",
    },
    {
      price: "$ 3.29",
      dishname: "Healthy noodle with spinach leaf",
      availablebowls: "22 Bowls available",
      imagefourFour: "images/img_image4_2.png",
    },
    {
      price: "$ 3.49",
      dishname: "Hot spicy fried rice with omelet",
      availablebowls: "13 Bowls available",
      imagefourFour: "images/img_image4_2.png",
    },
    {
      price: "$ 3.59",
      availablebowls: "17 Bowls available",
      dishname: "Spicy instant noodle with special omelette",
    },
  ];

  return (
    <>
      <div className="bg-blue_gray-900 flex sm:flex-col md:flex-col flex-row font-barlow gap-6 items-start mx-auto w-full">
        <Sidebar1 className="!sticky !w-[104px] bg-gray-900 flex h-screen md:hidden justify-start overflow-auto md:px-5 rounded-[16px] top-[0]" />
        <div className="flex-1 flex-col gap-6 inline items-start justify-start md:mt-0 mt-6 md:px-5 w-full">
          <div className="flex flex-col gap-6 items-start justify-start w-auto md:w-full">
            <div className="flex sm:flex-col flex-row sm:gap-10 gap-[249px] items-center justify-between w-auto md:w-full">
              <div className="flex flex-col items-start justify-start">
                <Text
                  className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                  size="txtBarlowSemiBold28"
                >
                  Event Name
                </Text>
                <Text
                  className="mt-1 text-base text-gray-300"
                  size="txtBarlowRegular16"
                >
                  Tuesday, 2 Feb 2021
                </Text>
              </div>
              <Button
                className="border border-blue_gray-800 border-solid cursor-pointer flex items-center justify-center min-w-[220px]"
                leftIcon={
                  <Img
                    className="h-5 mb-px mr-2"
                    src="images/img_rewind.svg"
                    alt="rewind"
                  />
                }
                shape="round"
                color="blue_gray_900_01"
                size="sm"
                variant="fill"
              >
                <div className="text-left text-sm">
                  Search for food, coffe, etc..
                </div>
              </Button>
            </div>
            <div className="md:h-[33px] h-[34px] relative w-full">
              <Line className="absolute bg-blue_gray-800 bottom-[0] h-px inset-x-[0] mx-auto w-full" />
              <div className="absolute flex flex-row gap-8 h-max inset-y-[0] items-start justify-between left-[0] my-auto w-auto">
                <div className="flex flex-col gap-[13px] items-start justify-start w-[14%]">
                
                  
                </div>
                <div className="flex flex-col items-center justify-start">
                  <Text
                    className="text-sm text-white-A700"
                    size="txtBarlowSemiBold14WhiteA700"
                  >
                    Beverages
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start">
                  <Text
                    className="text-sm text-white-A700"
                    size="txtBarlowSemiBold14WhiteA700"
                  >
                    Snacks
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start">
                  <Text
                    className="text-sm text-white-A700"
                    size="txtBarlowSemiBold14WhiteA700"
                  >
                    Food
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start">
                  <Text
                    className="text-sm text-white-A700"
                    size="txtBarlowSemiBold14WhiteA700"
                  >
                    Dessert
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start">
                  <Text
                    className="text-sm text-white-A700"
                    size="txtBarlowSemiBold14WhiteA700"
                  >
                    Merchandise
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col gap-6 inline items-start justify-start w-auto md:w-full">
            <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
              <Text
                className="text-white-A700 text-xl"
                size="txtBarlowSemiBold20"
              >
                Choose Dishes
              </Text>
              <Button
                className="border border-blue_gray-800 border-solid cursor-pointer flex items-center justify-center min-w-[100px]"
                leftIcon={
                  <Img
                    className="h-5 mr-2.5"
                    src="images/img_arrowdown.svg"
                    alt="arrow_down"
                  />
                }
                shape="round"
                color="gray_900"
                size="sm"
                variant="fill"
              >
                <div className="font-medium text-left text-sm">Dine In</div>
              </Button>
            </div>
            <div className="flex-col gap-6 inline items-start justify-start w-auto md:w-full">
              <div className="md:gap-5 gap-7 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                {c1HomepageDarkVersionStackdishnamePropList.map(
                  (props, index) => (
                    <React.Fragment
                      key={`C1HomepageDarkVersionStackdishname${index}`}
                    >
                      <C1HomepageDarkVersionStackdishname
                        className="md:h-[220px] h-[260px] relative w-full"
                        imagefourOne="images/img_image4_132x132.png"
                        imagefourTwo="images/img_image4_125x132.png"
                        imagefourThree="images/img_image4_1.png"
                        {...props}
                      />
                    </React.Fragment>
                  ),
                )}
              </div>
              <div className="flex md:flex-col flex-row gap-7 items-start justify-start w-auto md:w-full">
                <List
                  className="sm:flex-col flex-row gap-7 grid sm:grid-cols-1 grid-cols-2 w-[66%] md:w-full"
                  orientation="horizontal"
                >
                  <C1HomepageDarkVersionStackdishname
                    className="md:h-[226px] h-[260px] relative w-full"
                    dishname="Healthy noodle with spinach leaf"
                    price="$ 3.29"
                    availablebowls="22 Bowls available"
                    imagefourOne="images/img_image4_132x132.png"
                    imagefourTwo="images/img_image4_125x132.png"
                  />
                  <C1HomepageDarkVersionStackdishname
                    className="md:h-[226px] h-[260px] relative w-full"
                    dishname="Hot spicy fried rice with omelet"
                    price="$ 3.49"
                    availablebowls="13 Bowls available"
                    imagefourOne="images/img_image4_132x132.png"
                  />
                </List>
                <C1HomepageDarkVersionStackdishname
                  className="md:h-[226px] h-[260px] relative w-[31%] md:w-full"
                  dishname="Spicy instant noodle with special omelette"
                  price="$ 3.59"
                  availablebowls="17 Bowls available"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-900 flex flex-1 flex-col gap-[42px] items-start justify-start p-6 md:px-5 rounded-lg w-full">
          <div className="flex flex-col gap-6 items-start justify-start w-auto">
            <div className="flex flex-col gap-6 items-start justify-start w-full">
              <Text
                className="text-white-A700 text-xl"
                size="txtBarlowSemiBold20"
              >
                Orders #34562
              </Text>
              <div className="flex flex-row gap-2 items-start justify-start w-auto">
                <Button
                  className="cursor-pointer font-semibold min-w-[66px] text-center text-sm"
                  shape="round"
                  color="red_300"
                  size="xs"
                  variant="fill"
                >
                  Dine In
                </Button>
                <Button
                  className="!text-cyan-700 border border-blue_gray-800 border-solid cursor-pointer font-semibold min-w-[58px] text-center text-sm"
                  shape="round"
                  color="gray_900"
                  size="xs"
                  variant="fill"
                >
                  To Go
                </Button>
                <Button
                  className="!text-cyan-700 border border-blue_gray-800 border-solid cursor-pointer font-semibold min-w-[74px] text-center text-sm"
                  shape="round"
                  color="gray_900"
                  size="xs"
                  variant="fill"
                >
                  Delivery
                </Button>
              </div>
              <div className="flex flex-row items-start justify-start w-full">
                <Text
                  className="text-base text-white-A700"
                  size="txtBarlowSemiBold16"
                >
                  Item
                </Text>
                <Text
                  className="ml-[225px] text-base text-white-A700"
                  size="txtBarlowSemiBold16"
                >
                  Qty
                </Text>
                <Text
                  className="ml-[43px] text-base text-white-A700"
                  size="txtBarlowSemiBold16"
                >
                  Price
                </Text>
              </div>
            </div>
            <div className="flex flex-col gap-[23px] items-center justify-start w-full">
              <Line className="bg-blue_gray-800 h-px w-full" />
              <div className="flex flex-col gap-6 items-start justify-start w-auto">
                <C1HomepageDarkVersionContentitems
                  className="flex flex-col gap-2.5 items-start justify-start w-[361px]"
                  imagefour="images/img_image4_40x40.png"
                  spicytext="Spicy seasoned sea..."
                  pricetext="$ 2.29"
                  iconlinetrash="images/img_iconlinetrash.svg"
                />
                <C1HomepageDarkVersionContentitems
                  className="flex flex-col gap-2.5 items-start justify-start w-[361px]"
                  totalpricetext="$ 2.69"
                  iconlinetrash="images/img_iconlinetrash.svg"
                />
                <C1HomepageDarkVersionContentitems
                  className="flex flex-col gap-2.5 items-start justify-start w-[361px]"
                  totalpricetext="$ 10,47"
                  iconlinetrash="images/img_iconlinetrash.svg"
                />
                <C1HomepageDarkVersionContentitems
                  className="flex flex-col gap-2.5 items-start justify-start w-[361px]"
                  totalpricetext="$3.29"
                />
              </div>
              <Line className="bg-blue_gray-800 h-px w-full" />
            </div>
            <div className="flex flex-col gap-4 items-start justify-start w-auto">
              <div className="flex flex-row items-start justify-between w-full">
                <Text
                  className="text-blue_gray-200 text-sm"
                  size="txtBarlowRegular14"
                >
                  Discount
                </Text>
                <Text
                  className="text-base text-right text-white-A700"
                  size="txtBarlowMedium16"
                >
                  $0
                </Text>
              </div>
              <div className="flex flex-row items-start justify-between w-full">
                <Text
                  className="text-blue_gray-200 text-sm"
                  size="txtBarlowRegular14"
                >
                  Sub total
                </Text>
                <Text
                  className="text-base text-right text-white-A700"
                  size="txtBarlowMedium16"
                >
                  {" "}
                  $ 21,03
                </Text>
              </div>
            </div>
          </div>
          <Button
            className="cursor-pointer font-semibold text-center text-sm w-[361px]"
            shape="round"
            color="cyan_700"
            size="sm"
            variant="fill"
          >
            Continue to Payment
          </Button>
        </div>
      </div>
    </>
  );
};

export default HomepageDarkVersionPage;
