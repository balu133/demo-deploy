import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import axios from 'axios'
function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  useEffect(()=>{
               axios
                .get('http://localhost:8080')
                .then(res=>setTasks(res.data))
            },[])
  const handleAddTask = () => {
    let data={
               task: task,
               status:false,
            }
    axios
    .post('http://localhost:8080/add',data)
    .then(res=>console.log(res))
    .catch(err=>console.log(err));
     setTask('');
     setTasks([...tasks,data])
  };
  const handleDelete=(id)=>{
              axios
              .delete(`http://localhost:8080/delete/${id}`)
              .then(res=>console.log(res))
              .catch(err=>console.log(err))
              window.location.reload()
            }
    
    console.log(task)
  return (
    <>
      <div className="container">
        <div className="todo-box-1">
          <input
            type="text"
            placeholder="Enter the task"
            onChange={(e) => setTask(e.target.value)}
            name='task'
            value={task}
            required
          />
          <button className="btn btn-primary" onClick={handleAddTask}>
            Add
          </button>
        </div>
        <div className="todo-box-2">
          {tasks.length > 0 ? (
            <ul className="list-group mt-3">
              {tasks.map((t, index) => (
                <li key={index} className="list-group-item border border-dark">
                  {t.task}  
                  <img src='https://t4.ftcdn.net/jpg/03/46/38/39/360_F_346383913_JQecl2DhpHy2YakDz1t3h0Tk3Ov8hikq.jpg' onClick={()=>handleDelete(t.id)}/>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-muted mt-3">No tasks added yet.</p>
          )}
        </div>
      </div>
    </>
  );
}

export default App;