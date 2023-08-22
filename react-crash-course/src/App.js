import './App.css';

// arrow way to define function
const Person = (props) => {
  return (
    <>
      <h1>Name: {props.name}</h1>
      <h2>Last Name: {props.lastName}</h2>
      <h2>Age: {props.age}</h2>
    </>
  )
  
}

function App() {
  const name = 'Ben';
  const isNameShowing = true;

  return (
    <div className="App">
    
    <Person name={'Ben'} lastName={'Doe'} age={30}/>
    <Person name='Jane' lastName='Doe' age={30} />
    </div>
  );
}

export default App;
