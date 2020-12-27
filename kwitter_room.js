//ADD YOUR FIREBASE LINKS
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtjInxbHZlemaCO_8C13McPIPKCpXF7f4",
  authDomain: "web-chat-2861d.firebaseapp.com",
  databaseURL: "https://web-chat-2861d.firebaseio.com",
  projectId: "web-chat-2861d",
  storageBucket: "web-chat-2861d.appspot.com",
  messagingSenderId: "768790339533",
  appId: "1:768790339533:web:f16370597d027aeb61ee84",
  measurementId: "G-5MHL0T6GRH"
};

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user name");
    console.log(user_name)

    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
    
    function addRoom()
    {
      room_name = document.getElementById("room_name").value;
    
      firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
      });
    
        localStorage.setItem("room_name", room_name);
        
        window.location = "kwitter_page.html";
    }
    
    function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
           Room_names = childKey;
           console.log("Room Name - " + Room_names);
          row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
          document.getElementById("output").innerHTML += row;
        });
      });
    
    }
    
    getData();
    
    function redirectToRoomName(name)
    {
      console.log(name);
      localStorage.setItem("room_name", name);
        window.location = "kwitter_page.html";
    }
    
    function logout() {
    localStorage.removeItem("user name");
    localStorage.removeItem("room_name");
        window.location = "index.html";
    }
    
    