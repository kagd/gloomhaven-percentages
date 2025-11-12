/speckit.plan The application uses Vite with React and Typescript for the frontend framework to ensure a fast and responsive user interface. The state management will be handled using Zustand. Use vanilla HTML, CSS, and JavaScript as much as possible.

On initial load, the state should be pulled from local storage if it exists. If not, the user should be prompted to define the initial decks for both the player and the monsters.

Whenever the state of the application changes (e.g., a card is drawn, returned, deck is reset, etc), the new state should be saved to local storage to ensure persistence across sessions. Use debouncing to prevent excessive writes to local storage.

There will not be any backend server; all data will be stored and managed on the client side using local storage.

Use CSS Modules when the styles pertain to specific components to avoid style conflicts. For global styles, use a global CSS file.

I would like to use postcss to handle nested styles and autoprefixing for better cross-browser compatibility.

Use React best practices, including functional components and hooks, to ensure maintainability and scalability of the codebase.

The main focus of the application is drawning and returning cards, so ensure that these interactions are smooth and intuitive. The other features like deck resetting and initial deck setup should be easily accessible but not intrusive to the main functionality. Potentially have these options listed underneath a hamburger menu or a settings icon.

Ensure that the application is fully responsive and optimized for mobile devices, as the primary use case is on phones during gameplay. Use media queries and flexible layouts to achieve this. I prefer this use CSS Grid instead of flexbox for layout where applicable.
