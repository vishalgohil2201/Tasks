import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/style.css'

import ToDoList from './All-Tasks/ToDoList';
import AgeCalculator from './All-Tasks/AgeCalculator';
import MathCalculator from './All-Tasks/MathCalculator'
import TicTacToe from './All-Tasks/TicTacToe';
import StudentResult from './All-Tasks/StudentResult'


function App() {

  return (
    <>

      <div className="container">
        <ToDoList></ToDoList>
        <AgeCalculator></AgeCalculator>
        <MathCalculator></MathCalculator>
        <TicTacToe></TicTacToe>
        <StudentResult></StudentResult>
      </div>
    </>
  )
}

export default App;
