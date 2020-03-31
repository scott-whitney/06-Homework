$(document).ready(function(){
    var searchCity = '';
    $('#userBtn').on('click', appendCity);
    const d = new Date();

    const dd = d.getDate();
    const mm = d.getMonth()+1;
    const yyyy = d.getFullYear();
    let output =
    (mm<10 ? '0' : '') + mm + '/' +
    (dd<10 ? '0' : '') + dd + '/' + yyyy
    $('#Hider').hide();

    var storedSearches = localStorage.getItem('Searches');
    var pulledSearches = JSON.parse(storedSearches);
    console.log(pulledSearches);




    







})