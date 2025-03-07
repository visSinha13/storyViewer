
import React, { useEffect, useState, useRef } from 'react';

interface Story {
  id: number;
  imageUrl: string;
}

interface StoryViewerProps {
  currentIndex: number;
  stories: Story[];
  onClose: () => void;
  onChangeIndex: (index: number) => void;
}

const StoryViewer: React.FC<StoryViewerProps> = ({ currentIndex, stories, onClose, onChangeIndex }) => {
  const [loading, setLoading] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    console.log('StoryViewer mounted');
    return () => console.log('StoryViewer unmounted');
  }, []);

  const resetTimer = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (currentIndex === stories.length - 1) {
      console.log('Last story reached, closing in 5s...');
      timerRef.current = setTimeout(() => {
        console.log('onClose() called after last story');
        onClose();
      }, 5000);
    } else {
      console.log(`Starting timer for story ${currentIndex + 1}`);
      timerRef.current = setTimeout(() => {
        onChangeIndex(currentIndex + 1);
      }, 5000);
    }
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [currentIndex, stories.length]);

  const goToPrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (timerRef.current) clearTimeout(timerRef.current);
    console.log('Navigating to previous story');
    onChangeIndex((currentIndex - 1 + stories.length) % stories.length);
  };

  const goToNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (timerRef.current) clearTimeout(timerRef.current);
    if (currentIndex === stories.length - 1) {
      console.log('Last story, closing immediately');
      onClose();
    } else {
      console.log('Navigating to next story');
      onChangeIndex((currentIndex + 1) % stories.length);
    }
  };

  const handleImageLoad = () => {
    setLoading(false);
    console.log('Image loaded');
  };

  return (
    <div className="story-viewer" onClick={() => {
      console.log('Background clicked, closing');
      onClose();
    }}>
      <div className="story-container">
        {loading && <div className="loading">Loading...</div>}
        <img
          src={stories[currentIndex].imageUrl}
          alt={`Story ${stories[currentIndex].id}`}
          className="story-image"
          onLoad={handleImageLoad}
        />
        <button className="nav-button left" onClick={goToPrevious}>
          &lt;
        </button>
        <button className="nav-button right" onClick={goToNext}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default StoryViewer;
