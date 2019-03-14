import React, {Component} from 'react';
import Spinner from "./hoc/withData";


const Record = ({item, field, label}) => {
  return (
        <li><span>{label}:</span> {item[field]}</li>
  )
};

export {Record}


class ItemDetails extends Component {

  state = {
    item: null,
    loading: true
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

    const {item, loading} = this.state;

    if (!item) {

      return <span>Select a person from a list</span>
    }


    if (loading) {
      return <Spinner/>;
    }

    const {id, name} = item;




    return (
          <div className="short-details bg-light p-3">


            <div className="d-flex">
              <div className="wrap-img">
                <img src={`img/${this.props.imageFolder}/${id}.jpg`} className="radius-img" width={180} alt={name}/>
              </div>
              <div className="short-details-info ml-3">
                <h2 className="text-uppercase">{item.name}</h2>
                <ul className="list-info">

                  {
                    React.Children.map(this.props.children, (child) => {
                      return React.cloneElement(child, {item});
                    })
                  }
                </ul>
              </div>
            </div>

            <button type="button" className="btn btn-warning mt-3">More Info</button>

          </div>
    );
  }
}

export default ItemDetails;