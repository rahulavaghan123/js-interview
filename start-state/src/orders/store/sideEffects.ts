import {OrdersService} from "../services/ordersService";
//Could have been better if it's passed as a dependency.
const ordersService = new OrdersService();

export const SideEffects = {
    book(state: any, onDone: (doneAction: string, ...args: any) => void) {
        const {currencyPair, amount} = state;
        ordersService.book(currencyPair, amount, (bookingStatus: Boolean, errorMessage: string) => onDone("bookingComplete", bookingStatus, errorMessage));
        console.log(`booking`);
    },
};
