/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ReturnService {

    /**
     * Create Return
     * Creates a Return for an Order.
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static postReturns(
        requestBody?: any,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/returns',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}