import 'leaflet'

/** Form used to enable modification of a Geometry */
export default function setupTextboxForm () {
  L.StyleEditor.forms.TextboxForm = L.StyleEditor.forms.Form.extend({
    options: {
      formOptionKey: 'textbox',
      formElements: {
        'label': L.StyleEditor.formElements.InputElement,
        'text': L.StyleEditor.formElements.TextareaElement,
        'color': L.StyleEditor.formElements.ColorElement
        //'fillColor': true, # TODO: foreground and background fo headline
        //'opacity': (elem) => !(elem instanceof L.Polygon),
      }
    }
  })
}
