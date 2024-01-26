# Id.me Take Home - Purchase History App

## Introduction

This app is a simple application that fetches and displays purchase history from the public API: "https://storage.googleapis.com/marketplace-prod-7728-shop-cdn-e5e2/interview/data.json".

When you have the app running locally you should be able to:

- As a desktop user on the Purchases Screen, I want to see my purchase as a table, displaying each item's name, image, description, purchase date, purchase price, and category.
- As a mobile user on the Purchases Screen, I want to see my purchases as a list of cards, displaying each item's name, image, description, purchase date, and price.

## Instructions

You will need Node (any version >= 14) and npm installed on your system to get started.

1. Clone or download the repository to your local machine. 

2. cd into the root folder of the repo. 

3. Install Node dependencies by running:

    ```
    npm install
    ```

4. Start the development server by running:

    ```
    npm start
    ```

   This command will start the server on port `:3000`;

5. Open the app by visiting http://localhost:3000/. At this point, you should see
   a simple UI with a list of purchase history. Feel free to re-size the browser.


## Actions Taken

Here are some of the changes I made in the codebase: 

- Used React/Typescript for this project.
- Imported Sans Source Pro font in the html heading, taken from the Figma requirements.
- Created a useViewport.tsx hook in order to detect the browser width screen change (mobile or desktop).
- Created a separate TableView and CardView component to render depending on screen width.
- I grouped the categories together by likeliness and so the colors for those categories were the same. E.g Travel & Automotive, Food & Entertainment, Apparel & Footwear and Technology. In a real producton setting, it would probably be best to make each cateogires different colors but I didn't have the time to choose new colors and usually delegate such task to the designer.
- I tried to modularize the code as much as possible such as creating smaller files like utils.ts, types.ts and creating a custom hook called useViewPort.

## Next Steps

If I had more time, here are some of the additions I would make:

- Add pagination or infinite scrolling to the table and card view list page for a better user experience, assuming that the client data coming back from the API can exceed over 100 rows at one point.
- I used font awesome to get the ellipsis working. They are not actionable right now, because there was no actionable work flow described in the figma. But in a production setting, I would've created a new menu component just for the ellipsis menu so the user could do something actionable like "Open" or "Edit".
- Include unit tests with a framework like Jest or React Testing Library to ensure more robust and reliable code.
