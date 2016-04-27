var React = require('react');
var DefaultLayout = require('./layout/master');

var IndexComponent = React.createClass({
   render : function(){
       return (
           <DefaultLayout name={this.props.name}>
            <div>
                <h1>This was build using react</h1>
            </div>
           </DefaultLayout>
       )
   } 
});

module.exports = IndexComponent;