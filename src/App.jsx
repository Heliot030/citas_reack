import {useState , useEffect} from 'react';
import Formulario from './compoenetes/Formulario';
import Headers from './compoenetes/Headers';
import ListadoPacinetes from './compoenetes/ListadoPacinetes';

function App() {
  
  const [pacientes , setPacientes ] = useState([]);
  const [paciente , setPaciente] = useState({});

  useEffect(() => {
    const pacientesLocal = JSON.parse(localStorage.getItem('pacientes'));
    pacientesLocal?.length > 0 && setPacientes(pacientesLocal);
  }, []);

useEffect(() => {
  localStorage.setItem('pacientes', JSON.stringify( pacientes ));
}, [pacientes])



  const eliminandoPacienete = id =>{
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id)
  setPacientes(pacientesActualizados);
  }
  return (
    <div className='container mx-auto mt-20'>
      <Headers 
      />
      <div className='mt-12 md:flex '>
        <Formulario
        pacientes = {pacientes}
        setPacientes = {setPacientes} 
        paciente = {paciente}
        setPaciente =  {setPaciente}
        />
        <ListadoPacinetes 
        pacientes = {pacientes}
        setPaciente = {setPaciente}
        eliminandoPacienete = {eliminandoPacienete}
        />
      </div>

    </div>
  )
}

export default App
