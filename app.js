const express = require('express');
const app = express();
const hostname = '127.0.0.1'; // Your server ip address
const port = 3000;

const version = '1.0.0';


app.get('/UMSServices.ashx', (req, res) => {
    res.setHeader('ServerDate', new Date().toUTCString());
    res.setHeader('LastDevice', '1');
    res.setHeader('ValidityDate', '01/01/1900');
    res.setHeader('ValidityDateUniversal', '01 Jan 1900');
    res.setHeader('NoOfDays', '0');
    res.send('T');
});

app.get('/BWSServices.ashx', (req, res) => {
    res.setHeader('ServerDate', new Date().toUTCString());
    res.setHeader('BLS', '31 Dec 2099');
    res.send('T');
});

app.listen(port, () => {
    console.log(`[Version ${version}]: Server running at http://${hostname}:${port}/`);
})
