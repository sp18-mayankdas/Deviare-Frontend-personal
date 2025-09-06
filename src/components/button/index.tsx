import { Button as AntdButton } from "antd";
import type { ButtonProps as AntdButtonProps } from "antd/es/button";

interface IButtonProps extends AntdButtonProps {
    color?: "default",
    children:React.ReactNode,
}

export const Button = (props: IButtonProps) => {
  return <AntdButton {...props} />;
};
