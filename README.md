# CS-465-Full-Stack-Development-I

# Architecture
* # Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).
In this project, we started with a static HTML webpage and transformed it into something new using a variety of frontend tools. First, we setup our HTML files into the appropriate Express framework folders. This allowed us to test whether the application would display the HTML in Express. We then refactored the website code using Javascript by organizing using a Model View Controller approach. We implemented templating techniques with Handlebars and moved our HTML code to dynamic JSON to contribute to a website that renders quickly. The Single Page Application was created  with Angular using Typescript, HTML, and CSS. This was intended to be a client-facing page separate from the customer-facing site that allowed Travlr employees to maintain their trip packages and user database. The webpage uses Bootstrap CSS and integrates reusable UI components and logic.

* # Why did the backend use a NoSQL MongoDB database?
For our database, we used a NoSQL MongoDB database. This database, connected to a server, delivers the data to the browser for customers of Traveler Getaways. We integrated an API using logic that defines the trip schema. This information is validated and retrieved in a JSON format using the Mongoose node package library.

# Functionality
* # How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?
JSON, while originally derived from Javascript, is different from Javascript itself. Javascript Object Notation is a data format that uses key-value pairs. Javascript is a programming language used to develop web pages and define its behavior. The two work together in our app by using JSON data returned to us from our HTTP requests and converting it into usable Javascript objects to complete different functions based on the responses.

* # Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.
In order to improve functionality and efficiencies, we took the ‘Separation of Concerns’ approach and created a separate app call app_api. This refactoring allowed the API to be used by Angular.js, Express backend, and other external callers. Taking this approach separates RESTful endpoints into logical layers to reduce complexity, decrease the difficulty of changes in future code, and mitigate the amount of undetected defects.

# Testing
* # Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.
We tested our API using GET, POST, and PUT methods to validate that things were behaving as intended. These methods were then routed to our endpoints to perform these requests and retrievals. In simple terms, GET retrieves information, POST adds information, and PUT updates information. We also used security protocol methods to implement a level of security in our application by creating an HTML login form, using JSON web tokens, Passport for request authentication, and crypto-js for cryptographic algorithms.

# Reflection
* # How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?
This course has helped me to get a wider understanding of how in depth it is to create a full stack website. Having only ever done front end work in my external experiences, it was insightful to get hands on with doing backend work as well. I have learned new skills by using the MEAN stack, and I have continued to develop my front end skills in Typescript. Having additional tools under my belt will help me to be come a more marketable candidate upon graduation.
