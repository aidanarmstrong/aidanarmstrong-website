import React from "react";
import {Grid } from '@mui/material';
import './styles.css';
import data from '../../../data/cv.json'; 

export const WorkExperence = () => (
    <>
        <h2 className="headiing_section">Work Experience</h2>
        <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
                <div className="container">
                    {data.work.left.map( (job, key) => (
                        <div key={key} className="job">
                            <div className="row">
                                <div className="date_item">
                                    <p className="date">{job.date_from_to}</p>
                                </div>
                                <div className="location_item">
                                    <p className="location">{job.location}</p>
                                </div>
                            </div>
                            <div className="box"/>
                            <p className="job_position">{job.job_title}</p>
                            <p className="company_name">{job.company}</p>
                            <p className="accomplishments">Accomplishments</p>
                            <p className="description">{job.accomplishments}</p>
                        </div>
                    ))}
                </div>
            </Grid>
            <Grid item xs={12} md={6}>
                <div className="container">
                    {data.work.right.map( (job, key) => (
                        <div key={key} className="job">
                            <div className="row">
                                <div className="date_item">
                                    <p className="date">{job.date_from_to}</p>
                                </div>
                                <div className="location_item">
                                    <p className="location">{job.location}</p>
                                </div>
                            </div>
                            <p className="job_position">{job.job_title}</p>
                            <p className="company_name">{job.company}</p>
                            <p className="accomplishments">Accomplishments</p>
                            <p className="description">{job.accomplishments}</p>
                        </div>
                    ))}
                </div>
            </Grid>
        </Grid>
    </>
)