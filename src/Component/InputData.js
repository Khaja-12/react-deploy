import React,{useState} from 'react'

function InputData() {
  const [code,setCode]=useState('')
  const [name,setName]=useState('')
  const [batch,setBatch]=useState("")
  const [stock,setStock]=useState("")
  const [deal,setDeal]=useState("")
  const [free,setFree]=useState("")
  const [mrp,setMrp]=useState("")
  const [rate,setRate]=useState("")
  const [exp,setExp]=useState("")
  const [company,setCompany]=useState("")
  const [supplier,setSupplier]=useState("")

  // Note below api request data are stored in json server db which file data.json is in src/data.json 
  // to run the json-server 
  // npx json-server --watch data.json --port 3002
  // open integral terminal in data.json and run above text

  function saveData() {
    console.warn(code,name,batch,stock,deal,free,mrp,rate,exp,company,supplier);
    let data = {code,name,batch,stock,deal,free,mrp,rate,exp,company,supplier}
    fetch(" http://localhost:3002/post",{
      method:"POST",
      headers:{
        'Accept':'application/json',
        'content-Type':'application/json'   
      },
      body:JSON.stringify(data)
    }).then((result) =>{
      console.warn("result" ,result);
      alert('data has been saved')
    })
  } 
  return (
    <>
    <h1 className='container'style={{color:"green"}} >Fill The Details To store Data</h1> <hr/>
    <div className='container'>
      <form action=""></form>
      <label htmlFor="code">code :</label> &nbsp;
      <input type="text" value={code} onChange={(e)=> {setCode(e.target.value)}} placeholder="Enter code" id="code"/> <br/><br/>
      <label htmlFor="name">name :</label>  &nbsp;
      <input type="text" value={name} onChange={(e)=> {setName(e.target.value)}} placeholder="Enter Name" id="name"/> <br/><br/>
      <label htmlFor="batch">batch :</label> &nbsp;
      <input type="text" value={batch} onChange={(e)=> {setBatch(e.target.value)}} placeholder="Enter batch" id="batch"/> <br/><br/>

      <label htmlFor="stock">stock :</label> &nbsp;
      <input type="text" value={stock} onChange={(e)=> {setStock(e.target.value)}} placeholder="Enter stock" id="stock"/> <br/><br/>

      <label htmlFor="deal">deal :</label> &nbsp;
      <input type="text"  value={deal} onChange={(e)=> {setDeal(e.target.value)}} placeholder="Enter deal" id="deal"/> <br/><br/>

      <label htmlFor="free">free :</label> &nbsp;
      <input type="text" value={free} onChange={(e)=> {setFree(e.target.value)}} placeholder="Enter free" id="free"/> <br/><br/>

      <label htmlFor="mrp">mrp :</label> &nbsp;
      <input type="text" value={mrp} onChange={(e)=> {setMrp(e.target.value)}} placeholder="Enter mrp" id="mrp"/> <br/><br/>

      <label htmlFor="rate">rate :</label> &nbsp;
      <input type="text" value={rate} onChange={(e)=> {setRate(e.target.value)}} placeholder="Enter rate" id="rate"/> <br/><br/>

      <label htmlFor="exp">exp :</label> &nbsp;
      <input type="text" value={exp} onChange={(e)=> {setExp(e.target.value)}} placeholder="Enter exp" id="exp"/> <br/><br/>
  
      <label htmlFor="company">company :</label> &nbsp;
      <input type="text" value={company} onChange={(e)=> {setCompany(e.target.value)}} placeholder="Enter company" id="company"/> <br/><br/>
   
      <label htmlFor="supplier">supplier :</label> &nbsp;
      <input type="text" value={supplier} onChange={(e)=> {setSupplier(e.target.value)}} placeholder="Enter supplier" id="supplier"/> <br/><br/>
      
      <p>Note : fill the input and Submit the button to Store Data in Json-Server db </p>

        <div className='container'>
        <button type='button' onClick={saveData}>Submit</button>
        </div>
        </div> <hr/>
    </>
  
  )
}

export default InputData
