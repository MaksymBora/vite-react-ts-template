import { Route, Routes } from 'react-router-dom';
import { Home } from '@/Pages/Home';
import { Contact } from '@/Pages/Contact';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="contacts" element={<Contact />} />
      </Route>
    </Routes>
  );
}
