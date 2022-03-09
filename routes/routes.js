const Router = require("express");
const translate = require('translation-google');

const router = Router();

router.get("/", (req, res) => {
    const text = 'Good Morning Mr Bryan... i was doing some research and i found a service we can use to handle our language translate feature and this one is free, so we dont necessarily need to use the google-cloud-translate and pay a subscription';

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
    // const { text, from, to } = req.body;
    const text = req.body.text;
    const from = req.body.from;
    const to = req.body.to;

    translate(text, { from, to }).then(result => {
        res.status(200).json(result);
    }).catch(err => {
        res.status(500).json(err);
    });
})

module.exports = router;