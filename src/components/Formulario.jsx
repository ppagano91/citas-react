import { useState, useEffect } from "react"

const Formulario = () => {
  // Hooks
  const [mascota, setMascota] = useState("")
  const [propietario, setPropietario] = useState("")
  const [email, setEmail] = useState("")
  const [fecha, setFecha] = useState("")
  const [sintomas, setSintomas] = useState("")

  const handleSUmbit = (e)=> {
    e.preventDefault();
    console.log(e.target.value)
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
            Alta
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
          value="Agregar Paciente"
        />
        
      </form>
    </div>
  )
}

export default Formulario