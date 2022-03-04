/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class GiftCardService {

    /**
     * Retrieve Gift Card by Code
     * Retrieves a Gift Card by its associated unqiue code.
     * @param code The unique Gift Card code.
     * @returns any OK
     * @throws ApiError
     */
    public static getGiftCardsCode(
        code: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/gift-cards/{code}',
            path: {
                'code': code,
            },
        });
    }

}