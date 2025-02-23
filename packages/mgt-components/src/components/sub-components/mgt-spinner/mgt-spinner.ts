/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

import { html } from 'lit';
import { MgtBaseComponent } from '@microsoft/mgt-element';
import { styles } from './mgt-spinner-css';
import { registerComponent } from '@microsoft/mgt-element';

export const registerMgtSpinnerComponent = () => registerComponent('spinner', MgtSpinner);

/**
 * Custom Component used to handle loading state in components.
 *
 * @export MgtSpinner
 * @class MgtSpinner
 * @extends {MgtBaseComponent}
 */
export class MgtSpinner extends MgtBaseComponent {
  /**
   * Array of styles to apply to the element. The styles should be defined
   * user the `css` tag function.
   */
  public static get styles() {
    return styles;
  }

  /**
   * Render the loading spinner
   *
   * @returns
   * @memberof MgtSpinner
   */
  public render() {
    return html`<fluent-progress-ring title="spinner"></fluent-progress-ring>`;
  }
}
