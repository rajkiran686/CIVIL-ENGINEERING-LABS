import { Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useReactToPrint } from 'react-to-print'
import CustomerAddress from '../CustomerAddress'
import ErrorMessage from '../ErrorMessage'
import NormalPrint from '../NormalPrint'
import Textfield from '../Textfield'
const Tension = () => {
  var [res, setres] = useState()
  var [first, setfirst] = useState()
  var [second, setsecond] = useState()
  var [value, setValue] = useState('')
  const [isSubmit, setIsSubmit] = useState(false)
  const [showAddressForm, setShowAddressForm] = useState(false)
  var [printButtonClicked, setPrintButtonClicked] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ mode: 'all' })

  const Navigate = useNavigate()
  const back = () => {
    Navigate(-1)
  }
  const home = () => {
    Navigate('/')
  }
  function submit(data) {
    setfirst(data.w1)
    setsecond(data.w2)
    res = (data.w2 / ((3.14 * data.w1 * data.w1) / 4)).toFixed(2)
    setres(res)
  }

  function print() {
    setPrintButtonClicked(true)
  }
  var ComponentRef = useRef()
  var handleprint = useReactToPrint({
    content: () => ComponentRef.current
  })
  const rows = [
    { id: 1, col1: 'the mean diameter of the rod[d1]', col2: first, col3: 'N' },
    { id: 2, col1: ' the ultimate load of the rod[p]', col2: second, col3: 'mm' },
    { id: 3, col1: 'Ultimate tensile stress:', col2: res, col3: 'N/mm2' }
  ]

  const columns = [
    { field: 'id', hide: true, width: 100 },
    { field: 'col1', headerName: 'Description', width: 300 },
    { field: 'col2', headerName: 'Value', width: 200 },
    { field: 'col3', headerName: 'Units', width: 160 }
  ]

  const handleChange = e => {
    setValue(e.target.value)
    if (e.target.value === 'with_letterhead') {
      setShowAddressForm(true)
    } else {
      setIsSubmit(true)
      setShowAddressForm(false)
    }
  }

  /*when we submit the button then the page refresh and update the states and call the handlePrint function*/
  useEffect(() => {
    if (isSubmit === true) {
      handleprint()
      setIsSubmit(false)
    }
  }, [isSubmit])
  return (
    <div>
      <button
        type="button"
        class="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg  text-xs  md:text-lg  px-2 md:px-5 md:py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2 md:m-5 mt-5 ml-2"
        onClick={back}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953l7.108-4.062A1.125 1.125 0 0121 8.688v8.123zM11.25 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953L9.567 7.71a1.125 1.125 0 011.683.977v8.123z"
          />
        </svg>
        BACK
      </button>
      <button
        type="button"
        class="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg  text-xs  md:text-lg  px-2 md:px-5 md:py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2 md:m-5"
        onClick={home}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>
        HOME
      </button>
      <p className="flex justify-center md:text-4xl text-gray-500  pt-10">TENSION TEST ON STEEL</p>
      <div style={{ textAlign: 'center' }}>
        <form onSubmit={handleSubmit(submit)}>
          <div className="w-auto   space-y-5  p-5 md:max-w-lg mx-auto">
            <Textfield
              label="enter the mean diameter of the rod in [mm]"
              variant="outlined"
              name="w1"
              register={register}
              required={{ value: true, message: 'this field is required' }}
              pattern={{ value: /^(0|[1-9]\d*)(\.\d+)?$/, message: 'enter the numbers only' }}
              helperText={errors.w1?.message}
              error={errors?.w1}
            />
            <Textfield
              label="Enter the ultimate load of the rod in [N]"
              variant="outlined"
              name="w2"
              register={register}
              required={{ value: true, message: 'this field is required' }}
              pattern={{ value: /^(0|[1-9]\d*)(\.\d+)?$/, message: 'enter the numbers only' }}
              helperText={errors.w2?.message}
              error={errors?.w2}
            />
            <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
              <Button variant="contained" type="submit" style={{ width: '80%' }}>
                submit
              </Button>
              <button onClick={print} style={{ width: '20%' }} className=" bg-pink-600">
                print
              </button>
            </div>
            {Object.keys(errors).length !== 0 && <ErrorMessage>please fill all the fields</ErrorMessage>}
            <div className="text-lg md:text-3xl">
              Ultimate tensile stress:{res} N/mm<sup>2</sup>
            </div>
          </div>
        </form>
      </div>
      {printButtonClicked && (
        <div className="p-5 max-w-lg mx-auto">
          <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group">Letter Head</FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={value}
              onChange={handleChange}
            >
              <FormControlLabel value="with_letterhead" control={<Radio />} label="With_Letterhead" />
              <FormControlLabel value="without_letterhead" control={<Radio />} label="Without_Letterhead" />
            </RadioGroup>
          </FormControl>
        </div>
      )}
      {showAddressForm && (
        <div>
          <CustomerAddress
            rows={rows}
            columns={columns}
            Ref="SM/W 183/2021-22"
            labName="SM"
            testName="TENSION TEST ON STEEL:"
            dateOfTestConducted="15-03-2024."
          />
        </div>
      )}
      <div style={{ visibility: 'hidden' }}>
        <div ref={ComponentRef}>
          <NormalPrint rows={rows} columns={columns} ExperimentName="TENSION TEST ON STEEL" />
        </div>
      </div>
    </div>
  )
}
export default Tension
