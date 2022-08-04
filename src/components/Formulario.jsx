import { useState } from 'react';

const Formulario = () => {
  //Variables de estado que utilizaremos en nuestro componente
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    //Validación del formulario
    if ([nombre, propietario, email, fecha, sintomas].includes('')) {
      console.log('hay al menos un campo vacío');
    } else {
      console.log('Todos los campos llenos');
    }
  };

  return (
    <div className='md:w-1/2 lg:w-2/5  mx-5'>
      <h2 className='font-black text-3xl text-center'>Seguimiento Pacientes </h2>
      <p className='text-lg mt-5 text-center mb-10'>
        Añade Pacientes y <span className='text-indigo-600 font-bold'>Administralos</span>
      </p>
      <form onSubmit={handleSubmit} className='bg-white shadow-md rounded-lg py-10 px-5 mb-10'>
        <div className='mb-5'>
          <label htmlFor='mascota' className='block text-gray-700 font-bold uppercase'>
            Nombre Mascota
          </label>
          <input
            id='mascota'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            type='text'
            placeholder='Nombre de la Mascota'
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className='mb-5'>
          <label htmlFor='propietario' className='block text-gray-700 font-bold uppercase'>
            Nombre Propietario
          </label>
          <input
            id='propietario'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            type='text'
            placeholder='Nombre del Propietario'
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>

        <div className='mb-5'>
          <label htmlFor='email' className='block text-gray-700 font-bold uppercase'>
            Email
          </label>
          <input
            id='email'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            type='email'
            placeholder='Email contacto propietario'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className='mb-5'>
          <label htmlFor='alta' className='block text-gray-700 font-bold uppercase'>
            Alta
          </label>
          <input
            id='alta'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            type='date'
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>

        <div className='mb-5'>
          <label htmlFor='sintomas' className='block text-gray-700 font-bold uppercase'>
            Síntomas
          </label>
          <textarea
            placeholder='Describe los Síntomas'
            id='sintomas'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>

        <input
          type='submit'
          className='bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all'
          value='Agregar Paciente'
        />
      </form>
    </div>
  );
};

export default Formulario;
