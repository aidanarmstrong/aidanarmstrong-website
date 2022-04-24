import React from "react";
import './styles.css';
import { Grid } from '@mui/material';
import data from '../../../data/cv.json'; 
import { Skills } from "../skills";
import Languages from "../languages";
import Achievements from "../achievements";
import Interests from "../Interests";

export const Education = () => (
    <>
        <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
                <br/><br/>
                <h2 className="headiing_section">Education</h2>
                <div className="container">
                    {data.education.left.map( (education, key) => (
                        <div key={key} className="job">
                            <div className="row">
                                <div className="date_item">
                                    <p className="date">{education.date_from_to}</p>
                                </div>
                                <div className="location_item">
                                    <p className="location">{education.location}</p>
                                </div>
                            </div>
                            <p className="job_position">{education.school}</p>
                            <p className="description" dangerouslySetInnerHTML={{__html: education.grades}}></p>
                        </div>
                    ))}
                    <Skills />
                </div>
            </Grid>
            <Grid item xs={12} md={6}>
                <Achievements />
                <Languages />
                <Interests />
            </Grid>
        </Grid>
    </>
)