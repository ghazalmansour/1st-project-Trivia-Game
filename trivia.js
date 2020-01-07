//The Css, javascript and html don’t know about each other so in the javascript, So I made a connections by using GET ELEMENT BY ID.

const btnStart = document.getElementById ('btnStart');

btnStart. addEventListener ('click', function(){

//When the button is clicked, it’s contact the Service and get a random clue. So I used  use the fetch method.

// I used https://developers.google.com/web/updates/2015/03/introduction-to-fetch to help me out with the fetch method 

fetch('http://jservice.io/api/random')
    .then(
        function (response) {
            if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' + response.status);
            return;
            } 
            response.json().then(function (data) {
                //console.log(data[0]);
                const question = data[0].question; 
                const answer = data[0].answer; 
                     //Instead of console logging all the data  I will do const answer and const question. So both of answer and question should be stored in local variables. And then console log the answer and the question together. 
                //console.log(question + ": " + answer); 
                document.getElementById("question").innerHTML = question;
                document.getElementById("answer").innerHTML = answer;
            });
        }
    )
    .catch(function (err) {
        console.log('Fetch Error :-S', err);
    });
});