
export const handler = async (event,data) => {
    
    var inc=JSON.parse(event.body)

    var openR1=JSON.stringify(inc.openR+' Hello There')

    var product1=JSON.stringify(inc.product+' you found me')

    let temp_body={
        "openRMod":openR1,
        "product1":product1
    }
    console.log(temp_body)    

    //var i=5;
    //var k=i+Number(inc.someData)
    // Netlify Functions need to return an object with a statusCode
    // Other properties such as headers or body can also be included.
    return {
        statusCode: 200,
        body: JSON.stringify({
            openRMod:openR1,
            product1:product1
        })
    };
};


// exports.handler = async function (event, context) {
//     return {
//       statusCode: 200,
//       body: JSON.stringify({ message: "Hello World" }),
//     };
//   };