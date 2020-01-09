# Assignment

## Code Challenge

The starter application included has some signficant issues that make it not work correctly, and a few underdeveloped features. Your task is to fix any errors in the code already, and build some simple features to match the given requirements below.

### Requirements

- Create a fork of this repository. All code changes should be madee to your fork.

- As a user (here just a fake one) should be able to login, with my extremely secure password, 'password'. An email address should also be required, but any should work.

- Once logged in, a user should be able to navigate to the `Profile` page, and update my name so that it appears on the home page instead of `Test User`

- On the repository page (which should mount the Repositories component), a user should be able to enter text into a field in order to search for repositories on github.

  - These results should automatically populate (wihtout requiring a button press or enter keypress), however the request should only be sent when there's a lull in typing (rather than on every keystroke)
  - The results should be displayed as cards or a list, containing at least the following info:
    - Full name | description | Stargazers Count | Open issues Count | match score
  - Clicking the list or card of the item should change to a page /repositories/:id

- The page /repositories/:id should show extra detail about a specific repository

  - This page should show the info from the card, as well as
    - link to the Repos Issues
    - link to the Repos Pull Requests
    - Display the license, if there is one, with it's name, spdx_id and url (if exists)

- The app should strive to have high levels of accessibility, please take steps to enable where possible

- Write `production` level code while completing this task. Please be sure to handle potential errors where necessary, remove any unncessary logs/debugger statements, etc

### Limitations

`styled-components` and `react-router-dom` are both added as dependencies already. No other packages should be added.

Any http requests should be handled using `fetch`.

Styles should be added using only styled-components.

### Time

You should not take more than 3 hours of time on this, even if you feel incomplete, that's fine. Your time is important, too! We'd rather see what you can accomplish in that timeframe, rather than what you can do in unlimited time

## Question

Please, answer the following questions in this readme, underneath the question

1. Name a newer feature of javascript that you believe is extra useful, and discuss how you have used it in this project, or how you would use it if needed.

As far as impactful changes go, the addition of let and const has made it a lot easier to use and reuse simple, meaningful names within a project, and while in a small project like this where there's less to juggle and less chances of an overlap, it's still great to enlose names within a specific scope and not have to worry about that affecting anything later. 

2. What are 3 things you think `React` does very poorly? What tools do this better, if any?

On bigger projects with deeply nested components, it's easy to get lost in which components need what state, and making updates becomes an issue. I know Redux helps with that (and I guess is recommended over the createContext function now).

Another thing I've been finding is that the speed of development on the framework sometimes makes it hard to leep up - for examples class components have now rolled into functional components, and now how do all the lifecycle methods get called again? I'm honestly still not sure, but it seems like a lot of lifecycle methods are now rolled into the useEffect hook. It's hard to trust the developers of the framework when sometimes drastic changes come out that alter workflows like that.

Something that may just be syntax, but I prefer Vue's way of list rendering - https://vuejs.org/v2/guide/list.html - and I like how it plays well with popular libraries like vue-material, and makes it a bit easier to setup something like a great looking table with just the data model and knowledge of the column headers - https://vuematerial.io/components/table/

## Submissions

When submitting, please send a link to your fork of this repository to `matt@brace.ai`.

### Questions

Please, feel free to reach out directly with any questions you have about this project, or Brace in general, to `matt@brace.ai`.
