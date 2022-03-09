const Router = require("express");
const translate = require('translation-google');

const router = Router();

router.get("/", (req, res) => {
    const text = 'I told you to use a POST request you are using GET';

    translate(text, {from: 'en', to: 'yo'}).then(result => {
        console.log(result.text);

        console.log(result.from.language.iso);
        res.status(200).json(result.text);
    }).catch(err => {
        console.error(err);
        res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
    const { text, from, to } = req.body;
    
    translate(text, { from, to }).then(result => {
        res.status(200).json(result);
    }).catch(err => {
        res.status(500).json(err);
    });
})

module.exports = router;