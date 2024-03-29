import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-lg" };
const variants = {
  fill: {
    blue_gray_900_01: "bg-blue_gray-900_01 text-blue_gray-200",
    red_300: "bg-red-300 text-white-A700",
    cyan_700: "bg-cyan-700 shadow-bs text-gray-50",
    blue_gray_900: "bg-blue_gray-900",
    gray_900: "bg-gray-900 text-white-A700",
  },
  outline: {
    blue_gray_800: "border border-blue_gray-800 border-solid text-cyan-700",
    cyan_700: "border border-cyan-700 border-solid text-cyan-700",
  },
};
const sizes = { xs: "p-2", sm: "p-3.5" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf([
    "blue_gray_900_01",
    "red_300",
    "cyan_700",
    "blue_gray_900",
    "gray_900",
    "blue_gray_800",
  ]),
};

export { Button };
