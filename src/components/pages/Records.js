import React, { useState } from 'react';
import Axios from "axios";
import './Records.css';
// import ReactHTMLTableToExcel from 'react-html-table-to-excel';

function Records() {

    const [treeRecords, setTreeRecords] = useState([]);
    
    const getRecords = () => {
        Axios.get("http://localhost:3001/records").then((response) => {
            setTreeRecords(response.data)
        })
    }

    const deleteRecords = (recordID) => {
        Axios.delete(`http://localhost:3001/delete/${recordID}`).then((response) => {
            setTreeRecords(
            treeRecords.filter((treeRecords) => {
            return treeRecords.recordID !== recordID;
            })
          );
        });
      };
    
    
    return (

        <div className='Records-container'>

            <h1>My Discovery</h1>

            <br></br>

            <button className='Records-container-btn' onClick={getRecords}>Show Records</button>
           
            <br></br>
                <div className='Records-content'>
                    {/* <ReactHTMLTableToExcel
                        id="test-table-xls-button"
                        className="download-table-xls-button"
                        table="table-to-xls"
                        filename="Exncyclopedia"
                        sheet="tablexls"
                        buttonText="Download as Excel"/> */}
            <table>
                <tr>
                    <th>Record ID:</th>
                    <th>Tree Name<br></br>(樹木名稱):</th>
                    <th>Species<br></br>(種類):</th>
                    <th>Age Class<br></br>(年齡級別):</th>
                    <th>Health Condition<br></br>(健康狀況):</th>
                    <th>Structural Condition<br></br>(結構狀況):</th>
                    <th>Foliage density<br></br>(樹葉密度):</th>
                    <th>Lean<br></br>(傾斜):</th>
                    <th>Signs of pests and disease<br></br>(害蟲和疾病的跡象):</th>
                    <th>Fruit<br></br>(果實):</th>
                    <th>Leaf Color<br></br>(樹葉顏色):</th>
                    <th>Number of trees<br></br>(樹木數量):</th>
                    <th>Location<br></br>(地點):</th>
                    <th>Date<br></br>(日期):</th>
                    {/* <th>Tree image or video<br></br>(樹木圖像或視頻):</th> */}
                    <th>Description<br></br>(描述):</th>
                    <th>Edit<br></br>編輯</th>
                    <th>Delete<br></br>刪除</th>
                </tr>
                {treeRecords.map((value, key) => {
                    return (
                        <tr>
                            <td>{value.recordID}</td>
                            <td>{value.treeName}</td>
                            <td>{value.species}</td>
                            <td>{value.ageClass}</td>
                            <td>{value.healthCondition}</td>
                            <td>{value.structuralCondition}</td>
                            <td>{value.foliageDensity}</td>
                            <td>{value.lean}</td>
                            <td>{value.signsOfpestsanddisease}</td>
                            <td>{value.fruit}</td>
                            <td>{value.leafColor}</td>
                            <td>{value.numOftree}</td>
                            <td>{value.location}</td>
                            <td>{value.date}</td>
                            {/* <td>{value.treeImageorvideo}</td> */}
                            <td>{value.description}</td>
                            <td><button className='Edit'>Edit</button></td>
                            <td><button className='Delete' onClick={() => {deleteRecords(value.recordID)}}>Delete</button></td>
                        </tr>
                    )}
                )}
            </table>
        </div>
        </div>
    );
}

export default Records;