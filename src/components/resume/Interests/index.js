import { Chip } from '@mui/material';
import data from '../../../data/cv.json'; 

const Interests = () => (

    <div className="container" style={{marginTop: 30}}>
        <h2 className="headiing_section">Interests</h2>
        <div className="container" style={{marginTop: 10}}> 
            {data.intrests.map( (int, key) => {
                return  <Chip key={key} label={int.name} style={{margin: 5}}/> ;
            })}
        </div>
    </div>
)

export default Interests;