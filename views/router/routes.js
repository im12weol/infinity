import { categoryProducts } from '../static/js/categoryProducts.js';
import { errorFnc } from '../static/js/errorFnc.js';
import { home } from '../static/js/home.js';
import { login } from '../static/js/login.js';
import { order } from '../static/js/order.js';
import { orderCompleted } from '../static/js/orderCompleted.js';
import { payment } from '../static/js/payment.js';
import { product } from '../static/js/product.js';
import { shoppingcartPro } from '../static/js/shoppingcartPro.js';
import { signup } from '../static/js/signup.js';
import CategoryProducts from '../static/pages/CategoryProducts.js';
import ErrorPage from '../static/pages/ErrorPage.js';
import Home from '../static/pages/Home.js';
import Login from '../static/pages/Login.js';
import Order from '../static/pages/Order.js';
import OrderCompleted from '../static/pages/OrderCompleted.js';
import Payment from '../static/pages/Payment.js';
import Product from '../static/pages/Product.js';
import ShoppingcartPro from '../static/pages/ShoppingcartPro.js';
import Signup from '../static/pages/Signup.js';

export const routes = [
  { Path: '/', View: Home, Script: home },
  { Path: '/login', View: Login, Script: login },
  { Path: '/signup', View: Signup, Script: signup },
  { Path: '/product', View: Product, Script: product },
  { Path: '/order', View: Order, Script: order },
  { Path: '/shoppingCart', View: ShoppingcartPro, Script: shoppingcartPro },
  {
    Path: '/categorys/:categoryProducts',
    View: CategoryProducts,
    Script: categoryProducts
  },
  { Path: '/orderCompleted', View: OrderCompleted, Script: orderCompleted },
  { Path: '/error', View: ErrorPage, Script: errorFnc },
  { Path: '/payment', View: Payment, Script: payment }
];
