import React, { useEffect, useState, useRef  } from 'react';

const divStyle = {
    // color: 'blue',
    height: '250px',
    // textAlign: 'center',
    padding: '5px 10px',
    // background: '#eee',
    marginTop: '15px'
};


const containerStyle = {
    maxWidth: '1280px',
    margin: '0 auto',
}
const InfiniteScroll = () => {
    const [postList, setPostList] = useState({
        list: [1]
    }); 
    const poem = ["one", "two", "three"]
    const [page, setPage] = useState(1);
    const loader = useRef(null);
    const [counter, setCounter] = useState(2);

    function increment() {
        setCounter(prevCounter => prevCounter + 1);
    }

    useEffect(() => {
         var options = {
            root: null,
            rootMargin: "20px",
            threshold: 1.0
         };
        // initialize IntersectionObserver
        // and attaching to Load More div
         const observer = new IntersectionObserver(handleObserver, options);
         if (loader.current) {
            observer.observe(loader.current)
         }

    }, []);


    useEffect(() => {
        // here we simulate adding new posts to List
        increment()
        const newList = postList.list.concat([counter]);
        setPostList({
            list: newList
        })
    }, [page])

    // here we handle what happens when user scrolls to Load More div
   // in this case we just update page variable
    const handleObserver = (entities) => {
        const target = entities[0];
        if (target.isIntersecting) {   
            setPage((page) => page + 1)
        }
    }


    return (<div className="container" style={containerStyle}>
        <div className="post-list">
            {
                postList.list.map((post, index) => {
                    return (<div key={index} className="post" style={divStyle}>
                        <h2> {post }. </h2>
                        <h3>{poem[index%3]}</h3>
                    </div>)
                })
            }
             {/* <!-- Add Ref to Load More div --> */}
            <div className="loading" ref={loader}>
                    <h2>Load More</h2>
           </div>
        </div>
    </div>)
}

export default InfiniteScroll;