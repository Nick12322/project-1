// Initialize Firebase
var config = {
    apiKey: "AIzaSyD5Z__S1v4et2UdLUyeaSpWszxWoLpsmIc",
    authDomain: "project-1-d1f0c.firebaseapp.com",
    databaseURL: "https://project-1-d1f0c.firebaseio.com",
    projectId: "project-1-d1f0c",
    storageBucket: "",
    messagingSenderId: "322965427687"
};
firebase.initializeApp(config);

var database = firebase.database();

// Part of form validation
$.validator.setDefaults({
    submitHandler: function () {
        alert("submitted!");
    }
});

// Part of form validation
$(document).ready(function () {
    $("#email-input-form").validate();
});

// Main form validation function: pushes new user data to firebase after form has been validated
$("#email-input-form").validate({
    submitHandler: function (form) {
        $(form).on("submit", function (e) {
            // e.preventDefault();
            alert("submitted");
            // Store user input
            var email = $("#email-input").val();
            var userID = $("#id-input").val();
            $("#email-input").val(""); // clear input field
            $("#id-input").val(""); // clear input field
            console.log(email);
            console.log(userID);
            database.ref().push({
                email: email,
                userID: userID
            });
        });
    }
});

// Every time a user is added to database, execute the following function with snapshot parameter passed (snap)
database.ref().on("child_added", function (snap) {
    var userID = snap.val().userID;
    // Create new row with user data and append to users-table body
    var newUser = $("<tr><td>" + userID + "</td></tr>");
    $("#users-body").append(newUser);
});
