import { Form } from '.'
import L from '..'
import { ColorElement, OpacityElement, WeightElement, DashElement, PopupContentElement } from '../formElements'

/** Form used to enable modification of a Geometry */
export class PathForm extends Form {
  formElements = {
    'color': ColorElement,
    'opacity': OpacityElement,
    'weight': WeightElement,
    'dashArray': DashElement,
    'popupContent': PopupContentElement
  }

  whenToShow(layers: L.StyleableLayer[]): Boolean {
    return layers.some(layer => layer instanceof L.Path)
  }
}
