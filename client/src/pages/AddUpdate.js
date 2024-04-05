import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddUpdate = () => {
   const [record, setRecord]=useState({
      date:"",
      meetingNotes:"",
      ARsHelp:"",
      attendees:"",
      comments:"",
      alert:""
   })

    const navigate=useNavigate()

    const handleChange=(e)=>{
        const {name,value}=e.target
        setRecord({...record,[name]:value})
        console.log(name, value)
    }
    const handleClick= async e=>{
        e.preventDefault()
        console.log(record)
        try{
            await axios.post("http://localhost:3001/add",record)
            navigate("/")
        }catch(err){
            console.log(err)
        }
        console.log(record)
    }
    return (
        <div>
            <div><input type="date" onChange={handleChange} name="MeetingDate"/></div>
            <br />
            <div><textarea placeholder="MeetingNotes" onChange={handleChange} name="MeetingNotes"></textarea></div>
            <br />
            <div> <input type="text" placeholder="ARsHelp" onChange={handleChange} name="ARsHelp"/></div>
            <br />
            <div><input type="text" placeholder="Attendees" onChange={handleChange} name="Attendees"/></div>
            <br />
            <div><input type="text" placeholder="Comments" onChange={handleChange} name="Comments"/></div>
            <br />
            <div><input type="number" placeholder="Alert" onChange={handleChange} name="Alert"/></div>
            <br/>
            <div>
                <button onClick={handleClick}>Submit</button>
        
            </div>
        </div>
    ) // end return
}
export default AddUpdate