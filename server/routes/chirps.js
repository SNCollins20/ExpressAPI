const express = require('express');
const chirpsRouter = require('./chirps');

let router = express.Router();

// router.use('/api/chirps', chirpsRouter);

router.get('./:id', (req, res)=>{
    let id = req.params.id;
    if(id){
        res.json(chirpStore.GetChirp(id));
    }else{
        res.json(chirpStore.GetChirps());
    }
})

router.post('/', (req, res)=>{
    chirpStore.CreateChirp(req.body);
    res.sendStatus(200);
})
router.put('/:id', (req, res)=>{
    let id = req.params.id
    let chirp = req.body;
    chirpStore.UpdateChirp(id, chirp)
    res.sendStatus(200) 
})
router.delete('/:id', (req, res)=>{
    let id = req.params.id;
    chirpStore.DeleteChirp(id)
    res.sendStatus(200)
})
module.exports = router;

