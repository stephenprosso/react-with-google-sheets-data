import React, { Component } from 'react';
import './App.css';
import Tabletop from 'tabletop';

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    Tabletop.init({
      key: '1zI6K8q7_lzUCHlnDeDHtl5OUXwK-M2JWOXaC0hG2fRI',
      callback: googleData => {
        this.setState({
          data: googleData
        })
      },
      simpleSheet: true
    })
  }

  render() {
    const { data } = this.state
    return (
      <div className="App">
       
          <h1 className="App-title">React + Google Sheets Demo</h1>
      
        <div id="employee-details">
          {
            data.map(obj => {
              return (
                <div>
                  <div>
                    <table>
                      <tr>
                        <th>{obj.first}</th>
                        <th>{obj.last}</th>
                        <th>{obj.date}</th>
                        <th>{obj.service}</th>
                      </tr>
                    </table>
                  </div>                
                </div>
              )
            })
          }
        </div>
      </div>
    );
  }
}

export default App;
