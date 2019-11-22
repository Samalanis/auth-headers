'use strict';


const baseUrl = 'https://api.github.com/users/';


function getUrl(userHandle) {
  const hardUrl = `https://api.github.com/users/${userHandle}/repos`;
  const userInput = userHandle;
  console.log(userHandle);



  fetch(hardUrl) 
    .then(response => {
       if (response.ok) {
         return (response.json());
      }
      throw new Error(response.statusText);     
    })
    .then(responseJson => showResults(responseJson))
    .catch(err => {
      $('#error-message').text(`Something went wrong: ${err.message}`);
    });
}

function getVal() {
  $('#submit-box1').on('click', event => {
    event.preventDefault();
    const userVal = $('#search-box1').val();
    //console.log(userVal);
    $(getUrl(userVal));
  })
}


function showResults(responseJson) {
  $('#results-list').empty();
  console.log(responseJson);
  for (let i = 0; i < responseJson.length; i++) {
    $('#results-list').append(
    `<li><h3>${responseJson[i].name} ${responseJson[i].html_url}</h3></li>`
  )};
};

function renderFunc() {
  $(getVal);
}

$(renderFunc);

