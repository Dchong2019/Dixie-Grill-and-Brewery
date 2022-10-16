// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB3lyujRu2g_szT-r0GZF4T12MrzGZJHg8",
    authDomain: "beer-database.firebaseapp.com",
    databaseURL: "https://beer-database-default-rtdb.firebaseio.com",
    projectId: "beer-database",
    storageBucket: "beer-database.appspot.com",
    messagingSenderId: "237719564948",
    appId: "1:237719564948:web:a16916d042fd96c874ba81",
    measurementId: "G-KHGHBKCJF7"
  };

  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Set database variable
var database = firebase.database()

var ref = database.ref('Beers');
ref.on('value',gotData, errData);

function save() {
  var name = document.getElementById('name').value
  var abv = document.getElementById('abv').value
  var company = document.getElementById('company').value
  var description = document.getElementById('description').value
  var category = document.getElementById('category').value

  database.ref('Beers/' + name).set({
    name : name,
    abv : abv,
    company : company,
    description : description,
    category : category
  })

  alert('Saved')
}

function get() {
  var name = document.getElementById('name').value

  var name_ref = database.ref('Beers/' + name)
  name_ref.on('value', function(snapshot) {
    var data = snapshot.val()

    alert(data.name)

  })

}

function update() {
  var username = document.getElementById('name').value
  var email = document.getElementById('email').value
  var password = document.getElementById('password').value

  var updates = {
    email : email,
    password : password
  }

  database.ref('users/' + username).update(updates)

  alert('updated')
}

function remove() {
  var name = document.getElementById('name').value

  database.ref('Beers/' + name).remove()

  alert('deleted')
}

function gotData(snapshot){
    document.getElementById("beerlist").innerHTML = ""; // 👈 clear previous child nodes

    snapshot.forEach((child) => {
        const data = child.val()

        var li = document.createElement('li', data.name + ': ' + data.company + ': ' + data.abv + ': ' + data.description + ': ' + data.category);
        document.getElementById("beerlist").appendChild(li);
    });
}



function errData(err){
    console.log('Error!');
    console.log(err);
}






