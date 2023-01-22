
export const handler = async (event,data) => {
    
    var inc=JSON.parse(event.body)

    var openR1=inc.openR+'Hello There'

    var product1=inc.product+'you found me'

    console.log(openR1)

    //var i=5;
    //var k=i+Number(inc.someData)
    // Netlify Functions need to return an object with a statusCode
    // Other properties such as headers or body can also be included.
    return {
        statusCode: 200,
        body: {
            inc
        }
    }
}
