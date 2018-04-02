# Spaghetti Makes Me Moody 
## Solutions.md

### How to Run
* Start the back-end server:
  - navigate to /back-end
  - npm install
  - node app.js
  
* Run the front-end:
  - navigate to /front-end
  - npm install
  - npm start
  - If a window does not automatically open, navigate to http://localhost:3000 in Firefox or Chrome

### Features

Features from Phase 2 of the project remains the same in Part 3, but with persisted date stored in a database, and network requests routed to our server. New features that have been introduced in Part 3 will be described below. This includes User Sign-Up, Persisted Journal Entries, and an Overall page that is now connected to real data. 

#### Sign-In/Sign-Up
Users are now able to create an account with Spaghetti Makes Me Moody. Users can still use the application without an account, but if they do not use an account, the entries will only be saved for that session. In addition, the user will not be able to obtain general feedback through the use of the Overall page. Furthermore, the user will be unable to collect any achievements. If a user chooses to sign-up, they can choose to create an account from the login page. For an account to be created, the user needs to create a username and password. There no restrictions on the username except for that it can only be any combination of letters and numbers. The same restrictions apply for the password except that any password has to also be at least 8 characters long. Once a user signs up, any current entries they wrote will be saved to their account, and the full features of the application will be unlocked to them.

#### Journal
The main feature that Spaghetti Makes Me Moody has is the Journal Entry. From here the user can submit a text entry for the our API (which leverages Google's Natural Language API) to identify and analzye. After the user submits an entry, a confirmation prompt will appear asking them if they would like to view the results. If they wish to do so, they will then be taken to the History view, otherwise, they will have the opportunity to submit another entry. This result will then be posted on the History View and saved in our database if the user has an account. 

#### History
The second feature is the History view. This allows the user to view all of their previous entries and allows them to see the feedback that the application will generate based on estimated sentiment value and text classification category calculated by Google's Natural Language API. Below the feedback text is a "Moody Health Bar", which is a graphical representation of the user's perceived sentiment. For example, if an entry were to say "I had a great day today" our application will respond with something like "I hope everyday is as great as this day is", as well as have the Moody Health Bar at around 40% full. If the user puts an energetic journal entry like "My family is the best family ever. I can't believe how amazing they are it's unbelieveable!", then the Moody Health Bar may be filled to close to 100%.

Alternatively, if the user writes extensively about their latest wilderness hike, the application might respond with "🗻 Have you been to Mount Fuji? It's a beautiful place." The history view allows the user to look at previous entries and view various feedback that the web application has provided.

#### Overall
The third feature is the Overall view. This view takes all the entries from the history view and converts it into graphical interpretation. This allows the user to view charts representing trends and statistics regarding their previous journal entries. Lastly the overview view will show a list of awards given to the user after continuous use of the application. If the user has repeatedly been happy, they could be awarded with an achievement. These achievements can range from creating your first entry, having an entry with the word 'spaghetti', or having a streak of entries for a number of consecutive days.

#### End User
With the addition of a connected back-end database and server, users will now be able to create accounts and save their journal entries with their respective responses and Moody Health Bars. End users will also be rewarded on how often they use Spaghetti Makes Me Moody and will be able to get a historical view of how they have been doing throughout their lives. Our hope is that the End-User will be able to use Spaghetti Makes Me Moody to track their state of mind and be able to adjust themselves towards a positive mindset. We will estimate the potential emotion that the user is experiencing, identify user interests, and output advice that should be beneficial to the user. In essence, the End-User will be able to use Spaghetti Makes Me Moody to improve their future selves.

#### Authentication
When a user is created, their username and password is cached locally in the front-end, and is sent with every request to the server. Requests that involve private user data requires both the username and password in order to be authenticated. In the database, each user has their username and password saved as plain text. We did not implement any sort of security or authorization for the user except for that each user is unique, and that there are certain restrictions with the length and content of the username and password. There are a few limitations to our approach: the first is that users must log in every time they access our application, as sessions only last as long as the lifetime of the application itself. The second is that passwords are un-encrypted, which allows anybody who can listen to network traffic or view the database to obtain user credentials.

#### API
Our API is documented with swagger [here](back-end/README.md), but a brief description follows for each endpoint as well:

* /analyzeText
  - Takes a journal entry, with optional parameters of username and password, and returns sentiment analysis and feedback (score, textual feedback), classification (textual feedback), as well as the entry itself and the date. Saves the entry and feedback into the database if username and password are present.
* /createUser
  - Takes a username and a password and returns 201 if user was created successfully and an error otherwise. Inserts the user into the database.
* /retrieveUser
  - Looks up the username and password, and returns 200 as well as journal history if the user was found. Returns 404 or an error otherwise.
* /updateUser
  - Adds an entry to a user's existing list of entries. Requires username and password.
* /deleteEntry
  - Deletes an entry from a user's existing list of entries. Requires username and password, as well as the index of the entry to delete.
