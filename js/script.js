/*jslint browser: true*/
/*global $*/
/*eslint-env browser*/

$(document).ready(function() {
var countryOptions = '';
  $.getJSON('countries.json', function(data){
    countryOptions += '<option value="">Select country</option>';
    $.each(data, function(key, country){
      countryOptions += '<option value="'+country.code+'">'+country.name+'</option>';
    });
    $('#country').html(countryOptions);
  });
    
    $('#form').submit(function(e) {
        e.preventDefault(); 
        $('.form-th-message').show();
        $('#form, h2').hide();
    });
    }); 
