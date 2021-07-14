import { React } from "react";

// class ButtonsSort extends Component {
//     constructor(props) {
//         super(props);
//         // this.sortByDate = this.sortByDate.bind(this);
//         // this.toggleSortDate = this.toggleSortDate.bind(this);
//         // this.toggleSortDate2 = this.toggleSortDate2.bind(this);
//         this.state = {
//             postList: props.todos,
//             isOldestFirst: true,
//         };
//     }
//     // sortByDate(e) {
//     //     e.preventDefault();
//     //     console.log("tttttttttttt");
//     //     const { postList } = this.state;
//     //     console.log(postList);
//     //     let newPostList = JSON.parse(JSON.stringify(postList));
//     //     newPostList = newPostList.reverse();
//     //     console.log(newPostList);

//     //     return this.setState({
//     //         postList: newPostList.sort(
//     //             (a, b) => b.dateTimeSort - a.dateTimeSort
//     //         ),
//     //     });
//     // }

//     render() {
//         return (
//             <div className="d-flex">
//                 <button type="button" className="btn btn-primary mx-2">
//                     <i
//                         onClick={this.sortByDate}
//                         className="fas fa-sort-numeric-up-alt"
//                         aria-hidden={"true"}
//                     ></i>
//                 </button>
//                 <button type="button" className="btn btn-primary">
//                     <i
//                         className="fas fa-sort-numeric-up"
//                         aria-hidden={"true"}
//                     ></i>
//                 </button>
//             </div>
//         );
//     }
// }

// FUnctional approach

function ButtonsSort(props) {
    // sortByDate(e) {
    //     e.preventDefault();
    //     console.log("tttttttttttt");
    //     const { postList } = this.state;
    //     console.log(postList);
    //     let newPostList = JSON.parse(JSON.stringify(postList));
    //     newPostList = newPostList.reverse();
    //     console.log(newPostList);

    //     return this.setState({
    //         postList: newPostList.sort(
    //             (a, b) => b.dateTimeSort - a.dateTimeSort
    //         ),
    //     });
    // }

    return (
        <div className="d-flex">
            <button type="button" className="btn btn-primary mx-2">
                <i
                    onClick={props.sortByDate}
                    className="fas fa-sort-numeric-up-alt"
                    aria-hidden={"true"}
                ></i>
            </button>
            <button type="button" className="btn btn-primary">
                <i className="fas fa-sort-numeric-up" aria-hidden={"true"}></i>
            </button>
        </div>
    );
}

export default ButtonsSort;
