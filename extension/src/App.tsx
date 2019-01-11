import * as React from "react";
import * as ReactDOM from "react-dom";
import { NameWithReferenceComponent } from "./NameWithReferenceComponent";

class App extends React.Component {
    public constructor(props: {}, context?: any) {
        super(props, context);
    }

    public render(): JSX.Element {
        return (
            <div className="hub-view">
                <NameWithReferenceComponent></NameWithReferenceComponent>
            </div>
        );
    }
}


export function init() {
    ReactDOM.render(<App />, document.getElementById("react-container"));
}
