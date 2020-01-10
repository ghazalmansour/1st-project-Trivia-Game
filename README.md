## Trivia Game 
Trivia game is where the competitors are asked questions about interesting but unimportant facts in many subjects.


##  My Game 
![Screen Shot 2020-01-10 at 12 05 43 PM](https://user-images.githubusercontent.com/58221902/72171928-eb616000-33a1-11ea-91af-8b7c97d0ab8f.png)


## Getting Started 
- Created three files; index.html , trivia.css and trivia.js. Then Loaded and attached the stylesheet and javascript in HTML file. 
-  Used the jService API that provides trivia data including the questions and answers pulled from jArchive. 
-  Created the question button in HTML and made a connection between all three files by using getElementById in JS.
- When the button is clicked, it's going to contact the service and get a random clue. So fetch method was used.
-  Stored both question and answer in local variables by doing const question and const answer. And then console log the answer and the question together. 
- Created output arrays in HTML for question and answer to display the results in the browser. Then made a connection with the outputs by using getElementById().innerHTML in JS. 
- Created a style in CSS to make the answer hidden. Made an answer button inside the answer output in HTML in order for the answer to appears as button every time the question button is clicked. Then made a connection with the answer button by using getElementById().style.display in JS. And of course added a listner to it. 
- Solved a problem which is "when clicking on the answer button, it will display the answer for one question and stay there" by putting the answer button before the fetch method. 
- finally, some styling was made to make the game look nicer. 


## Refrences 
[http://jservice.io/]

[https://www.w3schools.com/howto/howto_google_fonts.asp] 

[https://codepen.io/agnosticdev/pen/ZbWjaB]

[https://developers.google.com/web/updates/2015/03/introduction-to-fetch]

[https://www.w3schools.com/js/default.asp]

