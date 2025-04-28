import './App.css'
// import { FontAwesomeIcon} from '@fortawesome/react-fontawesome' ;
// import { faHouse } from '@fortawesome/free-solid-svg-icons' ;
import Header  from './components/Header'
import Footer  from './components/Footer'
import { Route , Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import Home from './pages/Home'
import Watchhistory from './pages/Watchhistory'

function App() {

  return (
    <>
      {/* <h1 className="text-primary ">Media Player</h1>
      <FontAwesomeIcon icon={faHouse} /> */}

      <Header  />
         {/* contents */}

        <Routes>
            <Route path='/' element={ <Landing/>} />
           <Route path='/home' element={ <Home/>} />
           <Route path='/watchhistory' element={ <Watchhistory/>} />
        </Routes>

        {/* footer content */}
      <Footer/>
    </>
  )
}

export default App
