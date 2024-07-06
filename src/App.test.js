/* eslint-disable no-undef */

//import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../App';


jest.mock('../pages/Home', () => {
  const Home = () => <div>Home Page</div>;
  Home.displayName = 'Home';
  return Home;
});
jest.mock('../pages/ExploreProducts', () => {
  const ExploreProducts = () => <div>Explore Products Page</div>;
  ExploreProducts.displayName = 'ExploreProducts';
  return ExploreProducts;
});
jest.mock('../pages/AdvanceSearch', () => {
  const AdvancedSearch = () => <div>Advanced Search Page</div>;
  AdvancedSearch.displayName = 'AdvancedSearch';
  return AdvancedSearch;
});
jest.mock('../pages/SingleProduct', () => {
  const SingleProduct = () => <div>Single Product Page</div>;
  SingleProduct.displayName = 'SingleProduct';
  return SingleProduct;
});
jest.mock('../pages/SignIn', () => {
  const SignIn = () => <div>Sign In Page</div>;
  SignIn.displayName = 'SignIn';
  return SignIn;
});
jest.mock('../pages/Register', () => {
  const Register = () => <div>Register Page</div>;
  Register.displayName = 'Register';
  return Register;
});
jest.mock('../pages/Cart', () => {
  const Cart = () => <div>Cart Page</div>;
  Cart.displayName = 'Cart';
  return Cart;
});

test('renders Home page on default route', () => {
  render(
    <Router>
      <App />
    </Router>
  );
  const homeElement = screen.getByText(/home page/i);
  expect(homeElement).toBeInTheDocument();
});

test('renders Advanced Search page on /advance route', () => {
  window.history.pushState({}, 'Advanced Search', '/advance');
  render(
    <Router>
      <App />
    </Router>
  );
  const advancedSearchElement = screen.getByText(/advanced search page/i);
  expect(advancedSearchElement).toBeInTheDocument();
});

test('renders Explore Products page on /exploreProducts route', () => {
  window.history.pushState({}, 'Explore Products', '/exploreProducts');
  render(
    <Router>
      <App />
    </Router>
  );
  const exploreProductsElement = screen.getByText(/explore products page/i);
  expect(exploreProductsElement).toBeInTheDocument();
});

test('renders Single Product page on /singleProduct route', () => {
  window.history.pushState({}, 'Single Product', '/singleProduct');
  render(
    <Router>
      <App />
    </Router>
  );
  const singleProductElement = screen.getByText(/single product page/i);
  expect(singleProductElement).toBeInTheDocument();
});

test('renders Sign In page on /signin route', () => {
  window.history.pushState({}, 'Sign In', '/signin');
  render(
    <Router>
      <App />
    </Router>
  );
  const signInElement = screen.getByText(/sign in page/i);
  expect(signInElement).toBeInTheDocument();
});

test('renders Register page on /register route', () => {
  window.history.pushState({}, 'Register', '/register');
  render(
    <Router>
      <App />
    </Router>
  );
  const registerElement = screen.getByText(/register page/i);
  expect(registerElement).toBeInTheDocument();
});

test('renders Cart page on /cart route', () => {
  window.history.pushState({}, 'Cart', '/cart');
  render(
    <Router>
      <App />
    </Router>
  );
  const cartElement = screen.getByText(/cart page/i);
  expect(cartElement).toBeInTheDocument();
});
