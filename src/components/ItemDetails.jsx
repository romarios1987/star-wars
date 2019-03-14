import React, {Component} from 'react';


const Record = ({item, field, label}) => {
  return (
        <li><span>{label}:</span> {item[field]}</li>
  )
};

export {Record}


class ItemDetails extends Component {

  
  state = {
    item: [],
    loading: true
  };


  componentDidMount() {
    this.updateItem();
  }


  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.setState({
        loading: true
      });
      this.updateItem();
    }
  }


  updateItem = () => {
    const {itemId, getData} = this.props;
    if (!itemId) return;

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

    const {} = item;
    
    console.log(item);

    // if (!item) {
    //   return <span>Select a person from a list</span>
    // }
    //
    // const spinner = loading ? <Spinner/> : null;
    // const content = !loading ? <DetailsItemView item={item}/> : null;

    return (
          <div className="short-details bg-light p-3">
            {/*{spinner}*/}
            {/*{content}*/}

            <div className="d-flex">
              <div className="wrap-img">
                {/*<img src={`img/characters/${id}.jpg`} className="radius-img" width={180} alt={name}/>*/}
              </div>
              <div className="short-details-info ml-3">
                {/*<h2 className="text-uppercase">{name}</h2>*/}
                <ul className="list-info">
                  {React.Children.map(this.props.children, (child, index) => {
                    return React.cloneElement(child, { item });
                  })}
                  {/*<li>Height: {height}</li>*/}
                  {/*<li>Mass: {mass}</li>*/}
                  {/*<li>Gender: {gender}</li>*/}
                  {/*<li>Birth Year: {birthYear}</li>*/}
                  {/*<li>Eye Color: {eyeColor}</li>*/}
                </ul>
              </div>
            </div>

            <button type="button" className="btn btn-warning mt-3">More Info</button>




          </div>
    );
  }
}

export default ItemDetails;