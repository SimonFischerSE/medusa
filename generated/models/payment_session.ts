/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Payment Sessions are created when a Customer initilizes the checkout flow, and can be used to hold the state of a payment flow. Each Payment Session is controlled by a Payment Provider, who is responsible for the communication with external payment services. Authorized Payment Sessions will eventually get promoted to Payments to indicate that they are authorized for capture/refunds/etc.
 */
export type payment_session = {
};
