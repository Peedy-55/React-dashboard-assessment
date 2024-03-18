
import {Route, Routes, Navigate, BrowserRouter} from 'react-router-dom'
import './App.css';
import SignIn from './components/sign-in';
import Dashboard from './components/dashboard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        
        <Route path="/sign-in" element={<SignIn/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="*" element={<Navigate to="/sign-in" replace />} />

      
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
