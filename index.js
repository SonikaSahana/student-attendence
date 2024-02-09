const express = require('express')
const cors = require('cors')

const app = express()

const sequelize = require('./backend/util/db')

const Date = require('./backend/models/date')
const Student = require('./backend/models/student')
const Record = require('./backend/models/record')

const attendence = require('./backend/routes/attendence')


app.use(cors())
app.use(express.json())
app.get('/student', function(req, res) {
    res.sendFile(path.join(__dirname, './frontend/index.html'));
  });



// Student.create({name : "first"}).then(s => console.log(s)).catch(e => console.log(e))
// Student.create({name : "second"}).then(s => console.log(s)).catch(e => console.log(e))
// Student.create({name : "third"}).then(s => console.log(s)).catch(e => console.log(e))
// Student.create({name : "fourth"}).then(s => console.log(s)).catch(e => console.log(e))



Date.belongsToMany(Student ,{ through : Record})
Student.belongsToMany(Date ,{ through : Record})


app.use('/student' ,attendence )

sequelize
.sync()
// .sync({force : true})
.then(()=>{

    app.listen(4000)
}).catch(e => console.log(e))
