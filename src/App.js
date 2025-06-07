import React, { useState } from 'react'
import TackCard from './Components/TackCard'
function App() {
  const taskObj = {title:'',description:""}
  const [isCreateTask, setIsCreateTask] =useState(false)
  const [task, setTask] = useState(taskObj)
  const [taskList, setTaskList] =useState([])
  const handelCreateTaskForm = (action)=>{
    setIsCreateTask(action)
  }
    const handleCloseForm= ()=>{
      setIsCreateTask(false)
  }
  const handelSubmitForm = (e)=>{
    e.preventDefault()
    setTaskList([...taskList, task])
    setIsCreateTask(false)
  }
  const handleFormInputs=(e)=>{
    e.preventDefault()
    const {name, value} = e.target
    let obj = {}
    obj[name] =value
    setTask({...task, ...obj}) 
  }
  return (
    <main style={{backgroundColor:"#ececec", height:'100vh', position:"relative"}}>
      <header className='header'>
        <div className=''>
          <button type='button' name='create_task' className='createButton' onClick={()=>handelCreateTaskForm(true)}>+</button>
        </div>
      </header>
      <TackCard
        data={taskList}
      />
      {isCreateTask ? <div className='taskBox'>
        <form className='taskForm'>
        <div style={{width:"100%", display:"flex", flexDirection:"row", alignItems:"end", justifyItems:"center"}}>
            <button style={{alignSelf:"end", padding:"5px", background:"red", outline:"none", border:"none"}} onClick={()=>handleCloseForm()}>X</button>
        </div>
            <div className='taskFieldBox'>
                <label className='taskFieldName'>Title</label>
                <input type='text' name='title' placeholder='Title' className='taskInputField' onChange={(e)=>handleFormInputs(e)}/>
            </div>
            <div className='taskFieldBox'>
                <label className='taskFieldName'>Description</label>
                <textarea rows={'5'} name='description' placeholder='Type your note ...' className='taskInputField' onChange={(e)=>handleFormInputs(e)}/>
            </div>
            <button name='submit' type='submit' className='taskSubmitButton' onClick={(e)=>handelSubmitForm(e)}>SUBMIT</button>
        </form>
    </div>:''}
    </main>
  )
}

export default App