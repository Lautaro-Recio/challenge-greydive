import db from "../../../db/db.json"

const Video=({dbNum}) => { 
    return(
        <iframe className="p-5 w-full h-[500px]" src={db[dbNum].linkVideo} ></iframe>
    )
}

export default Video