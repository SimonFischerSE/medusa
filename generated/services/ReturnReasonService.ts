/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ReturnReasonService {

    /**
     * Retrieve a Return Reason
     * Retrieves a Return Reason.
     * @param id The id of the Return Reason.
     * @returns any OK
     * @throws ApiError
     */
    public static getReturnReasonsReason(
        id: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/return-reasons/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * List Return Reasons
     * Retrieves a list of Return Reasons.
     * @returns any OK
     * @throws ApiError
     */
    public static getReturnReasons(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/return-reasons',
        });
    }

}