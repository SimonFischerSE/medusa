/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ProductService {

    /**
     * Retrieves a Product
     * Retrieves a Product.
     * @param id The id of the Product.
     * @returns any OK
     * @throws ApiError
     */
    public static getProductsProduct(
        id: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/products/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * List Products
     * Retrieves a list of Products.
     * @param q Query used for searching products.
     * @param id Id of the product to search for.
     * @param collectionId Collection ids to search for.
     * @param tags Tags to search for.
     * @param title to search for.
     * @param description to search for.
     * @param handle to search for.
     * @param isGiftcard Search for giftcards using is_giftcard=true.
     * @param type to search for.
     * @param createdAt Date comparison for when resulting products was created, i.e. less than, greater than etc.
     * @param updatedAt Date comparison for when resulting products was updated, i.e. less than, greater than etc.
     * @param deletedAt Date comparison for when resulting products was deleted, i.e. less than, greater than etc.
     * @param offset How many products to skip in the result.
     * @param limit Limit the number of products returned.
     * @returns any OK
     * @throws ApiError
     */
    public static getProducts(
        q?: string,
        id?: string,
        collectionId?: any[],
        tags?: any[],
        title?: string,
        description?: string,
        handle?: string,
        isGiftcard?: string,
        type?: string,
        createdAt?: any,
        updatedAt?: any,
        deletedAt?: any,
        offset?: string,
        limit?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/products',
            query: {
                'q': q,
                'id': id,
                'collection_id': collectionId,
                'tags': tags,
                'title': title,
                'description': description,
                'handle': handle,
                'is_giftcard': isGiftcard,
                'type': type,
                'created_at': createdAt,
                'updated_at': updatedAt,
                'deleted_at': deletedAt,
                'offset': offset,
                'limit': limit,
            },
        });
    }

}