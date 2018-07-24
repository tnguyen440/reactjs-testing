import React from 'react';
import { shallow } from 'enzyme';
// import ReactDOM from 'react-dom';

import App from 'components/App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';


// 'it' function is a global function
// it( description of the test, fuction containing our test logic )

    // expect is a global function
    // expect( value that we are inspecting ). matcher statment( value that we expect to see );

it('shows a comment box', () => {
    // const div = document.createElement('div');
    // ReactDOM.render(<App />, div);
    // expect(div.innerHTML).toContain('Comment Box');
    // ReactDOM.unmountComponentAtNode(div);

    const wrapper = shallow(<App />);
    expect(wrapper.find(CommentBox).length).toEqual(1);
});

it('shows a comment list', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(CommentList).length).toEqual(1);
});