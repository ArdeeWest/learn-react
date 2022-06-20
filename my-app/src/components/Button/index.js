import React from "react";
import clsx from "clsx";
import { Icon } from "../Icon";
import styles from "./Button.module.scss";

export const Button = (props) => {
  const {
    children,
    className,
    size,
    color,
    iconType,
    type = "button",
    ...rest
  } = props;
  const render = (
    <span className={styles.btnSpan}>
      {iconType && <Icon type={iconType} />}
      {children || null}
    </span>
  );

  return (
    <button
      className={clsx([
        styles.container,
        {
          [styles[size]]: size,
          [styles[`container_${color}`]]: color,
        },
        className,
      ])}
      {...rest}
    >
      {render}
    </button>
  );
};
