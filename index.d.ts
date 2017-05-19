import { IonicNativePlugin } from '@ionic-native/core';
export interface ChargeOptions {
    amount?: number;
    amount_refunded?: number;
    amount_settle?: number;
    app?: string;
    body?: string;
    channel?: string;
    client_ip?: string;
    created?: number;
    credential: any;
    currency?: string;
    description: any;
    extra?: any;
    failure_code?: any;
    failure_msg?: any;
    id?: string;
    livemode?: boolean;
    metadata?: any;
    object?: string;
    order_no?: string;
    paid?: boolean;
    refunded?: boolean;
    refunds?: any;
    subject?: string;
    time_expire?: number;
    time_paid?: any;
    time_settle?: any;
    transaction_no?: any;
}
/**
 * @name Pingpp
 * @description
 * This plugin does something
 *
 * @usage
 * ```
 * import { Pingpp } from '@ionic-native/pingpp';
 *
 *
 * constructor(private pingpp: Pingpp) { }
 *
 * ...
 *
 *
 * this.pingpp.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
export declare class Pingpp extends IonicNativePlugin {
    /**
     * This function does something
     * @param charge {any} Some param to configure something
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    createPayment(charge: ChargeOptions): Promise<any>;
}
