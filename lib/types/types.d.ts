interface AppProps {
  instance: any,
  isEdited: boolean,
  onStateChange: () => void
}

interface PrepareResult {
  instance: any,
  getState: (instance: any) => any,
}

declare function prepare(initialState: any): PrepareResult
declare function AppComponent(props: AppProps): JSX.Element
export {prepare, AppComponent}
