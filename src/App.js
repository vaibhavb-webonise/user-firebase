import { Provider } from 'react-redux';
import './App.css';
import UserForm from './components/User-Form';
import { store } from './redux/store';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Provider store={store}>
          <UserForm />
        </Provider>
      </header>
    </div>
  );
}

export default App;
