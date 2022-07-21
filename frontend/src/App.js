import Header from './components/Header'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginScreen from './screen/LoginScreen'
import HomeScreen from './screen/HomeScreen';
import Teacher from './screen/TeacherAddScreen';
import TeacherAddScreen from './screen/TeacherAddScreen';
import StudentScreen from './screen/StudentScreen';

function App() {
  return (
    <>
      <Router>
        <Header />
        <main className='py-3'>
          <Container>
            <Routes>
              <Route path='/login' element={<LoginScreen />} />
              <Route path='/' element={<HomeScreen />} />
              <Route path='/addteacher' element={<TeacherAddScreen />} />
              <Route path='/addstudent' element={<StudentScreen />} />
            </Routes>
          </Container>
        </main>
      </Router>
    </>
  )
}

export default App
