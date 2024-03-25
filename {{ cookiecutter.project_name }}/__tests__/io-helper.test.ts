
import * as core from '@actions/core';
import { describe, expect } from '@jest/globals';
import { ActionInputs, getInputs, Inputs } from '../src/io-helper';

let getInputMock: jest.SpiedFunction<typeof core.getInput>;

describe('io-helper.ts', () => {
    beforeEach(() => {
        jest.clearAllMocks();

        getInputMock = jest.spyOn(core, 'getInput').mockImplementation();
    });

    it('should get proper input', () => {
        getInputMock.mockImplementation((name, _) => {
            switch (name) {
                case Inputs.Name:
                    return 'test';
                default:
                    return '';
            }
        });

        const inputs = getInputs();
        expect(inputs).toEqual({
            name: 'test'
        } as ActionInputs);
    });
});

