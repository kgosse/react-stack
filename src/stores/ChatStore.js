/**
 * Created by kevin gosse on 03/12/2015.
 */
import alt from '../alt';
import Actions from '../actions';
import {decorate, bind, datasource} from 'alt/utils/decorators';

@decorate(alt)
class ChatStore{
    constructor(){
        this.state ={user: null};
    }

    @bind(Actions.login)
    login(user){
        this.setState({user: user});
    }
}

export default alt.createStore(ChatStore);
