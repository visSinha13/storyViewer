import React from 'react';

interface Story {
  id: number;
  imageUrl: string;
}

interface StoryListProps {
  stories: Story[];
  onSelectStory: (story: Story) => void;
}

const StoryList: React.FC<StoryListProps> = ({ stories, onSelectStory }) => {
  return (
    <div className="story-list">
      {stories.map((story) => (
        <div
          key={story.id}
          className="story-thumbnail"
          style={{ backgroundImage: `url(${story.imageUrl})` }}
          onClick={() => onSelectStory(story)}
        />
      ))}
    </div>
  );
};

export default StoryList;
