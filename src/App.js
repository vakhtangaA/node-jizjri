
import './App.css';
import Langing from './components/pages/langing/Langing';
import Personal from './components/pages/personal/Personal';
import Technical from './components/pages/technical/Technical'
import Covid from './components/pages/covid/Covid';
import Fb  from './components/Fb';
import { BrowserRouter,Route, Switch } from 'react-router-dom';
import About from './components/pages/about/About';
import Submit from './components/pages/submit/Submit';
import Thanks from './components/pages/thanks/Thanks';
import Test from './components/Test';
import SubmApp from './components/pages/submapps/SubmApp';
import Err from './components/pages/err/Err';









function App() {
  return (

   <BrowserRouter>
      
        <Switch>
           
            <Route path='/' component= { Langing} exact />
            <Route path='/personal' component= { Personal} />
            <Route path='/technical' component= { Technical} />
            <Route path='/covid' component= { Covid} />
            <Route path='/about' component= { About} />
            <Route path='/submit' component= {Submit} />
            <Route path='/thanks' component= {Thanks} />
            <Route path='/submapp' component= {SubmApp} />
            <Route path='*' component= {Err} />
           
        </Switch>
         
    </BrowserRouter>
           

     
    
  );
}

export default App;
