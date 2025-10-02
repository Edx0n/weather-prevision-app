# Weather Forecast App

A beautiful and responsive weather forecast application built with Next.js, TypeScript, and Zustand. Features dynamic backgrounds that adapt to weather conditions.

## Features

- 🌤️ Current weather display with detailed information
- 📅 5-day weather forecast
- 🔍 Search weather by city name
- 📍 Geolocation support for automatic location detection
- 🌡️ Toggle between Celsius and Fahrenheit
- 🎨 Dynamic backgrounds based on weather conditions
- ✨ Smooth animations and transitions
- 📱 Fully responsive design (mobile-first)
- 💾 Persistent state using Zustand with localStorage

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **State Management**: Zustand
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **API**: OpenWeatherMap API
- **HTTP Client**: Axios

## Getting Started

### Prerequisites

- Node.js 18+ installed
- OpenWeatherMap API key (free at [openweathermap.org](https://openweathermap.org/api))

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/weather-prevision-app.git
cd weather-prevision-app
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory:
```bash
cp .env.local.example .env.local
```

4. Add your OpenWeatherMap API key to `.env.local`:
```
NEXT_PUBLIC_OPENWEATHER_API_KEY=your_api_key_here
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
weather-prevision-app/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── BackgroundVideo.tsx
│   ├── ForecastCard.tsx
│   ├── LocationButton.tsx
│   ├── SearchBar.tsx
│   ├── UnitToggle.tsx
│   └── WeatherCard.tsx
├── services/              # API services
│   └── weatherService.ts
├── store/                 # Zustand stores
│   └── weatherStore.ts
├── types/                 # TypeScript types
│   └── weather.ts
├── utils/                 # Utility functions
│   └── weatherUtils.ts
└── public/                # Static assets
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Features in Detail

### Dynamic Backgrounds

The app changes its background gradient based on current weather conditions:
- ☀️ Clear/Sunny: Blue to yellow gradient
- ☁️ Cloudy: Gray gradient
- 🌧️ Rain: Dark blue to gray gradient
- ❄️ Snow: Light blue to white gradient
- ⛈️ Thunderstorm: Dark gray to purple gradient
- 🌫️ Mist/Fog: Light gray to white gradient

### Weather Information

Current weather display includes:
- Temperature (with feels like)
- Weather condition and description
- Humidity percentage
- Wind speed

### 5-Day Forecast

Shows forecast for the next 5 days with:
- Date
- Weather icon
- Temperature
- Weather description

## API Usage

This app uses the OpenWeatherMap API:
- Current Weather API for real-time data
- 5 Day / 3 Hour Forecast API for predictions

## License

MIT

## Author

Built with ❤️ using Next.js and TypeScript

