const express = require('express');
const app = express();

const server = app.listen(3000, () => {
    console.log("Start Server : localhost:3000");
});

// __dirname : 현재 디렉토리를 의미
// html을 불러올 떄 set 메서드를 통해서 해당 폴더에 정의된 html을 불러올거라는 의미
app.set('views', __dirname + '/views');
// ejs : Embeded Javasript Template -> HTML 안에서 JS 코드를 같이 쓸 수 있게 해주는 역할
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);


// Spring boot의 Controller 역할
app.get('/', function (req, res) {
    // res.send('Hello Node');
    res.render('index.html');
});

app.get("/about", function (req, res) {
    // res.send('about Node');
    res.render('about.html');
});

var mysql = require('mysql');
var pool = mysql.createPool({
    connectionLimit: 10,
    host: 3306,
    user: 'dy',
    password: '7648',
    database: 'test_db'
});

app.get('/db', function (req, res) {
    pool.getConnection(function (err, connection) {
        if(err) throw err;

        connection.query("SELECT * FROM TEST ", function (error, results, fields) {
            res.send(JSON.stringify(results));
            console.log("result = ", results);
            connection.release();
            if(error) throw error;
        });

    });
});
