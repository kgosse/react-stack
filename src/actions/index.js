/**
 * Created by kevin gosse on 03/12/2015.
 */
import alt from '../alt';
import Firebase from 'firebase';

class Actions{
    constructor(){
        this.generateActions(
            'channelsReceived',
            'channelsFailed',
            'messagesReceived',
            'messagesFailed'
        );
    }

    login(args){
        return (dispatch)=>{
            var firebaseRef = new Firebase('https//kg-react-stack.firebaseio.com');
            firebaseRef.authWithOAuthPopup("google", (error, user)=>{
                if(error)
                    return;

                dispatch(user);
            })
        }
    }
}

export default alt.createActions(Actions);
