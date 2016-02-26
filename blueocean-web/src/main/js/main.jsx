import React, {Component} from 'react';
import {render} from 'react-dom';

//import {ExtensionPoint} from '@jenkins-cd/js-extensions';

/**
 * Root Blue Ocean UI component
 */
class App extends Component {
    render() {
        return (
            <div id="outer">
                <header>
                    <span className="jenkins-logo" />
                </header>
                <main>
                    {/* children currently set by router */}
                    {this.props.children}
                </main>
                <footer>
                    <p>This is a footer. I'm sure you'll agree.</p>
                </footer>
            </div>
        );
    }
}

render(<App />, document.getElementById('blueocean-root'));
