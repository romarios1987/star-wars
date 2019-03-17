import React, {Component} from 'react';
import Spinner from "../Spinner/Spinner";
import ViewItemDetails from "./ViewItemDetails";
import ErrorIndicator from "../ErrorIndicator";


const Record = ({item, field, label}) => {
  return (
        <li><span>{label}:</span> {item[field]}</li>
  )
};

export {Record}


class ItemDetails extends Component {

  state = {
    item: null,
    loading: true,
    error: false
  };


  componentDidMount() {
    this.updateItem();
  }


  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem();
    }
  }


  updateItem = () => {
    const {itemId, getData} = this.props;
    if (!itemId) {
      return;
    }

    getData(itemId)
          .then((item) => {
            this.setState({
              item,
              loading: false
            })
          })
  };


  render() {

    const {item, loading, error} = this.state;

    const hasData = !(loading || error);

    const errorMessage = error ? <ErrorIndicator/> : null;

    const spinner = loading ? <Spinner/> : null;

    const content = hasData ? <ViewItemDetails
          item={item}
          imageFolder={this.props.imageFolder}
          children={this.props.children}
    /> : <span>Select a person from a list</span>;


    return (
          <div className="short-details bg-light p-3">
            {errorMessage}
            {spinner}
            {content}
          </div>
    );
  }
}

export default ItemDetails;