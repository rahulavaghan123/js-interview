import {BookingStatus} from "../model/BookingStatus";

export interface State {
    amount?: string;
    currencyPair?: string;
    bookingSuccess?: boolean;
    bookingStatus?: BookingStatus,
    errorMessage?: string;
}
