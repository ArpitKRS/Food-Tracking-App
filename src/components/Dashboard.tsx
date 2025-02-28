import React from 'react';
import { ShoppingBag, MapPin, Star, Share2 } from 'lucide-react';

interface DashboardProps {
  isDarkMode: boolean;
}

const Dashboard: React.FC<DashboardProps> = ({ isDarkMode }) => {
  return (
    <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-md p-6`}>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div>
          <h1 className="text-2xl font-bold">Welcome back, Alex!</h1>
          <p className={`mt-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-500'}`}>
            Track your food delivery in real-time
          </p>
        </div>
        
        <div className="mt-4 md:mt-0 flex items-center">
          <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-orange-100'} rounded-lg p-3 mr-4`}>
            <span className={`font-medium ${isDarkMode ? 'text-orange-300' : 'text-orange-500'}`}>
              Reward Points:
            </span>
            <span className="ml-2 font-bold">250</span>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        <ActionButton 
          icon={<ShoppingBag size={20} />} 
          label="Order" 
          isDarkMode={isDarkMode}
        />
        <ActionButton 
          icon={<MapPin size={20} />} 
          label="Track" 
          isDarkMode={isDarkMode}
        />
        <ActionButton 
          icon={<Star size={20} />} 
          label="Rate" 
          isDarkMode={isDarkMode}
        />
        <ActionButton 
          icon={<Share2 size={20} />} 
          label="Share" 
          isDarkMode={isDarkMode}
        />
      </div>
    </div>
  );
};

interface ActionButtonProps {
  icon: React.ReactNode;
  label: string;
  isDarkMode: boolean;
}

const ActionButton: React.FC<ActionButtonProps> = ({ icon, label, isDarkMode }) => {
  return (
    <button 
      className={`flex items-center justify-center p-4 rounded-lg ${
        isDarkMode 
          ? 'bg-gray-700 hover:bg-gray-600 text-white' 
          : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
      } transition-colors`}
    >
      {icon}
      <span className="ml-2 font-medium">{label}</span>
    </button>
  );
};

export default Dashboard;