import React from 'react'
import './Print.css'
import { Typography } from '@mui/material'
import img from '../assets/24.jpg'

const Print2 = ({
  res,
  first,
  second,
  head1,
  head2,
  head3,
  Ref,
  company,
  village,
  city,
  district,
  subject,
  dated,
  title,
  lab
}) => {
  function padTo2Digits(num) {
    return num.toString().padStart(2, '0')
  }
  console.log('subject is', subject)
  function formatDate(date) {
    return [padTo2Digits(date.getDate()), padTo2Digits(date.getMonth() + 1), date.getFullYear()].join('-')
  }

  var d = new Date()

  return (
    <div className="maindivT">
      <div className="div1">
        <p>
          <b className="size">SAGI RAMAKRISHNAM RAJU ENGINEERING COLLEGE (AUTONOMOUS)</b>
          <br />
          (AFFILIATED TO ANDHRA UNIVERSITY, VISAKHAPATNAM) (RECOGNISED BY ALL INDIA COUNCIL FOR TECH. EDN., NEW DELHI)
          <br />
          Accredited by NAAC with 'A' Grade
          <br />
          Recognised as Scientific and Industrial Research Organization
          <br />
          CHINNA AMIRAM (P.O)::BHIMAVARAM:: W.G.DT., A.P., INDIA:: PIN:534204
        </p>
      </div>
      <div className="grid grid-cols-3">
        <div className="col-span-1 text-center">
          <p className="size">
            <b>DR. K V MURALI KRISHNAM RAJU</b>
          </p>
          <h5>M.Tech,(KURUKSHETRA UNIVERSITY),Ph.D(JNTUK),PGDCS</h5>
          <h3>Principal</h3>
        </div>
        <div className="col-span-1 flex justify-center">
          <img src={img} width="150px" height="100px" alt="img" />
        </div>
        <div className="col-span-1 text-center">
          <p>
            Phones: Off :08816-223332 Ext. 201
            <br />
            College:08816-224516
            <br />
            Fax:08816--224516
            <br />
            <b>Mobile No. 9848773515</b>
            <br />
            Profmjraju999@gmail.com
            <br />
            Website:www.srkrec.ac.in
          </p>
        </div>
      </div>
      <br />
      <div className="div2">
        <Typography variant="body1">Ref: SRKREC/CE/{Ref}</Typography>
        <Typography variant="body1">Date: {formatDate(d)}</Typography>
      </div>
      <br />
      <div>
        <Typography variant="body1">
          To,
          <br />
          {company},<br />
          {village},<br />
          {city},<br />
          {district}.
        </Typography>
      </div>
      <br />
      <Typography variant="body1">Sir,</Typography>
      <div className="div5">
        <Typography variant="body1">Sub:- Test report of {subject} -Reg.</Typography>
        <br />
        <Typography variant="body1">Ref:-Your letter Dated: {dated}</Typography>
      </div>
      <br />
      <div>
        <u className="size">
          <b>{title}</b>
        </u>
      </div>{' '}
      <br />
      <div className="div6">
        <table style={{ width: '100%', textAlign: 'center' }}>
          <tr>
            <th>S.No.</th>
            <th>Description</th>
            <th>Value</th>
            <th>Units</th>
          </tr>
          <tr>
            <td>1</td>
            <td>{head2}</td>
            <td>{second}</td>
            <td>N</td>
          </tr>
          <tr>
            <td>2</td>
            <td>{head1}</td>
            <td>{first}</td>
            <td>mm</td>
          </tr>
          <tr>
            <td></td>
            <td>{head3}</td>
            <td>{res}</td>
            <td>
              N/mm<sup>2</sup>
            </td>
          </tr>
        </table>
      </div>
      <br />
      <p>
        Note: <b>The test results apply only to the samples sent to the Laboratory.</b>
      </p>
      <div className="div7T">
        <Typography variant="body1">
          In-charge
          <br />
          of {lab} Lab.
        </Typography>
        <Typography variant="body1">
          H.O.D.
          <br />
          Civil Engineering.
        </Typography>
        <Typography variant="body1">PRINCIPAL.</Typography>
      </div>
    </div>
  )
}

export default Print2
