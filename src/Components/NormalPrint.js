import { DataGrid } from '@mui/x-data-grid'
import React from 'react'

const NormalPrint = ({ rows, columns, ExperimentName }) => {
  return (
    <div className="p-8">
      <p className="flex mx-auto font-semibold mb-5">{ExperimentName}</p>
      <DataGrid
        rows={rows}
        columns={columns}
        hideFooter={true}
        showCellVerticalBorder={true}
        showColumnVerticalBorder={true}
      />
    </div>
  )
}

export default NormalPrint
