import React from "react";

import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";

import { Button, Img, Input, Line, List, Text } from "components";
import C1HomepageDarkVersionContentitems from "components/C1HomepageDarkVersionContentitems";
import C1HomepageDarkVersionStackdishname from "components/C1HomepageDarkVersionStackdishname";
import C2PopUpDarkVersionContent from "components/C2PopUpDarkVersionContent";
import C2PopUpDarkVersionRowellipsefortynine from "components/C2PopUpDarkVersionRowellipsefortynine";
import Sidebar1 from "components/Sidebar1";

const PopUpDarkVersionPage = () => {
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
  const c1HomepageDarkVersionContentitemsPropList = [
    {
      spicytext: "Spicy seasoned sea...",
      quantitytext: "2",
      pricetext: "$ 2.29",
      imagefour: "images/img_image4_40x40.png",
      notetext: "Please, just a little bit spicy only.",
    },
    { notetext: "Order Note...", totalpricetext: "$ 2.69" },
    { notetext: "Order Note...", totalpricetext: "$ 10,47" },
  ];

  return (
    <>
      <div className="bg-blue_gray-900 font-barlow h-[834px] mx-auto relative w-full">
        <div className="absolute bottom-[0] flex flex-col items-center justify-end md:px-5 right-[0] w-[90%]">
          <div className="flex md:flex-col flex-row gap-6 items-start justify-between w-full">
            <div className="flex md:flex-1 flex-col gap-6 items-start justify-start md:mt-0 mt-6 w-auto md:w-full">
              <div className="flex flex-col gap-6 items-start justify-start w-auto md:w-full">
                <div className="flex sm:flex-col flex-row sm:gap-10 gap-64 items-center justify-between w-auto md:w-full">
                  <div className="flex flex-col items-start justify-start">
                    <Text
                      className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                      size="txtBarlowSemiBold28"
                    >
                      Venta
                    </Text>
                    <Text
                      className="mt-1 text-base text-gray-300"
                      size="txtBarlowRegular16"
                    >
                      Tuesday 2 Feb, 2021
                    </Text>
                  </div>
                  <div className="bg-blue_gray-900_01 border border-blue_gray-800 border-solid flex flex-row gap-2 items-start justify-start p-3.5 rounded-lg w-auto">
                    <Img
                      className="h-5 w-5"
                      src="images/img_rewind_white_a700.svg"
                      alt="rewind"
                    />
                    <Text
                      className="text-blue_gray-200 text-sm w-auto"
                      size="txtBarlowRegular14"
                    >
                      Search for food, coffe, etc
                    </Text>
                  </div>
                </div>
                <div className="md:h-[33px] h-[34px] relative w-full">
                  <Line className="absolute bg-blue_gray-800 bottom-[0] h-px inset-x-[0] mx-auto w-full" />
                  <div className="absolute flex flex-row gap-8 h-max inset-y-[0] items-start justify-between left-[0] my-auto w-auto">
                    <div className="flex flex-col gap-[13px] items-start justify-start w-[14%]">
                      <Text
                        className="text-cyan-700 text-sm"
                        size="txtBarlowSemiBold14"
                      >
                        Hot Dishes
                      </Text>
                      
                    </div>
                    <div className="flex flex-col items-center justify-start">
                      <Text
                        className="text-sm text-white-A700"
                        size="txtBarlowSemiBold14WhiteA700"
                      >
                        Cold Dishes
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start">
                      <Text
                        className="text-sm text-white-A700"
                        size="txtBarlowSemiBold14WhiteA700"
                      >
                        Soup
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start">
                      <Text
                        className="text-sm text-white-A700"
                        size="txtBarlowSemiBold14WhiteA700"
                      >
                        Grill
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start">
                      <Text
                        className="text-sm text-white-A700"
                        size="txtBarlowSemiBold14WhiteA700"
                      >
                        Appetizer
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
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-6 items-start justify-start w-auto md:w-full">
                <div className="flex flex-row sm:gap-10 items-center justify-between w-[98%] md:w-full">
                  <Text
                    className="text-white-A700 text-xl"
                    size="txtBarlowSemiBold20"
                  >
                    Choose Dishes
                  </Text>
                  <div className="bg-gray-900 border border-blue_gray-800 border-solid flex flex-row gap-2.5 items-center justify-start p-3.5 rounded-lg w-auto">
                    <Img
                      className="h-5 w-5"
                      src="images/img_arrowdown_white_a700.svg"
                      alt="arrowdown"
                    />
                    <Text
                      className="text-sm text-white-A700 w-auto"
                      size="txtBarlowMedium14"
                    >
                      Dine In
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-6 items-start justify-start w-auto md:w-full">
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
            <div className="bg-gray-900 flex sm:flex-1 flex-col gap-12 items-start justify-start mb-[236px] p-6 sm:px-5 rounded-lg w-auto sm:w-full">
              <div className="flex flex-col gap-6 items-start justify-start w-auto">
                <div className="flex flex-col gap-6 items-start justify-start w-full">
                  <Text
                    className="text-white-A700 text-xl"
                    size="txtBarlowSemiBold20"
                  >
                    Orders #34562
                  </Text>
                  <div className="flex flex-row gap-2 items-start justify-start w-auto">
                    <div className="bg-red-300 flex flex-col items-center justify-center px-3 py-[7px] rounded-lg w-auto">
                      <Text
                        className="text-sm text-white-A700 w-auto"
                        size="txtBarlowSemiBold14WhiteA700"
                      >
                        Dine In
                      </Text>
                    </div>
                    <div className="border border-blue_gray-800 border-solid flex flex-col items-start justify-start px-3 py-[7px] rounded-lg w-auto">
                      <Text
                        className="text-cyan-700 text-sm w-auto"
                        size="txtBarlowSemiBold14"
                      >
                        To Go
                      </Text>
                    </div>
                    <Button
                      className="cursor-pointer font-semibold min-w-[74px] text-center text-sm"
                      shape="round"
                      color="blue_gray_800"
                      size="xs"
                      variant="outline"
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
                    <List
                      className="flex flex-col gap-6 items-center w-full"
                      orientation="vertical"
                    >
                      {c1HomepageDarkVersionContentitemsPropList.map(
                        (props, index) => (
                          <React.Fragment
                            key={`C1HomepageDarkVersionContentitems${index}`}
                          >
                            <C1HomepageDarkVersionContentitems
                              className="flex flex-col gap-2.5 items-start justify-start w-[361px]"
                              iconlinetrash="images/img_iconlinetrash.svg"
                              {...props}
                            />
                          </React.Fragment>
                        ),
                      )}
                    </List>
                    <C1HomepageDarkVersionContentitems
                      className="flex flex-col gap-2.5 items-start justify-start w-[361px]"
                      totalpricetext="$3.29"
                    />
                  </div>
                  <Line className="bg-blue_gray-800 h-px w-full" />
                </div>
                <div className="flex flex-col gap-4 items-start justify-start w-auto">
                  <div className="flex flex-row items-center justify-between w-full">
                    <Text
                      className="text-blue_gray-200 text-sm"
                      size="txtBarlowRegular14"
                    >
                      Discount
                    </Text>
                    <Text
                      className="text-right text-sm text-white-A700"
                      size="txtBarlowMedium14"
                    >
                      $0
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-between w-full">
                    <Text
                      className="text-blue_gray-200 text-sm"
                      size="txtBarlowRegular14"
                    >
                      Sub total
                    </Text>
                    <Text
                      className="text-right text-sm text-white-A700"
                      size="txtBarlowMedium14"
                    >
                      {" "}
                      $ 21,03
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-cyan-700 flex flex-col items-center justify-center p-3.5 rounded-lg shadow-bs2 w-[361px]">
                <Text
                  className="text-gray-50 text-sm w-auto"
                  size="txtBarlowSemiBold14Gray50"
                >
                  Continue to Payment
                </Text>
              </div>
            </div>
          </div>
        </div>
        <Sidebar1 className="!sticky !w-[104px] bg-gray-900 flex h-screen md:hidden justify-start my-auto overflow-auto md:px-5 rounded-[16px] top-[0]" />
        <div className="absolute md:h-[1610px] sm:h-[834px] h-[835px] inset-[0] justify-center m-auto md:px-5 w-full">
          <div className="absolute bg-black-900_b2 h-[834px] inset-[0] justify-center m-auto w-full"></div>
          <div className="absolute md:h-[1610px] sm:h-[834px] h-[835px] inset-y-[0] my-auto right-[0] w-[69%] md:w-full">
            <div className="absolute bg-gray-900 flex md:flex-col flex-row md:gap-12 h-max inset-[0] items-start justify-between m-auto p-[23px] sm:px-5 rounded-bl-[16px] rounded-tl-[16px] rounded-tr-[16px] w-full">
              <div className="flex flex-col gap-4 items-start justify-start mb-[30px] w-auto">
                <Img
                  className="h-6 w-6"
                  src="images/img_arrowdown_white_a700_24x24.svg"
                  alt="arrowdown_One"
                />
                <div className="flex flex-col gap-6 items-start justify-start w-auto">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-col gap-[25px] items-center justify-start w-full">
                      <div className="flex flex-row items-center justify-between w-full">
                        <div className="flex flex-col gap-2.5 items-start justify-start">
                          <Text
                            className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                            size="txtBarlowSemiBold28"
                          >
                            Confirmation
                          </Text>
                          <Text
                            className="text-base text-blue_gray-200"
                            size="txtBarlowMedium16Bluegray200"
                          >
                            Orders #34562
                          </Text>
                        </div>
                        <Button
                          className="flex h-12 items-center justify-center mb-[11px] mt-[5px] w-12"
                          shape="round"
                          color="cyan_700"
                          size="sm"
                          variant="fill"
                        >
                          <Img
                            className="h-5"
                            src="images/img_plus.svg"
                            alt="plus"
                          />
                        </Button>
                      </div>
                      <Line className="bg-blue_gray-800 h-px w-full" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-6 items-start justify-start w-auto">
                    <C1HomepageDarkVersionContentitems
                      className="flex flex-col gap-2.5 items-start justify-start w-[361px]"
                      imagefour="images/img_image4_11.png"
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
                      iconlinetrash="images/img_iconlinetrash.svg"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start w-full">
                    <Line className="bg-blue_gray-800 h-px w-full" />
                    <div className="flex flex-row items-center justify-between mt-[25px] w-full">
                      <Text
                        className="text-blue_gray-200 text-sm"
                        size="txtBarlowRegular14"
                      >
                        Discount
                      </Text>
                      <Text
                        className="text-right text-sm text-white-A700"
                        size="txtBarlowMedium14"
                      >
                        $0
                      </Text>
                    </div>
                    <div className="flex flex-row items-center justify-between mt-[18px] w-full">
                      <Text
                        className="text-blue_gray-200 text-sm"
                        size="txtBarlowRegular14"
                      >
                        Sub total
                      </Text>
                      <Text
                        className="text-right text-sm text-white-A700"
                        size="txtBarlowMedium14"
                      >
                        {" "}
                        $ 21,03
                      </Text>
                    </div>
                  </div>
                </div>
              </div>

              
              <div className="flex md:flex-1 flex-col items-center justify-start md:mt-0 mt-[41px] w-[47%] md:w-full">
                <div className="flex flex-col gap-6 items-start justify-start w-auto">
                  <div className="flex flex-col gap-2 items-start justify-start">
                    <Text
                      className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                      size="txtBarlowSemiBold28"
                    >
                      Payment
                    </Text>
                    <Text
                      className="text-base text-blue_gray-200"
                      size="txtBarlowMedium16Bluegray200"
                    >
                      3 payment method available
                    </Text>
                  </div>
                  <Line className="bg-blue_gray-800 h-px w-full" />
                </div>
                <div className="flex flex-col gap-4 items-start justify-start mt-6 w-auto">
                  <Text
                    className="text-white-A700 text-xl w-auto"
                    size="txtBarlowSemiBold20"
                  >
                    Payment Method
                  </Text>
                  <div className="flex flex-row gap-2 items-start justify-start w-auto">
                    <C2PopUpDarkVersionContent className="bg-blue_gray-900 border border-blue_gray-200 border-solid flex flex-col items-end justify-start p-1.5 rounded-lg w-[32%]" />
                    <List
                      className="sm:flex-col flex-row gap-2 grid grid-cols-2 w-[66%]"
                      orientation="horizontal"
                    >
                      <div className="bg-gray-900 border border-blue_gray-800 border-solid flex flex-col gap-0.5 h-16 md:h-auto items-center justify-center px-4 py-2.5 rounded-lg w-[101px]">
                        <Img
                          className="h-6 w-6"
                          src="images/img_iconlinepaypal.svg"
                          alt="iconlinepaypal"
                        />
                        <Text
                          className="text-blue_gray-200 text-sm w-auto"
                          size="txtBarlowMedium14Bluegray200"
                        >
                          Paypal
                        </Text>
                      </div>
                      <div className="bg-gray-900 border border-blue_gray-800 border-solid flex flex-col gap-0.5 h-16 md:h-auto items-center justify-center px-4 py-2.5 rounded-lg w-[101px]">
                        <Img
                          className="h-6 w-6"
                          src="images/img_iconlinewallet.svg"
                          alt="iconlinewallet"
                        />
                        <Text
                          className="text-blue_gray-200 text-sm w-auto"
                          size="txtBarlowMedium14Bluegray200"
                        >
                          Cash
                        </Text>
                      </div>
                    </List>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-col gap-[7px] items-start justify-start w-full">
                      <Text
                        className="text-sm text-white-A700"
                        size="txtBarlowMedium14"
                      >
                        Cardholder Name
                      </Text>
                      <Input
                        name="formelements_Four"
                        placeholder="Levi Ackerman"
                        className="p-0 placeholder:text-gray-300 text-left text-sm w-full"
                        wrapClassName="border border-blue_gray-800 border-solid w-full"
                        shape="round"
                        color="blue_gray_900_01"
                        size="xs"
                        variant="fill"
                      ></Input>
                    </div>
                    <div className="flex flex-col gap-[7px] items-start justify-start mt-[17px] w-full">
                      <Text
                        className="text-sm text-white-A700"
                        size="txtBarlowMedium14"
                      >
                        Card Number
                      </Text>
                      <Input
                        name="formelements_Five"
                        placeholder="2564 1421 0897 1244"
                        className="p-0 placeholder:text-gray-300 text-left text-sm w-full"
                        wrapClassName="border border-blue_gray-800 border-solid w-full"
                        shape="round"
                        color="blue_gray_900_01"
                        size="xs"
                        variant="fill"
                      ></Input>
                    </div>
                    <div className="flex flex-row gap-[13px] items-start justify-start mt-6 w-auto">
                      <div className="flex flex-col gap-1.5 items-start justify-start w-[49%]">
                        <Text
                          className="text-sm text-white-A700"
                          size="txtBarlowMedium14"
                        >
                          Expiration Date
                        </Text>
                        <Input
                          name="formelements_Six"
                          placeholder="02/2022"
                          className="p-0 placeholder:text-gray-300 text-left text-sm w-full"
                          wrapClassName="border border-blue_gray-800 border-solid w-full"
                          shape="round"
                          color="blue_gray_900_01"
                          size="xs"
                          variant="fill"
                        ></Input>
                      </div>
                      <div className="flex flex-col gap-[7px] items-start justify-start w-[49%]">
                        <Text
                          className="text-sm text-white-A700"
                          size="txtBarlowMedium14"
                        >
                          CVV
                        </Text>
                        <C2PopUpDarkVersionRowellipsefortynine className="bg-blue_gray-900_01 border border-blue_gray-800 border-solid flex flex-row gap-2 items-start justify-start p-3.5 rounded-lg w-[172px]" />
                      </div>
                    </div>
                  </div>
                  <Line className="bg-blue_gray-800 h-px w-full" />
                  <div className="flex flex-row gap-[13px] items-start justify-start w-auto">
                    <div className="flex flex-col gap-1.5 items-start justify-start w-[49%]">
                      <Text
                        className="text-sm text-white-A700"
                        size="txtBarlowMedium14"
                      >
                        Order Type
                      </Text>
                      <Input
                        name="formelements_Seven"
                        placeholder="Dine In"
                        className="font-medium p-0 placeholder:text-gray-300 text-left text-sm w-full"
                        wrapClassName="border border-blue_gray-800 border-solid flex w-full"
                        prefix={
                          <Img
                            className="h-5 mr-2.5 my-auto"
                            src="images/img_arrowdown.svg"
                            alt="arrow_down"
                          />
                        }
                        shape="round"
                        color="gray_900"
                        size="xs"
                        variant="fill"
                      ></Input>
                    </div>
                    <div className="flex flex-col gap-[7px] items-start justify-start w-[49%]">
                      <Text
                        className="text-sm text-white-A700"
                        size="txtBarlowMedium14"
                      >
                        Table no.
                      </Text>
                      <Input
                        name="formelements_Eight"
                        placeholder="140"
                        className="p-0 placeholder:text-gray-300 text-left text-sm w-full"
                        wrapClassName="border border-blue_gray-800 border-solid w-full"
                        shape="round"
                        color="blue_gray_900_01"
                        size="xs"
                        variant="fill"
                      ></Input>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row gap-2 items-start justify-start mt-[89px] w-auto">
                  <Button
                    className="cursor-pointer font-semibold text-center text-sm w-[175px]"
                    shape="round"
                    color="cyan_700"
                    size="sm"
                    variant="outline"
                  >
                    Cancel
                  </Button>
                  <Button
                    className="cursor-pointer font-semibold text-center text-sm w-[175px]"
                    shape="round"
                    color="cyan_700"
                    size="sm"
                    variant="fill"
                  >
                    Confirm Payment
                  </Button>
                </div>
              </div>
            </div>
            <Line className="absolute bg-blue_gray-800 h-[834px] inset-[0] justify-center m-auto w-px" />
          </div>
        </div>
      </div>
    </>
  );
};

export default PopUpDarkVersionPage;
