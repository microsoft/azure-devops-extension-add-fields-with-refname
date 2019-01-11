/// <reference types="vss-web-extension-sdk" />
define(["require", "exports", "TFS/WorkItemTracking/RestClient", "TFS/WorkItemTracking/Contracts"], function (require, exports, RestClient, Contracts) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AddNameWithReference;
    (function (AddNameWithReference) {
        function createFieldObject(inputDescription, inputName, inputReferenceName, inputType) {
            var witFieldType = Contracts.FieldType[inputName];
            var witFieldModel = {
                description: inputDescription,
                name: inputName,
                referenceName: inputReferenceName,
                type: witFieldType,
                canSortBy: null,
                isIdentity: null,
                isPicklist: null,
                isPicklistSuggested: null,
                isQueryable: null,
                picklistId: null,
                readOnly: false,
                supportedOperations: null,
                usage: null,
                _links: null,
                url: null
            };
            beginAddField(witFieldModel);
        }
        AddNameWithReference.createFieldObject = createFieldObject;
        function beginGetFields() {
            return RestClient.getClient().getFields()
                .then(function (fields) {
                console.log(JSON.stringify(fields));
                return fields;
            });
        }
        AddNameWithReference.beginGetFields = beginGetFields;
        ;
        //removed     "categories": ["Boards"], fro mmanifest
        function beginAddField(workItemField) {
            return RestClient.getClient().createField(workItemField)
                .then(function (field) {
                console.log(JSON.stringify(field));
                return field;
            });
        }
        AddNameWithReference.beginAddField = beginAddField;
        ;
    })(AddNameWithReference = exports.AddNameWithReference || (exports.AddNameWithReference = {}));
});
