class OrderModel {
  constructor(products, orderid, userid, username, useremail) {
    this.products = products;
    this.orderid = orderid;
    this.userid = userid;
    this.username = username;
    this.useremail = useremail;
  }

  static getOrderFromJSON(json) {
    var orderModel = new OrderModel(null);
    orderModel.products = OrderProductModel.getOrderProductFromJSON(json["order"]);
    orderModel.orderid = json["orderid"];
    orderModel.userid = json["userid"];
    orderModel.username = json["username"];
    orderModel.useremail = json["useremail"];
    return orderModel;
  }
};

class OrderProductModel {
  constructor(productid, count) {
    this.productid = productid;
    this.count = count;
  }

  static getOrderProductFromJSON(json) {
    var products = [];
    json["products"].forEach((productJson) => {
      var orderProduct = new OrderProductModel(null);
      orderProduct.productid = productJson["productid"];
      orderProduct.productname = productJson["productname"];
      orderProduct.description = productJson["description"];
      orderProduct.discount = productJson["discount"];
      orderProduct.imageurl = productJson["imageurl"];
      orderProduct.price = productJson["price"];
      orderProduct.size = productJson["size"];
      orderProduct.count = productJson["count"];
      products.push(orderProduct);
    });
    return products;
  }
}