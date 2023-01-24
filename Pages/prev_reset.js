//quick function to reset the question field after clicking the previous button

function prev_reset(){
    for (let i=1;i<=3;i++){

        let newQ=document.getElementById('DynQ'+String(i))

        newQ.innerHTML='Waiting for GPT3...'

    }
}