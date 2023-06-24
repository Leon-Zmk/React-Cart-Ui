import React from 'react'
import { useState } from 'react'

function Test() {

    let arr=[
        {id:1,name:"Zaw Min Khant",age:20,mist:"Partner"},
        {id:2,name:"Inori Yuzuriha",age:20,mist:"Partner"},
        {id:3,name:"Kurumi",age:20,mist:"Partner"},
    ]
    let [name,setName] =useState("");
    let [age,setAge]=useState("");
    let [mist,setMist]=useState("");
    let [count,changeCount]=useState(0);
    let [array,changeArray]=useState(arr)

    
    let chName =()=>{
        let data=prompt("Enter Your Name");
        setName(data)
    }

    let decrement=()=>{
        if(count){
            changeCount(count -1);
        }
    }

    let addData=(e)=>{
        e.preventDefault();
        let newid=arr.length +1;
        let newarr={
            id:newid,
            name:name,
            age:age,
            mist:mist,
        }
         changeArray([...arr,newarr]);
    }
  return (
    <div className='p-5 col-6 m-auto'>
        <form action="">
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" name='name' onChange={(e)=>(setName(e.target.value))} value={name} className="form-control" />
            </div>
            <div className="form-group">
                <label htmlFor="age">Age</label>
                <input type="text" name='age' onChange={(e)=>(setAge(e.target.value))} value={age} className="form-control" />
            </div>
            <div className="form-group">
                <label htmlFor="mist">Mist</label>
                <input type="text" name='mist'  onChange={(e)=>(setMist(e.target.value))} value={mist} className="form-control" />
            </div>
            <button onClick={addData} className='btn btn-primary m-2' type='submit'>Submit</button>
        </form>
        {/* <h1>Hello {name} -- {count}</h1>
        <button onClick={chName}>Change Name</button>
        <button onClick={()=>(changeCount( count +1))}>Add</button>
        <button onClick={decrement}>Sub</button>
        <button onClick={()=>(changeCount(0))}>Reset</button> */}
        <div>
            <ul className=' list-group'>
                {
                    array.map((el,key)=>(
                        <li className=' list-group-item mb-2' key={el.id}>{el.name}</li>
                    ))
                }
            </ul>
        </div>

    </div>
  )
}

export default Test
