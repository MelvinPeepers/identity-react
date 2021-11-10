import './App.css';
import netlifyIdentity from 'netlify-identity-widget';

netlifyIdentity.init();

function App() {

  const openWidget = () => {
    netlifyIdentity.open('login');
  }

  return (
        <>
          <button onClick={openWidget}>Open Widget</button>
        </>
  );
}

export default App;
