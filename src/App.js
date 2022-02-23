import{ useState } from 'react'
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {

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

const deleteTask = (id) => {
  setTasks(tasks.filter((tasks)=> tasks.id!== id))
}

const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id 
  ? {...task, reminder: !task.reminder} : task))
}

  return (
    <div className='container'>
      <Header/>
      {tasks.length > 0 ? <Tasks tasks={tasks} 
      onDelete={deleteTask}
      onToggle={toggleReminder}
      />
      : 'Tasks list is empty!'}
    </div>
  );
}

export default App;
