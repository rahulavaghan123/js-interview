import * as React from 'react';
import {ChangeEvent, FormEvent, MouseEvent} from 'react';
import {Store} from '../infrastructure/store';
import {Reducers} from '../store/reducers';
import {SideEffects} from '../store/sideEffects';
import StatusMessage from "./statusMessage";
import {State} from "../store/State";
import {BookingStatus} from "../model/BookingStatus";

interface OrdersViewProps {
    amount?: string,
    currencyPair?: string,
    isBooking?: boolean,
    errorMessage?: string,
}

interface OrdersViewState {
    amount: string,
    currencyPair: string,
    isBooking?: boolean,
    errorMessage?: string,
    bookingStatus?: BookingStatus
}

export default class OrdersView extends React.Component<OrdersViewProps, OrdersViewState> {
    private store: Store<State>;

    constructor(props: any) {
        super(props);

        const initialState: any = {
            amount: '1m',
            currencyPair: 'USDGBP',
            isBooking: false,
        };

        this.store = new Store(
            initialState,
            Reducers,
            SideEffects,
            (nextState: State) => this.setState(nextState as OrdersViewState)
        );

        // set initial state
        this.state = {
            ...this.store.currentState as OrdersViewState
        };
    }

    onAmountChanged = (amount: string) => {
        this.store.dispatchAction('onAmountChanged', amount);
    };

    onCurrencyPairChanged = (ccyPair: string) => {
        this.store.dispatchAction('onCurrencyPairChanged', ccyPair);
    };

    onBookRequested = (event: MouseEvent<HTMLElement> | FormEvent<HTMLFormElement>) => {
        event?.preventDefault();
        this.store.dispatchAction('book');
    };

    render() {
        const {bookingStatus, amount, currencyPair, errorMessage} = this.state;
        return (
            <form onSubmit={(formEvent: FormEvent<HTMLFormElement>) => this.onBookRequested(formEvent)}>
                <h1>OrdersList</h1>
                Amount: <input type="text" value={amount}
                               onChange={(changeEvent: ChangeEvent<HTMLInputElement>) => this.onAmountChanged(changeEvent.target.value)}/>
                <br/>
                Currency:
                <select value={currencyPair}
                        onChange={(changeEvent: ChangeEvent<HTMLSelectElement>) => this.onCurrencyPairChanged(changeEvent.target.value)}>
                    <option value="EURUSD">EURUSD</option>
                    <option value="USDJPY">USDJPY</option>
                    <option value="USDGBP">USDGBP</option>
                </select>
                <br/>
                Order summary: <br/>
                Amount({amount})
                <br/>
                <button type="submit" onClick={(mouseEvent: MouseEvent<HTMLElement>) => this.onBookRequested(mouseEvent)}>
                    Book
                </button>
                <StatusMessage status={bookingStatus} message={errorMessage}/>
            </form>
        );
    }
}
