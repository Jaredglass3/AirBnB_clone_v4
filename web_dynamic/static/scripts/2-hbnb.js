$(document).ready(function () {
    // Send GET request to API
    fetch('http://0.0.0.0:5001/api/v1/status/')
      .then(response => {
        // Check if response is OK
        if (response.ok) {
          // Add "available" class to div#api_status
          document.querySelector('#api_status').classList.add('available');
        } else {
          // Remove "available" class from div#api_status
          document.querySelector('#api_status').classList.remove('available');
        }
      })
      .catch(error => console.error(error));
  
    // Show/Hide amenities
    const amenitiesChecked = {};
    $('input:checkbox').change(function () {
      if ($(this).is(':checked')) {
        amenitiesChecked[$(this).data('id')] = $(this).data('name');
      } else {
        delete amenitiesChecked[$(this).data('id')];
      }
      const amenitiesList = Object.values(amenitiesChecked).join(', ');
      $('.amenities h4').text(amenitiesList);
    });
  });
  