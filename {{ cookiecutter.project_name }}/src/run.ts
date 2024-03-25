import { buildOutput } from '@yakubique/atils/dist';
import * as core from '@actions/core';
import { ActionInputs, getInputs } from './io-helper';

enum Outputs {
    result = 'result',
}

const setOutputs = buildOutput(Outputs);
export async function run() {
    try {
        const inputs: ActionInputs = getInputs();

        // Code here

        setOutputs({
            result: []
        });

        core.info('Success!');
    } catch (err: any) {
        core.setFailed(err.message);
    }
}
