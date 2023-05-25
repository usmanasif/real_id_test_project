# Rtenant Front-End - React

This is a React application that allows users to interact with Rtenant website and view credit checks and obtain eviction reports pages. It is built using React, a JavaScript library for building user interfaces.

## Functionality

With the RTenant, you can perform the following actions:

1. Move to following pages by navigation bar
   - Eviction Reports
   - Credit Checks
2. "Add to cart" different packages
   - Toaster will appear with the confirmation message
   - Number of items increases on the carts icon located at top right corner of menu bar
   - Number of items at cart persists
     - When you reload the page
     - When you close tab and reopen it
     - When you open a new tab in the same browser
3. You can add email and name in the form at Credit Checks (Formik)
   - It will show your particulars in the alert message.
     - Validations are added to the form by using "yup"

## Test Cases

To ensure that the components are rendered correctly I have added test cases.

- To run test cases write the following command in your command prompt or terminal:

```
npm test
```

## How to Start

#### ( **Important** : React Version should be 18.2.0 and Node version is v14.18.3)

To get started with the Rtenant app, please follow the instructions below:

1. Clone the repository from the github by following command

```
git clone https://github.com/usmanasif/real_id_test_project
```

2. Navigate to the project directory using your command prompt or terminal.
3. Run the command `npm install` to install all necessary dependencies.

```ssh
npm install
```

or

```ssh
npm i
```

4. Run the command npm start to start the server.

```ssh
npm start
```

5. Once the server is running, you can access the application by navigating to http://localhost:3000 in your web browser.

## Tech stack

The tech stack used to build the React Frontend is:

1. React - a JavaScript library for building user interfaces
2. React Router DOM - a library for routing in React
3. Formik- a popular form management library for React
4. React Testing Library - a library for testing React
