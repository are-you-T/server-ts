// const { productModel } = require('../db/models');
// const AppError = require('../misc/AppError');

// class AdminService {
//   constructor(productModel, orderModel, categoryModel, userModel) {
//     this.productModel = productModel;
//     this.orderModel = orderModel;
//     this.categoryModel = categoryModel;
//     this.userModel = userModel;
//   }

//   // 상품 등록 관리자
//   async postProduct(product) {
//     const { id } = product;
//     const Product = await this.productModel.findOne(id);
//     if (Product) {
//       throw new AppError('Bad Request', 400, '이미 존재하는 상품입니다.');
//     }
//     const result = await this.productModel.create(product);
//     return result;
//   }

// }

// module.exports = new AdminService(productModel, orderModel, categoryModel);
