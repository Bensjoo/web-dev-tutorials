import './App.css';

function App() {
  const name = 'Ben';
  const isNameShowing = true;

  return (
    <div className="App">
    
    {name ? (
      <>
        <h1>{name}</h1>
      </>
    ) : (
      <>
        <h1>test</h1>
        <h2>There is no name</h2>
      </>
    )}
    </div>
  );
}

export default App;
