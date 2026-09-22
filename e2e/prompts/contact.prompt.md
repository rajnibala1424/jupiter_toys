As a automation tester, I want to create a contact us form test cases using playwright,for that I am looking for the test cases for the contact us form. Can you please provide me the test cases for the contact us form?
Sure! Here are some test cases for a "Contact Us" form using Playwright:
1. **Test Case: Verify Contact Us Form Loads Successfully**
   - **Description**: Ensure that the Contact Us form loads without any errors.
   - **Steps**:
     1. Navigate to the Contact Us page.
     2. Verify that the form elements (name, email, message fields, and submit button) are visible.
   - **Expected Result**: The form should load successfully with all elements visible.    
   2. **Test Case: Validate Required Fields**
   - **Description**: Ensure that the required fields (name, email, message) are validated properly.
   - **Steps**:
     1. Navigate to the Contact Us page.
     2. Leave all required fields empty and click the submit button.
     3. Verify that appropriate error messages are displayed for each required field. 
    - **Expected Result**: Error messages should be displayed for all required fields when left empty.
    3. **Test Case: Validate Email Format**
   - **Description**: Ensure that the email field accepts only valid email formats.   
    - **Steps**:
      1. Navigate to the Contact Us page.
      2. Enter an invalid email format (e.g., "invalidemail") in the email field.
      3. Click the submit button.
      4. Verify that an appropriate error message is displayed for the email field.
    - **Expected Result**: An error message should be displayed for the email field when an invalid format is entered.  
   3. **Test Case: Successful Form Submission**
   - **Description**: Ensure that the form can be submitted successfully with valid data. 
    - **Steps**:
      1. Navigate to the Contact Us page.
      2. Fill in all required fields with valid data (name, email, message).
      3. Click the submit button.
      4. Verify that a success message is displayed confirming the form submission.
    - **Expected Result**: A success message should be displayed confirming that the form has been submitted successfully.
     