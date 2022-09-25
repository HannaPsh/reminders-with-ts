import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import ReminderList from './components/ReminderList';
import Reminder from './modules/reminder';
import reminderService from './services/reminders'
import NewReminder from './components/NewReminder';

/* const items = [{id:1, title: "Buy milk"}, {id:2, title:"Appointment"}] */

function App() {
 const [reminders,setReminders] = useState<Reminder[]>([/* {id:1, title: "Buy milk"}, {id:2, title:"Appointment"} */]);
 useEffect(()=>{loadData()},[])

async function loadData () {
  const data =  await reminderService.getReminders()
  setReminders(data);
 }

const  addReminder = async (title:string) => {
  const NewReminder = await reminderService.addReminder(title);
  setReminders([NewReminder,...reminders])
 }

const  removeReminder  = (id:number) => {
setReminders(reminders.filter(reminder=>reminder.id !== id));
 }
 return (
    <div className="App">
      <NewReminder onAddReminder = {addReminder}/>
      <ReminderList items = {reminders} onRemoveReminder = {removeReminder}/>
    </div>
  );
}

export default App;
