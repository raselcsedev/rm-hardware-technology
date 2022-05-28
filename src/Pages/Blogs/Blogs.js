import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <>
            <section className='blogs'>
                <div>
                    <h1>Q. How will you improve the performance of a React Application? - </h1>
                    <h1>Answer :  Optimizing performance in a React application</h1>
                    <p>

                        01. Keeping component state local where necessary. <br />
                        02. Memoizing React components to prevent unnecessary re-renders. <br />
                        03. Code-splitting in React using dynamic import(). <br />
                        04. Windowing or list virtualization in React. <br />
                        05. Lazy loading images in React.
                    </p>
                </div>
                <div>
                    <h1>Q. Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts - </h1>
                    <h1>Answer :  Do not set the state directly in React. </h1>
                    <p>
                        Because When we directly update the state, it does not change this. state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value. We will lose control of the state across all components. <br />
                        If we find that useState / setState are not updating immediately, the answer is simple: they're just queues. React useState and setState don't make changes directly to the state object; they create queues to optimize performance, which is why the changes don't update immediately. useState is simply a state updating function. Const is used here because the change of value is being managed somewhere else by React.

                    </p>
                </div>
                <div>
                    <h1>Q: Difference between SQL and nodejs - </h1>
                    <h1>Answer : There are four main types of state you need to properly manage in your React apps:</h1>
                    <p>

                        01. Local state. <br />
                        02. Global state. <br />
                        03. Server state. <br />
                        04. URL state.
                    </p>
                </div>
                <div>
                    <h1>Q: How does prototypical inheritance work? - </h1>
                    <h1>Answer: Prototypical inheritance works </h1>
                    <p>
                        Prototype-based programming is a style of object-oriented programming in which behaviour reuse (known as inheritance) is performed via a process of reusing existing objects that serve as prototypes. This model can also be known as prototypal, prototype-oriented, classless, or instance-based programming.
                        In a class-based model, you have Classes, which are represented by the triple
                        “Parents, Variables, Methods”. Where: Parents is the list of classes you are extending. Classes may only extend other classes; Variables is the number of variable slots that instances will have. For example, a “class Point2d(int x, int y)” has 2 instance variables;
                        Methods is a table of “name → function” that describes which services each instance of the class will support;
                    </p>
                </div>
                <div>
                    <h1>Q: What is a unit test? Why should write unit tests? - </h1>
                    <h1>Answer: Unit testing </h1>
                    <p>
                        Unit testing allows the programmer to refactor code at a later date, and make sure the module still works correctly (i.e. Regression testing). The procedure is to write test cases for all functions and methods so that whenever a change causes a fault, it can be quickly identified and fixed. <br />
                        One of the benefits of unit tests is that they isolate a function, class or method and only test that piece of code. Higher quality individual components create overall system resiliency. Thus, the result is reliable code. Unit tests also change the nature of the debugging process.
                    </p>
                </div>
                <div>
                    <h1>Q: You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name? - </h1>
                    <h1>Answer:Four Different Ways to Search an Array in JavaScript</h1>
                    <p>
                        There are different methods in JavaScript that you can use to search for an item in an array. Which method you choose depends on your specific use case.

                        For instance, do you want to get all items in an array that meet a specific condition? Do you want to check if any item meets the condition? Do you want to check if a specific value is in the array? Or do you want to find the index of the value in the array?

                        For all these use cases, JavaScript's Array.prototype methods have you covered. In this article, we will discuss four methods we can use to search for an item in an array. These methods are:

                        01. Filter <br />
                        02. Find <br />
                        03. Includes <br />
                        04. IndexOf <br />
                    </p>
                </div>


            </section>
        </>
    );
};

export default Blogs;