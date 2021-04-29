class ProductInfoModel {
  constructor(products, orderid) {
    this.products = products;
    this.orderid = orderid;
  }

  static getOrderFromJSON(json) {
    var orderModel = new OrderModel(null);
    orderModel.products = OrderProductModel.getOrderProductFromJSON(json["order"]);
    orderModel.orderid = json["orderid"];
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
      orderProduct.count = productJson["count"];
      products.push(orderProduct);
    });
    return products;
  }
}