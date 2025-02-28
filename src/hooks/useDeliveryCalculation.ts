import { useState, useEffect } from 'react';

export const useDeliveryCalculation = (
  distance: number,
  items: number,
  restaurant: string
) => {
  const [preparationTime, setPreparationTime] = useState(0);
  const [transitTime, setTransitTime] = useState(0);
  const [deliveryWindow, setDeliveryWindow] = useState({ min: 0, max: 0 });

  useEffect(() => {
    // Calculate preparation time based on restaurant and items
    const basePreparationTime = getBasePreparationTime(restaurant);
    const calculatedPreparationTime = basePreparationTime + (items * 3);
    setPreparationTime(calculatedPreparationTime);

    // Calculate transit time based on distance
    const calculatedTransitTime = Math.max(5, Math.round(distance * 2));
    setTransitTime(calculatedTransitTime);

    // Calculate delivery window
    const totalTime = calculatedPreparationTime + calculatedTransitTime;
    setDeliveryWindow({
      min: totalTime - 5,
      max: totalTime + 10
    });
  }, [distance, items, restaurant]);

  return { preparationTime, transitTime, deliveryWindow };
};

// Helper function to get base preparation time for different restaurants
const getBasePreparationTime = (restaurant: string): number => {
  const restaurantTimes: Record<string, number> = {
    'Burger Palace': 10,
    'Pizza Heaven': 15,
    'Taco Fiesta': 8,
    'Sushi Express': 20,
    'Noodle House': 12,
    'Veggie Delight': 10
  };

  return restaurantTimes[restaurant] || 10; // Default to 10 minutes
};