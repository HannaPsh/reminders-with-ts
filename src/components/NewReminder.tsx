import React from 'react'
import { useState } from 'react'


interface newReminderProps {
    onAddReminder:(title:string) => void;
}

export default function NewReminder({onAddReminder}:newReminderProps):JSX.Element {
    const [title, setTitle] = useState("");
    function onSubmit (e:React.FormEvent){
e.preventDefault();
if (!title){return}
onAddReminder(title);
setTitle("")
    }
  return (
    <form onSubmit={onSubmit}>
        <input value = {title } onChange={(e)=>setTitle(e.target.value)} type="text" className='form-control' id='title' />
        <label htmlFor="title"></label>
        <button className="btn btn-primary my-3" type='submit'>Add reminder</button>
    </form>
  )
}
