import { Component } from "react";
import './search-box.styles.css';

class SearchBox extends Component {

  render() {
    const { myClassName, myPlaceholder, myOnChangeHandler } = this.props;

    return (
      <input
        className={`search-box ${myClassName}`}
        type='search'
        placeholder={ myPlaceholder }
        onChange={ myOnChangeHandler }
      />
    );

  }
}

export default SearchBox;