import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Button, Img, Line, List, Text } from "components";
import C3DashboardDarkVersionContentsummary from "components/C3DashboardDarkVersionContentsummary";
import C3DashboardDarkVersionRow from "components/C3DashboardDarkVersionRow";
import C3DashboardDarkVersionRowspicyseasonedseOne from "components/C3DashboardDarkVersionRowspicyseasonedseOne";
import Sidebar1 from "components/Sidebar1";

const DashboardDarkVersionPage = () => {
  const c3DashboardDarkVersionContentsummaryPropList = [
    {
      iconlinearrow: "images/img_iconlinearrow.svg",
      totalrevenue: "Total Revenue",
      price: "$10,243.00",
      p3240: "+32.40%",
    },
    {},
    {},
  ];
  const c3DashboardDarkVersionRowPropList = [
    { price: "$125", spicyseasonedse: "Spicy seasoned seafood noodles " },
    {
      price: "$145",
      spicyseasonedse: "Salted Pasta with mushroom sauce",
      content: "Preparing",
    },
    {
      price: "$105",
      spicyseasonedse: "Beef dumpling in hot and sour soup",
      content: "Pending",
    },
    { price: "$45" },
    { price: "$245" },
    { username: "Armin Arlert", avatarimage: "images/img_3010_32x32.png" },
  ];
  const c3DashboardDarkVersionRowspicyseasonedseOnePropList = [
    { userimage: "images/img_image4_53x53.png" },
    {
      dishcount: "120 dishes ordered",
      dishname: "Salted pasta with mushroom sauce",
    },
    {
      dishcount: "80 dishes ordered",
      dishname: "Beef dumpling in hot and sour soup",
    },
  ];

  return (
    <>
      <div className="bg-blue_gray-900 flex sm:flex-col md:flex-col flex-row font-barlow gap-6 items-start mx-auto sm:pr-5 pr-6 w-full">
        <Sidebar1 className="!sticky !w-[104px] bg-gray-900 flex h-screen md:hidden justify-start overflow-auto md:px-5 rounded-[16px] top-[0]" />
        <div className="flex flex-1 flex-col gap-6 items-start justify-start md:px-5 w-full">
          <div className="flex flex-col gap-6 items-start justify-start w-auto md:w-full">
            <div className="flex flex-col gap-[7px] items-center justify-start">
              <Text
                className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                size="txtBarlowSemiBold28"
              >
                Dashboard
              </Text>
              <Text
                className="text-base text-blue_gray-200"
                size="txtBarlowRegular16Bluegray200"
              >
                Tuesday 2 Feb, 2021
              </Text>
            </div>
            <Line className="bg-blue_gray-800 h-px w-full" />
          </div>
          <List
            className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start w-auto md:w-full"
            orientation="horizontal"
          >
            {c3DashboardDarkVersionContentsummaryPropList.map(
              (props, index) => (
                <React.Fragment
                  key={`C3DashboardDarkVersionContentsummary${index}`}
                >
                  <C3DashboardDarkVersionContentsummary
                    className="bg-gray-900 flex flex-col gap-2 items-start justify-start p-4 rounded-lg w-[199px]"
                    {...props}
                  />
                </React.Fragment>
              ),
            )}
          </List>
          <div className="bg-gray-900 flex flex-col gap-4 items-center justify-center pt-6 rounded-lg w-auto md:w-full">
            <div className="flex flex-col gap-[18px] items-center justify-start w-full">
              <div className="flex flex-row sm:gap-10 items-center justify-between w-[94%] md:w-full">
                <Text
                  className="text-white-A700 text-xl"
                  size="txtBarlowSemiBold20"
                >
                  Order Report
                </Text>
                <Button
                  className="border border-blue_gray-800 border-solid cursor-pointer flex items-center justify-center min-w-[128px]"
                  leftIcon={
                    <Img
                      className="h-5 mr-2.5"
                      src="images/img_icon_line_option.svg"
                      alt="Icon / Line / Option"
                    />
                  }
                  shape="round"
                  color="gray_900"
                  size="sm"
                  variant="fill"
                >
                  <div className="font-medium text-left text-sm">
                    Filter Order
                  </div>
                </Button>
              </div>
              <div className="flex flex-col gap-[15px] justify-start w-full">
                <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start ml-6 md:ml-[0] w-[85%] md:w-full">
                  <Text
                    className="text-sm text-white-A700"
                    size="txtBarlowSemiBold14WhiteA700"
                  >
                    Customer
                  </Text>
                  <Text
                    className="ml-32 sm:ml-[0] text-sm text-white-A700"
                    size="txtBarlowSemiBold14WhiteA700"
                  >
                    Menu
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[136px] text-sm text-white-A700"
                    size="txtBarlowSemiBold14WhiteA700"
                  >
                    Total Payment
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[61px] text-sm text-white-A700"
                    size="txtBarlowSemiBold14WhiteA700"
                  >
                    Status
                  </Text>
                </div>
                <Line className="bg-blue_gray-800 h-px w-full" />
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-[93%] md:w-full">
              <div className="flex flex-col items-start justify-start w-auto md:w-full">
                <List
                  className="flex flex-col gap-0.5 items-center w-full"
                  orientation="vertical"
                >
                  {c3DashboardDarkVersionRowPropList.map((props, index) => (
                    <React.Fragment key={`C3DashboardDarkVersionRow${index}`}>
                      <C3DashboardDarkVersionRow
                        className="bg-gray-900 flex md:flex-1 flex-col gap-4 items-start justify-start py-2.5 w-auto md:w-full"
                        {...props}
                      />
                    </React.Fragment>
                  ))}
                </List>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-6 items-start justify-start md:px-5 w-full">
          <div className="bg-gray-900 flex flex-col gap-5 items-start justify-start p-6 sm:px-5 rounded-lg w-auto sm:w-full">
            <div className="bg-gray-900 flex flex-row gap-[111px] items-center justify-between w-auto">
              <Text
                className="text-white-A700 text-xl w-auto"
                size="txtBarlowSemiBold20"
              >
                Most Ordered
              </Text>
              <Button
                className="border border-blue_gray-800 border-solid cursor-pointer flex items-center justify-center min-w-[95px]"
                leftIcon={
                  <Img
                    className="h-5 mb-px mr-2.5"
                    src="images/img_arrowdown.svg"
                    alt="arrow_down"
                  />
                }
                shape="round"
                color="gray_900"
                size="sm"
                variant="fill"
              >
                <div className="font-medium text-left text-sm">Today</div>
              </Button>
            </div>
            <Line className="bg-blue_gray-800 h-px w-full" />
            <div className="bg-gray-900 flex flex-col gap-8 items-start justify-start w-auto">
              <List
                className="flex flex-col gap-6 items-start w-auto"
                orientation="vertical"
              >
                {c3DashboardDarkVersionRowspicyseasonedseOnePropList.map(
                  (props, index) => (
                    <React.Fragment
                      key={`C3DashboardDarkVersionRowspicyseasonedseOne${index}`}
                    >
                      <C3DashboardDarkVersionRowspicyseasonedseOne
                        className="flex flex-row gap-4 items-start justify-start my-0 w-auto"
                        {...props}
                      />
                    </React.Fragment>
                  ),
                )}
              </List>
              <div className="border border-cyan-700 border-solid flex flex-col items-center justify-center p-3.5 rounded-lg w-[324px]">
                <a href="javascript:" className="text-cyan-700 text-sm w-auto">
                  <Text size="txtBarlowSemiBold14">View All</Text>
                </a>
              </div>
            </div>
          </div>
          <div className="bg-gray-900 flex flex-col gap-8 items-center justify-center pb-10 pt-6 rounded-lg w-auto sm:w-full">
            <div className="flex flex-col gap-4 items-center justify-start w-full">
              <div className="bg-gray-900 flex flex-row gap-16 items-center justify-center w-auto">
                <Text
                  className="text-white-A700 text-xl w-auto"
                  size="txtBarlowSemiBold20"
                >
                  Most Type of Order
                </Text>
                <Button
                  className="border border-blue_gray-800 border-solid cursor-pointer flex items-center justify-center min-w-[95px]"
                  leftIcon={
                    <Img
                      className="h-5 mb-px mr-2.5"
                      src="images/img_arrowdown.svg"
                      alt="arrow_down"
                    />
                  }
                  shape="round"
                  color="gray_900"
                  size="sm"
                  variant="fill"
                >
                  <div className="font-medium text-left text-sm">Today</div>
                </Button>
              </div>
              <Line className="bg-blue_gray-800 h-px w-full" />
            </div>
            <div className="flex flex-row gap-[27px] items-center justify-between w-[83%] md:w-full">
              <Img
                className="h-44 w-44"
                src="images/img_circle.svg"
                alt="circle"
              />
              <List
                className="bg-gray-900 flex flex-col gap-4 items-start my-4 w-auto"
                orientation="vertical"
              >
                <div className="flex flex-row gap-[9px] items-start justify-between w-full">
                  <div className="bg-cyan-700 h-[18px] mb-[18px] rounded-[50%] w-[18px]"></div>
                  <div className="flex flex-col gap-0.5 items-start justify-start w-auto">
                    <Text
                      className="text-sm text-white-A700 w-auto"
                      size="txtBarlowMedium14"
                    >
                      Dine In
                    </Text>
                    <Text
                      className="text-blue_gray-200 text-xs w-auto"
                      size="txtBarlowRegular12"
                    >
                      200 customers
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row gap-[9px] items-start justify-between w-[98%] md:w-full">
                  <div className="bg-deep_orange-A100 h-[18px] mb-[18px] rounded-[50%] w-[18px]"></div>
                  <div className="flex flex-col gap-0.5 items-start justify-start w-auto">
                    <Text
                      className="text-sm text-white-A700 w-auto"
                      size="txtBarlowMedium14"
                    >
                      To Go
                    </Text>
                    <Text
                      className="text-blue_gray-200 text-xs w-auto"
                      size="txtBarlowRegular12"
                    >
                      122 customers
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row gap-[9px] items-start justify-between w-full">
                  <div className="bg-blue-300 h-[18px] mb-[18px] rounded-[50%] w-[18px]"></div>
                  <div className="flex flex-col gap-0.5 items-start justify-start w-auto">
                    <Text
                      className="text-sm text-white-A700 w-auto"
                      size="txtBarlowMedium14"
                    >
                      Delivery
                    </Text>
                    <Text
                      className="text-blue_gray-200 text-xs w-auto"
                      size="txtBarlowRegular12"
                    >
                      264 customers
                    </Text>
                  </div>
                </div>
              </List>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardDarkVersionPage;
