import React from 'react';
import { shallow, mount } from 'enzyme';
import Root from 'Root';
import CommentBox from 'components/CommentBox';

// remember to unmount when using mount

let wrapper;

beforeEach(() => {
    wrapper = mount(
        <Root>
            <CommentBox />
        </Root>
    );
});

afterEach(() => {
    wrapper.unmount();
});

it('has a text area and 2 buttons', () => {
    expect(wrapper.find('textarea').length).toEqual(1);
    expect(wrapper.find('button').length).toEqual(2);
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

