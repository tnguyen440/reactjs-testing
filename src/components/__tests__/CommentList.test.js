import React from 'react';
import { mount } from 'enzyme';
import Root from 'Root';
import CommentList from 'components/CommentList';

let wrapper;

beforeEach(() => {
    const initialState = {
        comments: ['Com 1', 'Com 2']
    };
    wrapper = mount(
        <Root initialState={initialState}>
            <CommentList />
        </Root>
    );
});

// afterEach(() => {
//     wrapper.unmount();
// });

it('create 1 LI per comment', () => {
    expect(wrapper.find('li').length).toEqual(2);
});

it('show the text for each comment', () => {
    expect(wrapper.render().text()).toContain('Com 1');
    expect(wrapper.render().text()).toContain('Com 2');
});