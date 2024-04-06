import MerchantContext, { MerchantContextType } from '@/context/create_merchant_context';
import { useFormik } from 'formik';
import { useContext } from 'react';

import { Row } from 'react-bootstrap';
import { BankDetailsEntity } from '../entity/bank.details.entity';
import BaseInput from '../forms/base-input';
import BaseSelect from '../forms/base-select';

export default function BankDetailsForm() {

  const {
    state: { bankDetails, steps },
    method: { setBankDetails, onNext, onPrev }
  }: MerchantContextType = useContext(MerchantContext);

  const form = useFormik({
    initialValues: new BankDetailsEntity(),
    validationSchema: BankDetailsEntity.yupSchema(),
    onSubmit: (values: BankDetailsEntity) => {
      // Combie First Name and last Name to create a legalName Attribut

      try {
        console.log("Form Values .....", values);
        setBankDetails({  ...values })
      } catch (e) {
        console.log("Error : ", e);
      }
      if(onNext)
      onNext();
    }
  })

  return (
    <div>
      <h4>BankDetailsForm</h4>
      <form onSubmit={form.handleSubmit}>
        <Row className='my-4'>
          <BaseSelect
            label="Billing Bank"
            className="col-4"
            placeholder="Select Billing Bank"
            formik={form}
            name="billingBank"
            required
          />
          <BaseInput
            label="Account Number"
            className="col-4"
            placeholder="Ente Account Number"
            name="billingAccount"
            formik={form}
            required
          />
          <BaseInput
            label="Billing Routing"
            className="col-4"
            placeholder="Ente Billing Routing"
            name="billingRouting"
            formik={form}
            required
          />
        </Row>
        <div className='w-full flex justify-between py-4'>
          <button className='bg-gray-200 px-8 py-2' onClick={onPrev}>Previous</button>
          <button className='bg-gray-500 px-8 py-2 text-white' type='submit'>Next</button>
        </div>
      </form>
    </div>
  )
}
