import * as core from '@actions/core';

export enum Inputs {
    Name = 'name'
}

export interface ActionInputs {
    name: string;
}

export function getInputs(): ActionInputs {
    const result = {} as ActionInputs;

    result.name = core.getInput(Inputs.Name, { required: true });

    return result;
}
