import React, {Component} from 'react';
import Spinner from "../Spinner/Spinner";
import ErrorIndicator from "../ErrorIndicator";


const Record = ({item, field, label}) => {
  return (
        <li><span>{label}:</span> {item[field]}</li>
  )
};

export {Record}


const withDataItem = (View, getData) => {

  return class extends Component {

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
            .catch(() => {
              this.setState({
                error: true,
                loading: false
              });
            })

    };



    render() {
      const {item, loading, error} = this.state;

      if (loading) {
        return <Spinner/>;
      }

      if (error) {
        return <ErrorIndicator/>;
      }

      return <View {...this.props} item={item}/>
    }
  };


};


export default withDataItem;