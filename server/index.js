const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");


const db = mysql.createConnection({
    host: "localhost",
    database: "form",
    user: "root",
    password: "ABab1234@",
});

app.use(cors());
app.use(express.json());

app.post("/api", (req, res) => {
    const fname = req.body.fname;
    const lname = req.body.lname;
    const father_name = req.body.father_name;
    const mother_name = req.body.mother_name;
    const dob = req.body.dob;
    const c_code = req.body.c_code;
    const contact = req.body.contact;
    const gender = req.body.gender;
    const email = req.body.email;
    const password = req.body.password;
    const address1 = req.body.address1;
    const address2 = req.body.address2;
    const city = req.body.city;
    const state = req.body.state;
    const pincode = req.body.pincode;
    db.query("INSERT INTO student (Fname,Lname,Father_Name,Mother_Name,DOB,Country_code,Contact,Gender,Email,Password,Address_1,Address_2,City,State,Pincode) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)", [fname, lname, father_name, mother_name, dob, c_code, contact, gender, email, password, address1, address2, city, state, pincode],
        (error, result) => {
            if (error) {
                console.log(error);
            }
            else {
                res.send("values send");
            }
        });
})

app.get('/student', (req, res) => {
    db.query("SELECT * FROM student", (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send(result);
        }
    });
});

app.get('/student/:id', (req, res) => {
    const { id } = req.params;
    const sqlGet = "SELECT * FROM student WHERE id= ? ";
    db.query(sqlGet, id, (error, result) => {
        if (error) {
            console.log(error);
        } else {
            res.send(result);
        }
    });
});

app.put("/update", (req, res) => {
    const fname = req.body.fname;
    const lname = req.body.lname;
    const father_name = req.body.father_name;
    const mother_name = req.body.mother_name;
    const dob = req.body.dob;
    const c_code = req.body.c_code;
    const contact = req.body.contact;
    const gender = req.body.gender;
    const email = req.body.email;
    const password = req.body.password;
    const address1 = req.body.address1;
    const address2 = req.body.address2;
    const city = req.body.city;
    const state = req.body.state;
    const pincode = req.body.pincode;
    const id = req.body.id;
    db.query("UPDATE student SET Fname=?, Lname= ?, Father_Name=?, Mother_Name=?, DOB=?, Country_code=?, Contact= ?, Gender=?, Email=?, Password=?, Address_1=?, Address_2=?, City=?, State=?, Pincode=? WHERE id=?", [fname, lname, father_name, mother_name, dob, c_code, contact, gender, email, password, address1, address2, city, state, pincode, id],
        (error, result) => {
            if (error) {
                console.log(error);
            }
            else {
                res.send("values send");
            }
        });
})


app.delete("/remove/:id",(req,res)=>{
    const id = req.params.id;
    db.query("DELETE FROM student WHERE id=?",id,(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    })
});

app.listen(5000, () => {
    console.log("On port 5000");
});