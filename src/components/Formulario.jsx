import { useState, useEffect } from "react"
import Error from "./Error";

const Formulario = ({pacientes, paciente, setPacientes, setPaciente}) => {
  // Hooks
  const [mascota, setMascota] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");

  const [error, setError] = useState(false)

  useEffect(() => {
    if (Object.keys(paciente).length >0){
      setMascota(paciente.mascota);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setFecha(paciente.fecha);
      setSintomas(paciente.sintomas)
    }
  }, [paciente])


  

  const generarId = () =>{
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);

    return random + fecha;
  }

  const handleSUmbit = (e)=> {
    e.preventDefault();

    if([mascota, propietario, email, fecha, sintomas].includes('')){
      console.log("Existen campos vacíos");
      setError(true);
      return;
    }
    setError(false);

    // Crea o actualiza paciente
    const ObjetoPaciente = {
      mascota,
      propietario,
      email, 
      fecha,
      sintomas,
    }

    if (paciente.id){
      ObjetoPaciente.id=paciente.id;

      const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? ObjetoPaciente : pacienteState)

      setPacientes(pacientesActualizados)
      setPaciente({})

    }
    else{
      ObjetoPaciente.id = generarId();
      setPacientes([...pacientes, ObjetoPaciente]);
    }


    // Reiniciar formulario
    setMascota("")
    setPropietario("")
    setEmail("")
    setFecha("")
    setSintomas("")
    }

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añade Paciente y {""}
        <span className="text-indigo-600 font-bold"> Adminístralos</span>
      </p>
      <form 
        action="" 
        className='bg-white shadow-md rounded-lg py-10 px-5 mb-10'
        onSubmit={(e)=>handleSUmbit(e)}
        >
          {error &&
          <Error><p>Todos los campos son obligatorios</p></Error>}
          
        <div className='mb-5'>
          <label htmlFor="mascota" className='block text-gray-700 uppercase font-bold'>Nombre Mascota</label>
          <input
            id='mascota'
            type="text"
            placeholder='Nombre de la Mascota'
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={mascota}
            onChange={(e)=>setMascota(e.target.value)}
            />
        </div>

        <div className='mb-5'>
          <label htmlFor="propietario" className='block text-gray-700 uppercase font-bold'>Nombre Propietario</label>
          <input
            id='propietario'
            type="text"
            placeholder='Nombre del Propietario'
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={propietario}
            onChange={(e)=>setPropietario(e.target.value)}
            />
        </div>

        <div className='mb-5'>
          <label htmlFor="email" className='block text-gray-700 uppercase font-bold'>Email</label>
          <input
            id='email'
            type="email"
            placeholder='Email de Contacto'
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            />
        </div>

        <div className='mb-5'>
          <label htmlFor="alta" className='block text-gray-700 uppercase font-bold'>
            Cita
          </label>
          <input
            id='alta'
            type="date"
            className="border-2 w-full p-2 mt-2"
            value={fecha}
            onChange={(e)=>setFecha(e.target.value)}
            />
        </div>

        <div className='mb-5'>
          <label htmlFor="sintomas" className='block text-gray-700 uppercase font-bold'>
            Síntomas
          </label>
          <textarea
            id='sintomas'
            type="date"
            placeholder='Describe los sintomas'
            className="border-2 w-full p-2 mt-2"
            value={sintomas}
            onChange={(e)=>setSintomas(e.target.value)}
            />
        </div>

        <input 
          type="submit" 
          className='bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors' 
          value={paciente.id? "Editar Paciente":"Agregar Paciente"}
        />
        
      </form>
    </div>
  )
}

export default Formulario