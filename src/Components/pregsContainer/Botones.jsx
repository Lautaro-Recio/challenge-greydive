
const nums =[1,2,3,4,5]

const Botones=({habilitar}) => { 
    return(
        <>
            <div className="flex mx-[33%] space-x-6  ">
                {nums.map ((num)=>{
                    return(
                        <button key={num} onClick={habilitar}  id={num} className="border-2 border-gray-50 p-3 rounded-lg text-white bg-slate-800  hover:bg-violet-500 focus:bg-violet-900" >{num}</button>
                        )
                    })}
            </div>
            <p className="text-gray-500 mt-4">*Selecciona una opcion para avanzar*</p>
        </>
    )
}

export default Botones