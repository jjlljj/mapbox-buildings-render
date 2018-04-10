const express = require('express')
const app = express()

app.set('port', process.env.PORT || 3000)
app.use(express.static('public'))

app.get('/', (request, response) => {
})

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} running on port ${app.get('port')}`)
})
