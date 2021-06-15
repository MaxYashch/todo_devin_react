import { React, Component } from "react";

class ButtonsSort extends Component {
    constructor(props) {
        super(props);
        this.sortByDate = this.sortByDate.bind(this);
        this.toggleSortDate = this.toggleSortDate.bind(this);
        this.state = {
            postList: props.todos,
            isOldestFirst: true,
        };
    }
    sortByDate(e) {
        // console.log(this.state.postList);
        // e.preventDefault();
        const { postList } = this.state;
        console.log(postList);
        let newPostList = JSON.parse(JSON.stringify(postList));
        newPostList = newPostList.reverse();
        console.log(newPostList);

        // if (this.state.isOldestFirst) {
        //     newPostList.sort((a, b) => a.dateTimeSort < b.dateTimeSort);
        // } else {
        //     newPostList.sort((a, b) => a.dateTimeSort > b.dateTimeSort);
        // }
        // console.log(newPostList);

        // for (let key of newPostList) {
        //     newPostList.sort((a, b) => key.a.dateTimeSort > key.b.dateTimeSort);
        //     // console.log(key.dateTimeSort);
        // }
        // console.log(newPostList);

        // this.props.setTodos({
        return this.setState({
            postList: newPostList.sort(
                (a, b) => b.dateTimeSort - a.dateTimeSort
            ),
        });

        //     console.log(this.state.postList);
    }

    toggleSortDate(e) {}

    componentDidMount() {
        // const postList = TaskList;
        // this.setState({
        //     isOldestFirst: true,
        //     postList: postList,
        // });
    }

    render() {
        return (
            <div className="d-flex">
                <button type="button" className="btn btn-primary mx-2">
                    <i
                        onClick={this.sortByDate}
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
