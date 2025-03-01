import React from 'react';
import { Home, Heart, ClipboardList, Settings, Utensils } from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isDarkMode: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({
  activeTab,
  setActiveTab,
  isDarkMode,
}) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: <Home size={20} />, action: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
    { id: 'favorites', label: 'Favorites', icon: <Heart size={20} />, action: () => setActiveTab('favorites') },
    { id: 'orders', label: 'Orders', icon: <ClipboardList size={20} />, action: () => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }) },
    { id: 'settings', label: 'Settings', icon: <Settings size={20} />, action: () => setActiveTab('settings') },
  ];

  return (
    <div className={`w-20 md:w-64 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
      <div className="p-4 flex items-center justify-center md:justify-start">
        <Utensils className="text-orange-500" size={24} />
        <span className="hidden md:block ml-2 text-xl font-bold text-orange-500">
          HappyBelly
        </span>
      </div>
      <nav className="mt-8">
        <ul>
          {navItems.map((item) => (
            <li key={item.id} className="mb-2">
              <button
                onClick={() => {
                  setActiveTab(item.id);
                  item.action();
                }}
                className={`w-full flex items-center p-3 md:px-6 ${
                  activeTab === item.id
                    ? 'bg-orange-100 text-orange-500'
                    : isDarkMode
                      ? 'text-gray-300 hover:bg-gray-700'
                      : 'text-gray-600 hover:bg-gray-100'
                } rounded-lg transition-colors`}
              >
                <span className="flex-shrink-0">{item.icon}</span>
                <span className="hidden md:block ml-3">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
