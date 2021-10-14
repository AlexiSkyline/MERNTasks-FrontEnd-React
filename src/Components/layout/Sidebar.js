import React from 'react'
import { ListadoProyectos } from '../Projects/ListadoProyectos';
import { NuevoProyecto } from '../Projects/NuevoProyecto';

export const Sidebar = () => {
    return (
        <aside>
            <h1>MERN<span>Task</span></h1>

            <NuevoProyecto />

            <div className="proyectos">
                <h2>Tus Proyectos</h2>

                <ListadoProyectos />
            </div>
        </aside>
    );
}
