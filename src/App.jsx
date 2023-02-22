import './App.css'
import Header from './components/Header';
import { Provider } from 'react-redux';
import store from './redux/store';
import BookingInput from './components/BookingInput';

function App() {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <BookingInput />
      </div>
    </Provider>
  )
}

export default App
