import L from 'leaflet'

export default function setupInputElement () {
  L.StyleEditor.formElements.InputElement = L.StyleEditor.formElements.FormElement.extend({
    options: {
      title: 'Label'
    },
    createContent: function () {
      let uiElement = this.options.uiElement,
          input = this.options.input = L.DomUtil.create('input', 'form-control', uiElement);
      input.type = 'text';
      input.style.width = '100%'
      L.DomEvent.addListener(input, 'keyup', this._setStyle, this);
    },
    style: function () {
      let selectedElement = this.options.styleEditorOptions.util.getCurrentElement();
      if (selectedElement && selectedElement.options) {
        this.options.input.value = selectedElement.options.label || ''
      }
    },
    _setStyle: function () {
      let elem = this.options.styleEditorOptions.util.getCurrentElement()
      let label = this.options.input.value
      if (elem && elem.setLabel && label) {
        elem.setLabel(label);
        elem.options = elem.options || {}
        elem.options.label = label
      }
      // remove
      //else if(.unbindTooltip && !label) {
      //  marker.unbindTooltip();
      //  marker.options.label = ''
      //}
      this.setStyle(label)
    }
  });
}
