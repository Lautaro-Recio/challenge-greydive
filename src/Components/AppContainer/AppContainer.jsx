import db from "../../../db/db.json"
import Video from "../datosContainer/Video"
import PregsContainer from "../pregsContainer/PregsContainer"

const AppContainer=({dbNum}) => { 
    
    const procesado = db[dbNum].transcripcion.split("<br/>").join(" ")

    return(
        <>
            <div className=" text-center  " key={db[dbNum].cliente}>
                <h1 className="text-center text-5xl font-bold text-white  ">{db[dbNum].cliente}</h1>
                <Video dbNum={dbNum}/>                
                <p  className="p-10 text-white whitespace-pre-line"> {procesado} </p>
                <PregsContainer db={db} dbNum={dbNum}/>
            </div>
        </>
) }

export default AppContainer