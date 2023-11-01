import { Button } from "@radix-ui/themes";
import { FC, MouseEventHandler, ReactNode } from "react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import NextImage from "next/image";

interface MyProps {
    children?: ReactNode;
    iconNI: StaticImport;
    iconAlt: string;
    text?: string;
    variant?: "solid" | "soft" | "surface" | "outline" | "ghost" | undefined;
    callBack?: any;
  }

const STDButton: FC<MyProps> = (props) => {
  return (
    <Button size='3' variant = {props.variant} onClick={props.callBack}>
     <NextImage
      className=" w-7"
      src={props.iconNI}
      alt={props.iconAlt}
      />
      {props.text}
    </Button>
  )
}

export default STDButton