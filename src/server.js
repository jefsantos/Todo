const express = require('express');
const app = express();
const PORT = process.env.PORT || 8090;

app.use(express.static(__dirname + '/dist/todo'));


app.get('/*', (req, res )=> {
    res.sendFile(__dirname + '/todo/index.html');
});

app.listen(PORT, ()=>{

    console.log('SERVIDOR FUNCIONANDO NA PORTA: ' + PORT);

});
