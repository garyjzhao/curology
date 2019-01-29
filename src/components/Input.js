import React from 'react';

class Input extends React.Component {
    render() {
        const { placeholder } = this.props;
        return <input type="text" placeholder={placeholder} />;
    }
}

export default Input;
