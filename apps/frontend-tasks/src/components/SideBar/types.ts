import { ListItemIconProps } from "@mui/material/ListItemIcon/ListItemIcon";
import { ReactElement, ReactNode } from "react";

export interface SideBarItems<ItemProps> extends Partial<ListItemIconProps> {
  title: string;
  icon: ReactNode;
  itemContainer?: React.FC<ItemProps>;
  itemProps?: ItemProps;
}

export interface SideBarProps<ItemProps> {
  items: SideBarItems<ItemProps>[];
  window: Window;
}
