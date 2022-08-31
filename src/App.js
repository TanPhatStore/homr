import logo from './logo.svg';
import './App.css';
import {Routes , Route} from 'react-router-dom'
import Header from './header'
import HomePage from './HomePage'
import ListProductPage from './ListProductPage';


function App() {

  function Content () {
    return (<Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/giamgia' element={<ListProductPage title={'Adidas'} />} />
    </Routes>)
  }
 
  return (
    <div className="container-fluid">
        <Header />
        <div className='content'>
          <Content />
        </div>
    </div>
  );
}

export default App;
