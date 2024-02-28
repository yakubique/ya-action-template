import * as core from '@actions/core';

enum Inputs {
    Name = 'name'
}

export interface ActionInputs {
    name: string;
}

export function getInputs(): ActionInputs {
    const result: ActionInputs | any = {};

    result.name = core.getInput(Inputs.Name, { required: true });

    return result;
}
