import express from "express"
import mysql from "mysql2"
import cors from "cors"
import {sentence} from "txtgen"
// import cors from "cors"

const app = express()
app.use(express.json())
app.use(cors())

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "wboson",
    database: "MeetingMinutes"
})

app.get("/", (req, res) => {
    res.json("hello, this is backend");
})


app.get("/meetingminutes", (req, res) => {
    const sql = "SELECT * FROM meeting_minutes";
    db.query(sql, (err, result) => {
        if (err) return res.json(err);
        return res.json(result);
    });
});

app.post("/add", (req, res) => {
    const sql = "Insert INTO meeting_minutes(`MeetingDate`, `MeetingNotes`, `ARsHelp`, `Attendees`, `Comments`, `Alert`) VALUES (?)";
    
    const records=[
        req.body.MeetingDate,
        req.body.MeetingNotes,
        req.body.ARsHelp,
        req.body.Attendees,
        req.body.Comments,
        req.body.Alert
    ]
    console.log(records)
    // return res.json("a test in add");

    db.query(sql, [records], (err, result) => { 
        if (err) return res.json(err);
        return res.json("Item has been added successfully.");
    });
});

app.post("/addrandom", (req, res) => {
    const meetingId=req.params.addId;
    const sql = "Insert INTO meeting_minutes(`MeetingDate`, `MeetingNotes`, `ARsHelp`, `Attendees`, `Comments`, `Alert`) VALUES (?)";

    const values=[
        new Date(new Date().toISOString()),
        sentence(),
        sentence(),
        "some attendees",
        sentence(),
        false
    ]

    db.query(sql, [values], (err, result) => { 
        if (err) return res.json(err);
        return res.json("Item has been added successfully.");
    });
});


app.delete("/delete/:deleteId", (req, res) => {
    const meetingId=req.params.deleteId;
    const sql = "DELETE FROM meeting_minutes Where MeetingId=?";

    db.query(sql, meetingId, (err, result) => { 
        if (err) return res.json(err);
        return res.json("This meeting record has been deleted successfully.");
    });
});

app.put("/update/:updateId", (req, res) => {
    // console.log("updating now");
    // res.json("updating now");
    const meetingId=req.params.updateId;
    const sql = "Update meeting_minutes SET `MeetingDate`=?, `MeetingNotes`=?, `ARsHelp`=?, `Attendees`=?, `Comments`=?, `Alert`=? Where MeetingId=?";
    // return res.json("test01");
    const records=[
        req.body.MeetingDate,
        req.body.MeetingNotes,
        req.body.ARsHelp,
        req.body.Attendees,
        req.body.Comments,
        req.body.Alert
    ]
    // return res.json("a test");
    db.query(sql, [...records, meetingId], (err, result) => { 
        if (err) return res.json(err);
        return res.json("Meeting record has been updated successfully.");
    });
});




app.post("/meetingminutes", (req, res) => {
//     `MeetingId` int NOT NULL AUTO_INCREMENT,
//   `MeetingDate` datetime NOT NULL,
//   `MeetingNotes` text,
//   `ARsHelp` text,
//   `Attendees` varchar(100) DEFAULT NULL,
//   `Comments` text,
    const sql = "INSERT INTO  meeting_minutes(MeetingDate, MeetingNotes, ARsHelp, Attendees, Comments) VALUES (?)";
    const values = [ new Date(new Date().toISOString()), "this is some meetingnotes", "this is some ARsHelp", "this is some Attendees", "this is some Comments" ]

    db.query(sql, [values], (err, result) => {
        if (err) return res.json(err);
        return res.json(result);
    })
});
app.listen(3001, () => {
    console.log("Server is running on port 3001");
})