const NewFruit = (props) => {
  let formFields = {}

  return (
    <div>
      <input ref={
        input => formFields.name=input} 
        placeholder = 'Enter the name of the item'
      /> <br/>

      <input ref = {
        input=>formFields.description = input}
        placeholder = 'Enter a description'
      /> <br/>

      <button>Submit</button>  


    </div>    
  )
}