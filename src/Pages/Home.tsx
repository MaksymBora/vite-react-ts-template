import { Link, Outlet } from 'react-router-dom';

export function Home() {
  return (
    <div style={{ display: 'block' }}>
      <img
        src="https://static.vecteezy.com/system/resources/thumbnails/000/371/208/small/1465.jpg"
        alt="welcome"
        style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
      />
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '15px',
        }}
      >
        <Link to="/">Home</Link>
        <Link to="contacts">Contacts</Link>
      </div>

      <Outlet />
    </div>
  );
}
