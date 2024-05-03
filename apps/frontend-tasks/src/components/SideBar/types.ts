import { ListItemIconProps } from "@mui/material/ListItemIcon/ListItemIcon";
import { FC, PropsWithChildren, ReactNode, ComponentProps } from "react";


export interface SideBarItems extends Partial<ListItemIconProps> {
  title: string;
  icon: ReactNode;
  itemContainer?: FC;
  itemContainerProps?: ComponentProps<FC<any>>;
}

export interface SideBarProps {
  items?: SideBarItems[];
  header?: ReactNode;
  drawerRef?: React.RefObject<HTMLDivElement>;
}
