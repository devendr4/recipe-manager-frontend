import { FunctionComponent } from "preact"

export const BaseTemplate: FunctionComponent = ({ children }) => {

  return (
    <div class="p-5 sm:p-10">{children}</div>
  )
}
