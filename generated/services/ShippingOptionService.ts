/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ShippingOptionService {

    /**
     * Retrieve Shipping Options
     * Retrieves a list of Shipping Options.
     * @param isReturn Whether return Shipping Options should be included. By default all Shipping Options are returned.
     * @param productIds A comma separated list of Product ids to filter Shipping Options by.
     * @param regionId the Region to retrieve Shipping Options from.
     * @returns any OK
     * @throws ApiError
     */
    public static getShippingOptions(
        isReturn?: boolean,
        productIds?: string,
        regionId?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/shipping-options',
            query: {
                'is_return': isReturn,
                'product_ids': productIds,
                'region_id': regionId,
            },
        });
    }

    /**
     * Retrieve Shipping Options for Cart
     * Retrieves a list of Shipping Options available to a cart.
     * @param cartId The id of the Cart.
     * @returns any OK
     * @throws ApiError
     */
    public static getShippingOptionsCartId(
        cartId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/shipping-options/{cart_id}',
            path: {
                'cart_id': cartId,
            },
        });
    }

}