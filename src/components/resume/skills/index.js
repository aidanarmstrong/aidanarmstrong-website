import React from "react";
import data from '../../../data/cv.json'; 
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
    },
}));

export const Skills = () => (
    <>
        <div style={{marginTop: 30, marginBottom: 40}}>
            <h2 className="headiing_section">Skills & Competencies</h2>
            <div className="container">
                {data.skills.map( (skill, key) => (
                    <div key={key} className="job" style={{marginBottom: 10}} >
                    {skill.name}: <BorderLinearProgress variant="determinate" value={skill.amount} />
                    </div>
                ))}
            </div>
        </div>
    </>
)