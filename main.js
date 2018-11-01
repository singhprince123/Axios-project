

  function generateSucessHTML(response){
   return `<h3>Result:<h3> <h4>status:</h4>
      <pre>   ${response.status}  ${response.statusText} </pre> 
      <h5>Headers:</h5>  
      <pre>  ${JSON.stringify(response.headers, null ,'\t' ) }</pre> 
      <h5>Data:</h5>
      <pre> ${JSON.stringify(response.data  , null , '\t')}</pre>`;
  }
   function generateErrorHTMLOutput(error){
     return `<h3>Result<h3>  <h4>status:</h4> 
        <pre> ${error.status} ${error.statusText}
        <h5>Headers:</h5>
        <pre> ${JSON.stringify(error.headers, null, '\t')} </pre>
        <h5>Data</h5>
        <pre> ${JSON.stringify(error.data), null , '\t'} </pre>
        `;
   }

  function clearOutput(){
   let resultElement1= document.getElementById('getResult1');
   resultElement1.innerHTML ='';
   let resultElement2= document.getElementById('getResult2');
   resultElement2.innerHTML ='';
   let resultElement3= document.getElementById('postResult');
   resultElement3.innerHTML ='';
  }

    function performGetRequest1(){
    let resultElement = document.getElementById('getResult1');
   resultElement.innerHTML = '';

   axios.get('http://jsonplaceholder.typicode.com/todos').then(function(response){
      resultElement.innerHTML = generateSucessHTML(response);
    console.log(response);
   }).catch(function(error){
     resultElement.innerHTML = generateErrorHTMLOutput(error);
   }
   );
    }

    function performGetRequest2() {
      let resultElement = document.getElementById('getResult2');
      let todoId = document.getElementById('todoId').value
      console.log(todoId)
      resultElement.innerHTML = '';

      axios.get('http://jsonplaceholder.typicode.com/todos', {
        params: {
          id: todoId
        }
      })
      .then( (response) => {
        console.log(response);
        resultElement.innerHTML = generateSucessHTML(response);

      })
      .catch((error) => {
        resultElement.innerHTML = generateErrorHTMLOutput(error);
      })
    }
   
   document.getElementById('todoInputForm').addEventListener('submit', performPostRequest);
    function performPostRequest(e){
      let resultElement = document.getElementById('postResult');
      let todoTitle = document.getElementById('todoTitle').value;
      console.log(todoTitle);
      resultElement.innerHTML = '';

      axios.post('http://jsonplaceholder.typicode.com/todos', {
        userId: '1',
        title: todoTitle,
        completed: false
      
      })
      .then((response) => {
        resultElement.innerHTML = generateSucessHTML(response);
      })
      .catch((error) => {
        resultElement.innerHTML = generateErrorHTML(error);
      });

      e.preventDefault();
    }