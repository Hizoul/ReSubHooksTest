import { FormStore, SharedField } from "@xpfw/form-shared"
import { registerComponents } from "@xpfw/form-web"
registerComponents()
import useResub from "./resubHook.js"
import React from "react"
import { FieldType } from "@xpfw/validate";

const IsActiveField = {
  mapTo: "active",
  type: FieldType.Text
}

const TEST = (props) => {
  const state = useResub(FormStore, IsActiveField.mapTo, {name: "getValue", arguments: [IsActiveField.mapTo]})
  return (
    <div>
      State value read through useResub Hook: {state[0]}<br />
      Input Field controlled via classic ComponentBase API: <SharedField field={IsActiveField} />
    </div>
  )
}
export default TEST
