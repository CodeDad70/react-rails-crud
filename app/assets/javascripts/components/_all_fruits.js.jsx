const AllFruits = (props) => {

    let fruits = props.fruits.map ((fruit)  => {
      return (
        <div key={fruit.id}>
          <Fruit fruit={fruit}/>
        </div> 
      )
    })

    return (
      <div>
        {fruits}
      </div>
    )
}
