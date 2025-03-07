# Story Viewer Application

This is a simple story viewer application inspired by Instagram stories. It supports viewing image-based stories and automatically navigating between them. The app is optimized for both mobile and larger screens.

## Features
- View a list of stories
- Click on a story to open the viewer
- Auto-advance stories every 5 seconds
- Navigate between stories using next/previous buttons
- Automatically return to the home screen after the last story
- Responsive layout for mobile and desktop

## Project Structure
```
src/
|-- components/
|   |-- StoryList.tsx        # Renders the list of story thumbnails
|   |-- StoryViewer.tsx      # Displays individual stories with navigation
|
|-- styles/
|   |-- App.css              # Styles for mobile and larger screen views
|
|-- App.tsx                  # Main application component
|-- main.tsx                 # Application entry point
```

## How to Run
1. Clone the repository:
```
git clone https://github.com/your-repo/story-viewer-app.git
```

2. Navigate to the project directory:
```
cd story-viewer-app
```

3. Install dependencies:
```
npm install
```

4. Start the development server:
```
npm run dev
```

5. Open the app in your browser at:
```
http://localhost:5173
```

## How It Works
- **StoryList Component:** Renders clickable story thumbnails.
- **StoryViewer Component:** Shows the story image and navigates between stories.
- **App Component:** Manages state and controls which component is displayed.
- **Responsive Design:** Uses CSS media queries to adapt to mobile and desktop views.

## Future Enhancements
- Add video support for stories
- Implement story progress indicators
- Add swipe gestures for navigation
- Improve accessibility features

## License
This project is licensed under the MIT License.

## view in big screen instead of mobile view
- Uncomment the following lines to enable the screen view styling for larger displays in `App.css`.

