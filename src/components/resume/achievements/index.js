import data from '../../../data/cv.json'; 
import './styles.css';

const Achievements = () => (
    <>
         <br/><br/>
        <h2 className="headiing_section">Achievements & Certificates</h2>
        <div className="container">
            {data.achievements.left.map( (achievement, key) => (
                <div key={key} className="job">
                    <div className="row">
                        <div className="date_item">
                            <p className="date">{achievement.date_from_to}</p>
                        </div>
                    </div>
                    <p className="job_position">{achievement.name}</p>
                    <p className="description" dangerouslySetInnerHTML={{__html: achievement.description}}></p>
                </div>
            ))}
        </div>
    </>
)

export default Achievements;