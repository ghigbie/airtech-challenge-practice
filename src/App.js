import './App.css';
import Layout from './components/functional/Layout';
import IndecisionApp from './components/classBased/IndecisionApp';
import TodoListHooks from './components/todo_list/TodoListHooks';
import WordTableApp from './components/code_sandbox/WordTableApp';

const options = [
        'Walk the dog',
        'Check the mail',
        'Do the laundry'
];

const App = () => (
    <Layout className="App">
      <IndecisionApp/>
      <hr/>
      <TodoListHooks />
      <hr/>
      <WordTableApp />
    </Layout>
);


export default App;
