import { Stack } from '@mui/material'
import Image from 'next/image'

function PaymentMethodList() {
    return (
        <Stack direction="row" spacing="24px">
            <Image
                src="/media/payment_stripe.svg"
                alt="Stripe"
                width={58}
                height={40}
            />
            <Image
                src="/media/payment_applepay.svg"
                alt="Apple Pay"
                width={58}
                height={40}
            />
            <Image
                src="/media/payment_paypal.svg"
                alt="PayPal"
                width={58}
                height={40}
            />
            <Image
                src="/media/payment_mastercard.svg"
                alt="Mastercard"
                width={58}
                height={40}
            />
            <Image
                src="/media/payment_visa.svg"
                alt="Visa"
                width={58}
                height={40}
            />
        </Stack>
    )
}

export default PaymentMethodList
