
//modify to make calls for summary.
//Do we really need this here? we can just run it on python once all the responses have been collected?

export const handler = async (event,data) => {
    
    const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

    console.log(event.body)
    
    //parse data sent
    var inc=JSON.parse(event.body)
    var openR=inc.openR
    var product=inc.product

    //construct prompt, pull in api key
    const apiKey=process.env.OpenAIKey

    var prompt=`A user is giving feedback on the following product they purchased: ${product}. The user has provided the following open ended feedback:"${openR}". Generate a set of 3 questions asking for elaboration on specific details of their feedback or more details of their overall experience with the product.`

    var bodyData={
        'model':'text-davinci-003',
        'prompt': prompt,
        'max_tokens':250,
        'temperature':0.9,
        'presence_penalty':0.6,
        'frequency_penalty':0
    }

    //console.log('Bearer '+apiKey )

    //make api call
    async function apiCall(path,data){
        try {
            const response = await fetch(path, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: { 
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer '+apiKey 
                }
            });
            if (!response.ok) {
                console.log('Error!')
                throw new Error(response.statusText);
            }
            const jsonData = await response.json();

            return jsonData;

        } catch (error) {
            console.error(error);
        }

    }

    var apiResponse= await apiCall('https://api.openai.com/v1/completions',bodyData)
    //console.log(apiResponse)

    
    //process response, return the set of questions back to client side
    

    // Netlify Functions need to return an object with a statusCode
    // Other properties such as headers or body can also be included.
    return {
        statusCode: 200,
        body: JSON.stringify(apiResponse)
    };
};


// exports.handler = async function (event, context) {
//     return {
//       statusCode: 200,
//       body: JSON.stringify({ message: "Hello World" }),
//     };
//   };