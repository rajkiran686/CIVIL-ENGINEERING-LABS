import React from 'react'
import { useForm } from 'react-hook-form'
import { useReactToPrint } from 'react-to-print'
import Textarea from '@mui/joy/Textarea'
import { useEffect, useRef, useState } from 'react'
import Textfield from './Textfield'
import Print2 from './Print2'
import { Button } from '@mui/material'
import ErrorMessage from './ErrorMessage'
import ExamplePrint from './LetterHeadPrint'

const CustomerAddress = ({ rows, columns, Ref, labName, testName, dateOfTestConducted }) => {
  var [company, setcompany] = useState()
  var [village, setvillage] = useState()
  var [city, setcity] = useState()
  var [district, setdistrict] = useState()
  var [subject, setsubject] = useState()
  const [isSubmit, setIsSubmit] = useState(false)
  var ComponentRef = useRef()
  var handleprint = useReactToPrint({
    content: () => ComponentRef.current
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ mode: 'all' })

  function submit(data) {
    setcompany(data.w3)
    setvillage(data.w4)
    setcity(data.w5)
    setdistrict(data.w6)
    setsubject(data.w7)
    setIsSubmit(true)
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
      <form onSubmit={handleSubmit(submit)}>
        <div className="w-auto   space-y-5  p-5 md:max-w-lg mx-auto">
          <Textfield
            label="enter the company name"
            variant="outlined"
            name="w3"
            register={register}
            required={{ value: true, message: 'this field is required' }}
            pattern={{ value: /^[a-zA-Z]+$/, message: 'enter the characters only' }}
            helperText={errors.w3?.message}
            error={errors?.w3}
          />
          <Textfield
            label="Enter the village name"
            variant="outlined"
            name="w4"
            register={register}
            required={{ value: true, message: 'this field is required' }}
            pattern={{ value: /^[a-zA-Z]+$/, message: 'enter the characters only' }}
            helperText={errors.w4?.message}
            error={errors?.w4}
          />
          <Textfield
            label="Enter the city name"
            variant="outlined"
            name="w5"
            register={register}
            required={{ value: true, message: 'this field is required' }}
            pattern={{ value: /^[a-zA-Z]+$/, message: 'enter the characters only' }}
            helperText={errors.w5?.message}
            error={errors?.w5}
          />
          <Textfield
            label="Enter the district name"
            variant="outlined"
            name="w6"
            register={register}
            required={{ value: true, message: 'this field is required' }}
            pattern={{ value: /^[a-zA-Z]+$/, message: 'enter the characters only' }}
            helperText={errors.w6?.message}
            error={errors?.w6}
          />
          <Textarea
            className="w-full bg-pink-200"
            maxRows={4}
            placeholder="Enter the subject"
            defaultValue='Erase and Enter subject for Example:M30 grade RMC Concrete Cubes for "Construction of G+4 Costal Paradise apartment (B-Block) 1st slab, Narasimhapuram, Bhimavaram, W.G.District"'
            {...register('w7', { required: true, message: 'this field is required' })}
            helperText={errors.w7?.message}
            error={errors?.w7}
          />
          <Button variant="contained" type="submit" len={Object.keys(errors).length}>
            submit
          </Button>
          {Object.keys(errors).length !== 0 && <ErrorMessage>please fill all the fields</ErrorMessage>}
        </div>
      </form>
      <div style={{ visibility: 'hidden' }}>
        <div ref={ComponentRef}>
          <ExamplePrint
            Ref={Ref}
            company={company}
            village={village}
            city={city}
            district={district}
            subject={subject}
            dated={dateOfTestConducted}
            title={testName}
            lab={labName}
            rows={rows}
            columns={columns}
          />
        </div>
      </div>
    </div>
  )
}

export default CustomerAddress
