class Body extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      fruits: []
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.addNewFruit = this.addNewFruit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleFormSubmit(name,description) {
    let body = JSON.stringify({
      fruit:{
        name:name,
        description: description
      }
    })
    fetch('http://localhost:3000/api/v1/fruits/', {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json' 
      },
      body: body,
      })
        .then ((response)=> {return response.json() })
        .then ((fruit) => {this.addNewFruit(fruit) 
    })
  }

    handleDelete(id){
      fetch(`http://localhost:3000/api/v1/fruits/${id}`, 
        {
          method: 'DELETE',
          headers: {
          'Content-type': 'application/json'
        }
      }).then((respones)=> {console.log("Item was deleted")
      })
    }


  addNewFruit(fruit){
    this.setState({
      fruits: this.state.fruits.concat(fruit)
    })
  }

  componentDidMount(){
    fetch('api/v1/fruits.json')
      .then((response) => {return response.json()})
      .then((data) => {this.setState({fruits:data}) }) 
  }

  render(){
    return(
      <div>
        <AllFruits fruits={this.state.fruits}/>
        <NewFruit handleFormSubmit = {this.handleFormSubmit} handleDelete = {this.handleDelete}/>
      </div>  
    )
  }
}