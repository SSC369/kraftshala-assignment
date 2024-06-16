# Weather Application

This is a simple weather application built with React, where users can check weather details based on their current location or by entering city names.

## How to Run Locally

To run this application locally, follow these steps:

### Prerequisites

- Node.js installed on your machine

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Obtain an API key from [OpenWeatherMap API](https://openweathermap.org/api) for weather data fetching.

4. Create a `.env` file in the root directory and add your API key:
   ```plaintext
   VITE_WEATHER_API_KEY=<your-api-key>
   ```

### Running the Application

To start the development server:

```bash
npm run dev
```

This will start the application on `http://localhost:3000`.

### Building for Production

To build the application for production:

```bash
npm run build
```

### Linting

To lint the code using ESLint:

```bash
npm run lint
```

## Approach and Technologies Used

### Technologies

- **React**: Frontend library for building user interfaces.
- **Vite**: Fast, modern build tool that serves your code via native ES modules.
- **Axios**: Promise-based HTTP client for making requests to the OpenWeatherMap API.
- **Day.js**: Library for manipulating dates and times.
- **React Hot Toast**: Toast notifications for displaying messages to users.
- **React Icons**: Icon library for adding icons to the UI.
- **Sass**: CSS extension language for styling components.

### Approach

The application uses React Context API for managing themes (light and dark modes). It fetches weather data either by detecting the user's location or by city name input. The UI includes a dynamic background based on the time of day and provides interactive components for theme toggling and displaying weather information.

## Known Issues and Limitations

- Geolocation may not work in some environments or browsers that do not support it.
- Error handling for API requests is minimal and can be improved.
- Limited to displaying basic weather information; additional features like forecasts could be added.
- Styling and UI enhancements can be further refined for better user experience.

