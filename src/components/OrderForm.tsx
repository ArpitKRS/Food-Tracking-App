import React, { useState } from 'react';

interface OrderFormProps {
  onSubmit: (formData: any) => void;
  isDarkMode: boolean;
}

const OrderForm: React.FC<OrderFormProps> = ({ onSubmit, isDarkMode }) => {
  const [formData, setFormData] = useState({
    address: '',
    distance: 2,
    items: 1,
    restaurant: 'Burger Palace',
  });

  const [errors, setErrors] = useState({
    address: '',
  });

  const restaurants = [
    { id: '1', name: 'Burger Palace', cuisine: 'American' },
    { id: '2', name: 'Pizza Heaven', cuisine: 'Italian' },
    { id: '3', name: 'Taco Fiesta', cuisine: 'Mexican' },
    { id: '4', name: 'Sushi Express', cuisine: 'Japanese' },
    { id: '5', name: 'Noodle House', cuisine: 'Chinese' },
    { id: '6', name: 'Veggie Delight', cuisine: 'Vegetarian' },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    setFormData({
      ...formData,
      [name]: name === 'distance' || name === 'items' ? Number(value) : value,
    });
    
    // Clear error when user types
    if (name === 'address' && errors.address) {
      setErrors({ ...errors, address: '' });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.address.trim()) {
      setErrors({ ...errors, address: 'Address is required' });
      return;
    }
    
    onSubmit(formData);
  };

  return (
    <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-md p-6 mb-6`}>
      <h2 className="text-xl font-bold mb-4">Order Tracking</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2 font-medium">Restaurant</label>
          <select
            name="restaurant"
            value={formData.restaurant}
            onChange={handleChange}
            className={`w-full p-3 rounded-lg border ${
              isDarkMode 
                ? 'bg-gray-700 border-gray-600 text-white' 
                : 'bg-white border-gray-300'
            }`}
          >
            {restaurants.map((restaurant) => (
              <option key={restaurant.id} value={restaurant.name}>
                {restaurant.name} ({restaurant.cuisine})
              </option>
            ))}
          </select>
        </div>
        
        <div className="mb-4">
          <label className="block mb-2 font-medium">Delivery Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter your delivery address"
            className={`w-full p-3 rounded-lg border ${
              isDarkMode 
                ? 'bg-gray-700 border-gray-600 text-white' 
                : 'bg-white border-gray-300'
            } ${errors.address ? 'border-red-500' : ''}`}
          />
          {errors.address && (
            <p className="mt-1 text-red-500 text-sm">{errors.address}</p>
          )}
        </div>
        
        <div className="mb-4">
          <label className="block mb-2 font-medium">
            Distance (km): {formData.distance}
          </label>
          <input
            type="range"
            name="distance"
            min="1"
            max="10"
            value={formData.distance}
            onChange={handleChange}
            className="w-full"
          />
        </div>
        
        <div className="mb-6">
          <label className="block mb-2 font-medium">
            Number of Items: {formData.items}
          </label>
          <input
            type="range"
            name="items"
            min="1"
            max="10"
            value={formData.items}
            onChange={handleChange}
            className="w-full"
          />
        </div>
        
        <button
          type="submit"
          className="w-full py-3 px-4 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 transition-colors"
        >
          Track Order
        </button>
      </form>
    </div>
  );
};

export default OrderForm;