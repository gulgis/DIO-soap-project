const soap = require('soap')

const url = 'http://soapclient.com/xml/soapresponder.wsdl'
const args = {bstrParam1: 'oi', bstrParam2: 'tchau'}
soap.createClient(url, function(err, client){
    client.Method1(args, function(err, result){
        if(err) return console.log(err)
        console.log(result)
    })     
})
