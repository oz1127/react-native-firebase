/*
 * Copyright (c) 2016-present Invertase Limited & Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this library except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

import {
  ReactNativeFirebaseModule,
  ReactNativeFirebaseModuleAndStaticsWithApp,
  ReactNativeFirebaseNamespace,
} from '@react-native-firebase/app-types';

/**
 * The Cloud Functions for Firebase client SDKs let you call functions
 * directly from a Firebase app. To call a function from your app in this way,
 * write and deploy an HTTPS Callable function in Cloud Functions,
 * and then add client logic to call the function from your app.
 *
 * @firebase functions
 */
export namespace Functions {
  /**
   * The set of Firebase Functions status codes.
   *
   * @note
   * The codes are the same at the ones exposed by [gRPC](https://github.com/grpc/grpc/blob/master/doc/statuscodes.md).
   *
   * Possible values:
   * - `cancelled`: The operation was cancelled (typically by the caller).
   * - `unknown`: Unknown error or an error from a different error domain.
   * - `invalid-argument`: Client specified an invalid argument. Note that this
   *   differs from `failed-precondition`. `invalid-argument` indicates
   *   arguments that are problematic regardless of the state of the system
   *   (e.g. an invalid field name).
   * - `deadline-exceeded`: Deadline expired before operation could complete.
   *   For operations that change the state of the system, this error may be
   *   returned even if the operation has completed successfully. For example,
   *   a successful response from a server could have been delayed long enough
   *   for the deadline to expire.
   * - `not-found`: Some requested document was not found.
   * - `already-exists`: Some document that we attempted to create already
   *   exists.
   * - `permission-denied`: The caller does not have permission to execute the
   *   specified operation.
   * - `resource-exhausted`: Some resource has been exhausted, perhaps a
   *   per-user quota, or perhaps the entire file system is out of space.
   * - `failed-precondition`: Operation was rejected because the system is not
   *   in a state required for the operation's execution.
   * - `aborted`: The operation was aborted, typically due to a concurrency
   *   issue like transaction aborts, etc.
   * - `out-of-range`: Operation was attempted past the valid range.
   * - `unimplemented`: Operation is not implemented or not supported/enabled.
   * - `internal`: Internal errors. Means some invariants expected by
   *   underlying system has been broken. If you see one of these errors,
   *   something is very broken.
   * - `unavailable`: The service is currently unavailable. This is most likely
   *   a transient condition and may be corrected by retrying with a backoff.
   * - `data-loss`: Unrecoverable data loss or corruption.
   * - `unauthenticated`: The request does not have valid authentication
   *   credentials for the operation.
   */
  export type FunctionsErrorCode =
    | 'ok'
    | 'cancelled'
    | 'unknown'
    | 'invalid-argument'
    | 'deadline-exceeded'
    | 'not-found'
    | 'already-exists'
    | 'permission-denied'
    | 'resource-exhausted'
    | 'failed-precondition'
    | 'aborted'
    | 'out-of-range'
    | 'unimplemented'
    | 'internal'
    | 'unavailable'
    | 'data-loss'
    | 'unauthenticated';

  /**
   * An HttpsCallableResult wraps a single result from a function call.
   */
  export interface HttpsCallableResult {
    readonly data: any;
  }

  /**
   * An HttpsCallable is a reference to a "callable" http trigger in
   * Google Cloud Functions.
   *
   * #### Example
   *
   * ```js
   * // Create a HttpsCallable instance
   * const instance = firebase.functions().httpsCallable('order');
   *
   * try {
   *  const response = await instance({
   *    id: '12345',
   *  });
   * } catch (e) {
   *  console.error(e);
   * }
   * ```
   */
  export interface HttpsCallable {
    (data?: any): Promise<HttpsCallableResult>;
  }

  /**
   * An HttpsError wraps a single error from a function call.
   *
   * #### Example
   *
   * ```js
   * try {
   *  await firebase.functions().httpsCallable('order')();
   * } catch (httpsError) {
   *   console.log('Message', httpsError.message);
   *
   *   // Check code
   *   if (httpsError.code === firebase.functions.HttpsErrorCode.NOT_FOUND) {
   *     console.error('Functions endpoint "order" not found');
   *   }
   * }
   * ```
   */
  export interface HttpsError extends Error {
    /**
     * A standard error code that will be returned to the client. This also
     * determines the HTTP status code of the response, as defined in code.proto.
     *
     * #### Example
     *
     * ```js
     * try {
     *  await firebase.functions().httpsCallable('order')();
     * } catch (httpsError) {
     *   console.error(httpsError.code);
     * }
     * ```
     */
    readonly code: FunctionsErrorCode;
    /**
     * Extra data to be converted to JSON and included in the error response.
     *
     * ```js
     * try {
     *  await firebase.functions().httpsCallable('order')();
     * } catch (httpsError) {
     *   if (httpsError.details) {
     *     console.error(httpsError.details);
     *   }
     * }
     * ```
     */
    readonly details?: any;
  }

