import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';
import Root from 'Root';
import App from 'components/App';

let wrapper;

beforeEach(() => {
    moxios.install();
    moxios.stubRequest('https://jsonplaceholder.typicode.com/comments', {
        status: 200,
        response: [
            { name: 'fetched 1' },
            { name: 'fetched 2' },
        ]
    });
    wrapper = mount(
        <Root>
            <App />
        </Root>
    );
});

afterEach(() => {
    wrapper.unmount();
    moxios.uninstall();
});


it('can fetch a list of comments and display them', (done) => {
    wrapper.find('.fetch-comments').simulate('click');
    // setTimeout(() => {
    //     wrapper.update();
    //     expect(wrapper.find('li').length).toEqual(2);
    //     done();
    // }, 100);
    moxios.wait(() => {
        wrapper.update();
        expect(wrapper.find('li').length).toEqual(2);
        done();
    });
    
});