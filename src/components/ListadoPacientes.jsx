import { Paciente } from "./Paciente";
//import { useEffect } from "react";
import  "./ListadoPaciente.css";

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {

  // useEffect(() => {
  //   if (pacientes.length > 0) {
  //   console.log('Agregado un nuevo paciente');
  //   }
  // }, [pacientes]);


  return (
    <div className="md-50 col-sm mt-5 lg:40 " id="permitir-scroll">

      {pacientes && pacientes.length ? (      
      <>
          <h2 className="font-black text-center">Listado Pacientes</h2>
          <p className="mt-3 text-center">
            Administrar Pacientes y Citas
          </p>

          {pacientes.map( pacientetemporal =>(
              <Paciente
                key={pacientetemporal.id}
                pacientetemporal={pacientetemporal}
                setPaciente={setPaciente}
                eliminarPaciente={eliminarPaciente}
              />
          ))}
      </>
      ) : (
      <>
           <h2 className="font-black text-center">No hay pacientes</h2>
            <p className="mt-3 text-center">
              Comienza agregando pacientes
            </p>
      
      </>)
      }     

      
    
    </div>
  )
}

export default ListadoPacientes