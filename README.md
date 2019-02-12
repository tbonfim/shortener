#Shortener

##Approach
When I started thinking about this test, to avoid having to have a database behind the solution, I decided to implement it using cryptography. This way, only handling crypting would solve the duplication problem without any comparison step dependent of database usage.

During the work, I figured out that output size depends on the input size, so, this doesn't always fix the shortening issue, as the output for long urls maybe even longer than itself. Then it's more like an URL mapper then a shortener. 

The first thing that come to my mind when thinking about this test was to have a standard MEN (Mongo, Express and Node) application, with some kind of hash ( taking care about hash colision strategy, once it was in the requeriments). This might be, indeed, the best solution for the shortener assessment. The thing is, I didn't foresee the cryptography length issue and when I realized it, I was already out of time.

## Requirements
* A user should be able to load the index page of your site and be presented with an input field where they can enter a URL.
* Upon entering the URL, a "shortened" version of that url is created and shown to the user as a URL to the site you're building.
* When visiting that "shortened" version of the URL, the user is redirected to the original URL.
* Additionally, if a URL has already been shortened by the system, and it is entered a second time, the first shortened URL should be given back to the user.

## Dependencies
Node
Express
Is-URL
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.


<!-- ### `npm test`

Launches the test runner in the interactive watch mode.<br> -->