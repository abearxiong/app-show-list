import { createRoot } from 'react-dom/client';
export const App = () => {
  return (
    <div className='flex justify-center items-center h-screen bg-gray-200'>
      <h1 className='text-4xl font-bold text-gray-800'>Hello Vite + React!</h1>
    </div>
  );
};

createRoot(document.getElementById('root')!).render(<App />);
