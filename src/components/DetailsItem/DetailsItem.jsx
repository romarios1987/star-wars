import React, {Component} from 'react';
import SwapiService from "../services/SwapiService";

import DetailsItemView from "./DetailsItemView";
import Spinner from "../Spinner/Spinner";


class DetailsItem extends Component {

  swapiService = new SwapiService();

  state = {
    person: null,
    loading: true
  };


  componentDidMount() {
    this.updatePerson();
  }


  componentDidUpdate(prevProps) {
    if (this.props.personId !== prevProps.personId) {
      this.setState({
        loading: true
      });
      this.updatePerson();
    }
  }


  updatePerson = () => {
    const {personId} = this.props;
    if (!personId) return;

    this.swapiService.getPerson(personId)
          .then((person) => {
            this.setState({
              person,
              loading: false
            })
          })
  };


  render() {

    const {person, loading} = this.state;

    if (!person) {
      return <span>Select a person from a list</span>
    }

    const spinner = loading ? <Spinner/> : null;
    const content = !loading ? <DetailsItemView person={person}/> : null;

    return (
          <div className="short-details bg-light p-3">
            {spinner}
            {content}
          </div>
    );
  }
}

export default DetailsItem;