import React from "react";

import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";

import { Img } from "components";

const Sidebar1 = (props) => {
  return (
    <>
      <Sidebar className={props.className}>
      <Img className=" mt-[40px]" src="images/Venta_logo.png"/>
        <Menu
          menuItemStyles={{
            button: {
              padding: 0,
              backgroundColor: "#1f1d2b",
              flexDirection: "column",
              borderRadius: "8px",
              [`&:hover, &.ps-active`]: {
                color: "#ffffff",
                backgroundColor: "#008aabff !important",
                boxShadow: "0px 8px  24px 0px #ea7c6951",
              },
            },
          }}
          className="flex flex-col items-center justify-end mb-4 sm:px-5 px-6 py-[109px] w-[54%]"
        >
          
          <MenuItem>
            <div className="bg-cyan-700 flex items-center justify-end shadow-bs1">
              <Img
                className="h-6 mt-[26px] text-cyan-700 w-6"
                src="images/img_iconlinehome.svg"
                alt="iconlinehome"
              />
            </div>
          </MenuItem>
          <Img className="h-3 mt-[25px]" src="images/img_user.svg" alt="user" />
          <Img
            className="h-[9px]"
            src="images/img_settings.svg"
            alt="settings"
          />
          <MenuItem>
            <div className="flex items-center justify-end">
              <Img
                className="h-6 mt-[26px] w-6"
                src="images/img_iconlinediscount.svg"
                alt="iconlinediscoun"
              />
            </div>
          </MenuItem>
          <Img
            className="h-3 mt-[25px]"
            src="images/img_user_gray_900.svg"
            alt="user_One"
          />
          <Img
            className="h-[9px]"
            src="images/img_settings.svg"
            alt="settings_One"
          />
          <MenuItem>
            <div className="flex items-center justify-end">
              <Img
                className="h-6 mt-[26px] w-6"
                src="images/img_iconlinedashboard.svg"
                alt="iconlinedashboa"
              />
            </div>
          </MenuItem>
          <Img
            className="h-3 mt-[25px]"
            src="images/img_user_gray_900.svg"
            alt="user_Two"
          />
          <Img
            className="h-[9px]"
            src="images/img_settings.svg"
            alt="settings_Two"
          />
          <MenuItem>
            <div className="flex items-center justify-end">
              <Img
                className="h-6 mt-[26px] w-6"
                src="images/img_checkmark.svg"
                alt="checkmark"
              />
            </div>
          </MenuItem>
          <Img
            className="h-3 mt-[25px]"
            src="images/img_user_gray_900.svg"
            alt="user_Three"
          />
          <Img
            className="h-[9px]"
            src="images/img_settings.svg"
            alt="settings_Three"
          />
          <MenuItem>
            <div className="flex items-center justify-end">
              <Img
                className="h-6 mt-[26px] w-6"
                src="images/img_iconlinenotification.svg"
                alt="iconlinenotific"
              />
            </div>
          </MenuItem>
          <Img
            className="h-3 mt-[25px]"
            src="images/img_user_gray_900.svg"
            alt="user_Four"
          />
          <Img
            className="h-[9px]"
            src="images/img_settings.svg"
            alt="settings_Four"
          />
          <MenuItem>
            <div className="flex items-center justify-end">
              <Img
                className="h-6 mt-[26px] w-6"
                src="images/img_iconlinesetting.svg"
                alt="iconlinesetting"
              />
            </div>
          </MenuItem>
          <Img
            className="h-3 mt-[25px]"
            src="images/img_user_gray_900.svg"
            alt="user_Five"
          />
          <MenuItem>
            <div className="flex h-14 items-center justify-end rounded-[10px]">
              <Img
                className="h-6 mt-4 w-6"
                src="images/img_iconlinelog.svg"
                alt="iconlinelog"
              />
            </div>
          </MenuItem>
          <Img
            className="h-px"
            src="images/img_settings_blue_gray_900.svg"
            alt="settings_Five"
          />
        </Menu>
      </Sidebar>
    </>
  );
};

Sidebar1.defaultProps = {};

export default Sidebar1;
