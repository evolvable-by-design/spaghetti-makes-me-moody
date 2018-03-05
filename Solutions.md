# Spaghetti Makes Me Moody
## How to run
1. `npm install`
2. `npm start`
3. If a browser window does not open automatically, navigate to `http://localhost:3000` or [click here](http://localhost:3000)

### Features
Currently all of the functionality below works with static data saved to the frontend files. With the implementation of the backend in part 3 of the project, we will be able to actually fully save a user's entries and our responses to those entries in the database. Furthermore, when it comes to the Overall View, it currently does not take in the information that the user enters but instead just uses dummy data. As with before, once the backend has been implemented, we will be able to accurately display an appropriate overall view with the data obtained from their entries. 

#### Journal
The first feature that the web application has is the Journal Entry View. From here the user can submit a text entry for the Google Natural Language API to identify and analzye. After the user submits the text entry, a confirmation prompt will appear asking them if they would like to view the results. If they agree to the prompt, they will then be taken to the History view, otherwise, they will have the oppurtunity to submit another entry. This result will then be posted on the History View from which users will be prompted to be sent to after submitting an entry. All the entries will be listed in the History View and the Google API will only be doing the processing of the text. 

#### History
The second feature is the History View. This allows the user to view all of their previous entries submitted and allows them to see some feedback text that the application will generate based on estimated sentiment value and text classification category calculated by Google's Natural Language API. For example, if an entry were to say "I had a great day today." our application will respond with something like "I hope everyday is as great as this day is." 

Alternatively, if the user writes extensively about their latest wilderness hike, the application might respond with "🗻 Have you been to Mount Fuji? It's a beautiful place." The history view allows the user to look at previous entries and view various feedback that the web application has provided.

#### Overall
The third feature is the overall view. This view takes all the entries from the history view and converts it into graphical interpretation. This allows the user to see the rankings of all entries submitted and the ratios of the estimated emotions that the user may have determined by the Google API. Lastly the overview view will show a list of awards given to the user after continuous use of the application. If the user has repeatedly been happy, they could be awarded with an achievement. These achievements can range from creating your first entry, having an entry with the word 'spaghetti', or having a streak of entries for a number of consecutive days.  

### End-User and Uses
Spaghetti Makes Me Moody will be useful for a user who likes to keep journal entries. In this version of a online diary, we will estimate the potential emotion that the user is experiencing, identify user interests, and output advice that should be beneficial to the user. The end user can then see the history of all previous entries and get a sense of how they have been feeling recently. In essence, the user is tracking his/her overall quality of life through the daily use of Spaghetti Makes Me Moody. 
