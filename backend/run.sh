# curl -X POST localhost:3001/add -H 'Content-Type: application/json' -d '{"MeetingDate": "2015-01-01T15:23:42", "MeetingNotes":"some notes", "ARsHelp":" updated", "Attendees":"Attendees", "Comments":"Comments", "Alert":2}'

curl -X PUT localhost:3001/update/8 -H 'Content-Type: application/json' -d '{"MeetingDate": "2015-01-01T15:23:42", "MeetingNotes":"some notes", "ARsHelp":" updated", "Attendees":"Attendees", "Comments":"Comments", "Alert":2}'
