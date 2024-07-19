import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import { ReactQueryDevtools } from 'react-query/devtools'
import SuperHeroesPage from './components/SuperHeroes.page'
import RQSuperHeroesPage from './components/RQSuperHeroes.page'
import HomePage from './components/Home.page'
import { QueryClient, QueryClientProvider } from 'react-query'
import RQSuperHeroPage from './components/RQSuperHero.page'

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/super-heroes">Traditional Super Heroes</Link>
              </li>
              <li>
                <Link to="/rq-super-heroes">RQ Super Heroes</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path='rq-super-heroes/:heroId' element={<RQSuperHeroPage/>}></Route>
            <Route path="/super-heroes" element={<SuperHeroesPage />}></Route>
            <Route
              path="/rq-super-heroes"
              element={<RQSuperHeroesPage />}
            ></Route>
            <Route path="/" element={<HomePage />}></Route>
          </Routes>
        </div>
      </Router>
      <ReactQueryDevtools intialIsOpen={false} position='bottom-right' />
    </QueryClientProvider>
  );
}

export default App