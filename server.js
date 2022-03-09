var translate = require('translation-google');
 
const text = 'Good Morning Mr Bryan... i was doing some research and i found a service we can use to handle our language translate feature and this one is free, so we dont necessarily need to use the google-cloud-translate and pay a subscription';

translate(text, {to: 'yo'}).then(res => {
    console.log(res.text);

    console.log(res.from.language.iso);
}).catch(err => {
    console.error(err);
});