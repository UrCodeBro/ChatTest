$(document).ready(function() {
        $.get("Files/MOCK_DATA.csv");
        alert("Success");
        console.log($.cvs.toArrays("Files/MOCK_DATA.csv"););
});
