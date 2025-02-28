import React from 'react';
import { Order } from '../types';
import { Clock } from 'lucide-react';

interface RecentOrdersProps {
  orders: Order[];
  isDarkMode: boolean;
}

const RecentOrders: React.FC<RecentOrdersProps> = ({ orders, isDarkMode }) => {
  return (
    <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-md p-6 mb-6`}>
      <h2 className="text-xl font-bold mb-4">Recent Orders</h2>
      
      {orders.length === 0 ? (
        <p className={`text-center py-6 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          No recent orders found
        </p>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <div 
              key={order.id}
              className={`flex items-center p-4 rounded-lg ${
                isDarkMode ? 'bg-gray-700' : 'bg-gray-50'
              }`}
            >
              <img
                src={order.userImg}
                alt="User"
                className="w-12 h-12 rounded-full object-cover"
              />
              
              <div className="ml-4 flex-1">
                <h3 className="font-medium">{order.restaurant}</h3>
                <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-500'}`}>
                  {order.items} {order.items === 1 ? 'item' : 'items'}
                </p>
              </div>
              
              <div className="text-right">
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                  order.status === 'In Progress'
                    ? 'bg-blue-100 text-blue-800'
                    : 'bg-green-100 text-green-800'
                }`}>
                  {order.status}
                </span>
                <div className="flex items-center mt-1 justify-end text-sm text-gray-500">
                  <Clock size={14} className="mr-1" />
                  {order.time}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecentOrders;