import { useState } from 'react'
import Header from './components/Header'
import Formulario from './components/Formulario'
import ListadoPacientes from './components/ListadoPacientes'
import './App.css'


function App() {
  const [pacientes, setPacientes] = useState([])
  const [paciente, setPaciente] = useState({})

  return (
    <div className="container mx-auto mt-20">
      <Header></Header>
      <div className="mt-12 md:flex">
        <Formulario
          paciente={paciente}
          pacientes={pacientes}
          setPacientes={setPacientes}
        />
        <ListadoPacientes      
          pacientes={pacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
      </div>
    </div>
  )
}

export default App
