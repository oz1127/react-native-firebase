/**
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

#import <Foundation/Foundation.h>

#import <React/RCTBridgeModule.h>

static NSString *const RNFB_STORAGE_EVENT = @"storage_event";
static NSString *const RNFB_STORAGE_STATE_CHANGED = @"state_changed";
static NSString *const RNFB_STORAGE_UPLOAD_SUCCESS = @"upload_success";
static NSString *const RNFB_STORAGE_UPLOAD_FAILURE = @"upload_failure";
static NSString *const RNFB_STORAGE_DOWNLOAD_SUCCESS = @"download_success";
static NSString *const RNFB_STORAGE_DOWNLOAD_FAILURE = @"download_failure";

@interface RNFBStorageModule : NSObject <RCTBridgeModule>

@end
