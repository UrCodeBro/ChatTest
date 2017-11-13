$(document).ready(function() {
        $.get("Files/MOCK_DATA.csv");
        alert("Success");
        $.cvs.toArrays("Files/MOCK_DATA.csv");
});
