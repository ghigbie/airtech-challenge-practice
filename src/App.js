import './App.css';
import IndecisionApp from './components/classBased/IndecisionApp';

const options = [
        'Walk the dog',
        'Check the mail',
        'Do the laundry'
];

const App = () => (
    <div className="App">
      <IndecisionApp />
    </div>
);


export default App;
