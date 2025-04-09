import Button from './components/button';
import './App.css'
import Grid from './components/grid';

function App() {
  return (
    <>
      <div>
        <header>
          <nav>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
        </header>
      </div>
      <Button />
      <Grid />
      <div>
        <footer>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </footer>
      </div>
    </>
  )
}

export default App
