# Gary Zhao's Coding Submission for [Curlogy](https://curology.com/).

View live site here: https://www.garyzhao.com/curology/

## Available Scripts

In the project directory, you can run:

### `npm i && npm start`
On first load, run the above commands in CLI to install appropriate dependenices and runs the app in development mode (see below).

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.


## Challenges

### Calling API for images from TMDB
Because of the way TMDB had destructured how images are pulled from their API, I found it not straightforward and a bit tricky at first. Thankfully, their documentation is 🔥; after a quick read, I was able to figure it out.

### Pagination
Figuring out the pagination was a bit tricky because I had to think about logic of how the pages will be displayed.

## Design Choices
Pretty much followed what screenshot I received from the Google Doc. The only thing that I made a change to is how the stars are displayed. Instead of showing ten stars and filling the stars according to the movie's rating, I copied the way IMDB displayed their star rating. The result was simplier to code and displays the same information.



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).