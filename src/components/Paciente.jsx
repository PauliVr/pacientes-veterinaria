const Paciente = () => {
  return (
    <div className='m-3 bg-white shadow-md px-5 py-10 rounded-xl'>
      <p className='font-bold mb-3 text-gray-700 uppercase'>
        Nombre: <span className='font-normal normal-case'>Hook</span>
      </p>
      <p className='font-bold mb-3 text-gray-700 uppercase'>
        Nombre Propietario: <span className='font-normal normal-case'>Paulette</span>
      </p>
      <p className='font-bold mb-3 text-gray-700 uppercase'>
        Email: <span className='font-normal normal-case'>correo@correo.com</span>
      </p>
      <p className='font-bold mb-3 text-gray-700 uppercase'>
        Fecha Alta: <span className='font-normal normal-case'>10 Octubre 2022</span>
      </p>

      <p className='font-bold mb-3 text-gray-700 uppercase'>
        Síntomas:{' '}
        <span className='font-normal normal-case'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate sequi doloremque
          magni. Voluptates aut quisquam laudantium unde illo dolore delectus necessitatibus, saepe
          ipsum soluta consectetur veritatis accusamus ex tempore molestias?
        </span>
      </p>
    </div>
  );
};

export default Paciente;
