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
                        <th>First</th>
                        <th>Last</th>
                        <th>Date of Service</th>
                        <th>Service Provided</th>
                      </tr>
                      <tr>
                        <td>{obj.first}</td>
                        <td>{obj.last}</td>
                        <td>{obj.date}</td>
                        <td>{obj.service}</td>
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
