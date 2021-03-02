import {BookingStatus} from "../model/BookingStatus";
import {State} from "./State";


export const Reducers = {
    onAmountChanged(state: State, amount: string): State {
        console.log(`Amount changed from ${state.amount} to ${amount}`);
        return {
            ...state,
            amount
        };
    },

    onCurrencyPairChanged(state: State, currencyPair: string): State {
        console.log(`currencyPair changed from ${state.currencyPair} to ${currencyPair}`);
        return {
            ...state,
            currencyPair
        };
    },

    book(state: State): State {
        return {
            ...state,
            bookingStatus: BookingStatus.INPROGRESS
        }
    },

    bookingComplete(state: State, bookingSuccess: boolean, errorMessage: string): State {
        return {
            ...state,
            bookingStatus: bookingSuccess ? BookingStatus.SUCCESS : BookingStatus.FAILED,
            errorMessage
        }
    },
};
