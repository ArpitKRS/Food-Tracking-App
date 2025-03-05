# Food Delivery Tracking Interface

HappyBelly!!
A simplified version of a food delivery tracking interface built with React and Tailwind CSS.

## Features

- Order tracking form with delivery details and estimated delivery time
- Delivery breakdown section showing preparation time, transit time, and delivery window
- Recent Orders section with mock orders and their status
- Order history list showing past deliveries
- Responsive design for mobile and desktop
- Dark/light mode toggle
- Form validation
- Restaurant/cuisine selector dropdown

## Project Structure

```
src/
├── components/
│   ├── Dashboard.tsx       # Main dashboard with user info and action buttons
│   ├── DeliveryBreakdown.tsx # Shows delivery stages with associated times
│   ├── OrderForm.tsx       # Form for tracking orders
│   ├── OrderHistory.tsx    # List of past orders
│   ├── RecentOrders.tsx    # Recent orders with status
│   └── Sidebar.tsx         # Navigation sidebar
├── hooks/
│   └── useDeliveryCalculation.ts # Custom hook for delivery time calculation
├── types.ts                # TypeScript interfaces
├── App.tsx                 # Main application component
├── index.css               # Global styles
└── main.tsx               # Application entry point
```

## Setup Instructions

1. Clone the repository
2. Install dependencies:
   ```
   yarn install
   ```
3. Start the development server:
   ```
   yarn dev
   ```
4. Open your browser to the URL shown in the terminal

## Design Decisions

- **Component Structure**: Separated UI into logical components for better maintainability
- **Custom Hook**: Created `useDeliveryCalculation` hook to handle delivery time calculations
- **Dark/Light Mode**: Implemented theme toggle for better user experience
- **Responsive Design**: Used Tailwind CSS for responsive layout that works on mobile and desktop
- **Mock Data**: Used realistic mock data for orders and history
- **Form Validation**: Added simple validation for required fields

## Future Improvements

With more time, I would:

1. Add more comprehensive form validation
2. Implement state management with Context API or Redux for larger applications
3. Add animations for status changes and transitions
4. Implement real-time updates with WebSockets
5. Add more detailed order tracking with map integration
6. Improve accessibility features
7. Add comprehensive unit and integration tests
8. Implement user authentication
9. Add order filtering and search functionality
10. Create a more sophisticated restaurant selection system with ratings and reviews

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- Lucide React (for icons)
