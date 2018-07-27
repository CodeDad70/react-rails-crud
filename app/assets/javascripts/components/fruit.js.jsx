class Fruit extends React.Component {
  render(){
    return(
      <div>
        <h2>{this.props.fruit.name}</h2>
        <p>{this.props.fruit.description}</p>
        <button onClick = {() =>this.props.handleDelete(this.props.fruit.id)}>
          Delete
        </button>  
      </div>  
    )
  }
 }