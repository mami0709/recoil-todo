import reactLogo from './assets/react.svg'
import './App.css'
import AddTask from './components/AddTask'
import InputTask from './components/InputTask'
import { RecoilRoot } from 'recoil'

function App() {

  return (
    <RecoilRoot>
      <div className="task">
        <InputTask />
        <AddTask />
        
      </div>
    </RecoilRoot>
  )
}

export default App;
