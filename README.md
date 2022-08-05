# #hebras 

This app is a shopping cart. It was used to build a friendly user experience with instant visual updates and scalable code in ecommerce applications.

![](src/assets/gif/Animation.gif)

## Description

The project consists of an ecommerce. It contains search filters by categories and you can access the details of each product. It is possible to add them to the cart and then complete the form to request the purchase. It delivers a unique sales ID.

I used Firebase how to database.

If you prefer to run locally, follow these steps:

    1. Download the project from GitHub.
    2. Open the folder of the project in your favorite IDE.
    3. Run the `npm install` command.
    4. Run the `npm start` command.
    5. Enjoy!
    
## Technologies used

| Name                      | Link                                                    |
| ------------------------- | ------------------------------------------------------- |
| Styled Components         | https://styled-components.com                           |
| React Icons               | https://react-icons.github.io/react-icons               |
| Copy to clipboard         | https://www.npmjs.com/package/eact-copy-to-clipboard    |
| React Spinners            | https://www.npmjs.com/package/react-spinners            |
| React Toastify            | https://www.npmjs.com/package/react-toastify            |
| Firebase                  | https://firebase.google.com                             |
| Lottie Files              | https://lottiefiles.com                                 |
| Responsive Carousel       | https://www.npmjs.com/package/react-responsive-carousel |
| React Hook Form           | https://react-hook-form.com                             |
| Yup                       | https://www.npmjs.com/package/yup                       |

## Development information

### Routes

* **Home** *("/")*: It renders an image slider with advertising.
* **Products** *("/products")*: It render a container to access the different product categories and a container with all the existing products in the database.
* **Category** *("/category/:categoryId")*: It renders the products of the category.
* **Item** *("/item/:productId")*: Render a card with the details of the selected product (name, description, image, stock). It also has a button available that is responsible for adding a certain amount of the product to the cart, once the product is added, another button is rendered that redirects the user to their shopping cart.
* **Cart** *("/cart")*: Shows the shopping cart with the products added by the user. If no product was added, it renders the CartEmpty component which returns a "No products" notice.
* **Order** *("/checkout")*: It renders a form to generate an order in the database, when submitting the form if all the fields are correct, it renders a poster with the ID of the generated order.

## Authors

- [@gomeznahuel](https://www.github.com/gomeznahuel)
