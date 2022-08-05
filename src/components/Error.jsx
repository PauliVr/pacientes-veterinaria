const Error = ({ children }) => {
  return (
    <div className='bg-red-800 font-bold text-white p-3 mb-3 uppercase rounded-md text-center'>
      {children}
    </div>
  );
};

export default Error;
