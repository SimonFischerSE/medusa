/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ProductVariantService {

    /**
     * Retrieve a Product Variant
     * Retrieves a Product Variant by id
     * @param variantId The id of the Product Variant.
     * @returns any OK
     * @throws ApiError
     */
    public static getVariantsVariant(
        variantId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/variants/{variant_id}',
            path: {
                'variant_id': variantId,
            },
        });
    }

    /**
     * Retrieve Product Variants
     * Retrieves a list of Product Variants
     * @param ids A comma separated list of Product Variant ids to filter by.
     * @param expand A comma separated list of Product Variant relations to load.
     * @param offset
     * @param limit Maximum number of Product Variants to return.
     * @returns any OK
     * @throws ApiError
     */
    public static getVariants(
        ids?: string,
        expand?: string,
        offset?: number,
        limit?: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/variants',
            query: {
                'ids': ids,
                'expand': expand,
                'offset': offset,
                'limit': limit,
            },
        });
    }

}