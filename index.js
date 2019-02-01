$(function() {

    let result = [];
    
    $('#number-chooser').submit(event => {
        event.preventDefault();
        const count = parseInt($('#number-choice').val());
        
        for(let i=0; i <= count; i++){
            if(i === 0) {
                result.push($(`<div class="fizz-buzz-item">
                <span>0</span></div>`));
            }
            else if(i % 15 === 0){
                result.push($(`<div class="fizz-buzz-item fizzbuzz">
                <span>fizzbuzz</span></div>`));
            }
            else if(i % 5 === 0){
                result.push($(`<div class="fizz-buzz-item buzz">
                <span>buzz</span></div>`));
            }
            else if(i % 3 === 0){
                result.push($(`<div class="fizz-buzz-item fizz">
                <span>fizz</span></div>`));
            }
            else{
                result.push($(`<div class="fizz-buzz-item">
                <span>${i}</span></div>`));
            }
            $('.js-results').append(result);
            $('#number-choice').val('');
        }  
    });
});