import { useEffect, useState } from "react"
import Botones from "./Botones"

const PregsContainer=({db, dbNum}) => { 
    const [botonDisabled,setBotonDisabled] =useState(false)
    const [preg,setPreg] =useState(0)

    const next = () => { 
        preg === db[dbNum].preguntas.length - 1 ? setPreg(0):setPreg(preg+1) 
    }
    const habilitar=(()=>{
        setBotonDisabled(false)
    })
    useEffect(()=>{
        db[dbNum].preguntas[preg].tipoTarea === "verbalResponse" ? setBotonDisabled(false) : setBotonDisabled(true)   
    },[db[dbNum].preguntas[preg]])
        
    return(
    
        <>
            <p className="mt-5 p-5 text-orange-300 font-bold">{db[dbNum].escenario}</p>
                    <div className="text-center rounded-lg  text-white border-orange-300 border-2 mx-40 p-5 " >
                        <p  className="mt-3  text-orange-300 font-bold text-2xl">Tarea {preg+1} de {db[dbNum].preguntas.length} </p>
                        <p className="mt-3">{db[dbNum].preguntas[preg].texto}</p>
                            <div className="block h-32 p-5 ">
                                {
                                    db[dbNum].preguntas[preg].tipoTarea === "opinionScale5" ? 
                                        <Botones habilitar={habilitar}/>
                                    : 
                                    <></>
                                
                                }   
                            </div>

                        <p className="mt-3">Tiempo de tarea: <span className=" text-orange-300">{db[dbNum].preguntas[preg].tiempo}</span></p>
                        
                        <button  disabled={botonDisabled } className=" mt-5 border-2 border-gray-50 p-3 rounded-lg text-white bg-slate-800  hover:bg-violet-500 focus:bg-violet-900" onClick={next}>Continuar</button>                    
                    </div>
    
        </>
) }

export default PregsContainer