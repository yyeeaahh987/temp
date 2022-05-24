import React from 'react';
import useForm3 from './useForm3';
import './Survey.css';

const FormSurvery = ({ submitForm }) => {
  
  const { handleChange, values, handleSubmit, submitSurvey, handleGetLocation } = useForm3(submitForm);

  return (
    <div className='forms-container'>
      <div className='forms' onSubmit={handleSubmit}>
        <h1>樹木調查 Tree Survey</h1>
        <div className='forms-inputs'>
          <label className='forms-label'>
            Tree Name (樹木名稱):
          </label>
          <input
            className='forms-input'
            type='text'
            name='treeName'
            placeholder='Enter tree name'
            value={values.treeName}
            onChange={handleChange}
          />
        </div>
        <div className='forms-inputs'>
          <label className='forms-label'>
            Species (種類):
          </label>
          <input
            className='forms-input'
            type='text'
            name='species'
            placeholder='Enter species'
            value={values.species}
            onChange={handleChange}
          />
        </div>
        <div className='forms-inputs'>
          <label className='forms-label'>
            Age Class (年齡級別):
          </label>
          <br />
          <input
            className='forms-input-2'
            type='radio'
            name='ageClass'
            value='young'
            onChange={handleChange}
          />
          <label className='forms-label'>
            &nbsp;Young (幼年)
          </label>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            className='forms-input-2'
            type='radio'
            name='ageClass'
            value='mature'
            onChange={handleChange}
          />
          <label className='forms-label'>
            &nbsp;Mature (成熟)
          </label>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            className='forms-input-2'
            type='radio'
            name='ageClass'
            value='senescent'
            onChange={handleChange}
          />
          <label className='forms-label'>
            &nbsp;Senescent (衰老)
          </label>
        </div>
        <div className='forms-inputs'>
          <label className='forms-label'>
            Health Condition (健康狀況):
          </label>
          <br />
          <input
            className='forms-input-2'
            type='radio'
            name='healthCondition'
            value='good'
            onChange={handleChange}
          />
          <label className='forms-label'>
            &nbsp;Good (良好)
          </label>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            className='forms-input-2'
            type='radio'
            name='healthCondition'
            value='fair'
            onChange={handleChange}
          />
          <label className='forms-label'>
            &nbsp;Fair (一般)
          </label>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            className='forms-input-2'
            type='radio'
            name='healthCondition'
            value='poor'
            onChange={handleChange}
          />
          <label className='forms-label'>
            &nbsp;Poor (差勁)
          </label>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            className='forms-input-2'
            type='radio'
            name='healthCondition'
            value='dead'
            onChange={handleChange}
          />
          <label className='forms-label'>
            &nbsp;Dead (死亡)
          </label>
        </div>
        <div className='forms-inputs'>
          <label className='forms-label'>
            Structural Condition (結構狀況):
          </label>
          <br />
          <input
            className='forms-input-2'
            type='radio'
            name='structuralCondition'
            value='good'
            onChange={handleChange}
          />
          <label className='forms-label'>
            &nbsp;Good (良好)
          </label>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            className='forms-input-2'
            type='radio'
            name='structuralCondition'
            value='fair'
            onChange={handleChange}
          />
          <label className='forms-label'>
            &nbsp;Fair (一般)
          </label>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            className='forms-input-2'
            type='radio'
            name='structuralCondition'
            value='poor'
            onChange={handleChange}
          />
          <label className='forms-label'>
            &nbsp;Poor (差勁)
          </label>
        </div>
        <div className='forms-inputs'>
          <label className='forms-label'>
            Foliage density (樹葉密度):
          </label>
          <br />
          <input
            className='forms-input-2'
            type='radio'
            name='foliageDensity'
            value='normal'
            onChange={handleChange}
          />
          <label className='forms-label'>
            &nbsp;Normal (正常)
          </label>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            className='forms-input-2'
            type='radio'
            name='foliageDensity'
            value='sparse'
            onChange={handleChange}
          />
          <label className='forms-label'>
            &nbsp;Sparse (稀疏)
          </label>
        </div>
        <div className='forms-inputs'>
          <label className='forms-label'>
            Lean (傾斜):
          </label>
          <br />
          <input
            className='forms-input-2'
            type='radio'
            name='lean'
            value='yes'
            onChange={handleChange}
          />
          <label className='forms-label'>
            &nbsp;Yes (有)
          </label>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            className='forms-input-2'
            type='radio'
            name='lean'
            value='no'
            onChange={handleChange}
          />
          <label className='forms-label'>
            &nbsp;No (沒有)
          </label>
        </div>
        <div className='forms-inputs'>
          <label className='forms-label'>
            Signs of pests and disease (害蟲和疾病的跡象):
          </label>
          <br />
          <input
            className='forms-input-2'
            type='radio'
            name='signsOfpestsanddisease'
            value='yes'
            onChange={handleChange}
          />
          <label className='forms-label'>
            &nbsp;Yes (有)
          </label>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            className='forms-input-2'
            type='radio'
            name='signsOfpestsanddisease'
            value='no'
            onChange={handleChange}
          />
          <label className='forms-label'>
            &nbsp;No (沒有)
          </label>
        </div>
        <div className='forms-inputs'>
          <label className='forms-label'>
            Fruit (果實):
          </label>
          <br />
          <input
            className='forms-input-2'
            type='radio'
            name='fruit'
            value='yes'
            onChange={handleChange}
          />
          <label className='forms-label'>
            &nbsp;Yes (有)
          </label>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            className='forms-input-2'
            type='radio'
            name='fruit'
            value='no'
            onChange={handleChange}
          />
          <label className='forms-label'>
            &nbsp;No (沒有)
          </label>
        </div>
        <div className='forms-inputs'>
          <label className='forms-label'>
            Leaf Color (樹葉顏色):
          </label>
          <br />
          <input
            className='forms-input-2'
            type='radio'
            name='leafColor'
            value='brown'
            onChange={handleChange}
          />
          <label className='forms-label'>
            &nbsp;Brown (啡色)
          </label>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            className='forms-input-2'
            type='radio'
            name='leafColor'
            value='green'
            onChange={handleChange}
          />
          <label className='forms-label'>
            &nbsp;Green (綠色)
          </label>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            className='forms-input-2'
            type='radio'
            name='leafColor'
            value='orange'
            onChange={handleChange}
          />
          <label className='forms-label'>
            &nbsp;Orange (橙色)
          </label>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            className='forms-input-2'
            type='radio'
            name='leafColor'
            value='red'
            onChange={handleChange}
          />
          <label className='forms-label'>
            &nbsp;Red (紅色)
          </label>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            className='forms-input-2'
            type='radio'
            name='leafColor'
            value='yellow'
            onChange={handleChange}
          />
          <label className='forms-label'>
            &nbsp;Yellow (黃色)
          </label>
        </div>
        <div className='forms-inputs'>
          <label className='forms-label'>
            Number of trees (樹木數量):
          </label>
          <br />
          <input
            className='forms-input-2'
            type='radio'
            name='numOftree'
            value='<10'
            onChange={handleChange}
          />
          <label className='forms-label'>
            &nbsp;less than (少於) 10
          </label>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            className='forms-input-2'
            type='radio'
            name='numOftree'
            value='>10'
            onChange={handleChange}
          />
          <label className='forms-label'>
            &nbsp;more than (大於) 10
          </label>
        </div>
        <div className='forms-inputs'>
          <label className='forms-label'>
            Location (地點):
          </label>
          <br />
          <input
            className='location'
            type='location'
            name='location'
            value={values.location}
            onChange={handleGetLocation}
          />
          <button name='location' onClick={handleGetLocation}> Get Location</button>
        </div>
        <div className='forms-inputs'>
          <label className='forms-label'>
            Date (日期):
          </label>
          <br />
          <input
            type='date'
            name='date'
            value={values.date}
            onChange={handleChange}
          />
        </div>
        <div className='forms-inputs'>
          <label className='forms-label'>
            Tree image or video (樹木圖像或視頻):
          </label>
          <input
            className='forms-input-3'
            type='file'
            name='treeImageorvideo'
            accept='.jpg, .jepg, .png, .mp4, .avi, .3gp'
            value={values.treeImageorvideo}
            onChange={handleChange}
          />
        </div>
        <div className='forms-inputs'>
          <label className='forms-label'>
            Description (描述):
          </label>
          <input
            className='forms-input'
            type='text'
            name='description'
            placeholder='Enter description'
            value={values.description}
            onChange={handleChange}
          />
        </div>
        <button
          className='forms-input-btn'
          type='submit'
          onClick={submitSurvey}>
          Submit
        </button>
      </div>
    </div >
  )
};

