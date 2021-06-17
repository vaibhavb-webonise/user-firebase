import { Provider } from 'react-redux';
import './App.css';
import UserForm from './components/User-Form';
import Users from './components/Users';
import { store } from './redux/store';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Provider store={store}>
          <UserForm />
          <Users />
        </Provider>
      </header>
    </div>
  );
}

export default App;
               