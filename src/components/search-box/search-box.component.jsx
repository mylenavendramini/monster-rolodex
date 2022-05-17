// import { Component } from "react";
import "./search-box.style.css";

const SearchBox = ({ className, placeholder, onChangeHandler }) => (
  <div>
    <input
      // className="search-box"
      className={`search-box ${className}`}
      type={"search"}
      // placeholder={"Search monsters"}
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  </div>
);

// class SearchBox extends Component {
//   render() {
//     return (
//       <div>
// <input
//   // className="search-box"
//   className={`search-box ${this.props.className}`}
//   type={"search"}
//   // placeholder={"Search monsters"}
//   placeholder={this.props.placeholder}
//   onChange={this.props.onChangeHandler}
// />
//       </div>
//     );
//   }
// }

export default SearchBox;
