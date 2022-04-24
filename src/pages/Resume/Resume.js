import React from 'react'
import { Navbar, Footer } from '../../components'
import { Button, Container} from '@mui/material';
import Resume from "../../components/resume";
// import html2canvas from "html2canvas";
// import jsPDF from "jspdf";
import { headerData } from '../../data/headerData';
import './styles.css';

function ResumeScreen() {

    // const exportAsPDF = async (pdfName) => {

    //     html2canvas(document.querySelector("#resume"), {
    //         allowTaint: true,
    //         useCORS: true,
    //         scale: 1
    //     }).then(canvas => {
    //         const imgData = canvas.toDataURL('image/png');
    //         const pdf = new jsPDF();
    //         const imgProps= pdf.getImageProperties(imgData);
    //         const pdfWidth = pdf.internal.pageSize.getWidth();
    //         const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
    //         console.log(pdfHeight)
    //         pdf.addImage(imgData, 'PNG', 10, 0, pdfWidth, pdfHeight);
    //         pdf.save(pdfName);
    //     });
    // };

    return <>
        <div style={{display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center', margin: 50}}>
            <Navbar />
        </div>
        <div style={{display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center', margin: 50}}>
            {/* <Button type="button" onClick={() => exportAsPDF("AidanArmstrongCv/Résumé")}>Download CV/Remsume</Button> */}
            <a
                href={headerData.resumePdf}
                download='AidanArmstrongCv/Résumé'
                target='_blank'
                rel='noreferrer'
            >
                <Button >
                    Download Résumé
                </Button>
            </a>
        </div>
        <Container>
            <div id="resume">
                <Container>
                        <Resume/>
                </Container>
            </div>
        </Container>
        <Footer/>
    </>
}

export default ResumeScreen;