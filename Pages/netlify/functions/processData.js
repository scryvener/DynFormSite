
export const handler = async (event,data) => {
    
    var inc=JSON.parse(event.body)

    var openR1=JSON.stringify(inc.openR+' Hello There')

    var product1=JSON.stringify(inc.product+' you found me')

    

    //var i=5;
    //var k=i+Number(inc.someData)
    // Netlify Functions need to return an object with a statusCode
    // Other properties such as headers or body can also be included.
    return {
        statusCode: 200,
        body: {
            "openRMod":openR1,
            "product1":product1
        }
    }
}
