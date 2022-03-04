/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class OrderService {

    /**
     * Retrieves Order by Cart id
     * Retrieves an Order by the id of the Cart that was used to create the Order.
     * @param cartId The id of Cart.
     * @returns any OK
     * @throws ApiError
     */
    public static getOrdersOrderCartId(
        cartId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/orders/cart/{cart_id}',
            path: {
                'cart_id': cartId,
            },
        });
    }

    /**
     * Retrieves an Order
     * Retrieves an Order
     * @param id The id of the Order.
     * @returns any OK
     * @throws ApiError
     */
    public static getOrdersOrder(
        id: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/orders/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Look Up an Order
     * Looks for an Order with a given `display_id`, `email` pair. The `display_id`, `email` pair must match in order for the Order to be returned.
     * @param displayId The display id given to the Order.
     * @param email The email of the Order with the given display_id.
     * @returns any OK
     * @throws ApiError
     */
    public static getOrders(
        displayId: number,
        email: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/orders',
            query: {
                'display_id': displayId,
                'email': email,
            },
        });
    }

}