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

// Form validation / event listener
$.validator.setDefaults({
    submitHandler: function () {
        var email = $("#email-input").val();
        var userID = $("#id-input").val();
        $("#email-input").val(""); // clear input field
        $("#id-input").val(""); // clear input field
        console.log(email);
        console.log(userID);
        database.ref().push({
            email: email,
            userID: userID,
            signUpDate: firebase.database.ServerValue.TIMESTAMP // Timestamp of submission to firebase = date user signed up
        });
    }
});

// Validate email input form
$("#email-input-form").validate();

// Every time a user is added to database, execute the following function with snapshot parameter passed (snap)
database.ref().on("child_added", function (snap) {
    var userID = snap.val().userID;
    var signUpDate = snap.val().signUpDate;
    // convertedDate holds converted sign up date from unix time
    var convertedDate = moment(signUpDate).format('MMMM D YYYY');
    // Create new row with user data and append to users-table body
    var newUser = $("<tr><td>" + userID + "</td><td>" + convertedDate + "</td></tr>");
    $("#users-body").append(newUser);
});
