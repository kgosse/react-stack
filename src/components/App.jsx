/**
 * Created by kevin gosse on 26/11/2015.
 */

var React = require('react').react;

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            message: [
                'hi there how are you?',
                'I am fine, and you?'
            ]
        };
    }

    render(){
        var messageNodes = this.state.messages.map((message)=> {
            return (
                <div>
                    {message}
                </div>
            );
        });

        return (
            <div>
                {messageNodes}
            </div>
        );
    }
}

export default App;