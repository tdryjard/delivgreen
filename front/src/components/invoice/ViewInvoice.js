import React from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import Invoice from './Invoice';
import DownloadPdf from './DownloadPdf';
import './invoice.css';

const ViewInvoice = () => {
  return (
    <div className="viewInvoice">
      <PDFViewer>
        <Invoice />
      </PDFViewer>
      <DownloadPdf />
    </div>
  );
};

export default ViewInvoice;
