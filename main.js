
function generateNum(){
    const randomNum = Math.round(Math.random()*10000);
    const randomNumString = randomNum + '';
    if( randomNumString.length == 4){
        return randomNum;
    }else{
        // console.log('num-3');
        return generateNum();
    }
}

document.getElementById('generate-pin-btn').addEventListener('click', function(){
    const generateRandomNum = generateNum();
    document.getElementById('generate-pin-input').value = generateNum();
    document.getElementById('submitBtn').removeAttribute('disabled');
});

document.getElementById('keypad').addEventListener('click', function(e){
    const keypadNum = e.target.innerText;
    const matchPinInput = document.getElementById('match-pin-input');
    const previousNum = matchPinInput.value;
        const newNum = previousNum + keypadNum;
    if(isNaN(keypadNum)){
        if(keypadNum == 'C'){
            matchPinInput.value = '';
        }
    }else{
        matchPinInput.value = newNum;      
    }
    

    // console.log(keypadNum);
});

    const failedMsg = document.getElementById('failedMsg');
    const successMsg = document.getElementById('successMsg');
    var clickCount = 0
    failedMsg.style.display = 'none';
    successMsg.style.display = 'none';
    
document.getElementById('submitBtn').addEventListener('click', function(){
    clickCount = clickCount+1;

    if(clickCount == 3){
        const submitAction = document.getElementById('submit-action');
        document.getElementById('submitBtn').setAttribute('disabled', true);
        submitAction.innerText = 3 - clickCount;
        console.log(submitAction.innerText);
    }else if(clickCount > 0){
        const matchPinInput = document.getElementById('match-pin-input');
        const randomNum = document.getElementById('generate-pin-input').value;
        const failedMsg = document.getElementById('failedMsg');
        const successMsg = document.getElementById('successMsg');
        
        const typedNum = matchPinInput.value;
        if( typedNum == randomNum){
            successMsg.style.display = 'block';
            failedMsg.style.display = 'none';
        }else{
            failedMsg.style.display = 'block';
            successMsg.style.display = 'none';
        }
        const submitAction = document.getElementById('submit-action');
        submitAction.innerText = 3 - clickCount;
        
        matchPinInput.value = '';
    }
    
    
    
});