import React, { useState } from "react";

function State(){

    const [varone,setVarone]= useState("Reactjs");
    const [vartwo,setVartwo]= useState("100");
    const [varthree,setVarthree]= useState({key1:"hello1",key2:"hello2",key3:"hello3"});
    const [varfour,setVarfour]= useState(true);
    const [employee,setemployee]= useState([
                                           {e_id:111,e_name:'summit',e_sal:50000},
                                           {e_id:222,e_name:'amol',e_sal:60000},
                                           {e_id:333,e_name:'monya',e_sal:70000},
                                           {e_id:444,e_name:'shree',e_sal:80000},
                                           {e_id:555,e_name:'parikshit',e_sal:40000}
                                                     ])

    return (
        <React.Fragment>
            <table border='1px'
                   cellSpacing='5px'
                   cellPadding='20px'
                   align='center'>
                <tr>
                    <th>sr.no</th>
                    <th>e_id</th>
                    <th>e_name</th>
                    <th>e_sal</th>
                </tr>
                {employee.map((element,index)=>(
                    <tr index>
                        <td>{index+1}</td>
                        <td>{element.e_id}</td>
                        <td>{element.e_name}</td>
                        <td>{element.e_sal}</td>
                    </tr>
                ))}
            </table>
            <h1>{varone}</h1>
             <h2>{vartwo}</h2>
             <h2>{JSON.stringify(varthree)}</h2>
            <h3>{JSON.stringify(varfour)}</h3> 
        </React.Fragment>
    )
}
export default State;