import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

let debounceTimer;
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewType: 'grid',
      albumList: [],
      imageList: [],
      filteredAlbumList: [],
      selectedItem: ''
    }
  };

  _onChange = (val) => {
    let updatedList = [];
    if (val) {
      updatedList = this.state.albumList;
      updatedList = updatedList.filter(function (item) {
        let searchedValue = item.title.toString().toLowerCase();
        return searchedValue.indexOf(val.toLowerCase()) !== -1;
      });
    }
    this.setState({ filteredAlbumList: updatedList });
  };

  debounce = (e) => {
    const val = e.target.value
    this.setState({ selectedItem: e.target.value })
    clearTimeout(debounceTimer)
    debounceTimer = setTimeout(() => this._onChange(val), 1000);
  }

  _onChangeViewType = (e) => {
    this.setState({ viewType: e.target.value })
  };

  getAlbumList() {
    fetch(`https://jsonplaceholder.typicode.com/albums`)
      .then((response) => response.json()).then((response) => {
        if (response) {
          this.setState({ albumList: response })
        } else {
          this.setState({ albumList: [] })
        }
      }).catch((error) => {
        console.log(error)
      })
  };

  onSelect = (userId, title) => {
    this.setState({ selectedItem: title, filteredAlbumList: [] })

    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${userId}`)
      .then((response) => response.json()).then((response) => {
        if (response) {
          this.setState({ imageList: response })
        } else {
          this.setState({ imageList: [] })
        }
      }).catch((error) => {
        console.log(error)
      })
  };

  componentDidMount() {
    this.getAlbumList()
  };

  render() {
    return (
      <div className="App container-fluid">
        <div className="row">
          <header className="App-header col-12">Typeahead</header>
        </div>

        <section className="section_style">
          <div className="Typeahead_style">
            <input type="text"
              className="form-control"
              placeholder="-- Select Album --"
              list="data"
              value={this.state.selectedItem}
              onChange={this.debounce}
            />

            {
              //<datalist id="data">
              //   {this.state.albumList.map((item, key) =>
              //     <option key={item.id} value={item.title} />
              //   )}
              // </datalist>
            }

            <ul className="list-group">
              {
                this.state.filteredAlbumList && this.state.filteredAlbumList.map((item, key) =>
                  <li className="list-group-item" key={item.id} onClick={() => this.onSelect(item.userId, item.title)}>
                    {item.title}
                  </li>
                )
              }
            </ul>
          </div>

          <div className="Typeahead_style">
            <div className="form-check-inline">
              <label className="form-check-label" htmlFor="Grid">
                <input type="radio"
                  id="Grid"
                  className="form-check-input"
                  name="image"
                  checked={this.state.viewType === "grid"}
                  value={"grid"}
                  onChange={this._onChangeViewType}
                /> Grid
              </label>
            </div>

            <div className="form-check-inline">
              <label className="form-check-label" htmlFor="Table">
                <input type="radio"
                  id="Table"
                  className="form-check-input"
                  name="image"
                  checked={this.state.viewType === "table"}
                  value={"table"}
                  onChange={this._onChangeViewType}
                /> Table
              </label>
            </div>
          </div>

          {
            this.state.viewType === 'grid' ?
              <div className="row">
                {
                  this.state.imageList.map((item, key) =>
                    <div className="col-xs-12 col-sm-2 col-lg-3" key={item.id}>
                      <div className="image_style">
                        <img src={item.url} alt={item.title} />
                      </div>

                      <div>{item.title}</div>
                    </div>
                  )
                }
              </div> :
              <div className="TableView_style">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th>Thumbnail</th>
                      <th scope="col">Title</th>
                      <th scope="col">Image</th>
                    </tr>
                  </thead>

                  <tbody>
                    {
                      this.state.imageList.map((item, key) =>
                        <tr key={item.id}>
                          <th scope="row">{item.id}</th>
                          <td>
                            <div className="thumnil_style">
                              <img src={item.thumbnailUrl} alt={item.title} />
                            </div>
                          </td>
                          <td>{item.title}</td>
                          <td>
                            <div className="image_style">
                              <img src={item.url} alt={item.title} />
                            </div>
                          </td>
                        </tr>
                      )}
                  </tbody>
                </table>
              </div>
          }
        </section>
      </div>
    );
  }
};

export default App;