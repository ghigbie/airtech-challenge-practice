import './App.css';
import Layout from './components/functional/Layout';
import IndecisionApp from './components/classBased/IndecisionApp';

const options = [
        'Walk the dog',
        'Check the mail',
        'Do the laundry'
];

const App = () => (
    <Layout className="App">
      <IndecisionApp/>
    </Layout>
);


export default App;
