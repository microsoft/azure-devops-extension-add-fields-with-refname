/// <reference types="vss-web-extension-sdk" />

import * as RestClient from "TFS/WorkItemTracking/RestClient";
import * as Contracts from "TFS/WorkItemTracking/Contracts"; 

export module AddNameWithReference  {
    export function createFieldObject(inputDescription: string, inputName: string, inputReferenceName: string, inputType: string){        
        var witFieldType =  Contracts.FieldType[inputName];
        const witFieldModel: Contracts.WorkItemField = {
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
    
    export function beginGetFields(): IPromise<Contracts.WorkItemField[]> {
        return RestClient.getClient().getFields()
        .then<Contracts.WorkItemField[]>((fields: Contracts.WorkItemField[]) => {
            console.log(JSON.stringify(fields));
            return fields;
        });
    };

    
    export function beginAddField(workItemField: Contracts.WorkItemField): IPromise<Contracts.WorkItemField> {
        return RestClient.getClient().createField(workItemField)
        .then<Contracts.WorkItemField>((field: Contracts.WorkItemField) => {
            console.log(JSON.stringify(field));
            return field;
        });
    };
}