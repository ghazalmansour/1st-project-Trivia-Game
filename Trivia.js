const btnStart = document.getElementById('btnStart');
btnStart.addEventListener('click', function () {
    //putting the answer button before the fetch method to make the answer button reset every time I click on the question button.
    document.getElementById("answer").innerHTML = "<button id='btnAnswer'>See Answer </button>";
    //When the button is clicked, it's contact the Service and get a random clue. So I used  use the fetch method.
    // I used https://developers.google.com/web/updates/2015/03/introduction-to-fetch to help me out with the fetch method 
    fetch('https://jservice-proxy.herokuapp.com/api/random')
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
                    //Stored both question and answer in local variables by doing const question and const answer.And then console log the answer and the question together.
                    //console.log(question + ": " + answer); 
                    document.getElementById("question").innerHTML = question;
                    //document.getElementById("answer").innerHTML = answer;
                    document.getElementById("answer").style.display = "block";
                    document.getElementById("btnAnswer").addEventListener('click', function () {
                        document.getElementById("answer").innerHTML = answer;
                    });
                });
            }
        )
        .catch(function (err) {
            console.log('Fetch Error :-S', err);
        });
});