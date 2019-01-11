import * as React from "react";
import * as ReactDOM from "react-dom";
import { PrimaryButton, DefaultButton } from "OfficeFabric/Button";
import { Dialog, DialogType, DialogFooter } from "OfficeFabric/Dialog";
import { AddNameWithReference } from "./AddNameWithReference";

export class NameWithReferenceComponent extends React.Component<{},{   
        hideDialog: boolean; 
        fieldName: string; 
        fieldType: string;
        fieldReferenceName: string;
        fieldDescription: string}> {
            constructor(props: {}) {
                super(props);
                this.state = {
                    hideDialog: true,
                    fieldName: "",
                    fieldType: "",
                    fieldReferenceName: "",
                    fieldDescription: ""
                };
                this._handleNameChange = this._handleNameChange.bind(this);
                this._handleTypeChange = this._handleTypeChange.bind(this);
                this._handleReferenceChange = this._handleReferenceChange.bind(this);
                this._handleDescriptionChange = this._handleDescriptionChange.bind(this);
            }

    public render(): JSX.Element {
        return (
            <div className="nameComponent">
                <DefaultButton onClick={this._showDialog} text="Open Dialog" />
                <Dialog hidden={this.state.hideDialog}
                        onDismiss={this._closeDialog}
                        dialogContentProps={{
                            type: DialogType.normal,
                            title: "Add a Field with Reference Name",
                            subText: "This field addition allows you to assign the reference name."
                        }}
                        modalProps={{
                            titleAriaId: "createFieldWithRefName-DialogLabelId",
                            subtitleAriaId: "createFieldWithRefName-DialogSubTextId",
                            isBlocking: false,
                            containerClassName: "ms-dialogMainOverride"
                        }}
                >
                    <form>
                    Field Name:<br/>
                    <input type="text" value={this.state.fieldName} onChange={this._handleNameChange} name="name"/><br/>
                    Field Type:<br/>
                    <select value={this.state.fieldType} onChange={this._handleTypeChange} name="type">
                        <option value="String">String</option>
                        <option value="Integer">Integer</option>
                        <option value="DateTime">DateTime</option>
                        <option value="PlainText">PlainText</option>
                        <option value="Html">Html</option>
                        <option value="TreePath">TreePath</option>
                        <option value="History">History</option>
                        <option value="Double">Double</option>
                        <option value="Guid">Guid</option>
                        <option value="Boolean">Boolean</option>
                        <option value="Identity">Identity</option>
                        <option value="PicklistString">PicklistString</option>
                        <option value="PicklistInteger">PicklistInteger</option>
                        <option value="PicklistDouble">PicklistDouble</option>
                    </select><br/>
                    Field Reference Name:<br/>
                    <input type="text"  value={this.state.fieldReferenceName} onChange={this._handleReferenceChange} name="refname"/>
                    <br/>
                    Field Description:<br/>
                    <input type="text" value={this.state.fieldDescription} onChange={this._handleDescriptionChange} name="description"/>
                    <br/>
                    </form>
                    <DialogFooter>
                        <PrimaryButton onClick={this._submitChanges} text="Save" />
                        <DefaultButton onClick={this._closeDialog} text="Cancel" />
                    </DialogFooter>
                </Dialog>
            </div>
        );
    }

    private _handleNameChange(event) {
        this.setState({ fieldName: event.target.value });
    }
    private _handleTypeChange(event) {
        this.setState({ fieldType: event.target.value });
    }
    private _handleReferenceChange(event) {
        this.setState({ fieldReferenceName: event.target.value });
    }
    private _handleDescriptionChange(event) {
        this.setState({ fieldDescription: event.target.value });
    }
    private _showDialog = (): void => {
        this.setState({ hideDialog: false });
    }
    private _closeDialog = (): void => {
        this.setState({ hideDialog: true });
    }

    private _submitChanges = (): void => {
        //TODO: Remove console.log
        console.log(this.state.fieldName, this.state.fieldDescription);
        AddNameWithReference.createFieldObject(this.state.fieldDescription, this.state.fieldName,this.state.fieldReferenceName, this.state.fieldType);
        this.setState({ hideDialog: true });
    }
}

export function init(): void {
    console.log("Inside namerefcomponent");
    ReactDOM.render(<NameWithReferenceComponent />, document.getElementById("main"));
}

//  TODO: edit this target to match the component i need 
//  VSS.register("work-projectoverview-process-component-section", ProjectOverviewProcessSectionComponent);