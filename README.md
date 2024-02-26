## Climate Change News API

This is a RESTful API that aggregates news articles related to climate change from various reputable sources on the web. It provides endpoints to fetch general climate change news as well as news from specific newspapers.

### Features
- **General Climate Change News**: Retrieve a list of climate change-related articles from various newspapers.
- **Specific Newspaper News**: Fetch climate change news from a specific newspaper.
- **Flexible Configuration**: Easily extendable to include more newspapers or customize existing sources.

### Endpoints

1. **GET /news**
   - Returns a list of climate change news articles from various newspapers.

2. **GET /news/:newspaperId**
   - Returns climate change news articles from a specific newspaper identified by `:newspaperId`.

### Setup
1. Clone the repository.
2. Install dependencies using `npm install`.
3. Start the server using `npm start`.

### Environment Variables
- `PORT`: Port number for the server. Default is `8080`.

### Available Newspapers
The API fetches news from the following newspapers:

- City AM
- BBC
- New York Times
- Washington Post
- Wall Street Journal
- Telegraph
- Independent
- Times
- The Sun
- Daily Mail
- Express
- Mirror
- Daily Star
- Metro
- Economist
- Guardian
- The Atlantic
- The New Yorker
- The Conversation
- National Geographic
- Scientific American
- Nature
- Greenpeace Climate Change
- Climate Action Tracker

### Technologies Used
- Node.js
- Express.js
- Axios
- Cheerio (for web scraping)

### Usage
- Access the API endpoints using a REST client or integrate them into your applications.

### Note
- The API fetches news articles dynamically from the web, so response times may vary depending on network conditions and the responsiveness of the news websites.

### Disclaimer
- This API is intended for educational and informational purposes only. The content served by this API belongs to the respective newspapers, and the API developer does not claim ownership or responsibility for the content.

### License
- This project is licensed under the MIT License. See the LICENSE file for more details.

### Author
- Sumuditha Lansakara

Feel free to contribute, report issues, or suggest improvements!