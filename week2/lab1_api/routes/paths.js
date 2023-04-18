
const express = require('express');
const router = express.Router();
const fs = require('fs');
const http = require('http');

// read json file
const collegeData = fs.readFileSync("./data/college.json");


router.route('/')
    .get((req, res) => {
        // convert buffer data to String
        const collegeStringData = collegeData.toString();
        // parse the JSON object
        const parsedCollegeData = JSON.parse(collegeStringData);
        // console.log(parsedCollegeData);

        // res.json(parsedCollegeData.courses);
        res.write('<table><tr>');

        // get all keys and insert in header of the table

        for(var key of Object.keys(parsedCollegeData)){
            res.write(`<th>${key}</th>`);
            // console.log(key);
        }
        res.write(`</tr><tr><td>${parsedCollegeData.name}</td>`);
        res.write(`<td>${parsedCollegeData.address}</td>`);
        res.write(`<td>${parsedCollegeData.contact}</td>`);
        res.write(`<td>${parsedCollegeData.courses}</td>`);
        res.write(`<td>${parsedCollegeData.departments}</td>`);
        res.write(`<td>${parsedCollegeData.clubs}</td>`);
        res.write('</tr></table>')
        res.send();
    });

module.exports = router;