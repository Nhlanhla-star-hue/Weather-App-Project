## Animated Weather Backgrounds 🎥

One of the main features of this weather app is its dynamic animated background system.

When a user searches for a location, the app retrieves the current weather conditions from the weather API and automatically updates the background animation to match the weather.

### Background Animations

- ☀️ Clear Sky → Sunny animation/video
- ⛅ Partly Cloudy → Moving clouds animation
- ☁️ Cloudy → Overcast sky animation
- 🌧️ Rain → Rain animation/video
- ⛈️ Thunderstorm → Lightning storm animation
- ❄️ Snow → Falling snow animation
- 🌫️ Mist/Fog → Foggy animation

### How It Works

The application checks the weather description received from the API and selects the corresponding background animation.

Example:

```javascript
if (weather === "Rain") {
    backgroundVideo = "rain.mp4";
} else if (weather === "Clear") {
    backgroundVideo = "sunny.mp4";
}