export default FormSurvery;
// import React from 'react';
// import useForm3 from './useForm3';
// import './Survey.css';

// const FormSurvery = ({ submitForm }) => {
//     const{ handleChange, values, handleSubmit, submitSurvey } = useForm3(submitForm);

//     return (
//         <div className='forms-container'>
//             <div className='forms' onSubmit={handleSubmit}>
//                 <h1>樹木調查 Tree Survey</h1>
//                 <div className='forms-inputs'>
//                     <label className='forms-label'>
//                     Tree Name (樹木名稱):
//                     </label>
//                         <input 
//                         className='forms-input'
//                         type='text'
//                         name='treeName'
//                         placeholder='Enter tree name'
//                         value={values.treeName}
//                         onChange={handleChange}
//                         />
//                 </div>
//                 <div className='forms-inputs'>
//                     <label className='forms-label'>
//                     Species (種類):
//                     </label>
//                         <input 
//                         className='forms-input'
//                         type='text'
//                         name='species'
//                         placeholder='Enter species'
//                         value={values.species}
//                         onChange={handleChange}
//                         />
//                 </div>
//                 <div className='forms-inputs'>
//                     <label className='forms-label'>
//                     Age Class (年齡級別):
//                     </label>
//                     <br />
//                     <input
//                     className='forms-input-2' 
//                     type='radio'
//                     name='ageClass'
//                     value='young'
//                     onChange={handleChange}
//                     />
//                     <label className='forms-label'>
//                     &nbsp;Young (幼年)
//                     </label>
//                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//                     <input 
//                     className='forms-input-2' 
//                     type='radio'
//                     name='ageClass'
//                     value='mature'
//                     onChange={handleChange}
//                     />
//                     <label className='forms-label'>
//                     &nbsp;Mature (成熟)
//                     </label>
//                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//                     <input 
//                     className='forms-input-2' 
//                     type='radio'
//                     name='ageClass'
//                     value='senescent'
//                     onChange={handleChange}
//                     />
//                     <label className='forms-label'>
//                     &nbsp;Senescent (衰老)
//                     </label>
//                 </div>
//                 <div className='forms-inputs'>
//                     <label className='forms-label'>
//                     Health Condition (健康狀況):
//                     </label>
//                     <br />
//                     <input 
//                     className='forms-input-2' 
//                     type='radio'
//                     name='healthCondition'
//                     value='good'
//                     onChange={handleChange}
//                     />
//                     <label className='forms-label'>
//                     &nbsp;Good (良好)
//                     </label>
//                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//                     <input 
//                     className='forms-input-2' 
//                     type='radio'
//                     name='healthCondition'
//                     value='fair'
//                     onChange={handleChange}
//                     />
//                     <label className='forms-label'>
//                     &nbsp;Fair (一般)
//                     </label>
//                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//                     <input 
//                     className='forms-input-2' 
//                     type='radio'
//                     name='healthCondition'
//                     value='poor'
//                     onChange={handleChange}
//                     />
//                     <label className='forms-label'>
//                     &nbsp;Poor (差勁)
//                     </label>
//                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//                     <input 
//                     className='forms-input-2' 
//                     type='radio'
//                     name='healthCondition'
//                     value='dead'
//                     onChange={handleChange}
//                     />
//                     <label className='forms-label'>
//                     &nbsp;Dead (死亡)
//                     </label>                        
//                 </div>
//                 <div className='forms-inputs'>
//                     <label className='forms-label'>
//                     Structural Condition (結構狀況):
//                     </label>
//                     <br />
//                     <input 
//                     className='forms-input-2'
//                     type='radio'
//                     name='structuralCondition'
//                     value='good'
//                     onChange={handleChange}
//                     />
//                     <label className='forms-label'>
//                     &nbsp;Good (良好)
//                     </label>
//                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//                     <input 
//                     className='forms-input-2'
//                     type='radio'
//                     name='structuralCondition'
//                     value='fair'
//                     onChange={handleChange}
//                     />
//                     <label className='forms-label'>
//                     &nbsp;Fair (一般)
//                     </label>
//                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//                     <input 
//                     className='forms-input-2'
//                     type='radio'
//                     name='structuralCondition'
//                     value='poor'
//                     onChange={handleChange}
//                     />
//                     <label className='forms-label'>
//                     &nbsp;Poor (差勁)
//                     </label>                      
//                 </div>
//                 <div className='forms-inputs'>
//                     <label className='forms-label'>
//                     Foliage density (樹葉密度):
//                     </label>
//                     <br />
//                     <input 
//                     className='forms-input-2'
//                     type='radio'
//                     name='foliageDensity'
//                     value='normal'
//                     onChange={handleChange}
//                     />
//                     <label className='forms-label'>
//                     &nbsp;Normal (正常)
//                     </label>
//                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//                     <input 
//                     className='forms-input-2'
//                     type='radio'
//                     name='foliageDensity'
//                     value='sparse'
//                     onChange={handleChange}
//                     />
//                     <label className='forms-label'>
//                     &nbsp;Sparse (稀疏)
//                     </label>                    
//                 </div>
//                 <div className='forms-inputs'>
//                     <label className='forms-label'>
//                     Lean (傾斜):
//                     </label>
//                     <br />
//                     <input 
//                     className='forms-input-2'
//                     type='radio'
//                     name='lean'
//                     value='yes'
//                     onChange={handleChange}
//                     />
//                     <label className='forms-label'>
//                     &nbsp;Yes (有)
//                     </label>
//                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//                     <input 
//                     className='forms-input-2'
//                     type='radio'
//                     name='lean'
//                     value='no'
//                     onChange={handleChange}
//                     />
//                     <label className='forms-label'>
//                     &nbsp;No (沒有)
//                     </label>                    
//                 </div>
//                 <div className='forms-inputs'>
//                     <label className='forms-label'>
//                     Signs of pests and disease (害蟲和疾病的跡象):
//                     </label>
//                     <br />
//                     <input 
//                     className='forms-input-2'
//                     type='radio'
//                     name='signsOfpestsanddisease'
//                     value='yes'
//                     onChange={handleChange}
//                     />
//                     <label className='forms-label'>
//                     &nbsp;Yes (有)
//                     </label>
//                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//                     <input 
//                     className='forms-input-2'
//                     type='radio'
//                     name='signsOfpestsanddisease'
//                     value='no'
//                     onChange={handleChange}
//                     />
//                     <label className='forms-label'>
//                     &nbsp;No (沒有)
//                     </label>                    
//                 </div>      
//                 <div className='forms-inputs'>
//                     <label className='forms-label'>
//                     Fruit (果實):
//                     </label>
//                     <br />
//                     <input 
//                     className='forms-input-2'
//                     type='radio'
//                     name='fruit'
//                     value='yes'
//                     onChange={handleChange}
//                     />
//                     <label className='forms-label'>
//                     &nbsp;Yes (有)
//                     </label>
//                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//                     <input 
//                     className='forms-input-2'
//                     type='radio'
//                     name='fruit'
//                     value='no'
//                     onChange={handleChange}
//                     />
//                     <label className='forms-label'>
//                     &nbsp;No (沒有)
//                     </label>                    
//                 </div>  
//                 <div className='forms-inputs'>
//                     <label className='forms-label'>
//                     Leaf Color (樹葉顏色):
//                     </label>
//                     <br />
//                     <input 
//                     className='forms-input-2'
//                     type='radio'
//                     name='leafColor'
//                     value='brown'
//                     onChange={handleChange}
//                     />
//                     <label className='forms-label'>
//                     &nbsp;Brown (啡色)
//                     </label>
//                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//                     <input 
//                     className='forms-input-2'
//                     type='radio'
//                     name='leafColor'
//                     value='green'
//                     onChange={handleChange}
//                     />
//                     <label className='forms-label'>
//                     &nbsp;Green (綠色)
//                     </label>
//                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//                     <input 
//                     className='forms-input-2'
//                     type='radio'
//                     name='leafColor'
//                     value='orange'
//                     onChange={handleChange}
//                     />
//                     <label className='forms-label'>
//                     &nbsp;Orange (橙色)
//                     </label>  
//                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//                     <input 
//                     className='forms-input-2'
//                     type='radio'
//                     name='leafColor'
//                     value='red'
//                     onChange={handleChange}
//                     />
//                     <label className='forms-label'>
//                     &nbsp;Red (紅色)
//                     </label>
//                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//                     <input 
//                     className='forms-input-2'
//                     type='radio'
//                     name='leafColor'
//                     value='yellow'
//                     onChange={handleChange}
//                     />
//                     <label className='forms-label'>
//                     &nbsp;Yellow (黃色)
//                     </label>                           
//                 </div>
//                 <div className='forms-inputs'>
//                     <label className='forms-label'>
//                     Number of trees (樹木數量):
//                     </label>
//                     <br />
//                     <input 
//                     className='forms-input-2'
//                     type='radio'
//                     name='numOftree'
//                     value='<10'
//                     onChange={handleChange}
//                     />
//                     <label className='forms-label'>
//                     &nbsp;less than (少於) 10 
//                     </label>
//                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//                     <input 
//                     className='forms-input-2'
//                     type='radio'
//                     name='numOftree'
//                     value='>10'
//                     onChange={handleChange}
//                     />
//                     <label className='forms-label'>
//                     &nbsp;more than (大於) 10
//                     </label>                    
//                 </div>   
//                 <div className='forms-inputs'>
//                     <label className='forms-label'>
//                     Location (地點):
//                     </label> 
//                     <br />
//                     <input 
//                     type='location'
//                     name='location'
//                     value={values.location}
//                     onChange={handleChange}
//                     />   
//                 </div>
//                 <div className='forms-inputs'>
//                     <label className='forms-label'>
//                     Date (日期):
//                     </label>
//                     <br />
//                     <input 
//                     type='date'
//                     name='date'
//                     value={values.date}
//                     onChange={handleChange}
//                     />                  
//                 </div>                                                                            
//                 <div className='forms-inputs'>
//                     <label className='forms-label'>
//                     Tree image or video (樹木圖像或視頻):
//                     </label>
//                     <input 
//                     className='forms-input-3'
//                     type='file'
//                     name='treeImageorvideo'
//                     accept='.jpg, .jepg, .png, .mp4, .avi, .3gp'
//                     value={values.treeImageorvideo}
//                     onChange={handleChange}
//                     />
//                 </div>
//                 <div className='forms-inputs'>
//                     <label className='forms-label'>
//                     Description (描述):
//                     </label>
//                     <input 
//                     className='forms-input'
//                     type='text'
//                     name='description'
//                     placeholder='Enter description'
//                     value={values.description}
//                     onChange={handleChange}
//                     />
//                 </div>
//                 <button 
//                 className='forms-input-btn' 
//                 type='submit'
//                 onClick={submitSurvey}>
//                     Submit
//                 </button>
//             </div>
//         </div>
//     )
// };

// export default FormSurvery;