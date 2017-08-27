//will be the parent Component
  //require children and render the child component where needed
  //will have the class stylings since it is parent

var React = require('react');
var Popular = require('./Popular');


class App extends React.Component {
  render() {
    return (
      <div className = 'container'>
      <Popular/>
      </div>
    )
  }
}

module.exports = App;
//exporting app so when it is required it will load
