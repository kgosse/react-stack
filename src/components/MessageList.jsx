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
            var messagesVal = dataSnapshot.val();
            var messages = _(messagesVal)
                .keys()
                .map((messageKey)=>{
                    var cloned = _.clone(messagesVal[messageKey]);
                    cloned.key = messageKey;
                    return cloned;
                })
                .value();
            /*            var res = [];
             messages.forEach((m)=>{
             res.push(m.message);
             });*/
            this.setState({
                messages: messages.map((v)=> v.message)
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