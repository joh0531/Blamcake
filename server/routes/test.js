const router = require('express').Router()
const jsonParser = require('body-parser').json()
// const utils = require('../utils')

router.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
})

router.get('/', jsonParser, (req, res) => {
    // utils.makePDF(req.body.id)
    //     .then(([pdf]) => utils.sendEmail(req.body.email, pdf))
    //     .then(() => res.send('email sent!'))
    //     .catch(error => res.send(error))
	console.log('hi');
	res.render('index',{user: "Great User",title:"homepage"});
	res.send('hi');
})

router.post('/', jsonParser, (req, res) => {
    // utils.makePDF(req.body.id)
    //     .then(([pdf]) => utils.sendEmail(req.body.email, pdf))
    //     .then(() => res.send('email sent!'))
    //     .catch(error => res.send(error))

})

module.exports = router