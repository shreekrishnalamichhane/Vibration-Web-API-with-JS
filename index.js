//selecting divs
const doessupport = document.querySelector(".doessupports");
const doesnotsupport = document.querySelector(".doesnotsupports");
const buttons = document.querySelector('.buttons');

//selecting various mode buttons
const normal = document.querySelector('#normal');
const pattern1 = document.querySelector('#pattern1');
const pattern2 = document.querySelector('#pattern2');
const sos = document.querySelector('#sos');
const stop = document.querySelector('#stop');

// ------------------------------------------------------------
// Check if the device supports the Vibration API
const support = Boolean(window.navigator.vibrate);

//If device supports API then,
if(support){
    //Show the 'doessupport' message.
    console.log("Device supports Vibration API.");
    doessupport.classList.remove('hide');
}

//If device doesnot supports API then,
else{
    //Show the 'doesnotsupport' message.
    console.log('Device does not support Vibration API.');
    doesnotsupport.classList.remove('hide');
}

// ------------------------------------------------------------


//Vibration Logic
if(support){
    //Vibrate normally for 500ms
    normal.addEventListener('click',()=>{
        window.navigator.vibrate([500]);
    });

    //Vibrate pattern 1
    pattern1.addEventListener('click',()=>{
        window.navigator.vibrate([250,250,250,250,250,800,250,250,250,250,250,250]);
    });

    //Vibrate pattern 2
    pattern2.addEventListener('click',()=>{
        window.navigator.vibrate([1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000]);
    });

    // Vibrate SOS in morse code.
    sos.addEventListener('click',()=>{
        window.navigator.vibrate([
            100,30,100,30,100,30,
            200,30,200,30,200,30,
            100,30,100,30,100
        ]);
    });
    
    //stop Vibration
    stop.addEventListener('click',()=>{
        window.navigator.vibrate([]);
    })
}
