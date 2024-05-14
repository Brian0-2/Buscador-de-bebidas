import { Outlet } from 'react-router-dom';
import Header from '../Components/Header';

export default function Layout() {
  return (
    <>
        <Header />
        {/* Outlet se inyecta en todas las rutas por enfrente y las demas componentes se inyectan aqui */}
        <main className='container mx-auto py-16'>
            <Outlet />
        </main>
    </>
  )
}
