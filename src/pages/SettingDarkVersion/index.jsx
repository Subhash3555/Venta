import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Button, Img, Line, List, Text } from "components";
import C4SettingDarkVersionColumnspicyseasonedseOne from "components/C4SettingDarkVersionColumnspicyseasonedseOne";
import C4SettingDarkVersionContent from "components/C4SettingDarkVersionContent";
import C4SettingDarkVersionContent1 from "components/C4SettingDarkVersionContent1";
import Sidebar1 from "components/Sidebar1";

const SettingDarkVersionPage = () => {
  const c4SettingDarkVersionContentPropList = [
    {
      appereancetext: "Notifications",
      imageicon: "images/img_iconlinenotification_blue_gray_200.svg",
      darkandlightmodetext: "Customize your notifications",
    },
    {
      appereancetext: "Security",
      imageicon: "images/img_iconlinesecurity.svg",
      darkandlightmodetext: "Configure Password, PIN, etc",
    },
    {
      appereancetext: "Security",
      imageicon: "images/img_iconlinesecurity.svg",
      darkandlightmodetext: "Configure Password, PIN, etc",
    },
    {
      appereancetext: "About Us",
      imageicon: "images/img_iconlineabout.svg",
      darkandlightmodetext: "Find out more about Posly",
    },
  ];

  return (
    <>
      <div className="bg-blue_gray-900 flex flex-col font-barlow items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row gap-6 items-start justify-between mx-auto md:px-5 w-full">
          <Sidebar1 className="!sticky !w-[104px] bg-gray-900 flex h-screen md:hidden justify-start overflow-auto rounded-[16px] top-[0]" />
          <div className="flex flex-1 flex-col gap-[22px] items-start justify-start w-full">
            <Text
              className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
              size="txtBarlowSemiBold28"
            >
              Settings
            </Text>
            <div className="flex md:flex-col flex-row gap-6 items-center justify-between w-full">
              <div className="bg-gray-900 flex flex-col h-[723px] md:h-auto items-start justify-start rounded-lg w-auto">
                <List
                  className="flex flex-col gap-px items-center w-full"
                  orientation="vertical"
                >
                  <C4SettingDarkVersionContent className="flex flex-col gap-5 items-start justify-start sm:pl-5 pl-6 py-6 rounded-lg w-[275px]" />
                  <C4SettingDarkVersionContent
                    className="flex flex-col gap-5 items-start justify-start sm:pl-5 pl-6 py-6 rounded-lg w-[275px]"
                    imageicon="images/img_iconlinerestaurant.svg"
                    appereancetext="Your Restaurant"
                  />
                </List>
                <C4SettingDarkVersionContent1 className="bg-red-300_42 flex flex-row gap-16 items-start justify-start sm:pl-5 pl-6 py-6 w-auto" />
                <List
                  className="flex flex-col gap-px items-center w-full"
                  orientation="vertical"
                >
                  {c4SettingDarkVersionContentPropList.map((props, index) => (
                    <React.Fragment key={`C4SettingDarkVersionContent${index}`}>
                      <C4SettingDarkVersionContent
                        className="flex flex-col gap-5 items-start justify-start sm:pl-5 pl-6 py-6 rounded-lg w-[275px]"
                        {...props}
                      />
                    </React.Fragment>
                  ))}
                </List>
              </div>
              
              <div className="bg-gray-900 flex md:flex-1 flex-col items-start justify-start py-6 rounded-lg w-[72%] md:w-full">
                <div className="flex flex-col gap-[26px] items-center justify-start w-full">
                  <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-[94%] md:w-full">
                    <Text
                      className="text-white-A700 text-xl"
                      size="txtBarlowSemiBold20"
                    >
                      Products Management
                    </Text>
                    <Button
                      className="cursor-pointer flex items-center justify-center min-w-[178px] shadow-bs3"
                      leftIcon={
                        <Img
                          className="h-5 mb-px mr-2"
                          src="images/img_icon_line_option.svg"
                          alt="Icon / Line / Option"
                        />
                      }
                      shape="round"
                      color="blue_gray_800"
                      size="sm"
                      variant="outline"
                    >
                      <div className="!text-white-A700 font-semibold text-left text-sm">
                        Manage Categories
                      </div>
                    </Button>
                  </div>
                  <div className="flex flex-col justify-start pb-0.5 w-full">
                    <div className="flex sm:flex-col flex-row gap-8 items-start justify-start ml-6 md:ml-[0] w-[63%] md:w-full">
                      <div className="flex flex-col gap-[13px] items-start justify-start w-[15%] sm:w-full">
                      
                        
                      </div>
                      <Text
                        className="text-sm text-white-A700"
                        size="txtBarlowSemiBold14WhiteA700"
                      >
                        Beverages
                      </Text>
                      <Text
                        className="text-sm text-white-A700"
                        size="txtBarlowSemiBold14WhiteA700"
                      >
                        Snacks
                      </Text>
                      <Text
                        className="text-sm text-white-A700"
                        size="txtBarlowSemiBold14WhiteA700"
                      >
                        Food
                      </Text>
                      <Text
                        className="text-sm text-white-A700"
                        size="txtBarlowSemiBold14WhiteA700"
                      >
                        Dessert
                      </Text>
                      <Text
                        className="text-sm text-white-A700"
                        size="txtBarlowSemiBold14WhiteA700"
                      >
                        Merchandise
                      </Text>
                    </div>
                    <Line className="bg-blue_gray-800 h-px w-full" />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start mt-[21px] w-full">
                  <div className="flex flex-col gap-4 items-center justify-start w-[94%] md:w-full">
                    <div className="flex md:flex-col flex-row gap-4 items-start justify-start w-auto md:w-full">
                      <div className="bg-gray-900 flex flex-col items-center justify-center outline-[0.5px] outline-cyan-700 outline-dashed p-[63px] md:px-10 sm:px-5 rounded-lg w-[32%] md:w-full">
                        <div className="flex flex-col gap-2 items-center justify-center my-[47px] w-auto">
                          <Button
                            className="flex h-12 items-center justify-center w-12"
                            shape="round"
                            size="sm"
                          >
                            <Img
                              className="h-5"
                              src="images/img_plus_cyan_700.svg"
                              alt="plus"
                            />
                          </Button>
                          <Text
                            className="text-base text-center text-cyan-700 w-auto"
                            size="txtBarlowSemiBold16Cyan700"
                          >
                            Add new dish
                          </Text>
                        </div>
                      </div>
                      <List
                        className="sm:flex-col flex-row gap-4 grid sm:grid-cols-1 grid-cols-2 w-[66%] md:w-full"
                        orientation="horizontal"
                      >
                        <C4SettingDarkVersionColumnspicyseasonedseOne
                          className="bg-gray-900 flex flex-col gap-4 items-center justify-end outline outline-[0.5px] outline-blue_gray-800 pt-6 rounded-lg w-full"
                          userimage="images/img_image4_127x127.png"
                          dishname="Spicy seasoned seafood noodles"
                          dishprice="$ 2.29"
                          dishcount="20 Bowls"
                        />
                        <C4SettingDarkVersionColumnspicyseasonedseOne
                          className="bg-gray-900 flex flex-col gap-3.5 items-center justify-end outline outline-[0.5px] outline-blue_gray-800 pt-[21px] rounded-lg w-full"
                          dishname="Salted Pasta with mushroom sauce"
                          dishprice="$ 2.69"
                          dishcount="30 Bowls"
                        />
                      </List>
                    </div>
                    <List
                      className="sm:flex-col flex-row gap-4 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start w-auto md:w-full"
                      orientation="horizontal"
                    >
                      {new Array(3).fill({}).map((props, index) => (
                        <React.Fragment
                          key={`C4SettingDarkVersionColumnspicyseasonedseOne${index}`}
                        >
                          <C4SettingDarkVersionColumnspicyseasonedseOne
                            className="bg-gray-900 flex flex-col md:gap-10 gap-28 items-center justify-end outline outline-[0.5px] outline-blue_gray-800 pt-[21px] rounded-lg w-full"
                            {...props}
                          />
                        </React.Fragment>
                      ))}
                    </List>
                  </div>
                  <Line className="bg-blue_gray-800 h-px w-full" />
                </div>
                <div className="flex flex-row gap-2 items-start justify-start ml-6 md:ml-[0] mt-12 w-auto">
                  <Button
                    className="cursor-pointer font-semibold text-center text-sm w-[172px]"
                    shape="round"
                    color="cyan_700"
                    size="sm"
                    variant="outline"
                  >
                    Discard Changes
                  </Button>
                  <Button
                    className="cursor-pointer font-semibold text-center text-sm w-[172px]"
                    shape="round"
                    color="cyan_700"
                    size="sm"
                    variant="fill"
                  >
                    Save Changes
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingDarkVersionPage;
