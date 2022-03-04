/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class RegionService {

    /**
     * Retrieves a Region
     * Retrieves a Region.
     * @param id The id of the Region.
     * @returns any OK
     * @throws ApiError
     */
    public static getRegionsRegion(
        id: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/regions/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * List Regions
     * Retrieves a list of Regions.
     * @returns any OK
     * @throws ApiError
     */
    public static getRegions(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/regions',
        });
    }

}