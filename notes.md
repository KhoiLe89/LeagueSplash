I have the images and the data rendering from the API.
Next Step...
    Is there an API for all the skins or should i find them all and integrate them with mongoDB?
    I need to get the prices and ETC
    NEXT STEP: Get the skins via API or Database it.

MongoDB
  I have all the skins from mobafire, now i need to be able to integrate it into a DB and link them to each respective JSON object from express.

for each element in the array, print out the key and value(Aatrox skin model from men-lab)

Next Step:
  I have access to the skins in express. Now I need to place a conditional if the Champion name = SkinObject.name, print out all skinImg. What if i push only the names from the API into an array, then do a forEach on those names and compare those to the results.name? maybe i can set each element in the name array to its own name?


I have each skin linked with each of the names in the name array.
Now I have to print them out next to each name in the view.
The problem now is that I can get the name of the name array to show, but the images from the API doesn't.
How do i loop through keys of objects in handlebars?
  loop through it in express with props and store both that and result props to an array and loop through that in handlebars?

dont put var to make it global?

Add a readme with:
An embedded screenshot of the app
Explanations of the technologies used
Installation instructions for any dependencies
Link to your user stories – who are your users, what do they want, and why?
Link to your wireframes – sketches of major views / interfaces in your application
Descriptions of any unsolved problems or major hurdles you had to overcome

README:
LeagueSplash was inspired by the popular MOBA video-game League of Legends. With no API for all the skins that each particular champion has, I envisioned this Web Application to be a place where users can view the attributes for each specific skin. Ultimately, I noticed there was a lack of sources that displayed such information, and sought to create an application that provided a solution for all League of Legends Fans.

Technologies Used: The Main Technologies used for this Web Application were MongoDB, Express.js, AngularJS, and Node.js. Most of the code was written on the server side via Node.js and Express.js. The database of each Champions "Skin Data" was done using MongoDB. Most of the front end was taken care of with AngularJS with the exception of the "Spotlight" page.
Installation: To run this application locally, users must install express, express-handlebars, mongoose, and request. Run npm install --save {{dependency}}.
User Stories:
As a User, I can see the all the skins for all the champions
As a User, I can see the price of each skins
As a User, I can view the spotlight of each skin
As a User, I can see the upcoming major events RiotGames is hosting.

Future Features
Users will be able to search through the database to display each skin based on, price, rarity, and availability.
Users will be able to see a "What new with skins" banner that displays the newest skins and the skins that are currently on sale.
Users will be able to bookmark a specific skin, and be notified when the skin comes on sale.
