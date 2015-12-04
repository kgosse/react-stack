/**
 * Created by kevin gosse on 26/11/2015.
 */

import React from 'react';
import Login from './Login.jsx';
import Chat from './Chat.jsx';
import mui from 'material-ui';
import connectToStores from 'alt/utils/connectToStores';
import ChatStore from '../stores/ChatStore'

var ThemeManager = new mui.Styles.ThemeManager();
var Colors = mui.Styles.Colors;
var AppBar = mui.AppBar;

@connectToStores
class App extends React.Component{
    constructor(){
        super();

        ThemeManager.setPalette({
            primary1Color: Colors.blue500,
            primary2Color: Colors.blue700,
            primary3Color: Colors.blue100,
            accent1Color: Colors.pink400
        });
    }

    static getStores(){
        return [ChatStore];
    }

    static getPropsFromStores(){
        return ChatStore.getState();
    }

    static childContextTypes = {
        muiTheme: React.PropTypes.object
    };

    getChildContext(){
        return {
            muiTheme: ThemeManager.getCurrentTheme()
        };
    }

    render(){
        var view = <Login />;

        if(this.props.user)
            view = <Chat />;

        return (
            <div>
                <AppBar title="Awesome Chat App" />
                {{view}}
            </div>
        );
    }
}

export default App;
