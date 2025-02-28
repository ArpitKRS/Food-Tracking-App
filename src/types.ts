export interface Order {
  id: string;
  restaurant: string;
  items: number;
  status: 'In Progress' | 'Delivered';
  time: string;
  userImg: string;
  orderDate: string;
  totalAmount?: number;
}

export interface Restaurant {
  id: string;
  name: string;
  cuisine: string;
  prepTime: number;
}