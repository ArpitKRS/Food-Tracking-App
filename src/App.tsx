import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import OrderForm from './components/OrderForm';
import DeliveryBreakdown from './components/DeliveryBreakdown';
import RecentOrders from './components/RecentOrders';
import OrderHistory from './components/OrderHistory';
import { Order } from './types';
import { useDeliveryCalculation } from './hooks/useDeliveryCalculation';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [orderDetails, setOrderDetails] = useState({
    address: '',
    distance: 0,
    items: 1,
    restaurant: 'Burger Palace',
  });
  
  const { preparationTime, transitTime, deliveryWindow } = useDeliveryCalculation(
    orderDetails.distance,
    orderDetails.items,
    orderDetails.restaurant
  );

  const [recentOrders, setRecentOrders] = useState<Order[]>([
    {
      id: '1',
      restaurant: 'Pizza Heaven',
      items: 2,
      status: 'In Progress',
      time: '25 mins',
      userImg: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
      orderDate: new Date(Date.now() - 1000 * 60 * 30).toISOString(),
    },
    {
      id: '2',
      restaurant: 'Taco Fiesta',
      items: 3,
      status: 'Delivered',
      time: '15 mins',
      userImg: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
      orderDate: new Date(Date.now() - 1000 * 60 * 60).toISOString(),
    },
    {
      id: '3',
      restaurant: 'Sushi Express',
      items: 1,
      status: 'In Progress',
      time: '35 mins',
      userImg: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
      orderDate: new Date(Date.now() - 1000 * 60 * 90).toISOString(),
    },
  ]);

  const [orderHistory, setOrderHistory] = useState<Order[]>([
    {
      id: '4',
      restaurant: 'Noodle House',
      items: 2,
      status: 'Delivered',
      time: '45 mins',
      userImg: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
      orderDate: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
      totalAmount: 24.99
    },
    {
      id: '5',
      restaurant: 'Veggie Delight',
      items: 1,
      status: 'Delivered',
      time: '30 mins',
      userImg: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
      orderDate: new Date(Date.now() - 1000 * 60 * 60 * 48).toISOString(),
      totalAmount: 18.50
    },
    {
      id: '6',
      restaurant: 'Burger Palace',
      items: 3,
      status: 'Delivered',
      time: '25 mins',
      userImg: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
      orderDate: new Date(Date.now() - 1000 * 60 * 60 * 72).toISOString(),
      totalAmount: 32.75
    },
  ]);

  const handleOrderSubmit = (formData: any) => {
    setOrderDetails(formData);
    
    // Add to recent orders
    const newOrder: Order = {
      id: (recentOrders.length + orderHistory.length + 1).toString(),
      restaurant: formData.restaurant,
      items: formData.items,
      status: 'In Progress',
      time: `${preparationTime + transitTime} mins`,
      userImg: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
      orderDate: new Date().toISOString(),
    };
    
    setRecentOrders([newOrder, ...recentOrders]);
  };

  const [isDarkMode, setIsDarkMode] = useState(false);
  
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`flex min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100'}`}>
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} isDarkMode={isDarkMode} />
      <div className="flex-1 p-6 md:p-8">
        <div className="flex justify-end mb-4">
          <button 
            onClick={toggleDarkMode}
            className={`px-4 py-2 rounded-lg ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-800'}`}
          >
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
        <Dashboard isDarkMode={isDarkMode} />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div>
            <OrderForm onSubmit={handleOrderSubmit} isDarkMode={isDarkMode} />
            <DeliveryBreakdown 
              preparationTime={preparationTime}
              transitTime={transitTime}
              deliveryWindow={deliveryWindow}
              isDarkMode={isDarkMode}
            />
          </div>
          <div>
            <RecentOrders orders={recentOrders} isDarkMode={isDarkMode} />
            <OrderHistory orders={orderHistory} isDarkMode={isDarkMode} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;