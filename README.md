
Tier 1: All Plants
Details
Frontend
 [] Write a component to display a list of all plants (at least their names and imageUrls) []room  []window
 [] Write a plants sub-reducer to manage robots in your Redux store [] room []window
 [] Display the AllPlants component when the url matches /robots []room []window
 [] Add links to the navbar that can be used to navigate to the all-plants view []room []window

Backend
[] Write a route to serve up all plants []room  []window

Seed
[] Running the seed file creates projects and robots for demonstration purposes
Congrats! You have completed your first vertical slice! Make sure to commit -m "Feature: Get all robots and projects" before moving on (see RUBRIC.md - points are awarded/deducted for a proper git workflow)!



Tier 2: Single plant and Single 

Frontend
[]Write a component to display a single plant with the following information  []room  []window
 The plants's name, image, ect []room  []window
 The names of their room(or a helpful message if they don't have any) []room  []window
 Display the appropriate plant when the url matches /plant/:plantId []room  []window

Clicking on a robot from the all-plants view should navigate to show that plant in the single-plant view

Backend
 Write a route to serve up a single plant (based on their id), including that plants's room []room  []window


















Tier 3: Adding a Robot and Adding a Project (10/63)
Details
Frontend
 Write a component to display a form for adding a new plant that contains at least an input for name

 Display this component as part of the all-robots view, alongside the list of robots

Submitting the form with valid data should:

 Make an AJAX request that causes the new robot to be persisted in the database
 Add the new robot to the list of robots without needing to refresh the page
 Write a component to display a form for adding a new project that contains at least an input for title

 Display this component as part of the all-projects view, alongside the list of projects

Submitting the form with valid data should:

 Make an AJAX request that causes the new project to be saved to the database
 Add the new project to the list of projects without needing to refresh the page
Backend
 Write a route to add a new robot
 Write a route to add a new project
Congrats! You have completed your third vertical slice! Make sure to commit -m "Feature: Add Robot and Project" before moving on (see RUBRIC.md - points are awarded/deducted for a proper git workflow)!

Tier 4: Removing a Robot and Removing a Project (8/63)
Details
Frontend
 In the all-robots view, include an X button next to each robot

Clicking the X button should:

 Make an AJAX request that causes that robot to be removed from database
 Remove the robot from the list of robots without needing to refresh the page
 In the all-projects view, include an X button next to each project

Clicking the X button should:

 Make an AJAX request that causes that project to be removed from database
 Remove the project from the list of projects without needing to refresh the page
Backend
 Write a route to remove a robot (based on its id)
 Write a route to remove a project (based on its id)
Congrats! You have completed your fourth vertical slice! Make sure to commit -m "Feature: Remove Robot and Project" before moving on (see RUBRIC.md - points are awarded/deducted for a proper git workflow)!

Tier 5: Updating a Robot and Updating a Project (13/63)
Details
Frontend
 Write a component to display a form updating at least a robot's name and fuelLevel

 Display this component EITHER as part of the single-robot view, or as its own view

Submitting the form with valid data should:

 Make an AJAX request that causes that robot to be updated in the database
 Update the robot in the current view without needing to refresh the page
 In the single-robot view, display an Unassign button next to each of its projects, which unassigns it from that project (in the database as well as this view)

 Write a component to display a form updating at least a project's title and completion status

 Display this component EITHER as part of the single-project view, or as its own view

Submitting the form with valid data should:

 Make an AJAX request that causes that project to be updated in the database
 Update the project in the current view without needing to refresh the page
 In the single-project view, display an Unassign button next to each robot assigned to it, which unassigns that robot (in the database as well as this view)

 In the single-project view, display a Complete button, which marks the project as completed (in the database as well as this view)

Backend
 Write a route to update an existing project
 Write a route to update an existing robot
Congrats! You have completed your fifth vertical slice! Make sure to commit -m "Feature: Update Robot and Project" before moving on (see RUBRIC.md - points are awarded/deducted for a proper git workflow)!

Bonus Tier (25 EC)
Details
Finishing Touches
 If a user attempts to add a new robot or project without a required field, a helpful message should be displayed
 If a user attempts to access a page that doesn't exist (ex. /potato), a helpful "not found" message should be displayed
 If a user attempts to view a robot/project that doesn't exist, a helpful message should be displayed
 Whenever a component needs to wait for data to load from the server, a "loading" message should be displayed until the data is available
 Overall, the app is spectacularly styled and visually stunning
Ordering
 Create option for projects to be ordered based on priority on all-projects view
 Create option for projects to be ordered based on deadline on all-projects view
 Create option for robots to be ordered based on fuel level on all-robots view
Filtering
 Create filters on all-projects view so that projects can be filtered based completion status and priority (allow multiple filters to be applied)
 Create a filter on all-robots view to only show projects without assigned robots and vice versa
 Create filters on all-robots view so that robots can be filtered based on fuel type and fuel level (allow multiple filters to be applied)
 Create a filter on all-robots view to only show robots without assigned projects and vice versa
