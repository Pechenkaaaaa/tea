const router = require('express').Router();
const { Tea, User } = require('../../db/models');
const AdminPage = require('../../components/AdminPage');

router.get("/admin", async (req, res) => {
    try {
        const teas = await Tea.findAll();
        console.log(teas);
        res.send(res.renderComponent( AdminPage, {title: 'All teas', teas}))
      
        
    } catch ({message}) {
      res.status(500).json({error: message})          
    }



 })

// router.get('/admin', async (req, res) => {

//     try {
//         res.send(res.renderComponent(AdminPage, {title: 'AdminPage'}));
//     } catch ({message}) {
//         res.status(500).json({error: message});
        
//     }
// });
module.exports = router