import './App.css';
import { NavLink, BrowserRouter, Routes, Route} from 'react-router-dom';
import { QueryClientProvider, QueryClient} from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import HomePage from './components/Home.page';
import SuperHeroesPage from './components/SuperHeroes.page';
import RQSuperHeroesPage from './components/RQSuperHeroes.page';
import RQSuperHeroPage from './components/RQSuperHero.page';

const queryClient = new QueryClient()
function App() {
  
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/super-heroes">Traditional Super Heroes</NavLink>
              </li>
              <li>
                <NavLink to="/rq-super-heroes">RQ Super Heroes</NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/super-heroes' element={<SuperHeroesPage />}></Route>
          <Route path='/rq-super-heroes' element={<RQSuperHeroesPage />}></Route>
          <Route path='/rq-super-heroes/:heroId' element={<RQSuperHeroPage />}></Route>
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right'/>
    </QueryClientProvider>
  );
}

export default App;
