
export const handler = async (event,data) => {
    
    // var inc=JSON.parse(data)

    // var i=5;
    // var k=i+Number(inc.someData)
    // Netlify Functions need to return an object with a statusCode
    // Other properties such as headers or body can also be included.
    return {
        statusCode: 200,
        body: JSON.stringify(event)
    }
}
