var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports", "react", "react-dom", "OfficeFabric/Button", "OfficeFabric/Dialog", "./AddNameWithReference"], function (require, exports, React, ReactDOM, Button_1, Dialog_1, AddNameWithReference_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var NameWithReferenceComponent = /** @class */ (function (_super) {
        __extends(NameWithReferenceComponent, _super);
        function NameWithReferenceComponent(props) {
            var _this = _super.call(this, props) || this;
            _this._showDialog = function () {
                _this.setState({ hideDialog: false });
            };
            _this._closeDialog = function () {
                _this.setState({ hideDialog: true });
            };
            _this._submitChanges = function () {
                //TODO: Remove console.log
                console.log(_this.state.fieldName, _this.state.fieldDescription);
                AddNameWithReference_1.AddNameWithReference.createFieldObject(_this.state.fieldDescription, _this.state.fieldName, _this.state.fieldReferenceName, _this.state.fieldType);
                _this.setState({ hideDialog: true });
            };
            _this.state = {
                hideDialog: true,
                fieldName: "",
                fieldType: "",
                fieldReferenceName: "",
                fieldDescription: ""
            };
            _this._handleNameChange = _this._handleNameChange.bind(_this);
            _this._handleTypeChange = _this._handleTypeChange.bind(_this);
            _this._handleReferenceChange = _this._handleReferenceChange.bind(_this);
            _this._handleDescriptionChange = _this._handleDescriptionChange.bind(_this);
            return _this;
        }
        NameWithReferenceComponent.prototype.render = function () {
            return (React.createElement("div", { className: "nameComponent" },
                React.createElement(Button_1.DefaultButton, { onClick: this._showDialog, text: "Open Dialog" }),
                React.createElement(Dialog_1.Dialog, { hidden: this.state.hideDialog, onDismiss: this._closeDialog, dialogContentProps: {
                        type: Dialog_1.DialogType.normal,
                        title: "Add a Field with Reference Name",
                        subText: "This field addition allows you to assign the reference name."
                    }, modalProps: {
                        titleAriaId: "createFieldWithRefName-DialogLabelId",
                        subtitleAriaId: "createFieldWithRefName-DialogSubTextId",
                        isBlocking: false,
                        containerClassName: "ms-dialogMainOverride"
                    } },
                    React.createElement("form", null,
                        "Field Name:",
                        React.createElement("br", null),
                        React.createElement("input", { type: "text", value: this.state.fieldName, onChange: this._handleNameChange, name: "name" }),
                        React.createElement("br", null),
                        "Field Type:",
                        React.createElement("br", null),
                        React.createElement("select", { value: this.state.fieldType, onChange: this._handleTypeChange, name: "type" },
                            React.createElement("option", { value: "String" }, "String"),
                            React.createElement("option", { value: "Integer" }, "Integer"),
                            React.createElement("option", { value: "DateTime" }, "DateTime"),
                            React.createElement("option", { value: "PlainText" }, "PlainText"),
                            React.createElement("option", { value: "Html" }, "Html"),
                            React.createElement("option", { value: "TreePath" }, "TreePath"),
                            React.createElement("option", { value: "History" }, "History"),
                            React.createElement("option", { value: "Double" }, "Double"),
                            React.createElement("option", { value: "Guid" }, "Guid"),
                            React.createElement("option", { value: "Boolean" }, "Boolean"),
                            React.createElement("option", { value: "Identity" }, "Identity"),
                            React.createElement("option", { value: "PicklistString" }, "PicklistString"),
                            React.createElement("option", { value: "PicklistInteger" }, "PicklistInteger"),
                            React.createElement("option", { value: "PicklistDouble" }, "PicklistDouble")),
                        React.createElement("br", null),
                        "Field Reference Name:",
                        React.createElement("br", null),
                        React.createElement("input", { type: "text", value: this.state.fieldReferenceName, onChange: this._handleReferenceChange, name: "refname" }),
                        React.createElement("br", null),
                        "Field Description:",
                        React.createElement("br", null),
                        React.createElement("input", { type: "text", value: this.state.fieldDescription, onChange: this._handleDescriptionChange, name: "description" }),
                        React.createElement("br", null)),
                    React.createElement(Dialog_1.DialogFooter, null,
                        React.createElement(Button_1.PrimaryButton, { onClick: this._submitChanges, text: "Save" }),
                        React.createElement(Button_1.DefaultButton, { onClick: this._closeDialog, text: "Cancel" })))));
        };
        NameWithReferenceComponent.prototype._handleNameChange = function (event) {
            this.setState({ fieldName: event.target.value });
        };
        NameWithReferenceComponent.prototype._handleTypeChange = function (event) {
            this.setState({ fieldType: event.target.value });
        };
        NameWithReferenceComponent.prototype._handleReferenceChange = function (event) {
            this.setState({ fieldReferenceName: event.target.value });
        };
        NameWithReferenceComponent.prototype._handleDescriptionChange = function (event) {
            this.setState({ fieldDescription: event.target.value });
        };
        return NameWithReferenceComponent;
    }(React.Component));
    exports.NameWithReferenceComponent = NameWithReferenceComponent;
    function init() {
        console.log("Inside namerefcomponent");
        ReactDOM.render(React.createElement(NameWithReferenceComponent, null), document.getElementById("main"));
    }
    exports.init = init;
});
//  TODO: edit this target to match the component i need 
//  VSS.register("work-projectoverview-process-component-section", ProjectOverviewProcessSectionComponent);
