import React from 'react';
import ReactDOM from 'react-dom';

class Page extends React.Component {
    render() {
        return <div>Page</div>
    }
}

ReactDOM.render(
    <div>
        <Page/>
    </div>,
    document.getElementById('root')
);