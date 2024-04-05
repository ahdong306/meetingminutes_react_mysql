import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';

export const MeetingRecord = ({ record,  deleteRecord}) => {
    return (

        <tr>
            <td>{record.MeetingId}</td>
            <td>{record.MeetingDate}</td>
            <td>{record.MeetingNotes}</td>
            <td>{record.ARsHelp}</td>
            <td>{record.Attendees}</td>
            <td>{record.Comments}</td>
            <td>{record.Alert}</td>
            <td>
                <FontAwesomeIcon icon={faPenToSquare}/>
                <FontAwesomeIcon icon={faTrash} onClick={() => {
                    deleteRecord(record.MeetingId)
                }}/> 
            </td>
            
        </tr >

    )


}
