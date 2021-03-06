import React, { useEffect, useState, useRef } from 'react';
import {
    createTheme,
    responsiveFontSizes,
    ThemeProvider,
  } from '@mui/material/styles';
  import Typography from '@mui/material/Typography';
  
  let theme = createTheme();
  theme = responsiveFontSizes(theme);
  

const divStyle = {
    // color: 'blue',
    height: '30vh',
    // textAlign: 'center',
    padding: '5px 10px',
    // background: '#eee',
    marginTop: '15px',
    fontFamily: 'Roboto, sans-serif',
    background: 'black',
    color: 'white',
};

const div2Style = {
    // color: 'blue',
    height: '10vh',
    // textAlign: 'center',
    padding: '5px 10px',
    // background: '#eee',
    marginTop: '15px',
    fontFamily: 'Roboto, sans-serif',
    background: 'black',
    color: 'white',
};



const containerStyle = {
    maxWidth: '1280px',
    margin: '0 auto',
}
const InfiniteScroll = () => {
    const [postList, setPostList] = useState({
        list: [1]
    });
    const poem = [
        "This will be hard to express in the language of my coloniser. I will fail.",
        "I will try.",
        [<em>Dhulanbaa </em>,`is the time of the Black wattle.`, <br/>,<em>Dhulanbaa </em>,"is the place of the Black wattle."],
        "There is no time without the place, and no place without the time.",
        "We do not mark each beat and swallow it whole. We are rhythm people.",
        ["When you die, said",<em> Garruu, </em>,"you may be reborn not as person or animal. Not even as tree.", <br />, "You may, instead, be reborn as place."],
        "This makes mining murder.",
        "This also makes us strong.",
        ["When I say we are rhythm people I do not mean that we just track them. And certainly not force them.", <br/>,<br/>, "What I mean is that we ", <em>participate</em>," in a rhythm that is larger than ourselves."],
        ["Those who do not may perturb it,",<em> yawu.</em>,<br/>,"But they cannot break it.", <br/>,<br/>,<em>Gamil.</em>],
        "Take solace, my people. Rest easy.",
        "Wake early, my people. There is much to do.",
        "This will be difficult to express in the language of my coloniser. I will fail.",
        "I will try.",
        [<em>Dhulanbaa </em>,`is the time of the Black wattle.`, <br/>,<em>Dhulanbaa </em>,"is the place of the Black wattle."],
        "There is no time without the place, and no place without the time.",
        "We do not mark each beat and swallow it whole. We are rhythm people.",
        ["When you die, said",<em> Garruu, </em>,"you may be reborn not as person or animal. Not even as tree.", <br />, "You may, instead, be reborn as place."],
        "This makes mining murder.",
        "This also makes us strong.",
        ["When I say we are rhythm people I do not mean that we just track them. And certainly not force them.", <br/>,<br/>, "What I mean is that we ", <em>participate</em>," in a rhythm that is larger than ourselves."],
        ["Those who do not may perturb it,",<em> yawu.</em>,<br/>,"But they cannot break it.", <br/>,<br/>,<em>Gamil.</em>],
        "Take solace, my people. Rest easy.",
        "Wake early, my people. There is much to do.",
    ]

    const [page, setPage] = useState(1);
    const loader = useRef(null);
    const [counter, setCounter] = useState(2);

    // function increment() {
    //     setCounter(prevCounter => prevCounter + 1);
    // }

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

// eslint-disable-next-line
    useEffect(() => {
        // here we simulate adding new posts to List
        setCounter(prevCounter => prevCounter + 1)
        const newList = postList.list.concat([counter]);
        setPostList({
            list: newList
        })
        // eslint-disable-next-line
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
              <ThemeProvider theme={theme}>
        <div className="post-list">
            <div style={div2Style}>
                <Typography variant="h4"><em>Dhulanbaa</em></Typography>
            </div>
            {
                postList.list.map((post, index) => {
                    return (<div key={index} className="post" style={divStyle}>
                        <Typography variant="h4"> {post}.<br/></Typography><Typography variant="h4">{poem[index % poem.length]}</Typography>
                    </div>)
                })
            }
            {/* <!-- Add Ref to Load More div --> */}
            <div className="loading" ref={loader}>
                <h2>...</h2>
            </div>
        </div>
        </ThemeProvider>
    </div>)
}

export default InfiniteScroll;