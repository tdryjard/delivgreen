import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import Invoice from './Invoice';

const DownloadPdf = () => {
  return (
    <PDFDownloadLink document={<Invoice />} fileName="somename.pdf">
      {({ loading }) =>
        loading ? (
          'Loading document...'
        ) : (
          <p className="downloadPdf">télécharger</p>
        )
      }
    </PDFDownloadLink>
  );
};

export default DownloadPdf;
