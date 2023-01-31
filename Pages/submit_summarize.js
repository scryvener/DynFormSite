//pulls data and submits to serverside to create summary of open ended responses.

function submit_summ(){

    //pull all data from form
    let product=$('#productQ').val()
    let openR=$('#openRQ').val()

    let data={
        'product':product,
        'openR':openR
    }
    
    //pass to server side

    const apiResponse = pullData('/.netlify/functions/processSummary',data);
    //console.log(apiResponse)

    apiResponseText=apiResponse.choices[0].text

    //console.log(apiResponseText)
  

    //input summary into the "summary" form value
    
    let summ_array=apiResponseText.split(' ');
    let summ_text=summ_array.join(' ');
    
    let summEle=document.getElementById('openRSumm');

    summEle.value=summ_text;

}




