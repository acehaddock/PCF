# PCF - Button Control
It has Controls created using PCF for Dynamics 365 Customer Engagment.
You can use the solution to convert the Dynamics 365 text feild to button control. 
Button click can be configured to work along with onchange event of form field.

Usage:
Some projects like to have button in the form. On Click of that button, It need to do call some functions in JS.

Configuration Steps:
1. Create a text field and add to the form. this field will be used to show the Button in form.
2. Configure the text field onchange event to fire the desired JS function.
3. Import the solution (Button Control) to target environment
4. Configure the field to use Button Control
5. Configure the Label Property to have the desired label
6. Publish the customizations.
