import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { MeetingRecord } from './MeetingRecord';
import { Link } from 'react-router-dom';

const TableDisplay = () => {

    const [records, setRecords] = useState([])

    useEffect(() => {
        const fetch_meeting_minutes = async () => {
            try {
                const res = await axios.get("http://localhost:3001/meetingminutes")
                setRecords(res.data)
                console.log("------ run effect-------")
                // console.log(res.data)
            } catch (err) {
                console.log(err)
            }

        }
        fetch_meeting_minutes()
        console.log(records)
    }, [])

    const deleteRecord = async (id) => {
        setRecords(records.filter(record => record.MeetingId !== id))
        try{
            await axios.delete("http://localhost:3001/delete/"+id)
        }catch(err){
            console.log(err)
        }
        console.log(id)
    }

    return (
        <div> 
            <button><Link to ="/addupdate"> Write new meeting minutes.</Link></button>
            <table>
            <tr>
                <th>MeetingId</th>
                <th>MeetingDate</th>
                <th>MeetingNotes</th>
                <th>ARsHelp</th>
                <th>Attendees</th>
                <th>Comments</th>
                <th>Alert</th>
            </tr >
            {records.map(
                record => (
                    <MeetingRecord record={record} deleteRecord={deleteRecord}/>
                ))}
            </table>
        </div>
        
    )
}

const Home = () => {

    return (
        <div>
            <h1>HDMx Client Staff Meeting Minutes</h1>
            <TableDisplay />
        </div>
    ) // end return


}



export default Home