import { Component } from "react";

class SearchBox extends Component {

  render() {
    const { myClassName, myPlaceholder, myOnChangeHandler } = this.props;

    return (
      <input
        className={ myClassName }
        type='search'
        placeholder={ myPlaceholder }
        onChange={ myOnChangeHandler }
      />
    );

  }
}

export default SearchBox;