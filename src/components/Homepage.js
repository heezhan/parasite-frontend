import React from 'react';
import { Link } from 'react-router-dom';

class Homepage extends React.Component {
    render() {
        return (
            <div>
                <Link to={"/quiz"}>
                    <button>Start</button>
                </Link>
            </div>
        )
    }
}

export default Homepage