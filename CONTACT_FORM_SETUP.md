# Contact Form Setup Instructions

This project uses [Formspree](https://formspree.io) to handle form submissions. Follow these steps to get the contact form working:

## Step 1: Create a Formspree Account
Go to [Formspree](https://formspree.io) and sign up for an account.

## Step 2: Create a Form
1. Once logged in, click "New Form" to create a new form
2. Give your form a name (e.g., "Contact Form")
3. Select your preferred plan (the free plan works for basic usage)
4. Once created, you'll receive a form ID (it looks like "abcdefgh")

## Step 3: Configure the Project
1. Open the file `.env.local` in the root directory (create it if it doesn't exist)
2. Add your Formspree project ID (NOT the form ID):
   ```
   FORMSPREE_PROJECT_ID=your_project_id_here
   ```
   You can find this in your Formspree account settings under "API Keys".

## Step 4: Add Your Form ID to the Component
1. Open `src/components/sections/ContactSection.tsx`
2. Find this line:
   ```tsx
   const [formState, handleSubmit] = useForm("YOUR_FORMSPREE_FORM_ID");
   ```
3. Replace `YOUR_FORMSPREE_FORM_ID` with your actual form ID:
   ```tsx
   const [formState, handleSubmit] = useForm("abcdefgh");
   ```

## Step 5: Test the Form
1. Run the development server with `bun run dev`
2. Navigate to the contact section
3. Fill out the form and submit it
4. You should see the success message
5. Check your Formspree dashboard to see the submission

## Troubleshooting
- If the form isn't working, check your browser console for errors
- Verify that your form ID is correct
- Make sure you've specified the correct project ID in the `.env.local` file
- Check if the form has received any submissions in your Formspree dashboard 