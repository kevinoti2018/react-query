import {BrowserRouter as Router, Routes, Route,Link} from 'react-router-dom'
import { QueryClientProvider,QueryClient} from 'react-query'
import Home from './components/Home.page';
import SuperHeroes from './components/SuperHeroes.page';
import RQSuperHeroes from './components/RQSuperHeroes.page';
function App() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient} >
    <Router>
     <div>
      <nav>
        <ul>
          <li>
            <Link to="/" >Home </Link>
          </li>
          <li>
            <Link to="/super-heroes" > Traditional Super Heroes</Link>
          </li>
          <li>
            <Link to="/rq-super-heroes" >RQ Super Heroes </Link>
          </li>
        </ul>
      </nav>
      <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/super-heroes' element={<SuperHeroes/>} />
         <Route path='/rq-super-heroes' element={<RQSuperHeroes/>} />
      </Routes>
     </div>
    </Router>
     
    </QueryClientProvider>
  )
}

export default App
