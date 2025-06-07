import React from 'react'

const TackCard = ({data=[]})=> {
    const deleteItem = ()=>{

    }
  return (
        data.length > 0 ?
        data.map((data, index)=>(
            <div className='cardBox' key={index}>
            <div className='cardNoteBox'>
                <p className='cardNoteBoxTitle'>{data.title}</p>
                <p className='cardNoteBoxNote'>{data.description}</p>
            </div>
            <div className='cardActionBox'>
                <input type='checkbox' name='is_compile_task'className='cardActionBoxCheck'/>
                <button type='button' name='delete'className='cardActionBoxButton' onClick={()=>deleteItem(index)} >DELETE</button>
            </div>
        </div>
        ))
        : <div>Add Task</div>
  )
}

export default TackCard