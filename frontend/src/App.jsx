import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthPage from './authPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<AuthPage/>}  ></Route>
      </Routes>
  </Router>
  ) 
}

export default App
