
  var config = {
    apiKey: "AIzaSyCoH2QLcmXa5S4KFkTzZdNNM8o3VRze2m8",
    authDomain: "hw-7-812ac.firebaseapp.com",
    databaseURL: "https://hw-7-812ac.firebaseio.com",
    projectId: "hw-7-812ac",
    storageBucket: "",
    messagingSenderId: "352822651356"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  var connectionsRef = database.ref("/connections");

  var connectedRef = database.ref(".info/connected");

  connectedRef.on("value", function(snap) {
  	if (snap.val()) {
  		var con = connectionsRef.push(true);
  		con.onDisconnect().remove();
  	}
  });

  database.ref().set({
  	trainName: trainName,
  	destination: destination,
  	trainTime: trainTime,
  	frequency: frequency
  });

  var trainName = $("#train_name").val().trim();
  var destination = $("#destination").val().trim();
  var trainTime = $("#train_time").val().trim();
  var frequency = $("#frequency").val().trim();

  database.ref("/trainData").on("value", function(snapshot) {
  	("#train_name").text(snapshot.val().("#name_output");
  		console.log(snapshot);
  }
