import{ useState } from 'react'
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from './components/AddTask';

function App() {

  const[showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks]= useState([
    {
        id: 1,
        text: 'Learn Javascript',
        day: 'Feb 23 at 9:00 am',
        reminder: true,
    },
    {
        id: 2,
        text: 'Learn React',
        day: 'Feb 23 at 1:00 pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Learn Docker',
        day: 'Feb 24 at 9:00 am',
        reminder: true,
    },
])

const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000)+1
  const newTask = { id, ...task}
  setTasks([...tasks, newTask])
}

const deleteTask = (id) => {
  setTasks(tasks.filter((tasks)=> tasks.id!== id))
}

const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id 
  ? {...task, reminder: !task.reminder} : task))
}

  return (
    <div className='container'>
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}  />
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? <Tasks tasks={tasks} 
      onDelete={deleteTask}
      onToggle={toggleReminder}
      />
      : 'Tasks list is empty'}
    </div>
  );
}

export default App;
