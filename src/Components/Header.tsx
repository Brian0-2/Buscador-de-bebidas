import { useEffect, useMemo } from "react";
import { NavLink, useLocation
        // Link 
} from "react-router-dom"
import { useAppStore } from "../stores/useAppStore";

export default function Header() {

    //useLocation es un hook especial de react-router-doom
    const {pathname} = useLocation();

    //Destectar la pagina de inicio retorna true o false 
    const isHome = useMemo(() => pathname === '/', [pathname]);
    const fethCategories = useAppStore((state) => state.fetchCategories);
    
    useEffect(()=>{
        fethCategories()
    },[]);

  return (
    <header className={isHome ? 'bg-header bg-center bg-cover' : 'bg-slate-800'}>
        <div className="mx-auto container px-5 py-16">
            <div className="flex justify-between items-center">
                <div className="">
                    <img className="w-32" src="/logo.svg" alt="logotipo" />
                </div>
                <nav className="flex gap-4">
                    <NavLink className={({isActive}) => isActive? 'text-orange-500 uppercase font-bold' : 'text-white uppercase font-bold' } to="/">Inicio</NavLink>
                    <NavLink className={({isActive}) => isActive? 'text-orange-500 uppercase font-bold' : 'text-white uppercase font-bold' } to="/favoritos">Favoritos</NavLink>
                </nav>
            </div>
            {isHome && (
                <form
                    className="md:w-1/2 2xl:w-1/3 bg-orange-600 my-32 p-10 rounded-lg shadow-xl space-y-6"
                    action=""
                >
                    <div className="space-y-4">
                        <label 
                            htmlFor="ingredient"
                            className="block text-white uppercase font-extrabold text-lg"
                        >
                            Nombre o Ingredientes
                        </label>
                        <input 
                            id="ongredient"
                            type="text" 
                            name="ingredient"
                            className="p-3 w-full rounded-lg focus:outline-none"
                            placeholder="Nombre o Ingrediente. Ej: Vodka, Tequila, Café"
                        />
                    </div>
                    <div className="space-y-4">
                        <label 
                            htmlFor="ingredient"
                            className="block text-white uppercase font-extrabold text-lg"
                        >
                           Categoria
                        </label>
                        <select 
                            id="ongredient"
                            name="ingredient"
                            className="p-3 w-full rounded-lg focus:outline-none"
                        >
                            <option value="">--Seleccione--</option>
                        </select>
                    </div>
                    <input type="submit" value="Buscar Recetas" className="cursor-pointer bg-orange-800 hover:bg-orange-900 text-white font-extrabold w-full p-2 rounded-lg uppercase" />
                </form>
            )}
        </div>
    </header>
  )
}
