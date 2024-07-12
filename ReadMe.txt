## Lec 1 - Introduction (5:25)

# React Query - It is a library for fetching data in a React application.

Q. Why we need React Query ?
# Since React is a UI library, there is no specific pattern for data fetching. In React we use 'useEffect' hook for data fetching and 'useState' hook to maintain component state like loading, error or resulting data. If the data is needed throughout the app, we tend to use state management libraries. Most of the state management libraries are good for working with client state. For example - 'theme' for the application / whether a modal is open etc. State management libraries are not great for working with asynchronous or server state this is because server state is very different from client state.

# client and server state

# client state - It persisted in our app memory and accessing or updating it is synchronous.

# server state - It is persisted remotely and requires asynchronous APIs for fetching or updating. It has shared ownership. Data can be updated by someone else without our knowledge and UI data may not be in sync with remote data.

# If we have to cater all above things in an application then it requires significant time and effort to do it all by ourself. We can also take smarter approach and use a React Query library which makes all these scenarios easy.

## Lec 2 - Project Setup (10:40)

# Project stepup steps :-
1). Create new react app
2). Set up an API endpoint that serves mock data for use in our application
3). Set up react router and a few routes in the application
4). Fetch data the traditional way using useEffect and useState hooks

## Lec 3 - Fetching Data with useQuery (8:51)