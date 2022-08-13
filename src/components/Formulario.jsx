import { useState, useEffect } from "react";
import Error from "./Error";

const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {
  
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');

  const [error, setError] = useState(false);

  //cuando el formulario se carga, si hay un paciente en el state, se carga en los inputs
  useEffect(() => {
    if(Object.keys(paciente).length > 0){
      setNombre(paciente.nombre);
      setEmail(paciente.email);
      setFecha(paciente.fecha);
      setSintomas(paciente.sintomas);
    }
  }, [paciente]);
  


  const generarId = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now();

    return random + fecha;

  }

  const handleSubmit = (e) => {
    e.preventDefault();
   
    //Validación del formulario
    if([nombre, email, fecha, sintomas].includes('')) {
      alert('Todos los campos son obligatorios');
        setError(true);
        return;
      }
    setError(false);

    //Objeto de paciente
    const objetoPaciente = {
      nombre,
      email,
      fecha,
      sintomas
    }
    
    if(paciente.id){
      //Editar paciente existente
      objetoPaciente.id = paciente.id;
      const pacientesActualizados = pacientes.map(pacienteStatetemporal => pacienteStatetemporal.id ===
      paciente.id ? objetoPaciente : pacienteStatetemporal)

      setPacientes(pacientesActualizados);
      //Regresa al formulario a su estado inicial
      setPaciente({});

    }else{
      //Agregar paciente nuevo
      objetoPaciente.id = generarId();
      setPacientes([...pacientes, objetoPaciente]);
    }


    
    
    //Resetear el formulario
    setNombre('');
    setEmail('');
    setFecha('');
    setSintomas('');
  }
  
  

  
  
  return (

    <div className="col-sm ">
      <h2 className="font-black text-center">Seguimiento Pacientes</h2>

      <p className="mt-3 text-center">Registrar y Administrar Pacientes</p>

      <form 
          onSubmit={handleSubmit}
          className="shadow-lg p-3 mb-5 bg-body rounded"
            
      >
        {error && <Error mensaje="Todos los campos son obligatorios"/>}
      <div className="mb-4">
          <label htmlFor="paciente" className="text-primary fw-bold text-uppercase">Nombre</label>
          <input
            id="paciente" 
            type="text"
            placeholder="Nombre de Paciente"
            className="ms-2 mw-full p-2 border border-gray-400 rounded"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="email" className="text-primary fw-bold text-uppercase">Email</label>
          <input
            id="email" 
            type="email"
            placeholder="Email de Paciente"
            className="ms-2 mw-full p-2 border border-gray-400 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mt-4">
          <label htmlFor="alta" className="text-primary fw-bold text-uppercase">Alta</label>
          <input
            id="alta" 
            type="date"
            className="ms-2 mw-full p-2 border border-gray-400 rounded"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}

          />
        </div>

        <div className="mt-4">
          <label htmlFor="sintomas" className="text-primary fw-bold text-uppercase">Síntomas</label>
          <textarea
          id="sintomas"
          className="ms-2 mw-full p-2 border border-gray-400 rounded"
          placeholder="Describa los sintomas"
          value={sintomas}
          onChange={(e) => setSintomas(e.target.value)}
          
          />
        </div>

        <input 
        type="submit"
        className="d-grid gap-2 mt-3 mb-5"
        value={paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}
        
      
        />
      </form>

    </div>
  )
}

export default Formulario
