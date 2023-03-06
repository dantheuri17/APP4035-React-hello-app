// import logo from './logo.svg';
import './App.css';
// import Greeter from './Greeter'
// import Clock from './Clock'
import Clock2 from './Clock2'

function App() {
  return (
		<div>
			<Clock2 continent="Africa" city="Nairobi" /> <hr />
			<Clock2 continent="Europe" city="London" /> <hr />
			<Clock2 continent="Australia" city="Sydney" /> <hr />
			<Clock2 continent="America" city="New York" /> <hr />
			<Clock2 continent="Asia" city="Tokyo" /> <hr />
		</div>
	);
  }
  
  export default App;
  
  
  
  // <Greeter greeting='hello' name='John' />