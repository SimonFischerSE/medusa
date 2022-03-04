/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { cart } from '../models/cart';
import type { order } from '../models/order';
import type { swap } from '../models/swap';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class CartService {

    /**
     * Add a Shipping Method
     * Adds a Shipping Method to the Cart.
     * @param id The cart id.
     * @param requestBody
     * @returns any A successful response
     * @throws ApiError
     */
    public static postCartsCartShippingMethod(
        id: string,
        requestBody?: {
            /**
             * id of the shipping option to create the method from
             */
            option_id: string;
            /**
             * Used to hold any data that the shipping method may need to process the fulfillment of the order. Look at the documentation for your installed fulfillment providers to find out what to send.
             */
            data?: any;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/carts/{id}/shipping-methods',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Calculate Cart Taxes
     * Calculates taxes for a cart. Depending on the cart's region this may involve making 3rd party API calls to a Tax Provider service.
     * @param id The Cart id.
     * @returns any A cart object with the tax_total field populated
     * @throws ApiError
     */
    public static postCartsCartTaxes(
        id: string,
    ): CancelablePromise<{
        cart?: cart;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/carts/{id}/taxes',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Complete a Cart
     * Completes a cart. The following steps will be performed. Payment authorization is attempted and if more work is required, we simply return the cart for further updates. If payment is authorized and order is not yet created, we make sure to do so. The completion of a cart can be performed idempotently with a provided header `Idempotency-Key`. If not provided, we will generate one for the request.
     * @param id The Cart id.
     * @returns any If a cart was successfully authorized, but requires further action from the user the response body will contain the cart with an updated payment session. If the Cart was successfully completed the response body will contain the newly created Order.
     * @throws ApiError
     */
    public static postCartsCartComplete(
        id: string,
    ): CancelablePromise<({
        order?: order;
    } | {
        cart?: cart;
    } | {
        cart?: swap;
    })> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/carts/{id}/complete',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Create a Cart
     * Creates a Cart within the given region and with the initial items. If no `region_id` is provided the cart will be associated with the first Region available. If no items are provided the cart will be empty after creation. If a user is logged in the cart's customer id and email will be set.
     * @param requestBody
     * @returns any Successfully created a new Cart
     * @throws ApiError
     */
    public static postCart(
        requestBody?: any,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/carts',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Add a Line Item
     * Generates a Line Item with a given Product Variant and adds it to the Cart
     * @param id The id of the Cart to add the Line Item to.
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static postCartsCartLineItems(
        id: string,
        requestBody?: {
            /**
             * The id of the Product Variant to generate the Line Item from.
             */
            variant_id: string;
            /**
             * The quantity of the Product Variant to add to the Line Item.
             */
            quantity: number;
            /**
             * An optional key-value map with additional details about the Line Item.
             */
            metadata?: any;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/carts/{id}/line-items',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Initialize Payment Sessions
     * Creates Payment Sessions for each of the available Payment Providers in the Cart's Region.
     * @param id The id of the Cart.
     * @returns any OK
     * @throws ApiError
     */
    public static postCartsCartPaymentSessions(
        id: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/carts/{id}/payment-sessions',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Remove Discount from Cart
     * Removes a Discount from a Cart.
     * @param id The id of the Cart.
     * @param code The unique Discount code.
     * @returns any OK
     * @throws ApiError
     */
    public static deleteCartsCartDiscountsDiscount(
        id: string,
        code: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/carts/{id}/discounts/{code}',
            path: {
                'id': id,
                'code': code,
            },
        });
    }

    /**
     * Delete a Line Item
     * Removes a Line Item from a Cart.
     * @param id The id of the Cart.
     * @param lineId The id of the Line Item.
     * @returns any OK
     * @throws ApiError
     */
    public static deleteCartsCartLineItemsItem(
        id: string,
        lineId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/carts/{id}/line-items/{line_id}',
            path: {
                'id': id,
                'line_id': lineId,
            },
        });
    }

    /**
     * Update a Line Item
     * Updates a Line Item if the desired quantity can be fulfilled.
     * @param id The id of the Cart.
     * @param lineId The id of the Line Item.
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static postCartsCartLineItemsItem(
        id: string,
        lineId: string,
        requestBody?: {
            /**
             * The quantity to set the Line Item to.
             */
            quantity: number;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/carts/{id}/line-items/{line_id}',
            path: {
                'id': id,
                'line_id': lineId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete a Payment Session
     * Deletes a Payment Session on a Cart. May be useful if a payment has failed.
     * @param id The id of the Cart.
     * @param providerId The id of the Payment Provider used to create the Payment Session to be deleted.
     * @returns any OK
     * @throws ApiError
     */
    public static deleteCartsCartPaymentSessionsSession(
        id: string,
        providerId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/carts/{id}/payment-sessions/{provider_id}',
            path: {
                'id': id,
                'provider_id': providerId,
            },
        });
    }

    /**
     * Update a Payment Session
     * Updates a Payment Session with additional data.
     * @param id The id of the Cart.
     * @param providerId The id of the payment provider.
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static postCartsCartPaymentSessionUpdate(
        id: string,
        providerId: string,
        requestBody?: {
            /**
             * The data to update the payment session with.
             */
            data: any;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/carts/{id}/payment-sessions/{provider_id}',
            path: {
                'id': id,
                'provider_id': providerId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Retrieve a Cart
     * Retrieves a Cart.
     * @param id The id of the Cart.
     * @returns any OK
     * @throws ApiError
     */
    public static getCartsCart(
        id: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/carts/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Refresh a Payment Session
     * Refreshes a Payment Session to ensure that it is in sync with the Cart - this is usually not necessary.
     * @param id The id of the Cart.
     * @param providerId The id of the Payment Provider that created the Payment Session to be refreshed.
     * @returns any OK
     * @throws ApiError
     */
    public static postCartsCartPaymentSessionsSession(
        id: string,
        providerId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/carts/{id}/payment-sessions/{provider_id}/refresh',
            path: {
                'id': id,
                'provider_id': providerId,
            },
        });
    }

    /**
     * Select a Payment Session
     * Selects a Payment Session as the session intended to be used towards the completion of the Cart.
     * @param id The id of the Cart.
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static postCartsCartPaymentSession(
        id: string,
        requestBody?: {
            /**
             * The id of the Payment Provider.
             */
            provider_id: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/carts/{id}/payment-session',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Update a Cart"
     * Updates a Cart.
     * @param id The id of the Cart.
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static postCartsCartPaymentMethodUpdate(
        id: string,
        requestBody?: any,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/store/carts/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}