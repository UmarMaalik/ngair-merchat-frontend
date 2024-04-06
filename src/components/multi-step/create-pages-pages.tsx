import BankDetailsForm from "./bank-details-form";
import DemographichForm from "./demographic-form";
import MailingAddress from "./mailing-address-form";
import MerchantForm from "./merchant-form";
import OwnershipForm from "./ownership-form";
import ReviewCreateMerchantForm from "./review-create-merchant-form";



const getAllPages = ( step : number): JSX.Element | any => ({
    0: <MerchantForm />,
    1: <DemographichForm /> ,
    2: <MailingAddress /> ,
    3: <OwnershipForm /> ,
    4: <BankDetailsForm />  ,
    5:<ReviewCreateMerchantForm />
}[step])

export default getAllPages;