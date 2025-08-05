import Link from 'next/link';
import React from 'react';


const HomeLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', fontFamily: 'Arial, sans-serif' }}>
      {/* Sidebar */}
      <aside style={{ width: '200px', backgroundColor: '#343a40', color: 'white', padding: '1rem' }}>
        <h2>Sidebar</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
            <li>
            <Link href='/about' style={{ margin: '1rem 0' }}>Dashboard</Link>
            </li>

            <li>
            <Link href='/dashboard/setting' style={{ margin: '1rem 0' }}>Setting</Link>

            </li>
         
         
        </ul>
      </aside>

      {/* Main Content Area */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Header */}
        <header style={{ backgroundColor: '#007bff', color: 'white', padding: '1rem' }}>
          <h1>Home Layout Header</h1>
        </header>

        {/* Content */}
        <main style={{ flex: 1, padding: '1rem' }}>
         {children}
        </main>
      </div>
    </div>
  );
};

export default HomeLayout;
