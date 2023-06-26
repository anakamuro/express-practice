const express = require('express')
const router = express.Router()



router.get('/', (req, res) => {
    res.send('userslist')
  })

router.get('/new', (req, res) => {
    res.render("users/new")
  })
  
router.post('/', (req, res) => {
      console.log(req.body.firstName)
      res.send('hi')
      })

router.get('/:id', (req, res) => {
        res.send(`Get User with ID ${req.params.id}`)
      })

router.put('/:id', (req, res) =>
{
        res.send(`Update User with ID ${req.params.id}`)
      })

router.delete('/:id', (req, res) => {
        res.send(`Delete User with ID ${req.params.id}`)
      })


  


module.exports = router