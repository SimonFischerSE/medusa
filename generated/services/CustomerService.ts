/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class CustomerService {

    /**
     * Add a Shipping Address
     * Adds a Shipping Address to a Customer's saved addresses.
     * @param requestBody
     * @returns any A successful response
     * @throws ApiError
     */
    public static postCustomersCustomerAddresses(
        requestBody?: any,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/customers/me/addresses',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Create a Customer
     * Creates a Customer account.
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static postCustomers(
        requestBody?: {
            /**
             * The Customer's email address.
             */
            email: string;
            /**
             * The Customer's first name.
             */
            first_name: string;
            /**
             * The Customer's last name.
             */
            last_name: string;
            /**
             * The Customer's password for login.
             */
            password: string;
            /**
             * The Customer's phone number.
             */
            phone?: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/customers',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete an Address
     * Removes an Address from the Customer's saved addresse.
     * @param addressId The id of the Address to remove.
     * @returns any OK
     * @throws ApiError
     */
    public static deleteCustomersCustomerAddressesAddress(
        addressId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/customers/me/addresses/{address_id}',
            path: {
                'address_id': addressId,
            },
        });
    }

    /**
     * Update a Shipping Address
     * Updates a Customer's saved Shipping Address.
     * @param addressId The id of the Address to update.
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static postCustomersCustomerAddressesAddress(
        addressId: string,
        requestBody?: any,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/customers/me/addresses/{address_id}',
            path: {
                'address_id': addressId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Retrieves a Customer
     * Retrieves a Customer - the Customer must be logged in to retrieve their details.
     * @returns any OK
     * @throws ApiError
     */
    public static getCustomersCustomer(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/customers/me',
        });
    }

    /**
     * Update Customer details
     * Updates a Customer's saved details.
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static postCustomersCustomer(
        requestBody?: any,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/customers/me',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Retrieve saved payment methods
     * Retrieves a list of a Customer's saved payment methods. Payment methods are saved with Payment Providers and it is their responsibility to fetch saved methods.
     * @returns any OK
     * @throws ApiError
     */
    public static getCustomersCustomerPaymentMethods(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/customers/me/payment-methods',
        });
    }

    /**
     * Retrieve Customer Orders
     * Retrieves a list of a Customer's Orders.
     * @param limit How many addresses to return.
     * @param offset The offset in the resulting addresses.
     * @param fields (Comma separated string) Which fields should be included in the resulting addresses.
     * @param expand (Comma separated string) Which relations should be expanded in the resulting addresses.
     * @returns any OK
     * @throws ApiError
     */
    public static getCustomersCustomerOrders(
        limit?: number,
        offset?: number,
        fields?: string,
        expand?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/customers/me/orders',
            query: {
                'limit': limit,
                'offset': offset,
                'fields': fields,
                'expand': expand,
            },
        });
    }

    /**
     * Creates a reset password token
     * Creates a reset password token to be used in a subsequent /reset-password request. The password token should be sent out of band e.g. via email and will not be returned.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static postCustomersCustomerPasswordToken(
        requestBody?: {
            /**
             * Email of the user whose password should be reset.
             */
            email: string;
        },
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/customers/password-token',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Resets Customer password
     * Resets a Customer's password using a password token created by a previous /password-token request.
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static postCustomersResetPassword(
        requestBody?: {
            /**
             * The Customer's email.
             */
            email: string;
            /**
             * The password token created by a /password-token request.
             */
            token: string;
            /**
             * The new password to set for the Customer.
             */
            password: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/customers/reset-password',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}