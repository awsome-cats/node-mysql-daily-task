const express    = require('express');
const bodyParser = require('body-parser');
const cors       = require('cors');
const port       = process.env.PORT || 3001

//middleware
const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ expanded: true }))

// Router calling
const allGetTaskRoutes = require('./routes/router')
const allGetRoutes = require('./routes/router')

app.use('/api', allGetTaskRoutes.routes)
app.use('/api', allGetRoutes.routes)

app.listen(port, (req, res, err) => {
if (err) {
console.log('接続できていません。')} else {
console.log(`サーバーは${port}番で起動しました`)
}
})