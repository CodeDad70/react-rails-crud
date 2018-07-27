class Body extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      fruits: []
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.addNewFruit = this.addNewFruit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.deleteFruit = this.deleteFruit.bind(this)
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
      }).then((response)=> {
        this.deleteFruit(id)
      })
    }
  
  deleteFruit(id){
    newFruits=this.state.fruits.filter((fruit)=> fruit.id !== id) 
    this.setState ({
      fruits: newFruits
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
        <AllFruits fruits={this.state.fruits} handleDelete = {this.handleDelete}/>
        <NewFruit handleFormSubmit = {this.handleFormSubmit} />
      </div>  
    )
  }
}