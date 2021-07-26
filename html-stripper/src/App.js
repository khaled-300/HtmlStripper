import React from 'react'
import { browserHistory } from 'react-router';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import HtmlStripper from './HtmlStripper';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';



class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      url: '',
      callStripper: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value, callStripper: false })
  }
  handleClick(e) {
    e.preventDefault();
    if (this.state.url != '')
      this.setState({ callStripper: true })
  }


  validURL(url) {
    var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator

    return !!pattern.test(url);
  }


  render() {

    if (!this.validURL(this.state.url)) {
      return (
        <Router>
          <Header />
          <hr />

          <div className="container shadow p-3 rounded-3">
            <div className="body-content">
              <h2>Html Stripper</h2>
              <div className="row g-3">
                <div className="col">
                  <input type="text" className="form-control" name="url" placeholder="URL" aria-label="URL" value={this.state.url} onChange={this.handleChange} />
                </div>
                <div className="col">
                  <button className="btn btn-outline-primary" type='button' placeholder='Submit' value='Submit' onClick={this.handleClick}>Submit</button >
                </div>
              </div>
              <div>Please provide an valid url</div>
              <hr />



            </div>
          </div>

          <hr />
          <Footer />
        </Router>
      )
    }
    else if (this.validURL(this.state.url) && this.state.url != '' && this.state.callStripper == true)
      return (
        <Router>
          <Header />
          <hr />
          <Switch>
              <Route exact path="/">
              </Route>

          <div className="container shadow p-3 rounded-3">
            <div className="body-content">
              <h2>Html Stripper</h2>
              <div className="row g-3">
                <div className="col">
                  <input type="text" className="form-control" name="url" placeholder="URL" aria-label="URL" value={this.state.url} onChange={this.handleChange} />
                </div>
                <div className="col">
                  <button className="btn btn-outline-primary" type='button' placeholder='Submit' value='Submit' onClick={this.handleClick}>Submit</button >
                </div>
              </div>
              <hr />
              <HtmlStripper url={this.state.url} />
              <hr />
            </div>
          </div>
          </Switch>
          <hr />
          <Footer />
        </Router>
      );
    else {
      return (
        <Router>
          <Header />
          <hr />
          <div className="container shadow p-3 rounded-3">
            <div className="body-content">
              <h2>Html Stripper</h2>
              <div className="row g-3">
                <div className="col">
                  <input type="text" className="form-control" name="url" placeholder="URL" aria-label="URL" value={this.state.url} onChange={this.handleChange} />
                </div>
                <div className="col">
                  <button className="btn btn-outline-primary" type='button' placeholder='Submit' value='Submit' onClick={this.handleClick}>Submit</button >
                </div>
              </div>
              <hr />
            </div>
          </div>
          <hr />
          <Footer />
        </Router>
      );
    }
  }



}

export default App;
