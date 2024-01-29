import React from "react";

const sizeClasses = {
  txtBarlowRegular16: "font-barlow font-normal",
  txtBarlowMedium14: "font-barlow font-medium",
  txtBarlowMedium16: "font-barlow font-medium",
  txtBarlowMedium14Bluegray200: "font-barlow font-medium",
  txtBarlowSemiBold14Gray50: "font-barlow font-semibold",
  txtBarlowSemiBold14WhiteA700: "font-barlow font-semibold",
  txtBarlowMedium14Gray300: "font-barlow font-medium",
  txtBarlowMedium14Cyan700: "font-barlow font-medium",
  txtBarlowRegular14Gray300: "font-barlow font-normal",
  txtBarlowMedium14TealA400: "font-barlow font-medium",
  txtBarlowMedium12: "font-barlow font-medium",
  txtBarlowSemiBold28: "font-barlow font-semibold",
  txtBarlowSemiBold16: "font-barlow font-semibold",
  txtBarlowRegular14WhiteA700: "font-barlow font-normal",
  txtBarlowSemiBold20: "font-barlow font-semibold",
  txtBarlowMedium16Bluegray200: "font-barlow font-medium",
  txtBarlowRegular16Bluegray200: "font-barlow font-normal",
  txtBarlowMedium12TealA400: "font-barlow font-medium",
  txtBarlowRegular12: "font-barlow font-normal",
  txtBarlowSemiBold16Cyan700: "font-barlow font-semibold",
  txtBarlowSemiBold14: "font-barlow font-semibold",
  txtBarlowRegular14: "font-barlow font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
