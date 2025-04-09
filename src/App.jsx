import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Button from './components/button';
import Grid from './components/grid';

function App() {
  return (
    <>
      <div className="min-h-screen">
        <Header />
        <Button />
        <Grid />
        <Footer />
      </div>
    </>
  )
}

export default App;