import {useState , useEffect} from 'react';
import Error from './Error';
/* import Pacientes from './Pacientes'; */
const Formulario = ( { pacientes, setPacientes , paciente , setPaciente}) => {

  //Aqui definimos los estados 
  const [ nombre , setNombre] = useState('');
  const [ propietario , setPropietario] = useState('');
  const [ email , setEmail] = useState('');
  const [ fechas , setFechas] = useState('');
  const [ sintomas , setSintomas] = useState('');

  const [error, setError] = useState(false);

  useEffect(()=>{ //escucha los cambios que sucedan
    if (Object.keys(paciente).length > 0){
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setFechas(paciente.fechas)
      setSintomas(paciente.sintomas)
    }else{
      console.log('No haya nada');
    }
  },[paciente])


 

  const generarId = () =>{
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);
    return fecha + random;
  } 
  const handleSubmit = (e) =>{
    e.preventDefault();
    //console.log('Enviando el formulario');
    //vakidacion de formulario
    if([nombre, propietario, email, fechas, sintomas].includes('')){
      console.log('Hay almenos un formulario vacio');

      setError(true);
      return;
    }
    setError(false);
    //objeto de Pacientes
    const objetoPaciente = {
      nombre, 
      propietario, 
      email, 
      fechas, 
      sintomas,
  
    }
    if (paciente.id) {
      
      //editando el registro
      objetoPaciente.id = paciente.id
      const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id ===
        paciente.id ? objetoPaciente : pacienteState)

        setPacientes(pacientesActualizados)
        setPaciente({})
    } else {
      // Nuevo registro
      objetoPaciente.id = generarId();
      setPacientes([...pacientes, objetoPaciente]);
    }
   
   
    //formatear el formulario
    setNombre('');
    setPropietario('');
    setEmail('');
    setFechas('');
    setSintomas('');
  }
  

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center"> Seguimiento de Pacientes</h2>

      <p className="font-black text-lg mt-5 text-center mb-5">
        Añade Pacientes y {' '}
        <span className="text-indigo-600 font-bold text-2xl ">administralos</span>
      </p>
       <form 
       onSubmit={handleSubmit}
       className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
        
       {error && <Error> Todos los campos son obligados</Error>} 
        <div className="mb-5"> 
          <label htmlFor="mascota" className="block text-gray-700 font-bold uppercase">Nombre Mascota </label>
          <input 
          id="mascota"
          type="text"
          placeholder="Nobre de la moscota"
          className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounder-md"
          value={nombre}
          onChange = {(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="mx-5 my-10">
          <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">Nombre Propietario</label>
          <input 
          id="propietario"
          type="text"
          placeholder="Nobre deL propietario"
          className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounder-md"
          value={propietario}
          onChange = {(e) => setPropietario(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Email</label>
          <input 
          id="email"
          type="emil"
          placeholder="Email Contacto Porpietario"
          className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounder-md"
          value={email}
          onChange = {(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="Alta" className="block text-gray-700 uppercase font-bold">Alta</label>
          <input 
          id="Alta"
          type="date"
          
          className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounder-md"
          value={fechas}
          onChange = {(e) => setFechas(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">describe Sintomas</label>
        <textarea
        id="sintomas"
        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounder-md"
        placeholder="describe los sintomas"
        value={sintomas}
        onChange = {(e) => setSintomas(e.target.value)}
        />
        </div>

        <input
        type="submit"
        className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-opacity"
        value={paciente.id ? 'Editar paciente ' : 'Agregar paciente'} 
        />
        
       </form>
    </div>
  )
  }

export default Formulario;
