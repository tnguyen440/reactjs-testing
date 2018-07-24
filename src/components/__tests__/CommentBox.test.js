import React from 'react';
import { shallow, mount } from 'enzyme';

import CommentBox from 'components/CommentBox';

// remember to unmount when using mount

let wrapper;

beforeEach(() => {
    wrapper = mount(<CommentBox />);
});

afterEach(() => {
    wrapper.unmount();
});

it('has a text area and a button', () => {
    expect(wrapper.find('textarea').length).toEqual(1);
    expect(wrapper.find('button').length).toEqual(1);
});

describe('the text area', () => {
    beforeEach(() => {
        wrapper.find('textarea').simulate('change', {
            target: { value: 'test' }
        });
        wrapper.update();
    })

    it('has a text area that users can type in', () => {
        expect(wrapper.find('textarea').prop('value')).toEqual('test');
    });
    
    it('when form is submitted, textarea gets emptied', () => {
        wrapper.find('form').simulate('submit');
        wrapper.update();
        expect(wrapper.find('textarea').prop('value')).toEqual('');
    });
});

