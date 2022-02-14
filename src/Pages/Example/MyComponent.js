import React from "react";

class MyComponent extends React.Component {
    state = {
        truong: 'BKHN',
        khoa: 'K62'
    }
    handleOnchangeTruong = (event) => {
        this.setState({
            truong: event.target.value
        })
    }
    render() {


        return (
            <>
                <input value={this.state.truong} type="text"
                    onChange={(event) => this.handleOnchangeTruong(event)} />
                <div className="first">
                    ĐTVT-10-{this.state.khoa}
                </div>
                <div>Trường: {this.state.truong}</div>
            </>

        )
    }
}

export default MyComponent;