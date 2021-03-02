export class OrdersService {
    book(currencyPair: string, amount: string, onResultsReceivedCallback: (success: boolean, errorMessage: string) => void) {
        setTimeout(() => {
                const bookingSuccess = amount === "1m";
                const errorMessage = !bookingSuccess && "Due to technical error.";
                onResultsReceivedCallback(bookingSuccess, errorMessage);
            },
            2000
        )
    }
}
