export const Paciente = ({pacientetemporal, setPaciente, eliminarPaciente}) => {
  


  //Destructuring de pacientetemporal
  const {nombre, email, fecha, sintomas, id} = pacientetemporal;

  const handleEliminar = () =>{
    const respuestaEliminar = confirm('¿Estás seguro de eliminar el registro este paciente?');

    if (respuestaEliminar) {
      eliminarPaciente(id);
    }
  }
  
  return (
    <div>
         <div className="shadow-lg p-3 mb-5 bg-body ms-2 rounded">
        <p className="text-secondary fw-bold text-uppercase">Nombre:</p>
        <span>{nombre}</span>

        <p className="text-secondary fw-bold text-uppercase">Email:</p>
        <span>{email}</span>

        <p className="text-secondary fw-bold text-uppercase">Fecha Alta:</p>
        <span>{fecha}</span>

        <p className="text-secondary fw-bold text-uppercase">Síntomas:</p>
        <span>{sintomas}</span>

        <div className="d-flex justify-content-between">
          <button
            type="button"
            className="px-5 py-2 bg-success text-white rounded 
             hover-shadow"
             onClick={() => setPaciente(pacientetemporal)}
             > Editar
          </button>

          <button
            type="button"
            className="px-5 py-2 bg-danger text-white rounded 
             hover-shadow"
             onClick={handleEliminar}>
            Eliminar
          </button>
        </div>

      </div>
    </div>
  )
}
