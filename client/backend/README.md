# Portfolio Backend API

A simple Node.js/Express backend for the portfolio website.

## Features

- RESTful API endpoints for portfolio data
- Contact form email handling
- CORS enabled for frontend integration
- Structured data for all portfolio sections

## API Endpoints

### Portfolio Data
- `GET /api/portfolio` - Get all portfolio data
- `GET /api/portfolio/personal` - Get personal information
- `GET /api/portfolio/skills` - Get skills list
- `GET /api/portfolio/experience` - Get work experience
- `GET /api/portfolio/education` - Get education history
- `GET /api/portfolio/projects` - Get projects list
- `GET /api/portfolio/interests` - Get interests/hobbies

### Contact
- `POST /api/contact` - Send contact form email
  - Body: `{ name, email, message }`

### Health Check
- `GET /api/health` - Check if API is running

## Setup

1. Install dependencies:
```bash
npm install
```

2. Copy environment file:
```bash
copy .env.example .env
```

3. Configure your email settings in `.env`:
```
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

4. Start the server:
```bash
# Development
npm run dev

# Production
npm start
```

## Environment Variables

- `PORT` - Server port (default: 5000)
- `EMAIL_USER` - Email address for sending contact form emails
- `EMAIL_PASS` - Email password or app password

## Usage

The API will be available at `http://localhost:5000/api`

For Gmail, you'll need to:
1. Enable 2-factor authentication
2. Generate an app password
3. Use the app password in `EMAIL_PASS`


