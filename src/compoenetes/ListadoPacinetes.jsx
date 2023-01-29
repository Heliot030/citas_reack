
import Pacientes from "./Pacientes"

const ListadoPacinetes = ({ pacientes ,setPaciente , eliminandoPacienete }) => {

  return (

    <div className='md:w-1/2 lg:w-2/3 md:h-screen overflow-y-scroll'>

      {/* //nos dice si arreglo tiene elemrnto 0 notiene nada

     */}      
     {pacientes && pacientes.length ? (
      <>
         <h2 className="font-black text-3xl text-center"> Listado de Pacientes</h2>
         <p className="text-xl font-black mt-5 mb-10 text-center">
           Administra tus{' '}
           <span className="text-indigo-600 font-bold">Tus Pacientes y Citas</span>
         </p>
         {pacientes.map((pacientes) => (
   
           <Pacientes
             key={pacientes.id}
             pacientes={pacientes}
             setPaciente = {setPaciente}
             eliminandoPacienete = {eliminandoPacienete}
           />
         )
         )}
         </>
     ) : (
      <>
      <h2 className="font-black text-3xl text-center"> No hay pacientes</h2>
         <p className="text-xl font-black mt-5 mb-10 text-center">
           Comienza agregando pacientes{' '}
           <span className="text-indigo-600 font-bold">Y apareseran en este lugar </span>
         </p>
      </>
     )}

   



    </div>

  )
}

export default ListadoPacinetes
