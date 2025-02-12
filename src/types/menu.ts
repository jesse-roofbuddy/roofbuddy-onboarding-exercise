export interface MenuItem {
  id: number;
  name: string;
  description: string;
  country: string;
  price: number;
}

export interface MenuItemsData {
  menuItems: MenuItem[];
}
