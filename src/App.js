import './App.css';
import Layout from './components/functional/Layout';
import IndecisionApp from './components/classBased/IndecisionApp';
import TodoListHooks from './components/todo_list/TodoListHooks';
import WordTableApp from './components/code_sandbox/WordTableApp';
import ContextTodoApp from './components/context_one/ContextTodoApp';
import {TodosProvider} from './components/context_one/context/TodosContext';
import ReducerContextCounter from './components/reducer_context_app/ReducerContextCounter';
import {CountProvider} from './components/reducer_context_app/context/CountContext';

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
       <TodosProvider>
         <ContextTodoApp />
       </TodosProvider>
      <hr/>
      <WordTableApp />
      <hr />
      <CountProvider >
        <ReducerContextCounter />
      </CountProvider>
    </Layout>
);


export default App;
