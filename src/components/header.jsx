import React from 'react';
import { useState } from 'react';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <header className="bg-white shadow-sm fixed w-full z-50">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <h1 className="text-2xl font-bold text-gray-900">VTG</h1>
                    </div>

                    {/* Menú Desktop */}
                    <div className="hidden md:flex space-x-8">
                        <a href="#" className="text-gray-700 hover:text-indigo-600 transition-colors">Inicio</a>
                        <a href="#" className="text-gray-700 hover:text-indigo-600 transition-colors">Servicios</a>
                        <a href="#" className="text-gray-700 hover:text-indigo-600 transition-colors">Proyectos</a>
                        <a href="#" className="text-gray-700 hover:text-indigo-600 transition-colors">Contacto</a>
                    </div>

                    {/* Botón de Menú Móvil */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-gray-700 hover:text-indigo-600 focus:outline-none"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Menú Móvil Desplegable */}
                {isMenuOpen && (
                    <div className="md:hidden mt-2 bg-white shadow-lg rounded-lg">
                        <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-indigo-100">Inicio</a>
                        <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-indigo-100">Servicios</a>
                        <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-indigo-100">Proyectos</a>
                        <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-indigo-100">Contacto</a>
                    </div>
                )}
            </nav>
        </header>
    );
}

export default Header;
