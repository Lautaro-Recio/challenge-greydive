import {Route,Routes} from 'react-router-dom'
import AppContainer from '../AppContainer/AppContainer'
const RoutesContainer=() => { 
    return(
       <>
        <div className="bg-violet-900">
                <h1 className="text-center bg-violet-500 text-3xl text-white p-2">Challenge Greydive</h1>
                <Routes>
                    <Route path="/viamo" element={<AppContainer dbNum={0} />}/>
                    <Route path="/nebula" element={<AppContainer dbNum={1} />}/>
                </Routes>
            </div>
       </>
    )
}

export default RoutesContainer