import React from 'react';
import Message from './Message.jsx';
import mui from 'material-ui';
import firebase from 'firebase';
import _ from 'lodash';

var {Card, List} = mui;

class MessageList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            messages: []
        };

        this.firebaseRef = new firebase('https://kg-react-stack.firebaseio.com/messages');
        this.firebaseRef.once("value", (dataSnapshot)=>{
            var messages = dataSnapshot.val();
            var res = [];
            messages.forEach((m)=>{
                res.push(m.message);
            });
            this.setState({
                messages: res
            });
        });
    }

    render(){
        var messageNodes = this.state.messages.map((message)=> {
            return (
                <Message message={message} />
            );
        });

        return (
            <Card style={{
                flexGrow: 2,
                marginLeft: 30
            }}>
                <List>
                    {messageNodes}
                </List>
            </Card>
        );
    }
}

export default MessageList;