const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
  const { nombre, propietario, email, fecha, sintomas, id } = paciente;

  const handleEliminar = () => {
    const respuesta = confirm('Deseas eliminar ese paciente?');

    if (respuesta) {
      eliminarPaciente(id);
    }
  };

  return (
    <div className='mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl'>
      <p className='font-bold mb-3 text-gray-700 uppercase'>
        Nombre: <span className='font-normal normal-case'>{nombre}</span>
      </p>
      <p className='font-bold mb-3 text-gray-700 uppercase'>
        Nombre Propietario: <span className='font-normal normal-case'>{propietario}</span>
      </p>
      <p className='font-bold mb-3 text-gray-700 uppercase'>
        Email: <span className='font-normal normal-case'>{email}</span>
      </p>
      <p className='font-bold mb-3 text-gray-700 uppercase'>
        Fecha Alta: <span className='font-normal normal-case'>{fecha}</span>
      </p>

      <p className='font-bold mb-3 text-gray-700 uppercase'>
        Síntomas: <span className='font-normal normal-case'>{sintomas}</span>
      </p>

      <div className='flex justify-between mt-8'>
        <button
          type='button'
          className='flex py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-md'
          onClick={() => setPaciente(paciente)}
        >
          <img className='mr-3' src='https://img.icons8.com/ios-glyphs/30/FFFFFF/edit--v1.png' />
          <p>Editar</p>
        </button>
        <button
          type='button'
          className='flex py-2 px-10 bg-red-600 hover:bg-ired-700 text-white font-bold uppercase rounded-md'
          onClick={handleEliminar}
        >
          <img
            className='mr-3'
            src='https://img.icons8.com/ios-glyphs/30/FFFFFF/filled-trash.png'
          />
          <p>Eliminar</p>
        </button>
      </div>
    </div>
  );
};

export default Paciente;
