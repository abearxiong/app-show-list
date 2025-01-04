import { Outlet } from 'react-router-dom';
import { LayoutMenu } from './LayoutMenu';

export const LayoutMain = () => {
  return (
    <div className='bg-slate-200' style={{ display: 'flex', height: '100%' }}>
      <LayoutMenu />
      <main style={{ flexGrow: 1, height: '100%', overflow: 'auto' }}>
        <Outlet />
      </main>
    </div>
  );
};