  /**
   * The HttpsErrorCode interface provides access to all FunctionsErrorCode
   * type aliases.
   *
   * #### Example
   *
   * ```js
   * try {
   *  await firebase.functions().httpsCallable('order')();
   * } catch (httpsError) {
   *  switch(httpsError.code) {
   *    case firebase.functions.HttpsErrorCode.NOT_FOUND:
   *      console.error('Functions endpoint not found');
   *      break;
   *    case firebase.functions.HttpsErrorCode.CANCELLED:
   *      console.error('The operation was cancelled');
   *      break;
   *    default:
   *      console.error('An error occurred');
   *      break;
   *  }
   * }
   * ```
   */
  export interface HttpsErrorCode {
    OK: 'ok';
    CANCELLED: 'cancelled';
    UNKNOWN: 'unknown';
    INVALID_ARGUMENT: 'invalid-argument';
    DEADLINE_EXCEEDED: 'deadline-exceeded';
    NOT_FOUND: 'not-found';
    ALREADY_EXISTS: 'already-exists';
    PERMISSION_DENIED: 'permission-denied';
    UNAUTHENTICATED: 'unauthenticated';
    RESOURCE_EXHAUSTED: 'resource-exhausted';
    FAILED_PRECONDITION: 'failed-precondition';
    ABORTED: 'aborted';
    OUT_OF_RANGE: 'out-of-range';
    UNIMPLEMENTED: 'unimplemented';
    INTERNAL: 'internal';
    UNAVAILABLE: 'unavailable';
    DATA_LOSS: 'data-loss';
  }

  /**
   * firebase.functions.X
   */
  export interface Statics {
    /**
     * Uppercase + underscored variables of @Functions.FunctionsErrorCode
     *
     * #### Example
     *
     * ```js
     * firebase.functions.HttpsErrorCode.OK;
     * firebase.functions.HttpsErrorCode.NOT_FOUND;
     * ```
     */
    HttpsErrorCode: {} & HttpsErrorCode;
  }

  /**
   * firebase.functions().X
   */
  export interface Module extends ReactNativeFirebaseModule {
    /**
     * Gets an `HttpsCallable` instance that refers to the function with the given
     * name.
     *
     * #### Example
     *
     * ```js
     * const instance = firebase.functions().httpsCallable('order');
     *
     * try {
     *  const response = await instance({
     *    id: '12345',
     *  });
     * } catch (e) {
     *  console.error(e);
     * }
     * ```
     *
     * @param name The name of the https callable function.
     * @return The `HttpsCallable` instance.
     */
    httpsCallable(name: string): HttpsCallable;

    /**
     * Changes this instance to point to a Cloud Functions emulator running
     * locally.
     *
     * See https://firebase.google.com/docs/functions/local-emulator
     *
     * #### Example
     *
     * ```js
     * if (__DEV__) {
     *   firebase.functions().useFunctionsEmulator('http://10.0.0.8:1337');
     * }
     * ```
     *
     * @param origin The origin string of the local emulator started via firebase tools
     * "http://10.0.0.8:1337".
     */
    useFunctionsEmulator(origin: string): void;
  }
}

declare module '@react-native-firebase/functions' {
  import { FirebaseApp, ReactNativeFirebaseNamespace } from '@react-native-firebase/app-types';

  // export statics
  export const HttpsErrorCode: {} & Functions.HttpsErrorCode;

  /**
   * @example
   * ```js
   * import { firebase } from '@react-native-firebase/functions';
   * firebase.functions().httpsCallable(...);
   * ```
   */
  export const firebase: {} & ReactNativeFirebaseNamespace;

  const FunctionsDefaultExport: ReactNativeFirebaseModuleAndStaticsWithApp<
    Functions.Module,
    Functions.Statics
  >;
  /**
   * @example
   * ```js
   * import functions from '@react-native-firebase/functions';
   * functions().httpsCallable(...);
   * ```
   */
  export default FunctionsDefaultExport;
}

/**
 * Attach namespace to `firebase.` and `FirebaseApp.`.
 */
declare module '@react-native-firebase/app-types' {
  interface ReactNativeFirebaseNamespace {
    /**
     * The Cloud Functions for Firebase client SDKs let you call functions
     * directly from a Firebase app. To call a function from your app in this way,
     * write and deploy an HTTPS Callable function in Cloud Functions,
     * and then add client logic to call the function from your app.
     */
    functions: ReactNativeFirebaseModuleAndStaticsWithApp<Functions.Module, Functions.Statics>;
  }

  interface FirebaseApp {
    /**
     * The Cloud Functions for Firebase client SDKs let you call functions
     * directly from a Firebase app. To call a function from your app in this way,
     * write and deploy an HTTPS Callable function in Cloud Functions,
     * and then add client logic to call the function from your app.
     *
     * @param region The region you deployed your functions to. Defaults to 'us-central1'.
     */
    functions?(region?: string): Functions.Module;
  }
}
