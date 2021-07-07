const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended:false}));
app.use(express(JSON));

app.use('/', require('./router'));

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), ()=>{
	console.log("TODO BIEN");
});