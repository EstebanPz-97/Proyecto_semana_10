import React, { useState } from 'react';
import './contactenos.css';


//value={nombre} onChange={manejarNombre}
function Contactenos() {
   const [persona, setPersona] = useState({
       nombre:"",
       apellido:"",
       correo:"",
       telefono:"",
       sugerencia:"",
    });

   const formulario = (event) => {
       const {name, value} = event.target;
       setPersona(prevPersona => ({
           ...prevPersona, 
           [name]: value
       }))

       console.log(persona);
   }

   //onChange(e){
   //    this.setState({
   //        [e.target.name]: e.target.value
   //    })
   //}

   

   const submit = (event) => {
       event.preventDefault();
       console.log(persona);
   }

    return(
        <div>
            <h2 className="H2">CONTACTENOS</h2>
            <form className="conatiner_center" onSubmit={submit}>
                <div >
                   <label htmlfor="" className="label">Nombre:</label>
                   <input  className="input" type= "text" value={persona.nombre} name="nombre" onChange={formulario}/>
                </div>
                <div>
                   <label htmlfor="" className="label">Apellido:</label>
                   <input className="input" type= "text" value={persona.apellido} name="apellido" onChange={formulario}/>
                </div>
                <div>
                   <label htmlfor="" className="label">Correo:</label>
                   <input  className="input" type= "email" value={persona.correo} name="correo" onChange={formulario}/>
                </div>
                <div>
                   <label htmlfor="" className="label" > Telefono:</label>
                   <input className="input" type= "number" value={persona.telefono} name="telefono" onChange={formulario}/>
                </div>
                <div className="textarea">
                  <label htmlfor="" className="label">Comentario:</label>                   
                  <textarea  value={persona.sugerencia} name="sugerencia" onChange={formulario}/>
                </div>
                <div className="button">
                   <button >
                       Submit
                  </button>
                  <span style={{color: 'green'}}></span>
                  
                </div>
                        
               
           </form>
        
        </div>
    )
}

export default Contactenos;