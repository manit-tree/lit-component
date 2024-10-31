import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('my-element')
export class MyElement extends LitElement {
    @property()
    version = '1.0.0';

    render() {
        return html`
            <p><strong>Lit Component</strong> v ${this.version}</p>
        `;
    }
}