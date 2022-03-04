/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SwapService {

    /**
     * Create a Swap
     * Creates a Swap on an Order by providing some items to return along with some items to send back
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static postSwaps(
        requestBody?: any,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/swaps',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Retrieve Swap by Cart id
     * Retrieves a Swap by the id of the Cart used to confirm the Swap.
     * @param cartId The id of the Cart
     * @returns any OK
     * @throws ApiError
     */
    public static getSwapsSwapCartId(
        cartId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/swaps/{cart_id}',
            path: {
                'cart_id': cartId,
            },
        });
    }

}