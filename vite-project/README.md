# Question 1

## Getting Started

### Run Locally


Move to vite-project

```bash
  cd vite-project
```

Install Dependencies

```bash
  npm install
```

Start the Server

```bash
  json-server db.json
```

Start the Client

```bash
  npm run dev
```
## Component Structure:

1. ### App Component:
This is the root component of the application.
Responsible for rendering other components and managing application-level state. In This component rendering Leftbar and Topbar component .

2. ### Leftbar Component:
The Leftbar component serves as the sidebar navigation for the application. It imports a CSS file for styling and an image asset for the logo. The main structure consists of an outer container holding the sidebar elements.

3. ### Topbar Component:
This component represents the top bar of the application. It imports a CSS file for styling and two sub-components, First_div and Second_div. Within the component, it renders a container div with a class of 'topbar-outer-container', which holds the two sub-components.


4. ### FirstDiv Component:
This component, First_div, represents a section of the top bar containing elements such as a button and an image. It imports an image asset for the bell icon and a CSS file for styling. Within the component, it renders a container div with a class of 'first-div-container'.

5. ### SecondDiv Component:
This component, Second_div, represents another section of the top bar. It imports the useState hook from React and a CSS file for styling. Within the component, it declares a state variable value using useState, initialized with a value of 1.Header: It displays a header with the text "Choose your new site"Buttons: It renders buttons with the class 'btclick' that when clicked, update the state variable value accordingly.Content Area: It includes the Content_Area component and passes the current value of value as a prop named id.

6. ### Content_Area Component:
This component, Content_Area, is responsible for displaying details about the chosen site within the application. It imports several image assets and a CSS file for styling, along with the Sliding_Area component.State Management: It uses the useState hook to manage the state variable area, which holds data about the selected site.
Effect: It uses the useEffect hook to fetch data about the selected site from a local server when the id prop changes.Rendering: It renders various details about the site, such as its name, location, size, price, etc.

7. ### Sliding_Area Component:
This component, Sliding_Area, represents a section within the application UI, potentially used for displaying additional information or options related to the user's interaction. It imports several image assets and a CSS file for styling, along with the BottomComplet component.
Overview: It displays various cards containing information or options for the user.
Landmarks: It presents information about landmarks, such as airports and highways, along with their distances and descriptions.
Map: It includes an image representing a map and an option to schedule a call.


8. ### BottomComplet Component:
This component, BottomComplet, represents a section at the bottom of the page, potentially used for guiding the user through completing their profile. It imports several sub-components, Step1 through Step5, and a CSS file for styling.
State Management: It uses the useState hook to manage the state variables isChecked and completionDateTime.Rendering Action Button: It renders an action button dynamically based on the state of isChecked.Handling Checkbox and Completion: It provides functionality to  toggle the completion checkbox and updates the completion date and time accordingly Sub-components: It renders sub-components Step1 through Step5, which likely represent steps or sections of the profile completion process.



