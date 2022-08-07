import React from 'react'
import { useState } from 'react'
import { CSVLink } from 'react-csv'
import { useHistory } from 'react-router-dom'

function ReactCsv() {

   const [code,setCode]=useState("")
  const [name,setName]=useState("")
  const [batch,setBatch]=useState("")
  const [stock,setStock]=useState("")
  const [deal,setDeal]=useState("")
  const [free,setFree]=useState("")
  const [mrp,setMrp]=useState("")
  const [rate,setRate]=useState("")
  const [exp,setExp]=useState("")
  const [company,setCompany]=useState("")
  const [supplier,setSupplier]=useState("")

  const data = [
    ["code","name","batch","stock","deal","free","mrp","rate","exp","company","supplier"],
    [code,name,batch,stock,deal,free,mrp,rate,exp,company,supplier]
  ]
 
  const history = useHistory();
 function saveData ()  {
  alert("download ?")
  } 

  return (
    <div>
      <h1 className='container' style={{color:"green"}} >Fill The Details to download Csv File </h1> <hr/>
       <div className='container'> 
      <form action=""></form>
      <label htmlFor="code">code :</label> &nbsp;
      <input type="text" required value={code} onChange={(e)=> {setCode(e.target.value)}} placeholder="Enter code" id="code"/> <br/><br/>
      <label htmlFor="name">name :</label>  &nbsp;
      <input type="text" required value={name} onChange={(e)=> {setName(e.target.value)}} placeholder="Enter Name" id="name"/> <br/><br/>
      <label htmlFor="batch">batch :</label> &nbsp;
      <input type="text" required value={batch} onChange={(e)=> {setBatch(e.target.value)}} placeholder="Enter batch" id="batch"/> <br/><br/>

      <label htmlFor="stock">stock :</label> &nbsp;
      <input type="text" required value={stock} onChange={(e)=> {setStock(e.target.value)}} placeholder="Enter stock" id="stock"/> <br/><br/>

      <label htmlFor="deal">deal :</label> &nbsp;
      <input type="text" required  value={deal} onChange={(e)=> {setDeal(e.target.value)}} placeholder="Enter deal" id="deal"/> <br/><br/>

      <label htmlFor="free">free :</label> &nbsp;
      <input type="text" required value={free} onChange={(e)=> {setFree(e.target.value)}} placeholder="Enter free" id="free"/> <br/><br/>

      <label htmlFor="mrp">mrp :</label> &nbsp;
      <input type="text" required  value={mrp} onChange={(e)=> {setMrp(e.target.value)}} placeholder="Enter mrp" id="mrp"/> <br/><br/>

      <label htmlFor="rate">rate :</label> &nbsp;
      <input type="text" required value={rate} onChange={(e)=> {setRate(e.target.value)}} placeholder="Enter rate" id="rate"/> <br/><br/>

      <label htmlFor="exp">exp :</label> &nbsp;
      <input type="text" required value={exp} onChange={(e)=> {setExp(e.target.value)}} placeholder="Enter exp" id="exp"/> <br/><br/>
  
      <label htmlFor="company">company :</label> &nbsp;
      <input type="text" value={company} onChange={(e)=> {setCompany(e.target.value)}} placeholder="Enter company" id="company"/> <br/><br/>
   
      <label htmlFor="supplier">supplier :</label> &nbsp;
      <input type="text" required value={supplier} onChange={(e)=> {setSupplier(e.target.value)}} placeholder="Enter supplier" id="supplier"/> <br/><br/>
      


        </div> 
<p>Note : Fill the input to Download Csv Format File</p>
      <CSVLink
        data = {data}
        onClick={saveData}
      >
       Download Csv File 
      </CSVLink> &nbsp;
<input className='btn btn-primary' type="button"  onClick={() => history.push('./')} value="Back" /> <br/>
      <hr/>
    </div>
  )
}

export default ReactCsv
