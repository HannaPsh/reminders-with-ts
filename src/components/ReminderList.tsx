import React from 'react'
import Reminder from '../modules/reminder'
import Button from 'react-bootstrap/Button';
/* import { v4 as uuid } from 'uuid'; */
/* 
const randomId: string = uuid();  *//* trid it for the key */


interface RemindersList {
items: Reminder[]
onRemoveReminder:(id:number) => void;
}


export default function ReminderList({items, onRemoveReminder}:RemindersList) {
  return (
    <ul className='list-group'>{items.map(item=><li className='list-group-item' key={item.id}>{item.title}
    <Button onClick={()=>onRemoveReminder(item.id)} variant="outline-danger mx-3 rounded-pill" >Delete</Button>
    </li>)}</ul>
  )
}
