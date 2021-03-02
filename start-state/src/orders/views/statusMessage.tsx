import React, {FC} from "react";
import { Fragment } from 'react';
import {BookingStatus} from "../model/BookingStatus";


interface Props {
    status: BookingStatus;
    message: string;
}


const StatusMessage: FC<Props> = ({status, message}) => {

    switch (status) {
        case BookingStatus.INPROGRESS :
            return <h2> Booking in Progress.</h2>;
        case  BookingStatus.SUCCESS :
            return <h2> Booking in Success.</h2>;
        case BookingStatus.FAILED :
            return (
                <Fragment>
                    <h2> Booking in Failed.</h2>
                    <p>{message}</p>
                </Fragment>
            );
        default:
            return null;
    }
};

export default StatusMessage;


