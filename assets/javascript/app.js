console.log('hello world');

var config = {
  apiKey: "AIzaSyB7qlfahOZn3WCoXsne0WY26Z-dE2N_m1U",
  authDomain: "ultimate-food-guide.firebaseapp.com",
  databaseURL: "https://ultimate-food-guide.firebaseio.com",
  projectId: "ultimate-food-guide",
  storageBucket: "",
  messagingSenderId: "674703006763"
};
firebase.initializeApp(config);

  var database = firebase.database();
  var rootRef = firebase.database().ref();

console.log(rootRef)


  // var title = "space+jam";
  //   var queryURL = "https://www.omdbapi.com/?t=" + title + "&y=&plot=short&apikey=trilogy";

  //   $.ajax({
  //     url: queryURL,
  //     method: "GET"
  //   })(function(response) {
  //     console.log(response);
  //     console.log(response.Runtime);
  //   });

