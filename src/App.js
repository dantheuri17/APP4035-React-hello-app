// import logo from './logo.svg';
import './App.css';
// import Greeter from './Greeter'
// import Clock from './Clock'
import Clock3 from './Clock3'

function App() {
  return (
		<div>
			<Clock3 continent="Africa" city="Nairobi" clockType='Interactive' /> <hr />
			<Clock3 continent="Europe" city="London" clockType='Interactive' /> <hr />
			<Clock3 continent="Australia" city="Sydney" clockType="Interactive" /> <hr />
			<Clock3 continent="America" city="New York" clockType="Interactive" /> <hr />
			<Clock3 continent="Asia" city="Tokyo" clockType="Interactive" /> <hr />
		</div>
	);
  }
  
  export default App;
  
  
  
  // <Greeter greeting='hello' name='John' />