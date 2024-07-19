// Fetch the JSON file
fetch('./GOT_Characters.JSON')
  .then(response => {
    // Check if the response is ok (status 200-299)
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json(); // Parse the JSON from the response
  })
  .then(data => {
    // Use the JSON data here
    console.log(data);
  })
  .catch(error => {
    // Handle any errors
    console.error('There was a problem with the fetch operation:', error);
  });

console.log(45)
