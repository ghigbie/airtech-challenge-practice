import './App.css';
import Layout from './components/functional/Layout';
import IndecisionApp from './components/classBased/IndecisionApp';
import TodoListHooks from './components/todo_list/TodoListHooks';
import WordTableApp from './components/code_sandbox/WordTableApp';
import ContextOneApp from './components/contest_one/ContextOneApp';

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
      <hr />
      <ContextOneApp />
      <hr/>
      <WordTableApp />
    </Layout>
);


export default App;
