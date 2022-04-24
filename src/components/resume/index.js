import { Education } from './education';
import { WorkExperence }from './workExperience';
import { Grid } from '@mui/material';
import './styles.css';
const Resume = () => (
    <>
        <Grid container spacing={2}>
            <WorkExperence/>
            <Education />
        </Grid>
    </>
)

export default Resume;