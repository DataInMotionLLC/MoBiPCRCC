var Mailgun = require('mailgun');
exports.SendMail = function ()
{
    //Mailgun.initialize('raymondcamden.mailgun.org', 'mykeysmilkshakeisbetterthanyours');
    Mailgun.initialize('mg.datainmotionllc.com', 'key-dd6c965d8a32b0a4db474a678e02de87');



    var data = {
        from: 'Excited User <me@samples.mailgun.org>',
        to: 'bouvierneil@hotmail.com',
        subject: 'Hello',
        text: 'Testing some Mailgun awesomness!'
    };

    return mailgun.messages().send(data, function (error, body) {
        console.log(body);
    });

};