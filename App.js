
{/* <div id="parent">
  <div id="child">
    <h1>hello</h1>
    <p>this from paragraph</p>
  </div>

</div> */}


// const heading1 = React.createElement('div', {id:'parent'}, 
//   React.createElement('div',{id:'child'}, 
//     [ 
//       React.createElement('h1', {}, 'hello'),
//       React.createElement('p', {}, 'hii this paragarph')
//     ]
//   )
// );

// // const heading = React.createElement('h1', {}, "hii this from react")
// const root = ReactDOM.createRoot(document.getElementById('root'))

// root.render(heading1)


const heading = React.createElement('div', {id:'parent'}, 
React.createElement('div', {id:'child'}, 
[
React.createElement('h1',{},"this is from child heading 1"),
React.createElement('h1',{},"this is from child heading 2")
])
);


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(heading)
