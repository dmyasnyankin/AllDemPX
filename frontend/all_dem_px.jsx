import Root from './components/root';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
    let store = configureStore();

    window.getState = store.getState;
    window.dispatch = store.dispatch; 

    let root = document.getElementById('root');
    ReactDOM.render(<Root store={store}/>, root);
});