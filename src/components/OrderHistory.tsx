import React from 'react';
import { Order } from '../types';
import { Calendar } from 'lucide-react';

interface OrderHistoryProps {
  orders: Order[];
  isDarkMode: boolean;
}

const OrderHistory: React.FC<OrderHistoryProps> = ({ orders, isDarkMode }) => {
  // Format date to readable format
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  return (
    <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-md p-6`}>
      <h2 className="text-xl font-bold mb-4">Order History</h2>
      
      {orders.length === 0 ? (
        <p className={`text-center py-6 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          No order history found
        </p>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <div 
              key={order.id}
              className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">{order.restaurant}</h3>
                  <div className="flex items-center mt-1 text-sm text-gray-500">
                    <Calendar size={14} className="mr-1" />
                    {formatDate(order.orderDate)}
                  </div>
                </div>
                
                <div className="text-right">
                  {order.totalAmount && (
                    <span className="font-bold">${order.totalAmount.toFixed(2)}</span>
                  )}
                  <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-500'}`}>
                    {order.items} {order.items === 1 ? 'item' : 'items'}
                  </p>
                </div>
              </div>
              
              <div className="mt-3 pt-3 border-t border-gray-200 flex justify-between items-center">
                <span className="text-sm text-gray-500">Delivered in {order.time}</span>
                <button className={`text-sm font-medium ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                  Reorder
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrderHistory;