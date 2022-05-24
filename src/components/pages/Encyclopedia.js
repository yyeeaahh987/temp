import axios from "axios";
import React, {useState , useEffect} from "react";
import {
  Grid, Paper, Box , Button
} from '@mui/material';
import '../../App.css';
import{DialogTitle,Dialog} from '@mui/material';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import html2canvas from "html2canvas";
//https://www.npmjs.com/package/jspdf
import { jsPDF } from "jspdf";
import './Encyclopedia.css'




const PUBLIC_URL=process.env.PUBLIC_URL
function Encyclopedia() {
  const [search, setSearch] = useState("");
  // const [users , setUsers] = useState([])
  const [fileredData , setFilteredData] = useState([])
  const [treeData,setTreeData] = useState([])
  const [open,setOpen] = useState(false)
  const [selectedTree,setSelectedTree] = useState({})



  useEffect(()=>{

    axios.get('https://retoolapi.dev/xyNJRq/tree').then((response)=>{
      if(response.data.length>0){
        let tempData = response.data
        tempData.forEach((tree,index)=>{
          tempData[index]={
            ...tree,
            searchPhase:`${tree.chineseName} ${tree.familyNameC} ${tree.commonName.toLowerCase()} ${tree.familyName.toLowerCase()}`,
          }
        })
        setTreeData(tempData);
      }else{
        setTreeData([]);
      }
    })
  },[])

  useEffect(()=>{
    setFilteredData(
      treeData.filter((tree)=> tree.searchPhase.includes(search.toLowerCase()))
    )
  },[search,treeData])


  const handleClose = (value) => {
    setOpen(false);
    setSelectedTree({});
  };

  function checkNextYParagraphCoordination(currentPosition,previousLineWidth,lineSparateCondition,lineToLineSeparation){
    let nextLinePosition = currentPosition +lineToLineSeparation
    while (previousLineWidth - lineSparateCondition >0){
      nextLinePosition = nextLinePosition + lineToLineSeparation
      previousLineWidth = previousLineWidth- lineSparateCondition
    }
    return nextLinePosition
  }
  function generatePDF (data){
    const doc = new jsPDF();
    const TEXT_MAX_WIDTH=180
    const INIT_DESCFRIPTION_Y_POSITION=80
    const LINE_TO_LINE_SEPARATION=10
    let currentDescriptionYPosition=INIT_DESCFRIPTION_Y_POSITION
    doc.text(`Tree Detail`,90,10);
    doc.addImage(`${PUBLIC_URL}/assets/images/${selectedTree.photo1}`,'jpg',40,20,50,50);
    doc.addImage(`${PUBLIC_URL}/assets/images/${selectedTree.photo2}`,'jpg',120,20,50,50);
    doc.text(`Scientific Name: ${data["scientificName\t"]}`, 15, currentDescriptionYPosition, {maxWidth:TEXT_MAX_WIDTH});
    currentDescriptionYPosition = checkNextYParagraphCoordination(currentDescriptionYPosition,doc.getTextWidth(`Scientific Name: ${data["scientificName\t"]}`),TEXT_MAX_WIDTH,LINE_TO_LINE_SEPARATION)
    doc.text(`Common Name: ${data.commonName}`, 15, currentDescriptionYPosition, {maxWidth:TEXT_MAX_WIDTH});
    currentDescriptionYPosition = checkNextYParagraphCoordination(currentDescriptionYPosition,doc.getTextWidth(`Common Name: ${data.commonName}`),TEXT_MAX_WIDTH,LINE_TO_LINE_SEPARATION)
    doc.text(`Family: ${data.familyName}`, 15, currentDescriptionYPosition, {maxWidth:TEXT_MAX_WIDTH});
    currentDescriptionYPosition = checkNextYParagraphCoordination(currentDescriptionYPosition,doc.getTextWidth(`Family: ${data.familyName}`),TEXT_MAX_WIDTH,LINE_TO_LINE_SEPARATION)
    doc.text(`Local distribution status: ${data.localDistributionStatus}`, 15, currentDescriptionYPosition, {maxWidth:TEXT_MAX_WIDTH});
    currentDescriptionYPosition = checkNextYParagraphCoordination(currentDescriptionYPosition,doc.getTextWidth(`Local distribution status: ${data.localDistributionStatus}`),TEXT_MAX_WIDTH,LINE_TO_LINE_SEPARATION)
    doc.text(`Growing habit: ${data.growingHabit}`, 15, currentDescriptionYPosition, {maxWidth:TEXT_MAX_WIDTH});
    currentDescriptionYPosition = checkNextYParagraphCoordination(currentDescriptionYPosition,doc.getTextWidth(`Growing habit: ${data.growingHabit}`),TEXT_MAX_WIDTH,LINE_TO_LINE_SEPARATION)
    doc.text(`Stems: ${data.stems}`, 15, currentDescriptionYPosition, {maxWidth:TEXT_MAX_WIDTH});
    currentDescriptionYPosition = checkNextYParagraphCoordination(currentDescriptionYPosition,doc.getTextWidth(`Stems: ${data.stems}`),TEXT_MAX_WIDTH,LINE_TO_LINE_SEPARATION)
    doc.text(`Leaves: ${data.leaves}`, 15, currentDescriptionYPosition, {maxWidth:TEXT_MAX_WIDTH});
    currentDescriptionYPosition = checkNextYParagraphCoordination(currentDescriptionYPosition,doc.getTextWidth(`Leaves: ${data.leaves}`),TEXT_MAX_WIDTH,LINE_TO_LINE_SEPARATION)
    doc.text(`Flowers: ${data.flowers}`, 15, currentDescriptionYPosition, {maxWidth:TEXT_MAX_WIDTH});
    currentDescriptionYPosition = checkNextYParagraphCoordination(currentDescriptionYPosition,doc.getTextWidth(`Flowers: ${data.flowers}`),TEXT_MAX_WIDTH,LINE_TO_LINE_SEPARATION)
    doc.text(`Fruits: ${data.fruits}`, 15, currentDescriptionYPosition, {maxWidth:TEXT_MAX_WIDTH});
    currentDescriptionYPosition = checkNextYParagraphCoordination(currentDescriptionYPosition,doc.getTextWidth(`Fruits: ${data.fruits}`),TEXT_MAX_WIDTH,LINE_TO_LINE_SEPARATION)
    doc.text(`Seeds: ${data.seeds}`, 15, currentDescriptionYPosition, {maxWidth:TEXT_MAX_WIDTH});
    currentDescriptionYPosition = checkNextYParagraphCoordination(currentDescriptionYPosition,doc.getTextWidth(`Seeds: ${data.seeds}`),TEXT_MAX_WIDTH,LINE_TO_LINE_SEPARATION)
    doc.text(`Flowering period: ${data.floweringPeriod}`, 15, currentDescriptionYPosition, {maxWidth:TEXT_MAX_WIDTH});
    currentDescriptionYPosition = checkNextYParagraphCoordination(currentDescriptionYPosition,doc.getTextWidth(`Flowering period: ${data.floweringPeriod}`),TEXT_MAX_WIDTH,LINE_TO_LINE_SEPARATION)
    doc.text(`Fruiting period: ${data.fruitingPeriod}`, 15, currentDescriptionYPosition, {maxWidth:TEXT_MAX_WIDTH});
    currentDescriptionYPosition = checkNextYParagraphCoordination(currentDescriptionYPosition,doc.getTextWidth(`Fruiting period: ${data.fruitingPeriod}`),TEXT_MAX_WIDTH,LINE_TO_LINE_SEPARATION)
    doc.save("Tree.pdf");
  }
  
  return (
    <>
<Dialog onClose={handleClose} open={open}>
  <Grid container justify="center">
  <Grid item xs={12}>
    <br></br>
  </Grid>
    <Grid item xs={6}>
      <Grid container justifyContent={"center"}>
        <Grid item>
          <button onClick={()=>{
          generatePDF(selectedTree)
          }}>
          Download as PDF</button>
        </Grid>
      </Grid>
    </Grid>

    <Grid item xs={6}>
        <Grid container justifyContent={"center"}>
          <Grid item>
          <ReactHTMLTableToExcel
        id="test-table-xls-button"
        className="download-table-xls-button"
        table="table-to-xls"
        filename="Exncyclopedia"
        sheet="tablexls"
        buttonText="Download as Excel"/>
          </Grid>
        </Grid>
    </Grid>
    
    <Grid item xs={12}>
      <Grid container justifyContent="center">
        <Grid item>
        <DialogTitle>樹木詳細 Tree Detail</DialogTitle>
        </Grid>
      </Grid>
    </Grid>

    <Grid item xs={12}>
      <Grid container justifyContent="center">
        <Grid item>
          <Grid container>
            <Grid item xs={12}>
              <p>Photo 1</p>
            </Grid>
            <Grid item xs={12}>
            <img className="popupImage" src={`${PUBLIC_URL}/assets/images/${selectedTree.photo1}`}></img>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>


    <Grid item xs={12}>
      <Grid container justifyContent="center">
        <Grid item>
          <Grid container>
            <Grid item xs={12}>
              <p>Photo 2</p>
            </Grid>
            <Grid item xs={12}>
            <img className="popupImage" src={`${PUBLIC_URL}/assets/images/${selectedTree.photo2}`}></img>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>


    <Grid item xs={12}>
      <Grid container justifyContent="center">
        <Grid item>
        <DialogTitle>簡介</DialogTitle>
        </Grid>
      </Grid>
    </Grid>



    <Grid item xs={12}>
      <Box className="boxStyle">
        <Paper elevation={3}>
        <table id="table-to-xls">
        <div>
          <p >{`中文名: `}{selectedTree.chineseName}</p>
          <p>{`科名: `}{selectedTree.familyNameC}</p>
          <p>{`本地分布狀態: `}{selectedTree.localDistributionStatusC}</p>
          <p>{`生長習性: `}{selectedTree.growingHabitC}</p>
          <p>{`高度: `}{selectedTree.heightC}</p>
          <br></br>
          <p>{`莖: `}{selectedTree.stemsC}</p>
          <p>{`葉: `}{selectedTree.leavesC}</p>
          <p>{`花: `}{selectedTree.flowersC}</p>
          <p>{`果: `}{selectedTree.fruitsC}</p>
          <p>{`花期: `}{selectedTree.floweringPeriodC}</p>
          <p>{`果期: `}{selectedTree.fruitingPeriodC}</p> 
        </div>
        </table>
        </Paper>
      </Box>
    </Grid>

    <br></br>

    <Grid item xs={12}>
      <Grid container justifyContent="center">
        <Grid item>
        <DialogTitle>Description</DialogTitle>
        </Grid>
      </Grid>
    </Grid>

    <Grid item xs={12}>
      <Box className="boxStyle">
        <Paper elevation={3}>
        <div>
        <p>{`Scientific Name: `}{selectedTree["scientificName\t"]}</p>
      <p>{`Common Name: `}{selectedTree.commonName}</p>
      <p>{`Family: `}{selectedTree.familyName}</p>
      <p>{`Local distribution status: `}{selectedTree.localDistributionStatus}</p>
      <p>{`Growing habit: `}{selectedTree.growingHabit}</p>
      <p>{`Height: `}{selectedTree.height}</p>
      <br></br>
      <p>{`Stems: `}{selectedTree.stems}</p>
      <p>{`Leaves: `}{selectedTree.leaves}</p>
      <p>{`Flowers: `}{selectedTree.flowers}</p>
      <p>{`Fruits: `}{selectedTree.fruits}</p>
      <p>{`Seeds: `}{selectedTree.seeds}</p>
      <p>{`Flowering period: `}{selectedTree.floweringPeriod}</p>
      <p>{`Fruiting period: `}{selectedTree.fruitingPeriod}</p>
        </div>
        </Paper>
      </Box>
    </Grid>
  </Grid>
  </Dialog>


    
    <div class='outerestBox'>
    <h1>樹木全書 Encyclopedia</h1>
    <h1> 
      <input id="searchInput" type="text" placeholder="Search here..." onChange={(event) => {
            setSearch(event.target.value);
            }} />
    </h1>
    {fileredData.length === 0 ? <div style={{color:"Red"}}>No result found</div> : fileredData.map((val)=>{
            return (
              <div class="card"key={val.id}>
              <p 
              class="printoutText"
              onClick={()=>{
                setSelectedTree(val)
                setOpen(true)
              }}>{val.chineseName} {val.commonName}</p>
            </div>
            )
          })}
    </div>
    </>
  )
}

export default Encyclopedia;





















// import axios from "axios";
// import React, {useState , useEffect} from "react";
// //import './Encyclopedia.css';
// import '../../App.css';


// function Encyclopedia() {
//   const [search, setSearch] = useState("");
//   const [users , setUsers] = useState([])
//   const [fileredData , setFilteredData] = useState([])

//   useEffect(()=>{

//     // axios.get('https://retoolapi.dev/0vEjtN/data')


//     // {
//     //   "": "",
//     //   "id": 1,
//     //   "Seeds": "Black, encircled by orange yellow aril",
//     //   "Fruits": "Legume ligulate, woody when mature, blackish brown, spirally concorted, in the shape of an ear. With about 12 seeds",
//     //   "Height": "To 20 m",
//     //   "Leaves": "The green leaf-like organ we see actually is the modified petiole called “phyllodes”. The actual leaf was reduced into a tiny black spot which is difficult to be seen with the naked eye. The function of photosynthesis is instead performed by the phyllodes. Phyllodes falcate-oblong, both ends attenuate. Main vein 3 to 7, conspicuous",
//     //   "Flowers": "Yellow, numerous flowers arranged in spike, like plush iron wire. Inflorescence single or several, terminal to axillary",
//     //   "Common Name": "Ear-leaved Acacia, Ear-pod Wattle",
//     //   "Family Name": "MIMOSACEAE",
//     //   "Chinese Name": "耳果相思, 耳葉相思, 大葉相思",
//     //   "Growing habit": "Evergreen Tree",
//     //   "Fruiting period": "October to April in Hong Kong",
//     //   "Scientific Name": "Acacia auriculiformis A. Cunn. ex Benth.",
//     //   "Flowering period": "September to November in Hong Kong",
//     //   "Local distribution status": "Exotic species"




//     //   "id": 1,
//     //   "name": "Ear-leaved Acacia, Ear-pod Wattle",
//     //   "familyName":"MIMOSACEAE",
//     //   "chineseName":"",
//     //   "growingHabit":"",
//     //   "fruitingPeriod":"",
//     //   "scientificName":"",
//     //   "floweringPeriod":"",
//     //   "localDistributionStatus":"",
//     //   "flowers":"",
//     //   "leaves":"",
//     //   "height":"",
//     //   "fruits":"",
//     //   "seeds":"",
//     // },

//     axios.get('https://jsonplaceholder.typicode.com/users').then((response)=>{
//       setUsers(response.data);
//     })
//   },[])

//   useEffect(()=>{
//     setFilteredData(
//       users.filter((user)=> user.name.toLowerCase().includes(search.toLowerCase()))
//     )
//   },[search,users])


//   function sortData(searchWord,searchKey){
//     if(searchKey==="byChineseName"){

//     }else if(searchKey==="byEngName"){

//     }
//   }
  
//   return (
//     <>
//     <h1 className='encyclopedia'>Encyclopedia</h1>
//     <h1> <input id="searchInput" type="text" placeholder="Search here..." onChange={(event) => {
//             setSearch(event.target.value);}} />
//           {fileredData.length === 0 ? <div style={{color:"Red"}}>No result found</div> : fileredData.map((val)=>{
//             return <div key={val.id}>
//               <p>{val.name}</p>

//             </div>
//           })}
//     </h1>
//     </>
//   )
// }

// export default Encyclopedia;