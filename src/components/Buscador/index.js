

const Busquedo = {
    constructor(props) {
      super(props);
      this.state = {
        data: ""
      };
      this.handleChange = this.handleChange.bind(this);
    }
    handleChange = event => {
      this.setState({ data: event.target.value });
      this.props.history.push("/:query");
    };
    render() {
      return (
        <Fragment>
          <div className="container">
            <form className="text">
              <input
                className="text__input"
                type="text"
                placeholder="Ingresa un texto"
                onChange={this.handleChange}
              />
              <button className="text__button">buscar</button>
            </form>
          </div>
        </Fragment>
      );
    }
  }

  export default Buscador;