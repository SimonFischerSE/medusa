/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class CollectionService {

    /**
     * Retrieve a Product Collection
     * Retrieves a Product Collection.
     * @param id The id of the Product Collection
     * @returns any OK
     * @throws ApiError
     */
    public static getCollectionsCollection(
        id: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/collections/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * List Product Collections
     * Retrieve a list of Product Collection.
     * @param offset The number of collections to skip before starting to collect the collections set
     * @param limit The number of collections to return
     * @returns any OK
     * @throws ApiError
     */
    public static getCollections(
        offset?: number,
        limit: number = 10,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/collections',
            query: {
                'offset': offset,
                'limit': limit,
            },
        });
    }

}