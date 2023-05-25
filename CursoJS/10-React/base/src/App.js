import Header from './components/Header'
import { Router } from 'react-router-dom'

import Routes from './routes';
import history from './service/history'

import GlobalStyles from './styles/globalStyles'

function App() {
  return (
    <Router history={history}>
      <Header />
      <Routes />
      <GlobalStyles/>
    </Router>
  );
}

export default App;
