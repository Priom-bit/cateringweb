// var firestore;
// var orders = [];
class AdminPanel {
  constructor(firestore, orders) {
    this.firestore = firestore;
    this.orders = orders;
  }

  initializeFirebase() {
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    var firebaseConfig = {
      apiKey: "AIzaSyA2tphapAZ65I6i0ZI0TSWMBvxG3ORo7Y0",
      authDomain: "catering-service-48379.firebaseapp.com",
      projectId: "catering-service-48379",
      storageBucket: "catering-service-48379.appspot.com",
      messagingSenderId: "302195676771",
      appId: "1:302195676771:web:ba0be808cd5cb808004a56",
      measurementId: "G-4L5DPWXX85"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
  }

  initFirestore() {
    this.firestore = firebase.firestore();
  }

  loadOrdersFromServer() {
    this.firestore.collection("orders")
      .get()
      .then((querySnapshot) => {
        console.log(querySnapshot.size);
        querySnapshot.forEach((doc) => {
          var orderModel = OrderModel.getOrderFromJSON(doc.data());
          console.log("Nirob test " + orderModel.orderid + " product count: " + orderModel.products.length);
          this.orders.push(orderModel);
        });
        this.loadOrdersView();
      })
      .catch((error) => {
        console.log("Error getting document: " + error);
      });
  }

  loadOrdersView() {
    for (var i = 0; i < this.orders.length; i++) {
      var order = this.orders[i];

      var childDiv = document.createElement("div");
      childDiv.className = "containerDiv";
      var childP = document.createElement("p");
      childP.className = "textP";
      childP.innerHTML = "" + (i + 1) + ". UserId: " + order.userid + "; Name: " + order.username + "; Email: " + order.useremail + " <br>" + this.getformatedStringFromOrder(order);

      var completeBtn = document.createElement("BUTTON");
      completeBtn.innerHTML = "COMPLETE";
      completeBtn.className = "button";
      completeBtn.onclick = function() {
        completeButtonClicked();
      };
      childDiv.appendChild(completeBtn);

      childDiv.appendChild(childP);

      var element = document.getElementById("containerid");
      element.appendChild(childDiv);
    }
  }

  getformatedStringFromOrder(order) {
    var formattedStr = "Orderid: " + order.orderid + "<br>";
    var i = 1;
    order.products.forEach((product) => {
      formattedStr = formattedStr + i + ": Productid: " + product.productid + "; Product Name: " + product.productname + "; count: " + product.count + "<br>";
      i = i + 1;
    });
    return formattedStr;
  }

  completeButtonClicked() {
    console.log("deleteButtonClicked");
  }
};