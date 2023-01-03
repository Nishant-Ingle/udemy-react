const Person = (props) => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, props.name),
    React.createElement('p', {}, props.occupation)
  ]);
};

const App = () => {
  return React.createElement('div', {}, [
    React.createElement('h1', {className: 'title'}, "React is rendered"),
    React.createElement(
      Person,
      { name: 'abc', occupation: 'first'},
      null
    ),
    React.createElement(
      Person,
      { name: 'def', occupation: 'second'},
      null
    ),
    React.createElement(
      Person,
      { name: 'ghi', occupation: 'third'},
      null
    )
  ]);

};

// outdated
// ReactDOM.render(React.createElement(App), document.getElementById("root"));

// R 18 way 1
// const container = document.getElementById('root');
// const root = ReactDOM.createRoot(container);
// root.render(React.createElement(App));


// way 2
ReactDOM.createRoot(document.getElementById("root"))
        .render(React.createElement(App));
