# EmailJS Setup Instructions

## Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create an Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID** (e.g., `service_xxxxx`)

## Step 3: Create an Email Template

1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use this template structure:

**Subject:** New Registration: {{event_name}}

**Content:**

```
Hello Aunty Uloma,

You have received a new registration for: {{event_name}}

Registration Details:
- Name: {{from_name}}
- Email: {{from_email}}
- Phone: {{phone}}
- Age: {{age}}
- Location: {{location}}
- Message: {{message}}

Please follow up with this registration.

Best regards,
Excel Youth Leadership Initiative
```

4. Save the template and note down your **Template ID** (e.g., `template_xxxxx`)

## Step 4: Get Your Public Key

1. Go to **Account** → **General**
2. Find your **Public Key** (e.g., `xxxxxxxxxxxxx`)
3. Copy this key

## Step 5: Update the Code

1. Open `src/components/RegistrationModal.jsx`
2. Find these lines (around line 30-32):

```javascript
const serviceID = "YOUR_SERVICE_ID";
const templateID = "YOUR_TEMPLATE_ID";
const publicKey = "YOUR_PUBLIC_KEY";
```

3. Replace with your actual values:

```javascript
const serviceID = "service_xxxxx"; // Your Service ID
const templateID = "template_xxxxx"; // Your Template ID
const publicKey = "xxxxxxxxxxxxx"; // Your Public Key
```

## Step 6: Test the Form

1. Start your development server: `npm run dev`
2. Click "Register Now" on any event
3. Fill out the form and submit
4. Check your email inbox for the registration email

## Template Variables Used

The form sends these variables to your EmailJS template:

- `to_name`: "Aunty Uloma"
- `from_name`: User's full name
- `from_email`: User's email
- `phone`: User's phone number
- `age`: User's age
- `location`: User's location/state
- `event_name`: Event title
- `message`: Additional message (optional)
- `reply_to`: User's email (for easy reply)

## Free Tier Limits

- 200 emails per month
- Perfect for getting started!

## Need Help?

- EmailJS Documentation: https://www.emailjs.com/docs/
- Support: support@emailjs.com
