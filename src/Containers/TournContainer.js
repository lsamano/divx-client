import React, {Component} from 'react';
import {connect} from 'react-redux';
import TournShow from '../Components/Tournament/TournShow';
import TournIndex from '../Components/Tournament/TournIndex';
import NewTournamentForm from '../Components/Tournament/NewTournamentForm';
import {Redirect, Switch, Route} from 'react-router-dom';
import {getTournaments} from '../Redux/actions';

class TournContainer extends Component {
  componentDidMount = () => {
    this.props.getTournaments();
  }

  render() {
    console.log("Tourn container rendered", this.props);
    if (!localStorage.token) {
      return <Redirect to="/login" />
    }
    return (
      <Switch>
        <Route path="/tournaments/new" component={NewTournamentForm} />
        <Route path="/tournaments/:id" component={TournShow}/>
        <Route exact path="/tournaments" component={TournIndex}/>
      </Switch>
    )
  }
}

const mapStateToProps = state => ({
  tournaments: state.reducer.tournaments,
  user: state.reducer.user
})

const mapDispatchToProps = dispatch => ({
  getTournaments: () => dispatch(getTournaments())
})

export default connect(mapStateToProps, mapDispatchToProps)(TournContainer);
