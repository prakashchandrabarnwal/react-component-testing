import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
configure({ adapter: new Adapter() });
import Comment from '../src/components/Comment';
import CommentList from '../src/components/CommentList';

describe('Comment item', () => {
    const wrapper = shallow(<Comment />);

    it('should be a list item', () => {
        expect(wrapper.type()).to.eql('div');
    });
    it('renders the custom comment text', () => {
        wrapper.setProps({ comment: 'sympathetic ink' });
        expect(wrapper.contains('sympathetic ink')).to.equal(true);
    });
    it('has a class name of "comment-item"', () => {
        expect(wrapper.find('.comment-item')).to.have.length(2);
    });
    it('calls componentDidMount', () => {
        spy(CommentList.prototype, 'componentDidMount');

        const wrapper = mount(<CommentList />);
        expect(CommentList.prototype.componentDidMount.calledOnce).to.equal(true);
    });

    it('reverses the comments on the button click', () => {
        const wrapper = mount(<CommentList />);
        wrapper.setState({ comments: ['hello'] });
        wrapper.setState({ reverseData: 'hello' });
        wrapper.find('button').simulate('click');
        expect(wrapper.state().comments[0]).to.equal('hello');
        expect(wrapper.state().reverseData).to.equal('olleh');
    });
});