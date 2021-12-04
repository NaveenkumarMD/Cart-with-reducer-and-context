# Using ‘useReducer’ and ‘useContext’: React Hooks Tutorial
![](https://miro.medium.com/max/1400/1*iYEsSqflJAU8PZIytsGYgw.png)

I have been searching for a perfect tutorial or material for learning React hooks, i.e., useReducer and useContext. But I found nothing…

I have been searching for a perfect tutorial or material for learning React hooks, i.e., `useReducer` and `useContext`. But I found nothing useful. So I worked for some time and created the content for all of you.

In this tutorial, we are going to use useReducer and useContext to maintain a global state which is available through the entire project and the state variables can be altered from any of the child components.

Most of us know that context API can be used to maintain a global variable that will available throughout the entire code.

And then reducers are used to maintain a state and have a dispatch method to change the state.

Let's combine both of these by sending the state and dispatch method through the context so that the state and dispatch method will be available through all the components and the state can be used and altered which is mentioned in the reducer.

## Code

Let us get into the code

I have created a cart with add to cart feature and altering the quantity and the code for this is given below.

1. **Creating the state and reducer**

![](https://cdn-images-1.medium.com/max/2000/1*EcOFe-vaSt3jzFwOBleZyA.png)

This is the initial state I have created with the items array in it. It contains the items I have selected.

Creating the reducer with methods:

![](https://cdn-images-1.medium.com/max/2096/1*BVd7OMfQCTnQN-S96BYhCw.png)

![](https://cdn-images-1.medium.com/max/2000/1*XcZ3YGVw3vChrymax5IJuw.png)

**2.Creating context and combining reducer along with it**

![](https://cdn-images-1.medium.com/max/2000/1*mHL3QA_5aMG_i9G2nuTDKw.png)

I have created a context named **Usercontext **and initialized the reducer which returns the state and dispatch method. I have sent the state and dispatch method through the context.

**3.using the state and dispatch method in child components**

![](https://cdn-images-1.medium.com/max/2000/1*lWXcMvDDXzbKfjoNTId1FA.png)

This is the child component where I used the useContext hook with the **Usercontext **as the parameter. Here I can use the state and dispatch method which can change the global state provided in the reducer.

Another component

![](https://cdn-images-1.medium.com/max/2000/1*Jm5-rnFkTdrOMBm12sOrXA.png)

**Using the state**

![](https://cdn-images-1.medium.com/max/2382/1*eKcFSGBE3_3uik7UoROjUA.png)


