/**
 * Created by kevin gosse on 03/12/2015.
 */

import Actions from '../actions';
import Firebase from 'firebase';

let firebaseRef = null;

let MessageSource = {
    sendMessage: {
        remote(state){
            return new Promise((resolve, reject)=>{
                if(!firebaseRef)
                    return resolve();

                firebaseRef.push({
                    "messages": state.message,
                    "date": new Date().toUTCString(),
                    "author": state.user.google.displayName,
                    "userId": state.user.uid,
                    "profilePic": state.user.google.profileImageURL
                });
                resolve();
            })
        },
        success: Actions.messageSendSuccess,
        error: Actions.messageSendError
    },
    getMessages: {
        remote(state){
            if(firebaseRef)
                firebaseRef.off();

            firebaseRef =
                new Firebase('https://kg-react-stack.firebaseio.com/messages/' +
                    state.selectedChannel.key);
            return new Promise((resolve, reject)=>{
                firebaseRef.once("value", (dataSnapshot)=>{
                    var messages = dataSnapshot.val();
                    resolve(messages);
                })
            })
        },
        success: Actions.messagesReceived,
        error: Actions.messagesFailed,
        loading: Actions.messagesLoading
    }
};

export default MessageSource;
