import { React, Component } from "react";

class ButtonsSort extends Component {
    constructor(todos) {
        super(todos);
        this.sortTaskReverse = this.sortTaskReverse.bind(this);
        this.state = {
            sortTodos: [],
            isOldestFirst: true,
        };
    }
    sortTaskReverse(e) {
        // console.log(this.state.sotrTodos);
        const { postList } = this.state;
        let newPostList = postList.reverse();
        console.log(newPostList);
        this.setState({
            postList: newPostList.sort(
                (a, b) => a.dateTimeSort - b.dateTimeSort
            ),
        });
    }
    render() {
        return (
            <div className="d-flex">
                <button type="button" className="btn btn-primary mx-2">
                    <i
                        onClick={this.sortTaskReverse}
                        className="fas fa-sort-numeric-up-alt"
                        aria-hidden={"true"}
                    ></i>
                </button>
                <button type="button" className="btn btn-primary">
                    <i
                        className="fas fa-sort-numeric-up"
                        aria-hidden={"true"}
                    ></i>
                </button>
            </div>
        );
    }
}

export default ButtonsSort;
