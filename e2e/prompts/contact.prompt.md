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
4. **Test Case: Successful Form Submission**
   - **Description**: Ensure that the form can be submitted successfully with valid data. 
    - **Steps**:
      1. Navigate to the Contact Us page.
      2. Fill in all required fields with valid data (name, email, message).
      3. Click the submit button.
      4. Verify that a success message is displayed confirming the form submission.
    - **Expected Result**: A success message should be displayed confirming that the form has been submitted successfully.
5. **Test Case: Verify maximum character limit for message field**
   - **Description**: Ensure that the message field enforces a maximum character limit.
    - **Steps**:
      1. Navigate to the Contact Us page.
      2. Enter a message that exceeds the maximum character limit (e.g., 1000 characters).
      3. Click the submit button.
      4. Verify that an appropriate error message is displayed for the message field.
    - **Expected Result**: An error message should be displayed for the message field when the character limit is exceeded. 
6. **Test Case: Verify form submission with special characters**
   - **Description**: Ensure that the form can handle special characters in the input fields.
    - **Steps**:
      1. Navigate to the Contact Us page.
      2. Fill in all required fields with valid data, including special characters (e.g., !@#$%^&*()) in the name and message fields.
      3. Click the submit button.
      4. Verify that a success message is displayed confirming the form submission.
    - **Expected Result**: A success message should be displayed confirming that the form has been submitted successfully, even with special characters in the input fields.
7. **Test Case: Verify invalid phone number format**
   - **Description**: Ensure that the phone number field accepts only valid phone number formats.
    - **Steps**:
      1. Navigate to the Contact Us page.
      2. Enter an invalid phone number format (e.g., "12345") in the telephone number field.
      3. Click the submit button.
      4.Verify that an appropriate error message is displayed for the phone number field.
    - **Expected Result**: An error message should be displayed for the phone number field when an invalid format is entered.
   