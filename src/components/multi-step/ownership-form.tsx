import MerchantContext, { MerchantContextType } from '@/context/create_merchant_context';
import React, { useContext, useEffect, useState } from 'react'
import { MerchantEntity } from '../entity/merchant.entity';
import { useFormik } from 'formik';


import BaseInput from '../forms/base-input';
import BaseInputPhone from '../forms/base-input-phone';
import BaseSelect from '../forms/base-select';
import BaseCheck from '../forms/base-check';
import { Row } from 'react-bootstrap';
import { OwnerEntity } from '../entity/owner.entty';
import LoginApi from '../../../api/request.token';

export default function OwnershipForm() {
  const [countries,setCountries]=useState<any[]>();
  const [states,setstates]=useState<any[]>();
  const [cities,setCities]=useState<any[]>()
  const {
    state: { owner, steps },
    method: { setOwner, onNext, onPrev }
  }: MerchantContextType = useContext(MerchantContext);

  const form = useFormik({
    initialValues:new OwnerEntity(),
    validationSchema: OwnerEntity.yupSchema(),
    onSubmit: (values: OwnerEntity) => {
      // Combie First Name and last Name to create a legalName Attribut

      try {
        console.log("Form Values .....", values);
        if(setOwner)
        setOwner({ ...values })
      } catch (e) {
        console.log("Error : ", e);
      }
      if(onNext)

      onNext();
    }
  })
  useEffect(()=>{
    getCountries()
},[])
const getCountries =  async () => {
    const api = new LoginApi();
    try {
      const countries: any = await api.getCountries();
        console.log("cpuntriesn",countries?.data?.data[0]?.name);
        setCountries(countries?.data?.data)
      // setGroupCodeDetails(groupCodeDetails)
  
    } catch (err) {
      console.error("Unable to find Group Code");
    }
  }
useEffect(()=>{
console.log("the country changed",form.values.address?.countryCode);
const state:any=countries?.filter((item)=>item?.iso2===form.values.address?.countryCode)
if(state)
{
    console.log("tge states is",state[0]?.states);
    if(state[0]?.states && state[0]?.states?.length!==0)
    {
    setstates(state[0]?.states)

    }
}



},[form.values.address?.countryCode])
useEffect(()=>{
if(form.values.address?.regionCode!=='CA')
{
  const state:any=countries?.filter((item)=>item?.iso2===form.values.address?.countryCode)
  const exstate:any=states?.filter((item)=>item?.state_code ===form.values.address?.regionCode )
  console.log("the exasadad",exstate);
  
  console.log("ok k awas",state);
  if(state &&exstate)
  getCites(state[0]?.name,exstate[0]?.name)
  // if(state)
  // getCites(state[0]?.name,form.values.address?.regionCode)
}

},[form.values.address?.regionCode])
const getCites =  async (country:any,state:any) => {
console.log("the ererqrq",country,state);

const api = new LoginApi();
try {
  const cities: any = await api.getCities({"country":country,
  "state": state});
    console.log("cpuntriesn",cities?.data?.data);
    if(cities?.data?.data&& cities?.data?.data?.length!==0)
    {
        setCities(cities?.data?.data)
    }
    // setCountries(countries?.data?.data)
  // setGroupCodeDetails(groupCodeDetails)

} catch (err) {
  console.error("Unable to find Group Code");
}
}
  return (
    <div>
      <h4>OwnershipForm</h4>

      <form onSubmit={form.handleSubmit}>

        <Row className='my-4'>
          <BaseInput
            label="Address 1"
            className="col-6"
            placeholder="Enter Address 1"
            name="address.addressLine1"
            formik={form}
            required
          />
          <BaseInput
            label="Address 2"
            className="col-6"
            placeholder="Enter Address 2"
            name="address.addressLine2"
            formik={form}
            required
          />
        </Row>

        <Row className='my-4'>
        <BaseSelect
            label="Country"
            className="col-3"
            placeholder="Select Country"
            options={countries&&countries?.map((item:any)=>{
              return{
                  label:item?.name,
                  value:item?.iso2
              }
          })}
            formik={form}
            name="address.countryCode"
            required
          />
               <BaseSelect
            label="State"
            className="col-3"
            placeholder="Select State"
            options={states&&states?.map((item:any)=>{
              return{
                  label:item?.name,
                  value:item?.state_code
              }
          })}
            formik={form}
            name="address.regionCode"
            required
          />
          <BaseSelect
            label="City"
            className="col-3"
            placeholder="Select City"
            options={cities&&cities?.map((item:any)=>{
              return{
                  label:item,
                  value:item
              }
          })}
            formik={form}
            name="address.city"
            required
          />
     
          <BaseInput
            label="Zip Code"
            className="col-3"
            placeholder="Enter Zip Code"
            name="address.postalCode"
            formik={form}
            required
          />
      
        </Row>
        <div className=' w-full flex justify-center my-2'><span className='w-3/4 border-[1px] opacity-35 '></span></div>
        <Row className='my-4'>
          <BaseInput
            label="First Name"
            className="col-6"
            placeholder="Enter First Name"
            name="firstName"
            formik={form}
            required
          />
          <BaseInput
            label="Last Name"
            className="col-6"
            placeholder="Enter Last Name"
            name="lastName"
            formik={form}
            required
          />

        </Row>

        <Row>
          <BaseInput
            label="Ownership"
            className="col-4"
            placeholder="Enter Ownership"
            type='number'
            name="ownership"
            formik={form}
            required
          />
          <BaseInput
            label="Title"
            className="col-4"
            placeholder="Enter Title"
            name="title"
            formik={form}
            required
          />
          {/* <BaseInputPhone
            className="col-4"
            label="Owner Phone"
            name="phoneNumber"
            required
            placeholder="Enter Phone Numbrt"
            formik={form}
          /> */}
           <BaseInput
                          label="Owner Phone"
                          className="col-4"
                          placeholder="Enter Phone Number"
                        name="phoneNumber"
                        formik={form}
                        required
                    />
        </Row>
        <Row className='my-4'>
          <BaseInput
            label="Email"
            className="col-4"
            placeholder="Enter Email"
            name="email"
            formik={form}
            required
          />  
          <BaseInput
            label="Date of Birth"
            className="col-4"
            placeholder="Enter Date of Birth"
            type='date'
            name="dateOfBirth"
            formik={form}
            required
          />  
          <BaseInput
            label="SSN"
            type='text'
            className="col-4"
            placeholder="Enter SSN"
            name="ssn"
            formik={form}
            required
          />
        </Row>


        <div className='w-full flex justify-between py-4'>
          <button className='bg-gray-200 px-8 py-2 text-white' onClick={onPrev}>Previous</button>
          <button className='bg-gray-500 px-8 py-2 text-white' type='submit'>Next</button>
        </div>
      </form>

    </div>
  )
}
