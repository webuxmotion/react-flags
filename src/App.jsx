import { Routes, Route } from 'react-router-dom';

import { HeaderContainer } from './containers/Header.container';
import { Main } from './components/Main';

import { HomePage } from './pages/HomePage';
import { Details } from './pages/Details';
import { NotFound } from './pages/NotFound';
import { usePreload } from './hooks/use-preload';

function App() {
  // const [ready] = usePreload(['currencies', 'carriers']);
  const ready = true;

  return (
    <>
      {ready && (
        <>
          <HeaderContainer />
          <Main>
            <Routes>
              <Route exact path="/" element={
                <HomePage />
              } />
              <Route path="/country/:name" element={<Details />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Main>
        </>
      )}
    </>
  );
}

export default App;
