import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { expect } from 'chai';
import CourseListRow from './CourseListRow';

configure({ adapter: new Adapter() })
describe('<CourseListRow />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<CourseListRow textFirstCell='test' />);
    expect(wrapper.exists());
  });
  it('renders one cell', () => {
    const wrapper = shallow(
      <CourseListRow isHeader={true} textFirstCell='test' />
    );
    wrapper.update();
    const th = wrapper.find('th');

    expect(th).to.have.lengthOf(1);
    expect(th.prop('colSpan')).to.equal(2);
  });
  it('renders two cells', () => {
    const wrapper = shallow(
      <CourseListRow
        isHeader={true}
        textFirstCell='test'
        textSecondCell='second'
      />
    );
    wrapper.update();
    const th = wrapper.find('th');

    expect(th).to.have.lengthOf(2);
    expect(th.first().text()).to.equal('test');
    expect(th.at(1).text()).to.equal('second');
  });
  it('renders two td', () => {
    const wrapper = shallow(
      <CourseListRow
        isHeader={false}
        textFirstCell='test'
        textSecondCell='second'
      />
    );
    wrapper.update();
    const tr = wrapper.find('tr');

    expect(tr).to.have.lengthOf(1);
    expect(tr.children('td')).to.have.lengthOf(2);
  });
});