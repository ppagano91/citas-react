import { useState, useEffect } from 'react'
import Header from './components/Header'
import Formulario from './components/Formulario'
import ListadoPacientes from './components/ListadoPacientes'
import './App.css'


function App() {
  const intialStatePacientes = JSON.parse(localStorage.getItem('pacientes')) ?? []
  const [pacientes, setPacientes] = useState(intialStatePacientes);
  const [paciente, setPaciente] = useState({});

  // Este useEffect es equivalente a initialStatePaciente
  /*
  useEffect(() => {
    const obtenerLocalStorage = () =>{
      const pacientesLocalStorage = JSON.parse(localStorage.getItem('pacientes')) ?? [];
      setPacientes(pacientesLocalStorage);
    };

    obtenerLocalStorage();
  }, [])
  */
  

  useEffect(() => {
    localStorage.setItem('pacientes',JSON.stringify(pacientes))
  }, [pacientes]);
  

  const eliminarPaciente = (id) =>{
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !==id);

    setPacientes(pacientesActualizados)
    
  }

  return (
    <div className="container mx-auto mt-20">
      <Header></Header>
      <div className="mt-12 md:flex">
        <Formulario
          paciente={paciente}
          setPaciente={setPaciente}
          pacientes={pacientes}
          setPacientes={setPacientes}
        />
        <ListadoPacientes      
          pacientes={pacientes}
          paciente={paciente}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  )
}

export default App
