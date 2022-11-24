import {BrowserRouter} from 'react-router-dom'
import RoutesContaier from "./Components/RoutesContainer/RoutesContainer"
const App = () => { 
    
    return(
        <BrowserRouter>
           <RoutesContaier/>
        </BrowserRouter>
    )
}

export default App