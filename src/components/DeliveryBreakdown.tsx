import React from 'react';
import { Clock, Truck, Home } from 'lucide-react';

interface DeliveryBreakdownProps {
  preparationTime: number;
  transitTime: number;
  deliveryWindow: { min: number; max: number };
  isDarkMode: boolean;
}

const DeliveryBreakdown: React.FC<DeliveryBreakdownProps> = ({
  preparationTime,
  transitTime,
  deliveryWindow,
  isDarkMode
}) => {
  return (
    <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-md p-6`}>
      <h2 className="text-xl font-bold mb-4">Delivery Breakdown</h2>
      
      <div className="space-y-6">
        <div className="flex items-start">
          <div className={`p-3 rounded-full ${isDarkMode ? 'bg-gray-700' : 'bg-orange-100'}`}>
            <Clock className="text-orange-500" size={20} />
          </div>
          <div className="ml-4">
            <h3 className="font-medium">Preparation Time</h3>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              {preparationTime} minutes
            </p>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
              <div 
                className="bg-orange-500 h-2 rounded-full" 
                style={{ width: `${(preparationTime / (preparationTime + transitTime)) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className={`p-3 rounded-full ${isDarkMode ? 'bg-gray-700' : 'bg-orange-100'}`}>
            <Truck className="text-orange-500" size={20} />
          </div>
          <div className="ml-4">
            <h3 className="font-medium">Transit Time</h3>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              {transitTime} minutes
            </p>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
              <div 
                className="bg-orange-500 h-2 rounded-full" 
                style={{ width: `${(transitTime / (preparationTime + transitTime)) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className={`p-3 rounded-full ${isDarkMode ? 'bg-gray-700' : 'bg-orange-100'}`}>
            <Home className="text-orange-500" size={20} />
          </div>
          <div className="ml-4">
            <h3 className="font-medium">Estimated Delivery</h3>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              {deliveryWindow.min}-{deliveryWindow.max} minutes
            </p>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
              <div 
                className="bg-green-500 h-2 rounded-full" 
                style={{ width: '100%' }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className={`mt-6 p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-orange-50'} text-center`}>
        <p className="font-medium">
          Your order will arrive in approximately{' '}
          <span className="text-orange-500 font-bold">
            {preparationTime + transitTime} minutes
          </span>
        </p>
      </div>
    </div>
  );
};

export default DeliveryBreakdown;