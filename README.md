![Image of Retail Therapy's Home Page](./src/assets/RetailTherapy.png)

[Visit RetailTherapy](https://retail-therapy.vercel.app/)

## Technologies
- Javascript
- HTML 5
- CSS

## Libraries, Frameworks & More
- React
- TailwindCSS
- NextUI
- FontAwesome
- FontSpace

## Features
- Implements Searchspring's Search API to run user driven queries.
- Utilizes Fetch API to execute calls made to the SearchSpring Search API.
- Utilizes Context API to allow for global state management.
- Logo and Business Name are clickable to allow a user to be taken back to the "home" page.
- Search input which allows a search to be executed when the "Enter" key is pressed or manual click is performed on the search icon.
- Results are displayed in a grid and paginated.
- Product cards display each products associated information:
    - Name
    - Image
    - Price
- If a product has an MSRP that is greater than the listed price, MSRP will display crossed out. 
- Disabled buttons when they are not needed:
    - Previous is disabled when one the first page
    - Next is disabled when on the last page
    - Search icon is disabled when Search bar is empty
- Design is both web and mobile friendly.
- Fall back image is provided if original thumbnail image fails
- Skeleton provides a loading effect while product images load.


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

