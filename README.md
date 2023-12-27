# 🌦️ Weather App

**Live Demo:**  [weather.vercel.app](https://weather13.vercel.app/)


This is a simple React weather application that allows users to search for weather information by entering a city name.

## Technologies Used

- React ⚛️
- Fetch API 🌐
- OpenWeatherMap API 🌍
- CSS3 🎨
- VsCode 💻
- Vercel 🌐


## File Structure

```plaintext
weather-app/
|-- 📁 src/
|   |-- 📁 components/
|   |   |-- 📄 WeatherApp/
|   |   |   |-- 📄 WeatherApp.jsx
|   |   |   |-- 📄 WeatherApp.css
|   |   |   |-- 📁 assets/
|   |   |   |   |-- ☀️ clear.png
|   |   |   |   |-- ☁️ cloud.png
|   |   |   |   |-- 🌧️ drizzle.png
|   |   |   |   |-- 💦 humidity.png
|   |   |   |   |-- 🌧️ rain.png
|   |   |   |   |-- ❄️ snow.png
|   |   |   |   |-- 💨 wind.png
|-- 📁 public/
|-- 📁 node_modules/
|-- 📄 package.json
|-- 📄 README.md
```

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed on your machine. 🚀

### Installing

1. **Clone the repository:**

   ```bash
   git clone https://github.com/swami1302/weather-app.git
   ```

2. **Change into the project directory:**

   ```bash
   cd weather-app
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

## Usage

1. **Obtain an API key** from [OpenWeatherMap](https://openweathermap.org/) by signing up.

2. **Replace the placeholder API key** in the `WeatherApp.js` file with your actual API key:

   ```javascript
   let API_key = 'your-api-key-here';
   ```

3. **Run the application:**

   ```bash
   npm start
   ```

4. **Open your browser and navigate to** [http://localhost:3000](http://localhost:3000) **to use the Weather App.**

## Deployment

The portfolio is deployed on [Vercel](https://vercel.com/), providing a fast and reliable hosting solution.

## Features

- Enter a city name to get current weather information. ☀️🌧️❄️
- Displayed information includes temperature, humidity, wind speed, and weather icon.



## Happy Coding 🚀
