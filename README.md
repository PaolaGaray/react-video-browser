This is a YouTube browser application implemented using custom Hooks, reusable components, and Semantic UI.
##  Custom Hooks
- `useVideos()`: it is a reusable custom hook with all the video fetching logic. It is implemented with `useState()` and `useEffect()`. It receives a term with a selected video and returns a list of videos and a function that also updates that list of videos.

## Components
- SearchBar: it gets the input from the user (name of the video) and manage the state of this field. It is implemented using `setState()`.
- VideoList: it renders the list of videos. 
- VideoDetail: it plays the video selected. 
- VideoItem: it renders the details of an specific video.
