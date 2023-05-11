import { AppRouter } from './router/AppRouter';
import { Navbar } from './components/Navbar/Navbar';

const App = () => {
  return (
    <>
      <Navbar />
      <AppRouter />
    </>
  );
};

export default App;
