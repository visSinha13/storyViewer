// App.tsx
import React, { useEffect, useState } from 'react';
import { fetchStories } from './utils/fetchStories';
import StoryList from './components/StoryList';
import StoryViewer from './components/StoryViewer';

interface Story {
  id: number;
  imageUrl: string;
}

const App: React.FC = () => {
  const [stories, setStories] = useState<Story[]>([]); // List of stories
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null); // Currently selected story

  useEffect(() => {
    // Fetch stories when the component mounts
    const loadStories = async () => {
      const fetchedStories = await fetchStories();
      setStories(fetchedStories);
    };
    loadStories();
    console.log("App mounted")
  }, []);

  return (
    <div className='mainContainer' id='mainContainer'>
    <header>
      <h2 className='story-title' id='story-title'>Stories</h2>
    </header>
    <div>
    {currentIndex === null ? (
      <StoryList stories={stories} onSelectStory={(story) => setCurrentIndex(stories.indexOf(story))} />
    ) : (
      <StoryViewer
        currentIndex={currentIndex}
        stories={stories}
        onClose={() => {
          setSelectedStory(null); // Close the viewer
          setCurrentIndex(null); // Also reset currentIndex to hide StoryViewer
        }}
        onChangeIndex={setCurrentIndex} // Pass this down
      />
    )}
  </div></div>
    
  );
};

export default App;
