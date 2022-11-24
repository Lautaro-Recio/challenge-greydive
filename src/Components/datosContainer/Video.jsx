import db from "../../../db/db.json"

const Video=({dbNum}) => { 
    return(
        <iframe className="p-5 w-full md:h-[500px] h-60" src={db[dbNum].linkVideo} ></iframe>
    )
}

export default Video