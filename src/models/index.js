// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Product, Category, Brand, CartProduct, OrderProduct, Order, User, Address } = initSchema(schema);

export {
  Product,
  Category,
  Brand,
  CartProduct,
  OrderProduct,
  Order,
  User,
  Address
};