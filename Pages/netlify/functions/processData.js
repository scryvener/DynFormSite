
export const handler = async (event,data) => {
    var i=data;

    // Netlify Functions need to return an object with a statusCode
    // Other properties such as headers or body can also be included.
    return {
        statusCode: 200,
        body: JSON.stringify(String(i))
    }
}
