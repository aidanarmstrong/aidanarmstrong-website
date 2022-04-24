import { Chip } from '@mui/material';
import data from '../../../data/cv.json'; 

const Languages = () => (
    <div className="container" style={{marginTop: 30}}>
        <h2 className="headiing_section">Languages</h2>
        <div className="container" style={{marginTop: 10}}> 
            {data.languages.map( (lang, key) => {
                return  <Chip key={key} label={lang.name} style={{margin: 5}}/> ;
            })}
        </div>
    </div>
);

export default Languages;