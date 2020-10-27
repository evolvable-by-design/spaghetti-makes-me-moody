# Spaghetti Makes Me Moody

Spaghetti Makes Me Moody is an application developed by [danielsinclairtill](https://github.com/danielsinclairtill). It is a web app were you can say how was your day and it will tell you how happy your description was. In addition, you can get an history of your input.

In this repository, the evolvable-by-design approach is implemented. Other projects are used as use cases, see the [evolvable-by-design organization](https://github.com/evolvable-by-design/).

### Repositories

- Original repository: [danielsinclairtill/spaghetti-makes-me-moody](https://github.com/danielsinclairtill/spaghetti-makes-me-moody)
- [Fork with the evolvable-by-design implementation](https://github.com/evolvable-by-design/spaghetti-makes-me-moody)

**Amount of changes:** 3

**Types of changes:**

- Add parameter (n°1)
- Request method change (n°23)

**Commits with the changes:**

- Add a `historyData` parameter to the createUser route [6c17e41](https://github.com/evolvable-by-design/spaghetti-makes-me-moody/commit/6c17e41dd710dce2871b49fb7f15ce6693d940f9#diff-6e97426cd40ca2d61b263b6dda6cb512)
- Add `username` and `password` parameters to the analyzeText route [f8a145a](https://github.com/evolvable-by-design/spaghetti-makes-me-moody/commit/f8a145a44e8a852c59daf9cbae134552729bc437#diff-6e97426cd40ca2d61b263b6dda6cb512)
- Change HTTP verb from `post` to `put` [64f2837](https://github.com/evolvable-by-design/spaghetti-makes-me-moody/commit/64f28374737937cff69785dc5069f576873e0e54#diff-6e97426cd40ca2d61b263b6dda6cb512)

**Description of the work done:**

1. Fork the project [here](https://github.com/evolvable-by-design/spaghetti-makes-me-moody)
2. Create an evolvable-by-design branch from the commit before the first evolution done (728264a)
3. Fix npm dependencies
4. Enable the [google natural language API](https://console.developers.google.com/apis/library/language.googleapis.com?q=language&id=223648f2-2e7c-4acd-b0ca-782f9021a541&project=evolvable-by-design-exper-svlb&flow=gcp), which requires billing and use the key in the code
5. Create the API documentation and serve it from the backend on OPTIONS /
6. Implement the evolvable-by-design approach in a single commit [a8d4f9a](https://github.com/evolvable-by-design/spaghetti-makes-me-moody/commit/a8d4f9a2e40cbddefc0058508f190f69ca7e2c7f)
7. Apply the changes of the following commits to reproduce the evolution: 83c4ee4, c91ec8d, 450d627, 728264a (c00b590 is ignored because it is a copy of 728264a)
8. Verify that the frontend still work -> **Success**, but not significant in this case because the modification is the addition of an optional parameter, not using the approach would have given the same result. The historyData parameter have not been sent to the API.
9. Apply the commit 6c17e41 that adds the support for `historyData` into the frontend **and adds a semantic descriptor for the added `historyData` data** -> now the frontend support the new feature without modifying the API layer. // It confirms that the web user interface must semantically describe its data and make it available to the library
10. Apply commits until the next evolution in f8a145a. The list is: f09450a, 733344e, 4150de1, df376c8 (ignored because merge commit), 2277de9, e4f4338 (ignored because merge commit), 63eaffd, afc0225 (ignored because merge commit), 9a84f96, fbd53fd, 2d10210, 2ae0c1a (ignored because merge commit), a1eeaec, c122a35 (ignored because merge commit), 89177c2 (ignored because merge commit)
11. Adds the operation concerned by the change in [f8a145a](https://github.com/evolvable-by-design/spaghetti-makes-me-moody/commit/f8a145a44e8a852c59daf9cbae134552729bc437#diff-6e97426cd40ca2d61b263b6dda6cb512) to the previously added OpenApi documentation.
12. Apply the evolvable-by-design approach to the API call concerned by the change in [f8a145a](https://github.com/evolvable-by-design/spaghetti-makes-me-moody/commit/f8a145a44e8a852c59daf9cbae134552729bc437#diff-6e97426cd40ca2d61b263b6dda6cb512), [in a single commit 4b9ae40](https://github.com/evolvable-by-design/spaghetti-makes-me-moody/commit/4b9ae40d6c43365aa1dc1b7f27142e28bcc61798).
13. Apply the back-end changes of commit f8a145a to reproduce the evolution
14. Verify that the frontend still work -> **Success**, it works but the username and password and not sent to the backend. Thus, the feature that the developers wanted to add is not available to the user, which is expected in our approach. If the two parameters were required, our library would have asked them to the user and the feature would have been available to the user. In both cases, the web UI continue to work. Yet, not using the approach here, in this case, would have make no difference. The password and username are not sent because their are not available to the library when the API call is done. Once again, it proves that contextual values must be semantically annotated and available to the library on request.
15. Add the username and password to the context of the component making the analyzeText call in order to make the new feature available to the user.
16. Start working on the change of [64f2837](https://github.com/evolvable-by-design/spaghetti-makes-me-moody/commit/64f28374737937cff69785dc5069f576873e0e54#diff-6e97426cd40ca2d61b263b6dda6cb512) (request method change). It is not required to change to code to apply the evolvable by design approach because it has already been done for the first studied evolution.
17. Replay evolution of [64f2837](https://github.com/evolvable-by-design/spaghetti-makes-me-moody/commit/64f28374737937cff69785dc5069f576873e0e54#diff-6e97426cd40ca2d61b263b6dda6cb512) in [4ba3d10](https://github.com/evolvable-by-design/spaghetti-makes-me-moody/commit/4ba3d1000c04c9dc6e649a2ae00e90a95861ed23).
18. Verify that the frontend still work -> **Success**


### Report

- How many lines of code is the project? ➜ 2 827 lines
- How many evolutions? ➜ 3
- Types of evolutions ➜ add parameter (1) 2 times and request method change (23)
- One or several commits? ➜ Evolution 1: several -- Evolution 2: 1 -- Evolution 3: 1
- How many lines per commit for the original evolution? ➜ Evolution 1: 4 -- Evolution 2: 22 -- Evolution 3: 1
- How many lines of code to implement the approach on the frontend? ➜ Evolution 1: 57 -- Evolution 2: 38 -- Evolution 3: 0 (done for change 1)
- One or several developers ➜ several - 4
- If tests, broken? ➜ no tests
- Covered or not covered? Evolution1: partially covered -- Evolution 2: covered -- Evolution 3: covered

### How to test the evolutions

1. Clone the [repository](https://github.com/evolvable-by-design/spaghetti-makes-me-moody).
2. Create yourself a [Google natural language API key](https://console.developers.google.com/apis/library/language.googleapis.com?q=language) and keep it in a safe space.
3. Move to the commit before the first evolution: `git checkout before-evolution-1`.
4. Install the dependencies: `cd front-end && npm install && cd ../back-end && npm install && cd ..`.
5. Start mongo db `mongod` (you need to have it installed on your machine).
6. Start the server `cd back-end && node app.js`.
7. Create a `config.json` file in `front-end/src/` with the content: `{ "google": { "languageApiKey": YOUR_KEY_HERE }}`.
7. Start the frontend `cd front-end && npm start`.
8. Enter text in the Journal view, see the result and then go to "Login" page and create a new account. Watch the HTTP request sent (in the developer console of your web browser), it should not send `historyData` in the body of the `POST /createUser/{userName}/password/{password}` request.
9. Stop the backend and the frontend, with ctrl+c in both windows.
10. Move to the commit after the first evolution `git checkout after-evolution-1`;
11. Restart the front-end and the back-end.
12. Redo step 8, this time you will see a `historyData` in the body of the `POST /createUser/{userName}/password/{password}` request.
13. Stop the backend and the frontend, with ctrl+c in both windows.
14. Move to the commit before the second evolution: `git checkout before-evolution-2`
15. Move the config file from `front-end/src/config.json` to `back-end/config.json` and restart the front-end and the back-end
16. Type text in the input on the Journal view. You should get a response. Take a look at the `POST /analyzeText` request, the body should contain a `text` field but no `username` and `password` field.
17. Stop the backend and the frontend, with ctrl+c in both windows.
18. Move to the commit after the second evolution: `git checkout after-evolution-2`
19. Restart the front-end and the back-end
20. Redo step 16, this time you will see a `username` and `password` in the body of the `POST /analyzeText` request.
21. Stop the backend and the frontend, with ctrl+c in both windows.
22. Move to the commit before the third evolution: `git checkout before-evolution-3`
23. Restart the front-end and the back-end
24. Create a new account, the request should be sent to `POST /createUser/...`
25. Stop the backend and the frontend, with ctrl+c in both windows.
26. Move to the commit after the third evolution: `git checkout after-evolution-3`
27. Restart the front-end and the back-end
28. Redo step 24, this time the request should be sent to `PUT /createUser/...`

### Remarks

#### Change 1: addition of the `historyData` parameter to the sign up route

* The added parameter is a value that only the frontend can know. The user can not because the structure is too complex and it is it's history, it would not make sense to ask the user to input this information. In addition, it is a case were the API server can not provide the data in a hypermedia control, because the things happen while the user is not logged in. Then, because it is not a required parameter, the user interface will not break. Yet this is not thanks to our approach. If the parameter had been required, the user interface would likely have break. The only way to avoid the user interface from braking is to make it required that all the data used on the user interface is semantically annotated / described. In such a case, with a complete access to the application context, it is possible to automatically handle this case with our approach.
  -> should we also say in the approach summary that we need all the data of the application to be semantically annotated and that the relevant context must be available when a call is done with our library? This would enable our library to pick the data it needs when it has not been input by the user or provided in an hypermedia control.


## Original README

# assignment-3-spaghetti-makes-me-moody

## Getting started

`git clone https://github.com/csc309-18s/assignment-3-spaghetti-makes-me-moody`

## React front-end Instructions

### To run the app

1.  `cd front-end`
2.  `npm install`
3.  `npm start`

### To build to the static version of the app

`npm build`

---

## Back-end server Instructions

### To run the server (defaults to port 10010)

1.  `cd back-end`
2.  `npm install`
3.  `node app.js`

### To run tests

`npm test`

## Back-end architecture

### API design

Currently using [swagger node](https://github.com/swagger-api/swagger-node)
from swagger API.

### Database

Currently using [mongoDB](https://www.mongodb.com/), set up on an
[mLab](https://mlab.com) instance.
