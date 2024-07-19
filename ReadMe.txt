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

# steps to use useQuery
1). install useQuery 
2). add react-query to react application,
3). wrap root file (App.js) JSX to QueryClientProvider component,
4). create an instance of query client,
5). one QueryClientProvider component use query clinet instance in prop clinet as below 

```javascript
const queryClient = new QueryClient();
<QueryClientProvider client={queryClient}>
```

# 'useQuery' hook requires atleast two arguments, 1). is a unique key to identify this query, 2). a function that returns a promise , in the example this function will make a 'get' request to json server.

# 'useQuery' abstracts away all of the complexities to deal with state variables and side effect of useEffect hook and makes it really simple to fetch data in react component.

# A commoan pattern that we can see when would work with 'useQuery' is the 'fetcher' function is extracted out of the 'useQuery' hook.

## Lec 4 - Handling Query Error (4:21)

# 'useQuery' hook return 'isError' and 'error' along with 'isLoading' and 'data' using which we can handle errors while fetching data using 'useQuery' hook. 

## Lec 5 - React Query Devtools (5:12)

# Another great feature of React Query is that it comes with dedicated dev tools. It help us to visualize all of the inner workings of react query and will likely save hours of debugging.

# steps to add React Query Dev tool :-
1). import the dev tool from the react query package in 'App.js' file
2). use 'ReactQueryDevTools' component before query client provider in 'App.js'
3). a small react-query dev tool icon will appear on bottom right side of screen, we can use that from there,

# When we click on 'super-heros' within react-query dev tool on web page a panel opens to the right which gives more details about this query within action tab. Below action tab, there is option for 'Data Explorer' and 'Query Explorer'

# Thus we can see dev tool makes it easier to identify our request in network panel and going through the response.

## Lec 6 - Query Cache (8:05)

# In React Query, by default every query result is cached for 5 minutes and react query further relies on that cache for subsequent requests.

# The first time use query is fired for superheroes key where 'isLoading' is set to true and network request is sent to fetch the data, when request is completed it is cached using the query key and the fetch superheroes function as the unique identifiers.

# If 'isLoading' is not changed does 'useQuery' provide another boolean flag to indicate the background refetching of the query?
# Yes, and the flag is called 'isFetching'

# If we wanted to change default caching time from 5 min to let say 10 min or 15 min then we can do this by passing third arguments to the 'useQuery' hook.

# One of the usage of caching the query results is being able to reuse the results for subsequent queries that will allow the user to view the prviously fetched data without having to view loading indicator every single time that leads to slightly better user experience.

# Another use of 'useQuery' is to reduce the number of network requests for data that doesn't necessarily change too often.

## Lec 7 - Stale Time (5:18)

# Another use of 'useQuery' is to reduce the number of network requests for data that doesn't necessarily change too often.

# Suppose list of superheroes does not change often and it is okay if user sees a stale data for a while, in such cases we can use the cached query results without having to refetch in the background. To achieve this behavior we configure another property called 'stale time'.

# The default stale time is 0 second which is why previously every visit to the react query superheroes page would trigger a background refetch

## Lec 8 - Refetch Defaults (5:18)

# Two more configurations related to refetching for which react query provides a default value , 1). refetch on mount, by defult it is set to true --> if it is set to ture then query will refetch on mount if the data is stale, if we set it to false then query will not fetch on mount, another value we can specify is 'always' in string which means irrespective of whether the query data is stale or not query will always refetch the data when the component mounts.
2). another configuration is 'refetchOnWindowFocus' : remote data is synched with UI because of this option, bydefult it is set to true, if we set this option to false then query will not refetch on window focus or we can set it to the string always irrespective of whether the query data is stale or not

## Lec 9 - Polling (3:00)

# Polling refers to the process of fetching data at regular intervals. For example - if we have a component that shows the real-time price of different stocks then we might want to fetch data every second to update the UI. This will ensures that UI will always be in sync with remote data irrespective of configurations like refetch on mount or refetch on window focus which is dependent on user interaction.

# To pull data with react query we can make use of another configuration called 'refetchInterval', bydefult it is set to false. However we can set it to a number in millisecond which will result in a continuous refetch of the query at that interval.

# Polling or automatic refetching is paused if the window loses focus. If we want background refetching at regular intervals we can specify another configuration called 'refetchIntervalInBackground' and set it to 'true'. so this will continue to poll data even when the browser is not in focus.

# So, by using 'refetchInterval' and 'refetchIntervalInBackground' we can poll data and provide really good user experience in applications where the data changes every now and then.

## Lec 10 - useQuery on click (4:00)

# there are two steps needed to implement 'useQuery' on click
1). to inform 'useQuery' not to fire the get request when the component mounts and we do that by passing in a configuration called enabled and setting it to false

2). we will fetch data on click of a button but how
# 'useQuery' returns a function called refetch to manually trigger the query, all we have to do is to pass it in 'onClick' handler method.

## Lec 11 - Success and Error Callbacks (5:33)

# Sometimes we might want to perform a side effect when the query completes. For example - opening a modal, navigating to a different route or even displaying toast notifications. To cater to these scenarios react query let us specify 'success' and error callbacks as configuration or options to the use query hook.

# React Query automatically injects the data that has been fetched or the error that was encountered into these callbacks.

## Lec 12 - Data Transformation (3:34)

# While fetching data sometimes we need to transform data into a format that the frontend component can consume, the backend have their own convention and frontend have a different convention. To help with such scenarios, react query provides a 'select' configuration option which we can specify on the 'useQuery' hook.

# 'select' is a function which automatically receives API data as an argument.

## Lec 13 - Custom Query Hook (6:12)

# For large application, custom query hook can be very useful for code reusability purpose.

## Lec 14 - Query by Id (15:40)

# Query by Id setup setup
1). Create a new page that will eventually display the details about one single super hero.

2). Configure the route to that page and add a link from the super heroes list page to the super hero details page.

3). Fetch a superhero by id and display the details in the UI.

# queryKey is an array which mimics the array which we passed into useQuery