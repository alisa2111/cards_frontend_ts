import * as React from 'react';
import AppRouter from './AppRouter';
import {Component} from "react";

class App extends Component {
    render() {
        return (
            <div className="App">
                <AppRouter/>
            </div>
        );
    }
}
export default App;