/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AuthService {

    /**
     * Authenticate Customer
     * Logs a Customer in and authorizes them to view their details. Successful authentication will set a session cookie in the Customer's browser.
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static postAuth(
        requestBody?: {
            /**
             * The Customer's email.
             */
            email: string;
            /**
             * The Customer's password.
             */
            password: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Log out
     * Destroys a Customer's authenticated session.
     * @returns any OK
     * @throws ApiError
     */
    public static deleteAuth(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/auth',
        });
    }

    /**
     * Get Session
     * Gets the currently logged in Customer.
     * @returns any OK
     * @throws ApiError
     */
    public static getAuth(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/auth',
        });
    }

    /**
     * Check if email has account
     * Checks if a Customer with the given email has signed up.
     * @param email The Customer's email.
     * @returns any OK
     * @throws ApiError
     */
    public static getAuthEmail(
        email: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/auth/{email}',
            path: {
                'email': email,
            },
        });
    }

}