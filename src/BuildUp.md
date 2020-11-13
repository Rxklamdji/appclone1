### Clean up the React App
1. Delete files = (Apptest.js, Logo.Svg, Setup.Test) to have a clean slate to build on..
2. Delete everything in App.CSS file and make it to a lower case app in the App.js file.
3. Go to Index.CSS and type *{0} to get ride of any type of space!!
### Firebase Gooogle Database
1. Go to GOogle Firebase to create a database for your project
2. click continue, web icon in the center, type the name of the app to register App and check Also Set up, next, continue to console, then go right inside menu, click on project settings, scroll down to Firebase SDK snippet, click on Config
3. Create a new file in the src folder called "Firebase.js" and paste that config u just copy in your clipboard. Usually u shouldn't put your firebase config of your databse on the frontend, but google got encryption,so u can here.
### Header Component
1. Build it using RFCE "build componet directly for you because of ES7 snippets!!
2. Import the Header.CSS in this file which will be the css file we will be using for this.
3. we createed an image folder in public folder, then call it into Header component, and added some CSS to it in the Header Css with "header_left > img"
### Material UI
1. This will help us build little icons on websites. Just like Bootstrap, this is really popular Library!!
2. The extension for it is "npm install @materail-ui/core"
3. Then, do "npm install @material-ui/icons"
4. go to "material-ui.com" click on the "full icon lists" to get the codes for any icons you wanna incorporate into your project.
5. We will import icons link into the "App.js" or every where we use them and div their names
### Middle Header Bar Option
1. Import the icons you want from the website to your file
2. Import their links, than call them using their names!!
### Header CSS Styling
1. we are going to use the " Display, Flex" on Header to put everything into a raw, right-center-left.
2. We add a little padding to create left-center-right space.
3. "justify-content, space between" this will push all the elements apart from each other.
4. We are creating a shadow hearder, so we will use "sticky, plus other css setting".
5. On "left, we will also add some css"; "space-evenly" so that the "image & bar search" will be at the same distance.
6. So we will be adding some css code to "header-input >input (this allow us to put it on input directly).
7. We apply some "CSS on Head-center, so that eveery time we type, the typing doesn't move the writing around everywhere!!
8. We wanna apply a color to all of the icons that are in the middle, so we do  "MuisvgIcon to access all of the icons". Then, we will add a blue hover effect on it. Then, we will add some "Displa and alignment to it. Add more hover effect on it, so that we can have a gray area behind each icon background.
9. For "Heaer_Right" we need it to display flex, so that it can align with the rest!!
### Active State
1. We are going to insert active state in "Hover, so when we click on an icon we see it below being activated".
2. We created a class for that which is "Active". THen, we add some CSS code on tope of it.
### Search Bar
1. We wanna add a "Place Holder into our "Search Bar" to hold search text beside the 'input serch'.

### APP Body
1.We are going back to "APPS.js file", since we are about to work on another part of this app which is the "App Body"
2. We will create a Component name "Sidebar.
3. Since our AppBody has multiple Rows, we are going to created a component "SidebarRow" and Reuse it over and over again.
4. We have to Import 'SidebarRow' into 'Sidebar', then remember to import 'Sidebar' into 'App.js' to make it visible.
5. 'Sidebar' is the parent of 'Sidebar Row'. So, we can get Sidebar Row Pros' that will help inherit attributes of it and pass it to 'Sidebar'.
6. So, we have 3 content holder for our Sidebar Row, 'src, icon, title'. We can also pass component as props by using 'cap letter for them'.