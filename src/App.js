import './App.css';

import Amplify, {Auth} from 'aws-amplify';
import {withAuthenticator, AmplifySignOut} from '@aws-amplify/ui-react';
import awsconfig from './aws-exports'

Amplify.configure(awsconfig);

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <AmplifySignOut/>
                <h2>my app r</h2>
            </header>
        </div>
    );
}

export default withAuthenticator(App);
