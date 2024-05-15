import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Header';
import Modal from '../Components/Modal';
import { useAppStore } from '../stores/useAppStore';
import Notification from '../Components/Notification';

export default function Layout() {
  const loadFromStorage = useAppStore((state) => state.loadFromStorage);

  useEffect(()=> {
    loadFromStorage()
  }, [])
  return (
    <>
        <Header />
        {/* Outlet se inyecta en todas las rutas por enfrente y las demas componentes se inyectan aqui */}
        <main className='container mx-auto py-16'>
            <Outlet />
        </main>
        
        <Modal />
        <Notification />
    </>
  )
}
