# Portfolio Backend

This is a simple Express.js backend for handling contact form submissions from [Sam McAnany's portfolio site](https://sammcanany.github.io).  
It receives contact form data and sends it to your email using Nodemailer and Gmail.

## Features

- Receives POST requests at `/api/contact`
- Sends contact form data to your configured Gmail address
- CORS enabled for frontend integration
- JSON request body parsing

## Requirements

- Node.js (v16+ recommended)
- A Gmail account for sending emails
- The following environment variables set:
  - `EMAIL_USER` (your Gmail address)
  - `EMAIL_PASS` (an [App Password](https://support.google.com/accounts/answer/185833) for your Gmail account)
  - `PORT` (optional, defaults to 5000)

## Setup

1. **Clone the repository:**

   ```sh
   git clone https://github.com/YOUR_USERNAME/PortfolioBackend.git
   cd PortfolioBackend
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Create a `.env` file in the root directory:**

   ```
   EMAIL_USER=yourgmail@gmail.com
   EMAIL_PASS=your_app_password
   PORT=5000
   ```

   > **Note:** For Gmail, you must use an [App Password](https://support.google.com/accounts/answer/185833) if you have 2FA enabled.

4. **Start the server:**

   ```sh
   node server.js
   ```

   The backend will run on `http://localhost:5000` by default.

## API

### POST `/api/contact`

**Request Body:**
```json
{
  "name": "Sender Name",
  "email": "sender@example.com",
  "message": "Your message here"
}
```

**Response:**
- `200 OK` with `{ success: true }` on success
- `500 Internal Server Error` with `{ success: false, error: "Error message" }` on failure

## Deployment

This backend is deployed and running on [Render](https://render.com/).  
You can deploy your own instance to Render or any Node.js-compatible host (Render, Heroku, etc.).  
Make sure to set the required environment variables in your hosting platform.

---

**Security Note:**  
Never commit your real email password or app password to version control. Always use environment variables.

---
